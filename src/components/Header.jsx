// src/components/Header.jsx
import React from 'react';
import { 
  CloudSun, MoreVertical, Radio, PhoneCall, Building2, User, Sparkles
} from 'lucide-react';
import { WEATHER_ALERT_LEVELS } from '../data/mockWeatherData';

export function Header({
  activeView,
  setActiveView,
  userRole,
  activeAlertLevel,
  onOpenMenu,
  onOpenNotice,
  onOpenVoicePrism,
  lang
}) {
  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['yellow'];

  return (
    <header className="sticky top-0 z-40 border-b border-monsoon-200 bg-white/95 backdrop-blur shadow-xs transition-colors duration-200">
      {/* Top Govt Authority Micro-Bar */}
      <div className="bg-monsoon-900 text-white text-[11px] px-4 py-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-400"></span>
            <span className="font-semibold tracking-wide">
              {lang === 'hi' ? 'पृथ्वी विज्ञान मंत्रालय (MoES)' : 'Ministry of Earth Sciences (MoES)'}
            </span>
            <span className="text-monsoon-500">•</span>
            <span className="text-monsoon-300">
              {lang === 'hi' ? 'भारत मौसम विज्ञान विभाग (IMD)' : 'IMD India'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {lang === 'hi' ? 'लाइव रडार' : 'Radar Live'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bar: Brand on Left, Prism AI + Threat Pill + 3 Dots on Right */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Brand & Identity */}
        <div 
          onClick={() => setActiveView('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <CloudSun className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-monsoon-900 leading-none">
                {lang === 'hi' ? 'मौसम सेवा' : 'MausamSeva'}
              </h1>
              <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded bg-sky-100 text-sky-800 border border-sky-300">
                2.0
              </span>
            </div>
            <span className="text-[10px] text-monsoon-500 font-medium block leading-tight">
              {userRole === 'moes' 
                ? (lang === 'hi' ? 'MoES अधिकारी नियंत्रण कक्ष' : 'MoES Command Center')
                : (lang === 'hi' ? 'वैयक्तिकृत नागरिक मौसम' : 'Personalized Weather')}
            </span>
          </div>
        </div>

        {/* Quick Section Switcher Pills on Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-monsoon-100/80 p-1 rounded-xl border border-monsoon-200 text-xs font-bold">
          <button
            onClick={() => setActiveView('home')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeView === 'home' ? 'bg-white text-sky-800 shadow-xs' : 'text-monsoon-600 hover:text-monsoon-900'
            }`}
          >
            {lang === 'hi' ? 'होम' : 'Home'}
          </button>
          <button
            onClick={() => setActiveView('notice')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeView === 'notice' ? 'bg-white text-amber-800 shadow-xs' : 'text-monsoon-600 hover:text-monsoon-900'
            }`}
          >
            {lang === 'hi' ? 'नोटिस बोर्ड' : 'Notice'}
          </button>
          <button
            onClick={() => setActiveView('safety')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeView === 'safety' ? 'bg-white text-emerald-800 shadow-xs' : 'text-monsoon-600 hover:text-monsoon-900'
            }`}
          >
            {lang === 'hi' ? 'सुरक्षा हब' : 'Safety Hub'}
          </button>
          <button
            onClick={() => setActiveView('forecast')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              activeView === 'forecast' ? 'bg-white text-purple-800 shadow-xs' : 'text-monsoon-600 hover:text-monsoon-900'
            }`}
          >
            {lang === 'hi' ? '७-दिन पूर्वानुमान' : '7-Day'}
          </button>
          {userRole === 'moes' && (
            <button
              onClick={() => setActiveView('moes')}
              className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1 ${
                activeView === 'moes' ? 'bg-monsoon-900 text-white shadow-xs' : 'text-amber-800 hover:bg-amber-100'
              }`}
            >
              <Building2 className="w-3 h-3 text-amber-400" />
              <span>MoES Admin</span>
            </button>
          )}
        </nav>

        {/* Top Right Corner Controls: MAUSAM PRISM AI + Active Threat Level + 3 Dots Button */}
        <div className="flex items-center gap-2">
          {/* MAUSAM PRISM AI Voice Trigger Button */}
          <button
            onClick={onOpenVoicePrism}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 text-white font-black text-xs shadow-sm hover:scale-105 transition-all border border-sky-400/40 cursor-pointer animate-pulse"
            title="Open MAUSAM PRISM AI Multilingual Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">MAUSAM PRISM AI</span>
            <span className="sm:hidden font-bold">AI वॉयस</span>
          </button>

          {/* Active 5-Color Danger Indicator Chip */}
          <button
            onClick={onOpenNotice}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-xs cursor-pointer text-xs"
            style={{ backgroundColor: currentAlert.dotColor }}
            title="Click to view full 5-Color Danger Notice Board"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <span className="hidden sm:inline">
              {lang === 'hi' ? currentAlert.nameHi.split('—')[0] : currentAlert.code}
            </span>
            <span className="bg-black/20 px-1 rounded text-[10px]">
              {lang === 'hi' ? 'नोटिस' : 'Notice'}
            </span>
          </button>

          {/* THE 3 DOTS MENU BUTTON - CARRYING EVERYTHING */}
          <button
            onClick={onOpenMenu}
            className="p-2 rounded-xl bg-monsoon-100 hover:bg-monsoon-200 border border-monsoon-300 text-monsoon-800 transition-all hover:scale-105 shadow-xs flex items-center gap-1 cursor-pointer"
            title="Open all sections & controls menu"
          >
            <MoreVertical className="w-5 h-5 text-monsoon-900" />
            <span className="hidden sm:inline text-xs font-bold text-monsoon-700">
              {lang === 'hi' ? 'मेनू' : 'Menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
