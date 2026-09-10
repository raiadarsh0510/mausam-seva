// src/components/VoiceAssistantWidget.jsx
import React, { useState } from 'react';
import { 
  Mic, MicOff, Volume2, VolumeX, Sparkles, MessageSquare, 
  HelpCircle, CheckCircle2, CloudRain, Zap, Tractor, Flame, 
  HeartPulse, X, Maximize2, Globe, Radio
} from 'lucide-react';
import { CITIES_DATA } from '../data/mockWeatherData';
import { aiLanguageService } from '../services/voice/aiLanguageService';
import { speechRecognitionController } from '../services/voice/speechRecognition';
import { textToSpeechController } from '../services/voice/textToSpeech';
import { getLanguageById } from '../services/voice/languageDatabase';

export function VoiceAssistantWidget({ cityId, lang = 'hi', onOpenFullAssistant }) {
  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [detectedLang, setDetectedLang] = useState(lang);

  // Multilingual quick questions
  const QUICK_QUESTIONS = [
    { label: 'क्या आज बारिश होगी?', query: 'क्या आज बारिश होगी?', lang: 'hi' },
    { label: 'Will it rain today?', query: 'Will it rain today?', lang: 'en' },
    { label: 'Kal baarish hogi kya?', query: 'Kal baarish hogi kya?', lang: 'hinglish' },
    { label: 'আজকের আবহাওয়া কেমন?', query: 'আজকের আবহাওয়া কেমন?', lang: 'bn' },
    { label: 'இன்று மழை பெய்யுமா?', query: 'இன்று மழை பெய்யுமா?', lang: 'ta' },
    { label: 'आजचे हवामान कसे आहे?', query: 'आजचे हवामान कसे आहे?', lang: 'mr' }
  ];

  const handleProcessQuery = (userQuery) => {
    setTranscript(userQuery);

    const result = aiLanguageService.generateResponse({
      query: userQuery,
      userSelectedLangId: 'auto',
      responseLangMode: 'same_as_user',
      cityData: city
    });

    setAiResponse(result.textResponse);
    setDetectedLang(result.targetLangId);

    // Speak response
    textToSpeechController.speak({
      text: result.speechText || result.textResponse,
      langId: result.targetLangId,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false)
    });
  };

  const handleStartMic = () => {
    if (isSpeaking) {
      textToSpeechController.stop();
      setIsSpeaking(false);
    }

    if (isListening) {
      speechRecognitionController.stopListening();
      setIsListening(false);
      return;
    }

    setTranscript(lang === 'hi' ? 'सुन रहा हूँ... बोलिए...' : 'Listening... Speak in any language...');
    setIsListening(true);

    speechRecognitionController.startListening({
      langId: detectedLang || 'hi',
      onInterimResult: (text) => setTranscript(text),
      onFinalResult: (text) => {
        setIsListening(false);
        handleProcessQuery(text);
      },
      onError: (err) => {
        setIsListening(false);
        console.warn('Speech recognition error:', err);
        handleProcessQuery(lang === 'hi' ? 'आज का मौसम कैसा रहेगा?' : 'What is the weather today?');
      }
    });
  };

  const handleStopSpeech = () => {
    textToSpeechController.stop();
    speechRecognitionController.stopListening();
    setIsSpeaking(false);
    setIsListening(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-gradient-to-r from-sky-950 via-monsoon-900 to-indigo-950 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-sky-500/40 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Assistant Info */}
          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all shadow-md ${
              isListening
                ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-500/40'
                : isSpeaking
                ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/40 animate-bounce'
                : 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white'
            }`}>
              {isListening ? <Mic className="w-6 h-6 animate-spin" /> : <Sparkles className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>MAUSAM PRISM AI</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    22 LANGUAGES + HINGLISH
                  </span>
                </h3>
              </div>
              <p className="text-xs text-monsoon-300">
                {lang === 'hi' 
                  ? 'अपनी किसी भी भाषा (हिंदी, English, Hinglish, தமிழ், বাংলা आदि) में बोलकर पूछें' 
                  : 'Speak naturally in Hindi, English, Hinglish, Tamil, Bengali & all 22 Indian languages'}
              </p>
            </div>
          </div>

          {/* Action Buttons: Full Studio + Microphone */}
          <div className="flex items-center gap-3 self-end md:self-center">
            {onOpenFullAssistant && (
              <button
                onClick={onOpenFullAssistant}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border border-sky-500/40 text-xs font-bold transition-all"
                title="Open Complete Multilingual Studio"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open Full Studio</span>
              </button>
            )}

            {/* Speaking Stop Button */}
            {isSpeaking && (
              <button
                onClick={handleStopSpeech}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold animate-pulse shadow-md"
              >
                <VolumeX className="w-4 h-4" />
                <span>Stop Voice</span>
              </button>
            )}

            {/* Giant Mic Button */}
            <button
              onClick={handleStartMic}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-lg transition-all ${
                isListening
                  ? 'bg-rose-600 hover:bg-rose-700 text-white ring-4 ring-rose-500/30 animate-pulse'
                  : 'bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white hover:scale-105'
              }`}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              <span>{isListening ? 'Listening...' : (lang === 'hi' ? 'बोलकर पूछें' : 'Tap & Speak')}</span>
            </button>
          </div>
        </div>

        {/* Live Transcript & AI Voice Response Box */}
        {(transcript || aiResponse) && (
          <div className="mt-4 p-4 rounded-2xl bg-monsoon-950/80 border border-monsoon-800 text-xs space-y-2 animate-fadeIn relative">
            {transcript && (
              <div className="flex items-start gap-2">
                <span className="font-mono text-sky-400 font-bold shrink-0">YOU:</span>
                <span className="text-monsoon-200 italic font-medium">"{transcript}"</span>
              </div>
            )}
            {aiResponse && (
              <div className="flex items-start gap-2 pt-2 border-t border-monsoon-800">
                <span className="font-mono text-emerald-400 font-bold shrink-0 flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>AI:</span>
                </span>
                <span className="text-white font-medium">{aiResponse}</span>
              </div>
            )}
          </div>
        )}

        {/* 1-Click Multilingual Prompt Chips */}
        <div className="mt-4 pt-3 border-t border-monsoon-800/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-monsoon-400 font-semibold flex items-center gap-1">
            <Globe className="w-3 h-3 text-sky-400" />
            <span>Try speaking:</span>
          </span>
          {QUICK_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleProcessQuery(q.query)}
              className="px-2.5 py-1 rounded-xl bg-monsoon-900/90 hover:bg-monsoon-800 text-monsoon-300 hover:text-white text-xs border border-monsoon-800 transition-colors"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
