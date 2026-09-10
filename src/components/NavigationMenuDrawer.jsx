// src/components/NavigationMenuDrawer.jsx
import React from 'react';
import { 
  X, Home, Radio, ShieldCheck, Calendar, MessageCircleCheck, 
  Building2, LogOut, Languages, Eye, PhoneCall, Sparkles, 
  User, CheckCircle2, ChevronRight, Zap, Tractor, Radar, Mic
} from 'lucide-react';
import { WEATHER_ALERT_LEVELS } from '../data/mockWeatherData';

export function NavigationMenuDrawer({
  isOpen,
  onClose,
  activeView,
  setActiveView,
  userRole,
  onLogout,
  activeAlertLevel,
  lang,
  setLang,
  fontScale,
  setFontScale,
  highContrast,
  setHighContrast,
  onOpenCrowdsource,
  onOpenVoicePrism
}) {
  if (!isOpen) return null;

  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['yellow'];

  const handleSelect = (view) => {
    setActiveView(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn font-sans">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-monsoon-200 animate-slideLeft text-monsoon-900">
        {/* Top Drawer Header */}
        <div>
          <div className="p-5 border-b border-monsoon-100 flex items-center justify-between bg-monsoon-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-monsoon-900 leading-tight">
                  {lang === 'hi' ? 'मौसम सेवा नेविगेशन' : 'MausamSeva Menu'}
                </h3>
                <span className="text-[11px] text-monsoon-500">
                  {userRole === 'moes' 
                    ? (lang === 'hi' ? 'अधिकारी सत्र सक्रिय' : 'MoES Official Session') 
                    : (lang === 'hi' ? 'नागरिक सत्र सक्रिय' : 'Citizen Session')}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-monsoon-500 hover:text-monsoon-900 hover:bg-monsoon-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Session & Role Card */}
          <div className="p-4 mx-4 mt-4 rounded-2xl bg-monsoon-900 text-white shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                {userRole === 'moes' ? <Building2 className="w-4 h-4 text-amber-300" /> : <User className="w-4 h-4 text-sky-300" />}
              </div>
              <div>
                <span className="text-xs font-bold block">
                  {userRole === 'moes' 
                    ? (lang === 'hi' ? 'MoES अधिकारी (Admin)' : 'MoES Official Admin') 
                    : (lang === 'hi' ? 'नागरिक प्रोफ़ाइल' : 'Citizen Profile')}
                </span>
                <span className="text-[10px] text-monsoon-300 block">
                  {userRole === 'moes' ? 'Full Inter-Ministerial Privileges' : 'Personalized Weather Safe'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onLogout();
              }}
              className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 text-xs font-bold transition-colors flex items-center gap-1 border border-rose-500/30"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'लॉगआउट' : 'Exit'}</span>
            </button>
          </div>

          {/* Active 5-Color Alert Status Banner */}
          <div 
            onClick={() => handleSelect('notice')}
            className="mx-4 mt-3 p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer hover:opacity-95 transition-opacity"
            style={{ 
              backgroundColor: currentAlert.dotColor + '15',
              borderColor: currentAlert.dotColor + '40'
            }}
          >
            <div className="flex items-center gap-2.5">
              <span 
                className="w-3 h-3 rounded-full shrink-0 animate-ping"
                style={{ backgroundColor: currentAlert.dotColor }}
              ></span>
              <div>
                <span className="text-xs font-black block" style={{ color: currentAlert.dotColor }}>
                  {lang === 'hi' ? currentAlert.nameHi : `${currentAlert.code} Alert Active`}
                </span>
                <span className="text-[10px] text-monsoon-600 block">
                  {currentAlert.severity} • {lang === 'hi' ? 'नोटिस बोर्ड देखें →' : 'View Notice Board →'}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-monsoon-400" />
          </div>

          {/* Section Navigation Items */}
          <div className="p-4 space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-monsoon-400 px-3 block mb-1">
              {lang === 'hi' ? 'मुख्य अनुभाग (Sections)' : 'Core Sections'}
            </span>

            {/* SPECIAL FEATURE: MAUSAM PRISM AI VOICE ASSISTANT */}
            <button
              onClick={() => {
                onClose();
                if (onOpenVoicePrism) onOpenVoicePrism();
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white shadow-md hover:opacity-95 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <Mic className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block font-black text-xs sm:text-sm flex items-center gap-1.5">
                    <span>MAUSAM PRISM AI</span>
                    <span className="text-[9px] font-mono px-1 rounded bg-amber-400 text-black font-bold">22 LANG</span>
                  </span>
                  <span className="text-[10px] text-sky-100 font-medium">
                    {lang === 'hi' ? '२२ भाषाएं + हिंग्लिश वॉयस स्टूडियो' : 'Multilingual Voice Studio'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* 1. Home / Overview */}
            <button
              onClick={() => handleSelect('home')}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                activeView === 'home'
                  ? 'bg-sky-50 text-sky-800 border border-sky-300 ring-1 ring-sky-200'
                  : 'hover:bg-monsoon-50 text-monsoon-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
                  <Home className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">
                    {lang === 'hi' ? 'मुख्य मौसम पृष्ठ (Home)' : 'Weather Home & Personas'}
                  </span>
                  <span className="text-[10px] text-monsoon-500 font-normal">
                    {lang === 'hi' ? 'तापमान, ८ प्रोफाइल व आज की सलाह' : 'Current weather, 8 personas & hero'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-monsoon-400" />
            </button>

            {/* 2. Notice Board */}
            <button
              onClick={() => handleSelect('notice')}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                activeView === 'notice'
                  ? 'bg-amber-50 text-amber-900 border border-amber-300 ring-1 ring-amber-200'
                  : 'hover:bg-monsoon-50 text-monsoon-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Radio className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">
                    {lang === 'hi' ? 'मौसम चेतावनी नोटिस बोर्ड' : 'Danger Notice Board (5 Colors)'}
                  </span>
                  <span className="text-[10px] text-monsoon-500 font-normal">
                    {lang === 'hi' ? 'हरा, पीला, नारंगी, लाल, बैंगनी कोड विवरण' : 'Green, Yellow, Orange, Red, Purple rules'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-monsoon-400" />
            </button>

            {/* 3. Safety Hub (Damini + Meghdoot + Radar) */}
            <button
              onClick={() => handleSelect('safety')}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                activeView === 'safety'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-300 ring-1 ring-emerald-200'
                  : 'hover:bg-monsoon-50 text-monsoon-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">
                    {lang === 'hi' ? 'एकीकृत सुरक्षा हब' : 'Unified Safety Hub'}
                  </span>
                  <span className="text-[10px] text-monsoon-500 font-normal">
                    {lang === 'hi' ? 'दामिनी बिजली + मेघदूत फसल + डॉपलर रडार' : 'Damini (Lightning), Meghdoot & Doppler Radar'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-monsoon-400" />
            </button>

            {/* 4. 7-Day Forecast */}
            <button
              onClick={() => handleSelect('forecast')}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                activeView === 'forecast'
                  ? 'bg-purple-50 text-purple-900 border border-purple-300 ring-1 ring-purple-200'
                  : 'hover:bg-monsoon-50 text-monsoon-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">
                    {lang === 'hi' ? '७-दिवसीय विस्तृत पूर्वानुमान' : '7-Day Synoptic Outlook'}
                  </span>
                  <span className="text-[10px] text-monsoon-500 font-normal">
                    {lang === 'hi' ? 'दैनिक बारिश की संभावना व मौसम ग्राफ' : 'Hourly rain curves & nowcasting'}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-monsoon-400" />
            </button>

            {/* 5. Crowdsource Verification */}
            <button
              onClick={() => {
                onClose();
                onOpenCrowdsource();
              }}
              className="w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold text-monsoon-800 hover:bg-monsoon-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-100 text-sky-700">
                  <MessageCircleCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-bold">
                    {lang === 'hi' ? 'नागरिक ग्राउंड-ट्रूथ सत्यापन' : 'Crowdsource Verification'}
                  </span>
                  <span className="text-[10px] text-monsoon-500 font-normal">
                    {lang === 'hi' ? '१-टैप "क्या यहाँ बारिश हो रही है?" रिपोर्ट' : '1-Tap "Is it raining?" report (+10 pts)'}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                +10 Karma
              </span>
            </button>

            {/* 6. MoES Command Center (Only if role === 'moes') */}
            {userRole === 'moes' && (
              <button
                onClick={() => handleSelect('moes')}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                  activeView === 'moes'
                    ? 'bg-amber-50 text-amber-950 border border-amber-400 ring-1 ring-amber-300'
                    : 'bg-monsoon-900 text-amber-300 hover:bg-monsoon-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold">
                      {lang === 'hi' ? 'MoES मंत्रालय कमांड सेंटर' : 'MoES Ministerial Command'}
                    </span>
                    <span className="text-[10px] text-amber-300/80 font-normal">
                      {lang === 'hi' ? 'FCI कृषि, ऊर्जा ग्रिड लोड व CAP प्रेषक' : 'FCI yield models, power load & CAP dispatch'}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-amber-500 text-monsoon-950 px-2 py-0.5 rounded font-black">
                  ADMIN
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Accessibility & Helplines Section */}
        <div className="p-4 border-t border-monsoon-100 bg-monsoon-50/50 space-y-3 text-xs">
          {/* Language & Contrast Controls */}
          <div className="flex items-center justify-between gap-2">
            {/* Bilingual toggle */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-monsoon-200">
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  lang === 'hi' ? 'bg-sky-600 text-white' : 'text-monsoon-600 hover:text-monsoon-900'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-lg font-bold transition-colors ${
                  lang === 'en' ? 'bg-sky-600 text-white' : 'text-monsoon-600 hover:text-monsoon-900'
                }`}
              >
                English
              </button>
            </div>

            {/* High Contrast Mode */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`p-2 rounded-xl border font-bold flex items-center gap-1.5 transition-colors ${
                highContrast ? 'bg-monsoon-900 text-white border-monsoon-900' : 'bg-white text-monsoon-700 border-monsoon-200'
              }`}
              title="High Contrast View"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{highContrast ? 'Contrast ON' : 'Contrast'}</span>
            </button>
          </div>

          {/* 3-Stage Font Scaling */}
          <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-monsoon-200">
            <span className="text-monsoon-500 font-semibold text-[11px]">
              {lang === 'hi' ? 'अक्षर का आकार (Font):' : 'Font Size:'}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFontScale('standard')}
                className={`px-2 py-0.5 rounded text-xs font-bold ${
                  fontScale === 'standard' ? 'bg-sky-100 text-sky-800' : 'text-monsoon-500'
                }`}
              >
                A-
              </button>
              <button
                onClick={() => setFontScale('large')}
                className={`px-2 py-0.5 rounded text-sm font-bold ${
                  fontScale === 'large' ? 'bg-sky-100 text-sky-800' : 'text-monsoon-500'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontScale('xlarge')}
                className={`px-2 py-0.5 rounded text-base font-bold ${
                  fontScale === 'xlarge' ? 'bg-sky-100 text-sky-800' : 'text-monsoon-500'
                }`}
              >
                A+
              </button>
            </div>
          </div>

          {/* Emergency Helplines 1-Tap */}
          <div className="pt-2 border-t border-monsoon-200/80 flex items-center justify-between text-[11px] text-monsoon-600">
            <span className="font-semibold flex items-center gap-1 text-rose-700">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>NDMA: 1078</span>
            </span>
            <span>Kisan: 1800-180-1551</span>
            <span>Senior: 14567</span>
          </div>
        </div>
      </div>
    </div>
  );
}
