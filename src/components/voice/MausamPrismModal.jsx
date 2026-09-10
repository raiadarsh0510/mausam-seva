// src/components/voice/MausamPrismModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Mic, MicOff, Volume2, VolumeX, Play, Pause, Square, RotateCcw, 
  Sparkles, Settings, Globe, CheckCircle2, AlertTriangle, Send, 
  Edit3, Radio, MessageSquare, Flame, CloudRain, Zap, ChevronDown, 
  ChevronUp, ShieldCheck, MapPin, RefreshCw, Languages
} from 'lucide-react';
import { SCHEDULED_LANGUAGES_22, getLanguageById, CITY_LANGUAGE_MAPPINGS, STATE_LANGUAGES_HIERARCHY } from '../../services/voice/languageDatabase';
import { speechRecognitionController } from '../../services/voice/speechRecognition';
import { textToSpeechController } from '../../services/voice/textToSpeech';
import { aiLanguageService } from '../../services/voice/aiLanguageService';
import { CITIES_DATA } from '../../data/mockWeatherData';

export function MausamPrismModal({
  isOpen,
  onClose,
  currentCityId = 'delhi',
  activePersona = 'student',
  appLang = 'hi'
}) {
  if (!isOpen) return null;

  const city = CITIES_DATA[currentCityId] || CITIES_DATA['delhi'];

  // State Management
  const [selectedLangId, setSelectedLangId] = useState(appLang === 'hi' ? 'hi' : 'en');
  const [autoDetect, setAutoDetect] = useState(true);
  const [assistantMode, setAssistantMode] = useState('push_to_talk'); // 'push_to_talk' | 'conversation'
  const [assistantState, setAssistantState] = useState('ready'); // 'ready' | 'listening' | 'processing' | 'thinking' | 'speaking'
  const [transcript, setTranscript] = useState('');
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showLangSelector, setShowLangSelector] = useState(false);
  const [searchLangQuery, setSearchLangQuery] = useState('');

  // Voice Playback Settings
  const [speechSpeed, setSpeechSpeed] = useState('normal'); // 'slow' | 'normal' | 'fast'
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [responseLangMode, setResponseLangMode] = useState('same_as_user'); // 'same_as_user' | 'hi' | 'en' | 'hinglish'
  const [isPaused, setIsPaused] = useState(false);

  const conversationLoopRef = useRef(false);

  // Sync conversation loop ref
  useEffect(() => {
    conversationLoopRef.current = assistantMode === 'conversation';
  }, [assistantMode]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      speechRecognitionController.stopListening();
      textToSpeechController.stop();
    };
  }, []);

  const activeLangObj = getLanguageById(selectedLangId);

  // Location-based recommendation for current city
  const cityMapping = CITY_LANGUAGE_MAPPINGS[currentCityId] || CITY_LANGUAGE_MAPPINGS['delhi'];
  const stateHierarchy = STATE_LANGUAGES_HIERARCHY[cityMapping.stateKey] || STATE_LANGUAGES_HIERARCHY['delhi'];

  // Process a text query through AI
  const executeQuery = (textToProcess) => {
    if (!textToProcess || !textToProcess.trim()) return;

    setAssistantState('thinking');
    setErrorMessage('');

    setTimeout(() => {
      try {
        const result = aiLanguageService.generateResponse({
          query: textToProcess,
          userSelectedLangId: autoDetect ? 'auto' : selectedLangId,
          responseLangMode,
          cityData: city,
          activePersona
        });

        setAiResult(result);
        setAssistantState('ready');

        // Automatically update selected language if auto-detect detected another language
        if (autoDetect && result.targetLangId !== selectedLangId) {
          setSelectedLangId(result.targetLangId);
        }

        // Voice Output if enabled
        if (voiceEnabled && autoSpeak) {
          speakResult(result);
        } else if (conversationLoopRef.current) {
          // If autoSpeak is off but in conversation mode, re-listen after 2s
          setTimeout(() => {
            if (conversationLoopRef.current) startListening();
          }, 2000);
        }
      } catch (err) {
        console.error('AI Processing error:', err);
        setErrorMessage('Failed to generate response. Please try again.');
        setAssistantState('ready');
      }
    }, 450);
  };

  // Speak AI result using TTS
  const speakResult = (result) => {
    if (!voiceEnabled || !result) return;

    setAssistantState('speaking');
    setIsPaused(false);

    textToSpeechController.speak({
      text: result.speechText || result.textResponse,
      langId: result.targetLangId,
      rate: speechSpeed,
      onStart: () => {
        setAssistantState('speaking');
        setIsPaused(false);
      },
      onEnd: () => {
        setAssistantState('ready');
        setIsPaused(false);
        // CONVERSATION MODE: Automatically listen for user's next question!
        if (conversationLoopRef.current) {
          setTimeout(() => {
            if (conversationLoopRef.current) {
              startListening();
            }
          }, 800);
        }
      },
      onPause: () => setIsPaused(true),
      onResume: () => setIsPaused(false),
      onError: (err) => {
        console.warn('TTS Error:', err);
        setAssistantState('ready');
        setIsPaused(false);
      }
    });
  };

  // Start Voice Input (Mic)
  const startListening = () => {
    // If assistant is speaking, stop it immediately as per prompt specification
    if (textToSpeechController.isSpeaking) {
      textToSpeechController.stop();
    }

    setTranscript('');
    setErrorMessage('');
    setIsEditingTranscript(false);

    speechRecognitionController.startListening({
      langId: selectedLangId,
      onInterimResult: (currentText) => {
        setTranscript(currentText);
      },
      onFinalResult: (finalText) => {
        setTranscript(finalText);
        setAssistantState('processing');
        executeQuery(finalText);
      },
      onError: (errMsg, errorType) => {
        setErrorMessage(errMsg);
        setAssistantState('ready');
      },
      onStateChange: (state) => {
        setAssistantState(state);
      }
    });
  };

  const stopListening = () => {
    speechRecognitionController.stopListening();
    setAssistantState('ready');
  };

  const toggleMic = () => {
    if (assistantState === 'listening') {
      stopListening();
    } else {
      startListening();
    }
  };

  // Audio Playback Controls
  const handlePlayAudio = () => {
    if (isPaused) {
      textToSpeechController.resume();
      setIsPaused(false);
      setAssistantState('speaking');
    } else if (aiResult) {
      speakResult(aiResult);
    }
  };

  const handlePauseAudio = () => {
    textToSpeechController.pause();
    setIsPaused(true);
  };

  const handleStopAudio = () => {
    textToSpeechController.stop();
    setIsPaused(false);
    setAssistantState('ready');
  };

  const handleReplayAudio = () => {
    if (aiResult) {
      textToSpeechController.stop();
      speakResult(aiResult);
    }
  };

  const filteredLanguages = SCHEDULED_LANGUAGES_22.filter(l => {
    const q = searchLangQuery.toLowerCase();
    return l.name.toLowerCase().includes(q) || l.nativeName.toLowerCase().includes(q) || l.code.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans text-white">
      <div className="bg-gradient-to-b from-monsoon-900 via-monsoon-950 to-indigo-950 border border-sky-500/40 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col justify-between relative">
        {/* Background futuristic glow */}
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* 1. Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-monsoon-800 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-sky-500/30 font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>MAUSAM PRISM AI</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">
                    MULTILINGUAL
                  </span>
                </h3>
              </div>
              <p className="text-[11px] text-monsoon-400">
                22 Scheduled Languages of India + English & Hinglish Voice Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2 rounded-xl border transition-colors ${
                showSettings ? 'bg-sky-500/30 border-sky-400 text-white' : 'bg-monsoon-900 border-monsoon-800 text-monsoon-400 hover:text-white'
              }`}
              title="Voice & Language Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                textToSpeechController.stop();
                speechRecognitionController.stopListening();
                onClose();
              }}
              className="p-2 rounded-xl bg-monsoon-900 hover:bg-monsoon-800 border border-monsoon-800 text-monsoon-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Mode Selector & Active Status Pill */}
        <div className="px-5 pt-3 pb-1 flex flex-wrap items-center justify-between gap-2 border-b border-monsoon-800/60 bg-monsoon-950/40">
          {/* Dual Modes */}
          <div className="flex items-center gap-1 bg-monsoon-900/80 p-1 rounded-xl border border-monsoon-800">
            <button
              onClick={() => setAssistantMode('push_to_talk')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                assistantMode === 'push_to_talk' ? 'bg-sky-600 text-white shadow-xs' : 'text-monsoon-400 hover:text-white'
              }`}
            >
              Push To Talk
            </button>
            <button
              onClick={() => {
                setAssistantMode('conversation');
                startListening();
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                assistantMode === 'conversation' ? 'bg-amber-500 text-monsoon-950 font-black shadow-xs' : 'text-monsoon-400 hover:text-white'
              }`}
            >
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>Conversation Mode</span>
            </button>
          </div>

          {/* Real-time State Badge */}
          <div className="flex items-center gap-2">
            {assistantState === 'listening' && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>🎤 Listening... (सुन रहा हूँ...)</span>
              </span>
            )}
            {assistantState === 'processing' && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <RefreshCw className="w-3 h-3 animate-spin text-amber-400" />
                <span>⏳ Processing... (प्रक्रिया जारी है...)</span>
              </span>
            )}
            {assistantState === 'thinking' && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                <Sparkles className="w-3 h-3 animate-spin text-purple-400" />
                <span>🤖 Thinking... (विश्लेषण...)</span>
              </span>
            )}
            {assistantState === 'speaking' && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                <span>🔊 Speaking... (बोल रहा हूँ...)</span>
              </span>
            )}
            {assistantState === 'ready' && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-monsoon-800 text-monsoon-300 border border-monsoon-700">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>✅ Ready (तैयार)</span>
              </span>
            )}
          </div>
        </div>

        {/* 3. Settings Drawer / Overlay */}
        {showSettings && (
          <div className="p-5 bg-monsoon-900 border-b border-monsoon-800 space-y-4 animate-fadeIn text-xs">
            <h4 className="font-bold text-sm text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-sky-400" />
              <span>Language & Voice Intelligence Settings</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Voice Input Language */}
              <div>
                <label className="text-monsoon-400 block mb-1 font-semibold">VOICE INPUT LANGUAGE:</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoDetect(!autoDetect)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 ${
                      autoDetect ? 'bg-sky-500/20 border-sky-400 text-sky-300' : 'bg-monsoon-950 border-monsoon-800 text-monsoon-400'
                    }`}
                  >
                    <span>Auto Detect</span>
                    {autoDetect && <CheckCircle2 className="w-3 h-3 text-sky-400" />}
                  </button>
                  <button
                    onClick={() => setShowLangSelector(true)}
                    className="flex-1 bg-monsoon-950 border border-monsoon-800 hover:border-monsoon-700 rounded-lg px-3 py-1.5 text-left font-bold text-white flex items-center justify-between"
                  >
                    <span>{activeLangObj.name} ({activeLangObj.nativeName})</span>
                    <ChevronDown className="w-3.5 h-3.5 text-monsoon-400" />
                  </button>
                </div>
              </div>

              {/* Text Response Language */}
              <div>
                <label className="text-monsoon-400 block mb-1 font-semibold">RESPONSE LANGUAGE:</label>
                <select
                  value={responseLangMode}
                  onChange={(e) => setResponseLangMode(e.target.value)}
                  className="w-full bg-monsoon-950 border border-monsoon-800 rounded-lg px-3 py-1.5 text-white font-bold cursor-pointer"
                >
                  <option value="same_as_user">Same as User Query (Auto)</option>
                  <option value="hi">Hindi (हिन्दी)</option>
                  <option value="en">English</option>
                  <option value="hinglish">Hinglish (Roman Hindi)</option>
                </select>
              </div>

              {/* Speech Speed */}
              <div>
                <label className="text-monsoon-400 block mb-1 font-semibold">SPEECH SPEED:</label>
                <div className="flex items-center gap-1 bg-monsoon-950 p-1 rounded-lg border border-monsoon-800">
                  {['slow', 'normal', 'fast'].map(s => (
                    <button
                      key={s}
                      onClick={() => setSpeechSpeed(s)}
                      className={`flex-1 py-1 rounded-md text-[11px] font-bold capitalize transition-colors ${
                        speechSpeed === s ? 'bg-sky-600 text-white' : 'text-monsoon-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Enabled & Auto Speak Toggles */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 ${
                      voiceEnabled ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'bg-monsoon-950 border-monsoon-800 text-monsoon-500'
                    }`}
                  >
                    {voiceEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>Voice {voiceEnabled ? 'ON' : 'OFF'}</span>
                  </button>

                  <button
                    onClick={() => setAutoSpeak(!autoSpeak)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${
                      autoSpeak ? 'bg-sky-500/20 border-sky-400 text-sky-300' : 'bg-monsoon-950 border-monsoon-800 text-monsoon-500'
                    }`}
                  >
                    Auto-Speak {autoSpeak ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            {/* Location-Based Language Recommendation Indicator */}
            <div className="bg-monsoon-950/80 p-3 rounded-xl border border-monsoon-800 text-[11px] text-monsoon-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Location Recommendation:</strong> {stateHierarchy.stateName} ➔ Primary: <strong className="text-white">{getLanguageById(stateHierarchy.primaryLanguage).name}</strong> • Regional: {stateHierarchy.dialects.slice(0, 3).join(', ')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Main Body: Voice Visualizer, Transcript & AI Response */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">
          {/* Futuristic Audio Wave Visualizer */}
          <div className="h-20 bg-monsoon-950/80 border border-monsoon-800 rounded-2xl flex items-center justify-center px-4 relative overflow-hidden">
            {assistantState === 'listening' ? (
              <div className="flex items-center gap-1 sm:gap-2">
                {[40, 75, 95, 60, 85, 100, 70, 90, 45, 80, 65, 30].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 sm:w-2 bg-rose-500 rounded-full animate-pulse"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.08}s`,
                      animationDuration: '0.6s'
                    }}
                  ></span>
                ))}
              </div>
            ) : assistantState === 'speaking' ? (
              <div className="flex items-center gap-1 sm:gap-2">
                {[30, 60, 85, 90, 70, 95, 80, 50, 75, 40].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 sm:w-2 bg-emerald-400 rounded-full animate-pulse"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.09}s`,
                      animationDuration: '0.5s'
                    }}
                  ></span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-monsoon-500 font-mono flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-sky-400" />
                <span>MAUSAM PRISM AI is ready. Tap mic or ask a question.</span>
              </div>
            )}
          </div>

          {/* User Transcript Display (Editable) */}
          <div className="bg-monsoon-900/90 border border-monsoon-800 rounded-2xl p-4 relative">
            <div className="flex items-center justify-between text-[11px] text-monsoon-400 font-semibold mb-2">
              <span className="flex items-center gap-1">
                <span>USER SPOKEN QUERY</span>
                {aiResult?.detectedLangId && (
                  <span className="font-mono text-sky-300 bg-sky-500/20 px-1.5 py-0.2 rounded border border-sky-500/30">
                    Detected: {getLanguageById(aiResult.detectedLangId).name}
                  </span>
                )}
              </span>
              <button
                onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                className="text-monsoon-400 hover:text-white flex items-center gap-1"
                title="Edit transcript before sending"
              >
                <Edit3 className="w-3 h-3" />
                <span>{isEditingTranscript ? 'Done Editing' : 'Edit Text'}</span>
              </button>
            </div>

            {isEditingTranscript ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Type or edit your weather query..."
                  className="flex-1 bg-monsoon-950 border border-monsoon-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500"
                />
                <button
                  onClick={() => {
                    setIsEditingTranscript(false);
                    executeQuery(transcript);
                  }}
                  className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <p className="text-sm font-medium text-white italic min-h-[24px]">
                {transcript ? `"${transcript}"` : (
                  <span className="text-monsoon-500 not-italic">
                    Tap the microphone below and speak in Hindi, English, Hinglish, or any of the 22 Indian languages...
                  </span>
                )}
              </p>
            )}
          </div>

          {/* Error Message if any */}
          {errorMessage && (
            <div className="p-3 bg-rose-950/40 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* AI Response Card */}
          {aiResult && (
            <div className="bg-gradient-to-r from-monsoon-900 to-indigo-950 border border-sky-500/40 rounded-2xl p-4 sm:p-5 space-y-3 relative shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-monsoon-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-black">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-white">MAUSAM PRISM Response</span>
                    <span className="text-[10px] text-monsoon-400 ml-2 font-mono">
                      Language: {aiResult.targetLangName} ({aiResult.targetLangNative})
                    </span>
                  </div>
                </div>

                {/* Audio Controls (Play, Pause, Stop, Replay) */}
                <div className="flex items-center gap-1 bg-monsoon-950 p-1 rounded-xl border border-monsoon-800">
                  <button
                    onClick={handlePlayAudio}
                    className="p-1.5 rounded-lg text-monsoon-300 hover:text-white hover:bg-monsoon-800 transition-colors"
                    title="Play Response"
                  >
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                  <button
                    onClick={handlePauseAudio}
                    className="p-1.5 rounded-lg text-monsoon-300 hover:text-white hover:bg-monsoon-800 transition-colors"
                    title="Pause Speech"
                  >
                    <Pause className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                  <button
                    onClick={handleStopAudio}
                    className="p-1.5 rounded-lg text-monsoon-300 hover:text-white hover:bg-monsoon-800 transition-colors"
                    title="Stop Speech"
                  >
                    <Square className="w-3.5 h-3.5 text-rose-400" />
                  </button>
                  <button
                    onClick={handleReplayAudio}
                    className="p-1.5 rounded-lg text-monsoon-300 hover:text-white hover:bg-monsoon-800 transition-colors"
                    title="Replay Response"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>
              </div>

              {/* Response Text Display (Supports LTR & RTL) */}
              <p 
                className={`text-sm sm:text-base font-semibold leading-relaxed text-sky-100 ${
                  aiResult.direction === 'rtl' ? 'text-right font-serif' : 'text-left'
                }`}
                dir={aiResult.direction}
              >
                {aiResult.textResponse}
              </p>

              {/* Metrics Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-monsoon-800/80 text-[11px]">
                <div className="bg-monsoon-950/60 p-2 rounded-xl border border-monsoon-800">
                  <span className="text-monsoon-400 block text-[10px]">TEMPERATURE</span>
                  <span className="font-mono font-bold text-white text-sm">{aiResult.metrics.temp}°C</span>
                </div>
                <div className="bg-monsoon-950/60 p-2 rounded-xl border border-monsoon-800">
                  <span className="text-monsoon-400 block text-[10px]">RAIN PROBABILITY</span>
                  <span className="font-mono font-bold text-sky-400 text-sm">{aiResult.metrics.rainProb}%</span>
                </div>
                <div className="bg-monsoon-950/60 p-2 rounded-xl border border-monsoon-800">
                  <span className="text-monsoon-400 block text-[10px]">AIR QUALITY (AQI)</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">{aiResult.metrics.aqi}</span>
                </div>
                <div className="bg-monsoon-950/60 p-2 rounded-xl border border-monsoon-800">
                  <span className="text-monsoon-400 block text-[10px]">NATIVE TTS</span>
                  <span className={`font-bold text-[11px] ${aiResult.canSpeakNatively ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {aiResult.canSpeakNatively ? '✓ Native Voice' : '⚠ Fallback Voice'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Quick Multilingual Prompt Chips */}
          <div className="space-y-1.5">
            <span className="text-[10px] text-monsoon-400 uppercase font-semibold block">
              1-Click Voice Prompts (Any Language):
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { label: 'क्या आज बारिश होगी?', query: 'क्या आज बारिश होगी?', lang: 'hi' },
                { label: 'Will it rain today?', query: 'Will it rain today in Lucknow?', lang: 'en' },
                { label: 'Kal baarish hogi kya?', query: 'Kal baarish hogi kya?', lang: 'hinglish' },
                { label: 'আজ আবহাওয়া কেমন?', query: 'আজ আবহাওয়া কেমন থাকবে?', lang: 'bn' },
                { label: 'இன்று மழை பெய்யுமா?', query: 'இன்று மழை பெய்யுமா?', lang: 'ta' },
                { label: 'आजचे हवामान कसे आहे?', query: 'आजचे हवामान कसे आहे?', lang: 'mr' }
              ].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTranscript(chip.query);
                    executeQuery(chip.query);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-monsoon-900 hover:bg-monsoon-800 text-monsoon-300 hover:text-white text-xs border border-monsoon-800 transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Giant Centerpiece Microphone Button */}
        <div className="p-5 border-t border-monsoon-800 bg-monsoon-950/90 flex flex-col items-center justify-center gap-3">
          <div className="relative">
            {assistantState === 'listening' && (
              <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-40"></span>
            )}
            <button
              onClick={toggleMic}
              className={`w-20 h-20 rounded-full flex flex-col items-center justify-center font-black shadow-2xl transition-all relative z-10 ${
                assistantState === 'listening'
                  ? 'bg-rose-600 text-white ring-8 ring-rose-500/30 scale-105'
                  : assistantState === 'speaking'
                  ? 'bg-emerald-500 text-white ring-8 ring-emerald-500/30'
                  : 'bg-gradient-to-tr from-sky-500 via-sky-600 to-indigo-600 text-white hover:scale-105 ring-4 ring-sky-400/20'
              }`}
              title={assistantState === 'listening' ? 'Tap to Stop Listening' : 'Tap to Speak'}
            >
              {assistantState === 'listening' ? (
                <MicOff className="w-8 h-8" />
              ) : (
                <Mic className="w-8 h-8" />
              )}
            </button>
          </div>

          <span className="text-xs font-bold text-monsoon-300">
            {assistantState === 'listening' 
              ? 'Listening... Tap to Stop' 
              : assistantMode === 'conversation'
              ? 'Conversation Mode Active — Speak anytime'
              : 'Tap to Speak (बोलने के लिए माइक दबाएं)'}
          </span>

          {/* Bottom Bar: Language Pill + Mode Switcher */}
          <div className="flex items-center gap-3 text-xs text-monsoon-400">
            <button
              onClick={() => setShowLangSelector(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-monsoon-900 border border-monsoon-800 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>Language: <strong>{activeLangObj.nativeName} ({activeLangObj.name})</strong></span>
            </button>

            {assistantMode === 'conversation' && (
              <button
                onClick={() => {
                  setAssistantMode('push_to_talk');
                  stopListening();
                  textToSpeechController.stop();
                }}
                className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold"
              >
                Stop Conversation
              </button>
            )}
          </div>
        </div>

        {/* 6. All 22 Scheduled Languages Selector Modal */}
        {showLangSelector && (
          <div className="absolute inset-0 z-30 bg-monsoon-950/95 backdrop-blur-md p-5 flex flex-col justify-between rounded-3xl animate-fadeIn">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-monsoon-800">
                <div className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-sky-400" />
                  <h4 className="text-base font-black text-white">All 22 Scheduled Languages of India</h4>
                </div>
                <button
                  onClick={() => setShowLangSelector(false)}
                  className="p-1.5 rounded-lg bg-monsoon-900 hover:bg-monsoon-800 text-monsoon-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search languages */}
              <input
                type="text"
                value={searchLangQuery}
                onChange={(e) => setSearchLangQuery(e.target.value)}
                placeholder="Search language (e.g. Tamil, Marathi, Bengali, Urdu)..."
                className="w-full bg-monsoon-900 border border-monsoon-800 rounded-xl px-3 py-2 text-xs text-white placeholder-monsoon-500 focus:outline-none focus:border-sky-500"
              />

              {/* Language Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                {filteredLanguages.map(l => {
                  const isSelected = selectedLangId === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => {
                        setSelectedLangId(l.id);
                        setAutoDetect(false);
                        setShowLangSelector(false);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-sky-600/30 border-sky-400 text-white ring-1 ring-sky-400'
                          : 'bg-monsoon-900/60 border-monsoon-800 hover:border-monsoon-700 text-monsoon-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-white">{l.name}</span>
                        <span className="text-[11px] font-mono text-sky-300">{l.nativeName}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-monsoon-400">Code: {l.code} • {l.script}</span>
                        <span className={`px-1.5 py-0.2 rounded font-mono ${
                          l.capabilityStatus === 'full' 
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : l.capabilityStatus === 'voice_input_only'
                            ? 'bg-sky-500/20 text-sky-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {l.capabilityBadge.split(' ')[0]} {l.capabilityStatus}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-monsoon-800 flex justify-end">
              <button
                onClick={() => setShowLangSelector(false)}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold"
              >
                Confirm Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
