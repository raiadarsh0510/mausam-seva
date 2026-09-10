// src/services/voice/speechRecognition.js
// Production-grade Web Speech API STT Controller with Auto-Detection & Silence Watchdog

import { getLanguageById } from './languageDatabase';

class SpeechRecognitionController {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.silenceTimer = null;
    this.silenceTimeoutMs = 3200; // Auto-stop after 3.2s silence
    this.currentSessionId = 0;

    if (typeof window !== 'undefined') {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRec) {
        this.recognition = new SpeechRec();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 1;
      }
    }
  }

  isSupported() {
    return !!this.recognition;
  }

  startListening({
    langId = 'hi',
    onInterimResult,
    onFinalResult,
    onError,
    onStateChange
  }) {
    if (!this.recognition) {
      if (onError) onError('Speech Recognition is not supported in this browser. Please use Google Chrome or Microsoft Edge.');
      return;
    }

    // Stop any active session cleanly
    this.stopListening();

    const sessionId = ++this.currentSessionId;
    this.isListening = true;
    if (onStateChange) onStateChange('listening');

    const langObj = getLanguageById(langId);
    // Use BCP47 code for web speech API
    this.recognition.lang = langObj.code || 'hi-IN';

    let finalTranscriptAccumulator = '';

    const resetSilenceWatchdog = () => {
      if (this.silenceTimer) clearTimeout(this.silenceTimer);
      this.silenceTimer = setTimeout(() => {
        if (this.isListening && sessionId === this.currentSessionId) {
          this.stopListening();
        }
      }, this.silenceTimeoutMs);
    };

    this.recognition.onstart = () => {
      if (sessionId !== this.currentSessionId) return;
      this.isListening = true;
      resetSilenceWatchdog();
      if (onStateChange) onStateChange('listening');
    };

    this.recognition.onresult = (event) => {
      if (sessionId !== this.currentSessionId) return;
      resetSilenceWatchdog();

      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item.isFinal) {
          finalTranscriptAccumulator += item[0].transcript + ' ';
        } else {
          interim += item[0].transcript;
        }
      }

      const currentText = (finalTranscriptAccumulator + interim).trim();
      if (onInterimResult) {
        onInterimResult(currentText);
      }
    };

    this.recognition.onerror = (event) => {
      if (sessionId !== this.currentSessionId) return;
      this.isListening = false;
      if (this.silenceTimer) clearTimeout(this.silenceTimer);
      if (onStateChange) onStateChange('idle');

      let userMsg = 'Mic error: ' + event.error;
      if (event.error === 'not-allowed') {
        userMsg = 'Microphone permission was denied. Please allow microphone access in your browser settings.';
      } else if (event.error === 'no-speech') {
        userMsg = 'No speech was detected. Please tap the mic and speak clearly.';
      } else if (event.error === 'network') {
        userMsg = 'Network connection issue for speech recognition.';
      }

      if (onError) onError(userMsg, event.error);
    };

    this.recognition.onend = () => {
      if (sessionId !== this.currentSessionId) return;
      this.isListening = false;
      if (this.silenceTimer) clearTimeout(this.silenceTimer);
      if (onStateChange) onStateChange('processing');

      const trimmedFinal = finalTranscriptAccumulator.trim();
      if (trimmedFinal && onFinalResult) {
        onFinalResult(trimmedFinal);
      } else if (onStateChange) {
        onStateChange('ready');
      }
    };

    try {
      this.recognition.start();
    } catch (err) {
      console.warn('Speech recognition start failed:', err);
      this.isListening = false;
      if (onError) onError('Could not start speech recognition session.');
    }
  }

  stopListening() {
    if (this.silenceTimer) {
      clearTimeout(this.silenceTimer);
      this.silenceTimer = null;
    }

    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        try {
          this.recognition.abort();
        } catch (err) {}
      }
    }
    this.isListening = false;
  }
}

export const speechRecognitionController = new SpeechRecognitionController();
