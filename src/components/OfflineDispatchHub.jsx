// src/components/OfflineDispatchHub.jsx
import React, { useState } from 'react';
import { 
  Radio, Volume2, PhoneCall, BellRing, ShieldAlert, X, 
  Sparkles, CheckCircle2, Play, Square, Signal, MessageSquare, 
  Building2, MapPin, Zap, AlertTriangle, Layers
} from 'lucide-react';
import { apiClient } from '../services/apiClient';
import { WEATHER_ALERT_LEVELS } from '../data/mockWeatherData';

export function OfflineDispatchHub({ isOpen, onClose, activeAlertLevel = 'orange', lang = 'hi' }) {
  const [activeTab, setActiveTab] = useState('siren'); // 'siren' | 'ivr' | 'sms' | 'kvk'
  const [sirenActive, setSirenActive] = useState(false);
  const [sirenDecibels, setSirenDecibels] = useState(120);
  const [selectedCluster, setSelectedCluster] = useState('vidarbha');
  const [ivrDialect, setIvrDialect] = useState('hi');
  const [ivrCalling, setIvrCalling] = useState(false);
  const [ivrTranscript, setIvrTranscript] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState(null);

  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['orange'];

  if (!isOpen) return null;

  // Synthesize acoustic siren using Web Audio API
  const handleToggleSiren = async () => {
    if (sirenActive) {
      setSirenActive(false);
      return;
    }

    setSirenActive(true);
    setDispatchStatus('LoRa/GSM Packet Broadcasted: 14 Gram Panchayat Beacon Towers Activated');

    try {
      // Trigger Web Audio API siren oscillation
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.8);
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 1.6);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 2.5);
    } catch {
      // Browser audio policy fallback
    }

    await apiClient.dispatchSiren(selectedCluster, sirenDecibels);
  };

  // Simulate 1800-MAUSAM IVR feature phone call
  const handleSimulateIVR = async () => {
    setIvrCalling(true);
    setIvrTranscript(lang === 'hi' ? 'कॉल कनेक्ट हो रही है: १८००-१८०-१७१७...' : 'Connecting to Toll-Free: 1800-180-1717...');

    const res = await apiClient.simulateIVR(ivrDialect, '1');
    setTimeout(() => {
      setIvrCalling(false);
      setIvrTranscript(res.spokenText);

      // Play local speech synthesizer for audio simulation
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(res.spokenText);
        utter.lang = ivrDialect === 'hi' ? 'hi-IN' : 'en-IN';
        window.speechSynthesis.speak(utter);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0B1528] text-white border-2 border-purple-500/50 rounded-3xl shadow-2xl shadow-purple-950/60 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0C1A30] via-[#1E1B4B] to-[#2E1065] p-5 border-b border-purple-500/30 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-400 text-white flex items-center justify-center font-black shadow-md shadow-purple-900/40">
              <Radio className="w-6 h-6 animate-pulse text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  {lang === 'hi' 
                    ? 'आपातकालीन ऑफलाइन आपदा प्रेषण केंद्र (Zero-Device Last-Mile Hub)' 
                    : 'Emergency Offline Disaster Dispatch Hub (Zero-Device Access)'}
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/25 text-purple-200 border border-purple-400/40">
                  LAST-MILE MESH
                </span>
              </div>
              <p className="text-xs text-sky-200/90 mt-0.5">
                {lang === 'hi'
                  ? 'बिना स्मार्टफोन या इंटरनेट वाले ग्रामीण नागरिकों, वृद्धों व मछुआरों तक जीवन-रक्षक चेतावनियों का सीधा प्रसारण'
                  : 'Life-saving broadcast simulation for non-smartphone rural citizens, elderly, and fisherfolk'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dispatch Mechanism Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-[#070F2B] border-b border-blue-900/60">
          <button
            onClick={() => setActiveTab('siren')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'siren'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#0B1528] text-sky-200 hover:text-white border border-blue-900/60'
            }`}
          >
            <BellRing className="w-4 h-4 text-purple-300" />
            <span>{lang === 'hi' ? '१. पंचायत सोलर सायरन व स्ट्रोब' : '1. Panchayat Siren & Strobe'}</span>
          </button>

          <button
            onClick={() => setActiveTab('ivr')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'ivr'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#0B1528] text-sky-200 hover:text-white border border-blue-900/60'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-sky-300" />
            <span>{lang === 'hi' ? '२. १८००-मौसम टोल-फ्री IVR' : '2. 1800-MAUSAM Toll-Free IVR'}</span>
          </button>

          <button
            onClick={() => setActiveTab('sms')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'sms'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#0B1528] text-sky-200 hover:text-white border border-blue-900/60'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>{lang === 'hi' ? '३. सेल ब्रॉडकास्ट फ्लैश SMS' : '3. Cell Broadcast Flash SMS'}</span>
          </button>

          <button
            onClick={() => setActiveTab('kvk')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'kvk'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-md shadow-purple-900/40 border border-purple-400/40'
                : 'bg-[#0B1528] text-sky-200 hover:text-white border border-blue-900/60'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-300" />
            <span>{lang === 'hi' ? '४. KVK व CSC डिजिटल सूचना पट्ट' : '4. KVK / CSC Digital Notice'}</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">

          {/* TAB 1: Gram Panchayat Siren & Strobe */}
          {activeTab === 'siren' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#0C1A30] border border-purple-500/30 rounded-2xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                      <BellRing className="w-4 h-4 text-purple-400" />
                      <span>{lang === 'hi' ? 'सोलर पावर्ड ग्राम पंचायत सायरन टावर सिमुलेटर' : 'Solar-Powered Gram Panchayat Siren Tower Simulator'}</span>
                    </h3>
                    <p className="text-xs text-sky-200 mt-0.5">
                      {lang === 'hi'
                        ? 'खेतों में काम कर रहे किसानों को दूर से सतर्क करने के लिए १२० डेसिबल ध्वनि व ५-रंग एलईडी स्ट्रोब'
                        : '120dB acoustic siren and 5-color rotating strobe beacon to alert farmers across rural fields.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-sky-300 font-mono">
                      {lang === 'hi' ? 'सिंक्रोनाइज़्ड अलर्ट:' : 'Synced Alert:'}
                    </span>
                    <span 
                      className="px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-sm flex items-center gap-1.5"
                      style={{ backgroundColor: currentAlert.dotColor }}
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      <span>{currentAlert.code}</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3 bg-[#070F2B] rounded-xl border border-blue-900/60">
                    <label className="text-[11px] text-sky-200 block mb-1 font-bold">
                      {lang === 'hi' ? 'लक्षित ग्रामीण क्लस्टर' : 'Target Rural Cluster'}
                    </label>
                    <select
                      value={selectedCluster}
                      onChange={(e) => setSelectedCluster(e.target.value)}
                      className="w-full bg-[#0C1A30] border border-blue-800 text-white rounded-lg p-2 text-xs font-bold focus:outline-none"
                    >
                      <option value="vidarbha">Vidarbha Agrarian Belt (14 Panchayats)</option>
                      <option value="sundarbans">Sundarbans Coastal Delta (22 Panchayats)</option>
                      <option value="chamoli">Chamoli Himalayan Valley (9 Panchayats)</option>
                      <option value="barmer">Barmer Thar Border Blocks (18 Panchayats)</option>
                    </select>
                  </div>

                  <div className="p-3 bg-[#070F2B] rounded-xl border border-blue-900/60">
                    <label className="text-[11px] text-sky-200 block mb-1 font-bold">
                      {lang === 'hi' ? 'ध्वनि तीव्रता (डेसिबल)' : 'Sound Pressure (Decibels)'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input 
                        type="range" 
                        min="90" 
                        max="130" 
                        value={sirenDecibels} 
                        onChange={(e) => setSirenDecibels(Number(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                      <span className="font-mono text-sm font-black text-purple-300 w-12">{sirenDecibels}dB</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#070F2B] rounded-xl border border-blue-900/60 flex flex-col justify-center">
                    <label className="text-[11px] text-sky-200 block mb-1 font-bold">
                      {lang === 'hi' ? 'कवरेज दायरा' : 'Acoustic Coverage'}
                    </label>
                    <span className="text-base font-black text-white font-mono">12 km Radius</span>
                  </div>
                </div>

                {/* Strobe & Sound Visualizer Box */}
                <div className={`p-6 rounded-2xl border-2 text-center transition-all ${
                  sirenActive 
                    ? 'border-white shadow-2xl animate-pulse ring-4 ring-purple-500/40' 
                    : 'border-blue-900/80 bg-[#070F2B]/60'
                }`} style={{ backgroundColor: sirenActive ? currentAlert.dotColor + '30' : undefined }}>
                  
                  <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3 shadow-lg transition-transform"
                       style={{ backgroundColor: currentAlert.dotColor }}>
                    <BellRing className={`w-8 h-8 text-white ${sirenActive ? 'animate-bounce' : ''}`} />
                  </div>

                  <h4 className="text-base font-black text-white">
                    {sirenActive 
                      ? (lang === 'hi' ? `⚠️ सायरन सक्रिय: ${currentAlert.nameHi.split('—')[0]} प्रसारित हो रहा है!` : `⚠️ Siren Active: ${currentAlert.code} Alert Strobe Broadcasting!`)
                      : (lang === 'hi' ? 'सायरन टॉवर स्टैंडबाय पर है (परीक्षण हेतु बटन दबाएं)' : 'Siren Tower on Standby (Click button to simulate test alert)')}
                  </h4>

                  <p className="text-xs text-sky-200 mt-1 max-w-md mx-auto">
                    {lang === 'hi'
                      ? 'टावर पर लगा स्वचालित सोलर रिले ३ सेकंड में चालू हो जाता है और पास के खेत में काम कर रहे किसानों को ध्वनि व प्रकाश से सचेत करता है।'
                      : 'Automatic solar relay triggers within 3 seconds, alerting farmers without mobile phones via sound and rotating strobe flashes.'}
                  </p>

                  <button
                    onClick={handleToggleSiren}
                    className={`mt-4 px-6 py-2.5 rounded-xl font-black text-xs transition-all shadow-lg flex items-center gap-2 mx-auto ${
                      sirenActive 
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-900/50' 
                        : 'bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-500 hover:to-sky-500 text-white shadow-purple-900/50'
                    }`}
                  >
                    {sirenActive ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{sirenActive ? (lang === 'hi' ? 'सायरन बंद करें' : 'Stop Siren Simulation') : (lang === 'hi' ? 'सायरन व स्ट्रोब परीक्षण चालू करें' : 'Simulate Tower Siren & Strobe')}</span>
                  </button>
                </div>

                {dispatchStatus && (
                  <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{dispatchStatus}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: 1800-MAUSAM Toll-Free IVR */}
          {activeTab === 'ivr' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#0C1A30] border border-purple-500/30 rounded-2xl p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-sky-400" />
                      <span>{lang === 'hi' ? '१८००-मौसम टोल-फ्री आईवीआर सिमुलेटर' : '1800-MAUSAM Toll-Free IVR Phone Hotline Simulator'}</span>
                    </h3>
                    <p className="text-xs text-sky-200 mt-0.5">
                      {lang === 'hi'
                        ? 'बेसिक २जी कीपैड फोन वाले नागरिक बिना इंटरनेट के केवल १८००-१८०-१७१७ डायल करके अपनी स्थानीय बोली में मौसम सुन सकते हैं।'
                        : 'Citizens with basic 2G feature phones can dial 1800-180-1717 to receive spoken regional advisories.'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Feature Phone Simulator Mockup */}
                  <div className="md:col-span-5 bg-[#070F2B] border-2 border-blue-800 rounded-3xl p-4 shadow-xl text-center">
                    <div className="w-32 h-2.5 bg-blue-900 rounded-full mx-auto mb-3"></div>
                    <div className="bg-[#0C1A30] border border-blue-900 rounded-xl p-3 mb-3 text-left">
                      <div className="flex items-center justify-between text-[10px] text-sky-300 font-mono mb-1">
                        <span>● BSNL 2G</span>
                        <span>1800-MAUSAM</span>
                      </div>
                      <span className="text-sm font-black text-white block">
                        {ivrCalling ? 'Calling 1800-180-1717...' : '1800-180-1717 (Free)'}
                      </span>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">
                        {ivrCalling ? 'Connecting to Telecom Circle...' : 'Call Ready • No Internet Required'}
                      </span>
                    </div>

                    {/* Keypad Grid */}
                    <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto mb-3">
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => (
                        <button key={k} className="p-2 rounded-lg bg-[#0C1A30] hover:bg-[#132247] text-white font-mono text-xs font-bold border border-blue-900/60">
                          {k}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleSimulateIVR}
                      disabled={ivrCalling}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md shadow-emerald-900/40 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>{ivrCalling ? 'कॉल चालू है...' : 'कॉल लगाएं (Simulate Dial-in)'}</span>
                    </button>
                  </div>

                  {/* IVR Response & Dialect Settings */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="p-3 bg-[#070F2B] rounded-xl border border-blue-900/60">
                      <label className="text-xs text-sky-200 block mb-1 font-bold">
                        {lang === 'hi' ? 'बोली / भाषा चयन' : 'Caller Regional Dialect'}
                      </label>
                      <select
                        value={ivrDialect}
                        onChange={(e) => setIvrDialect(e.target.value)}
                        className="w-full bg-[#0C1A30] border border-blue-800 text-white rounded-lg p-2 text-xs font-bold focus:outline-none"
                      >
                        <option value="hi">हिंदी (Hindi / Gangetic)</option>
                        <option value="mr">मराठी (Marathi / Vidarbha)</option>
                        <option value="bn">বাংলা (Bengali / Delta)</option>
                        <option value="en">Indian English (Urban)</option>
                      </select>
                    </div>

                    <div className="p-4 bg-[#070F2B] rounded-xl border border-purple-500/30">
                      <span className="text-[11px] font-mono text-purple-300 font-bold uppercase block mb-1 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5" />
                        {lang === 'hi' ? 'आईवीआर ऑडियो ट्रांसक्रिप्ट' : 'Spoken Audio Transcript Delivered'}
                      </span>
                      <p className="text-xs font-semibold text-white leading-relaxed">
                        {ivrTranscript || (lang === 'hi' ? '"कॉल लगाएं" बटन दबाकर ऑडियो सिमुलेशन सुनें।' : 'Click "Simulate Dial-in" to listen to spoken vernacular advice.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Cell Broadcast Flash SMS */}
          {activeTab === 'sms' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#0C1A30] border border-purple-500/30 rounded-2xl p-4">
                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'राष्ट्रीय आपदा सेल ब्रॉडकास्ट (NDMA CAP Flash SMS)' : 'National Cell Broadcast Service (NDMA CAP Flash SMS)'}</span>
                </h3>
                <p className="text-xs text-sky-200 mb-4">
                  {lang === 'hi'
                    ? 'बिना इंटरनेट के सभी मोबाइल टावरों द्वारा संबंधित क्षेत्र के प्रत्येक फोन पर स्क्रीन पर तुरंत पॉप-अप होने वाला आधिकारिक संदेश।'
                    : 'Emergency flash notification transmitted directly over telecom towers to every mobile device in affected sectors.'}
                </p>

                <div className="max-w-md mx-auto bg-black border-4 border-slate-700 rounded-3xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-3 border-b border-slate-800 pb-2">
                    <span>EMERGENCY ALERT</span>
                    <span>MoES-NDMA-CAP</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-600/80 text-left">
                    <span className="text-xs font-black text-rose-300 block mb-1">
                      ⚠️ मौसम विभाग चेतावनी: {currentAlert.code} स्तर
                    </span>
                    <p className="text-xs text-rose-100 font-semibold leading-relaxed">
                      आपके क्षेत्र में अगले ३ घंटे में तेज आंधी और आकाशीय बिजली की संभावना है। सुरक्षित पक्के मकान में रहें। पेड़ों या बिजली के खंभों के नीचे शरण न लें। आपातकालीन नंबर: ११२।
                    </p>
                  </div>
                  <button className="w-full mt-4 py-2 rounded-xl bg-slate-800 text-white font-mono text-xs font-bold">
                    [ OK / स्वीकारें ]
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: KVK & CSC E-Notice Board */}
          {activeTab === 'kvk' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#0C1A30] border border-purple-500/30 rounded-2xl p-4">
                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'कृषि विज्ञान केंद्र (KVK) व CSC डिजिटल वॉल नोटिस' : 'KVK & CSC Digital Wall Notice Board'}</span>
                </h3>
                <p className="text-xs text-sky-200 mb-4">
                  {lang === 'hi'
                    ? 'देश भर के ७००+ केवीके और ४ लाख सीएससी केंद्रों पर दिन-रात लाइव रहने वाला किसान बुलेटिन बोर्ड।'
                    : 'Synchronized digital signage feed deployed across 700+ KVKs and 400,000 Common Service Centres.'}
                </p>

                <div className="bg-[#070F2B] border-2 border-amber-500/40 rounded-2xl p-5 text-left font-mono">
                  <div className="flex items-center justify-between border-b border-amber-500/30 pb-2 mb-3">
                    <span className="text-xs text-amber-300 font-bold">KVK AGROMET BULLETIN • LIVE SYNC</span>
                    <span className="text-xs text-emerald-400">● 100% OPERATIONAL</span>
                  </div>
                  <div className="space-y-2 text-xs text-white">
                    <p><span className="text-sky-300 font-bold">कृषि क्षेत्र:</span> पश्चिमी अर्ध-शुष्क कृषि क्षेत्र (ICAR Zone IV)</p>
                    <p><span className="text-sky-300 font-bold">मिट्टी नमी:</span> 58% (पर्याप्त) • कीटनाशक छिड़काव: शाम को टालें</p>
                    <p><span className="text-sky-300 font-bold">आगामी २४ घंटे:</span> ३४°C अधिकतम • ४०% बारिश संभावना</p>
                    <p><span className="text-amber-300 font-bold">चेतावनी कोड:</span> {currentAlert.nameHi}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-[#070F2B] p-3 border-t border-blue-900/60 flex items-center justify-between text-xs text-sky-200">
          <span>● MoES Last-Mile Disaster Mesh Active</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
}
