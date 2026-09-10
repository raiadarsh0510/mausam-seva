// src/services/voice/textToSpeech.js
// Production-grade Web Speech Synthesis Controller with Multi-Voice Indian Dialect Matching

import { getLanguageById, resolveLanguageFallback } from './languageDatabase';

class TextToSpeechController {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.isSpeaking = false;
    this.isPaused = false;
    this.lastSpokenText = '';
    this.lastSpokenLang = 'hi';
    this.voices = [];
    this.voiceRate = 0.95; // Default speed
    this.voicePitch = 1.0;

    if (this.synth) {
      this.loadVoices();
      if (typeof window !== 'undefined' && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
  }

  isSupported() {
    return !!this.synth;
  }

  getAvailableVoices() {
    if (!this.voices.length) this.loadVoices();
    return this.voices;
  }

  // Find best native voice matching language code (e.g., 'hi-IN', 'en-IN', 'ta-IN', 'bn-IN')
  findVoiceForLanguage(langCode, preferredGender = 'default') {
    if (!this.voices.length) this.loadVoices();
    const baseCode = langCode.split('-')[0].toLowerCase();

    // 1. Exact match with region (e.g. 'hi-IN')
    let matched = this.voices.filter(v => v.lang.toLowerCase().replace('_', '-') === langCode.toLowerCase());

    // 2. Base language match (e.g. 'hi')
    if (!matched.length) {
      matched = this.voices.filter(v => v.lang.toLowerCase().startsWith(baseCode));
    }

    // 3. Indian English match for 'en' or 'hinglish'
    if (!matched.length && (baseCode === 'en' || baseCode === 'hi')) {
      matched = this.voices.filter(v => v.lang.toLowerCase().includes('in') || v.name.toLowerCase().includes('india'));
    }

    if (!matched.length) return null;

    if (preferredGender === 'female') {
      const female = matched.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('kalpana') || v.name.toLowerCase().includes('swara'));
      if (female) return female;
    } else if (preferredGender === 'male') {
      const male = matched.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('hemant') || v.name.toLowerCase().includes('ravi'));
      if (male) return male;
    }

    return matched[0];
  }

  speak({
    text,
    langId = 'hi',
    rate = 'normal', // 'slow' | 'normal' | 'fast'
    preferredGender = 'default',
    onStart,
    onEnd,
    onPause,
    onResume,
    onError
  }) {
    if (!this.synth) {
      if (onError) onError('Speech synthesis not supported in this browser.');
      return;
    }

    // Clean stop previous speech
    this.stop();

    if (!text || !text.trim()) return;

    this.lastSpokenText = text;
    this.lastSpokenLang = langId;

    const langObj = getLanguageById(langId);
    let resolvedVoiceLang = langObj;

    // If native TTS is not supported for this language, resolve fallback safely
    if (!langObj.ttsSupported) {
      resolvedVoiceLang = resolveLanguageFallback(langId, true);
    }

    // Strip markdown formatting symbols for clean phonetic speech
    const cleanText = text
      .replace(/[•\*#_`~\[\]\(\)\{\}]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = resolvedVoiceLang.code || 'hi-IN';

    // Speed setting
    let speedValue = 0.95;
    if (rate === 'slow') speedValue = 0.8;
    else if (rate === 'fast') speedValue = 1.15;
    utterance.rate = speedValue;
    utterance.pitch = 1.0;

    const matchedVoice = this.findVoiceForLanguage(utterance.lang, preferredGender);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onpause = () => {
      this.isPaused = true;
      if (onPause) onPause();
    };

    utterance.onresume = () => {
      this.isPaused = false;
      if (onResume) onResume();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
      console.warn('TTS playback error:', e);
      if (onError) onError(e);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isPaused = false;
    this.currentUtterance = null;
  }

  replay(callbacks = {}) {
    if (this.lastSpokenText) {
      this.speak({
        text: this.lastSpokenText,
        langId: this.lastSpokenLang,
        ...callbacks
      });
    }
  }
}

export const textToSpeechController = new TextToSpeechController();
