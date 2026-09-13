import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { PersonaBar } from './components/PersonaBar';
import { CurrentWeatherHero } from './components/CurrentWeatherHero';
import { VoiceAssistantWidget } from './components/VoiceAssistantWidget';
import { PersonaWidgets } from './components/PersonaWidgets';
import { HourlyAndWeeklyForecast } from './components/HourlyAndWeeklyForecast';
import { SafetyHub } from './components/SafetyHub';
import { WeatherNoticeBoard } from './components/WeatherNoticeBoard';
import { NavigationMenuDrawer } from './components/NavigationMenuDrawer';
import { CrowdsourceModal } from './components/CrowdsourceModal';
import { MausamPrismModal } from './components/voice/MausamPrismModal';
import { OfflineDispatchHub } from './components/OfflineDispatchHub';
import { Footer } from './components/Footer';
import { MoESDashboard } from './components/moes/MoESDashboard';
import { RegionalHeritageWatermark } from './components/RegionalHeritageWatermark';
import { RegionalHeritageCard } from './components/RegionalHeritageCard';
import { ArrowLeft, Radio, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  // Authentication State: null (shows LoginPage) | 'citizen' | 'moes'
  const [userRole, setUserRole] = useState(null);

  // Active View: 'home' | 'notice' | 'safety' | 'forecast' | 'moes'
  const [activeView, setActiveView] = useState('home');

  // Active 5-Color Alert Level (Managed by MoES): 'green' | 'yellow' | 'orange' | 'red' | 'purple'
  const [activeAlertLevel, setActiveAlertLevel] = useState('orange');

  // Selected City: 'delhi', 'mumbai', 'lucknow', 'shimla'
  const [cityId, setCityId] = useState('delhi');

  // Active Persona: 'student', 'farmer', 'senior_health', 'commuter', 'fitness', 'coastal', 'traveler', 'event'
  const [activePersona, setActivePersona] = useState('student');

  // Language: 'en' or 'hi'
  const [lang, setLang] = useState('hi');

  // Font Scaling (Standard, Large, Extra Large)
  const [fontScale, setFontScale] = useState('standard');

  // High Contrast Accessibility Mode
  const [highContrast, setHighContrast] = useState(false);

  // 3-Dots Navigation Drawer State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Crowdsource Modal State
  const [isCrowdsourceOpen, setIsCrowdsourceOpen] = useState(false);
  const [isVoicePrismOpen, setIsVoicePrismOpen] = useState(false);
  const [isOfflineHubOpen, setIsOfflineHubOpen] = useState(false);

  // Login handler
  const handleLogin = (role) => {
    setUserRole(role);
    if (role === 'citizen') {
      setActiveView('home');
    } else {
      setActiveView('moes');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setUserRole(null);
    setActiveView('home');
    setIsMenuOpen(false);
  };

  // Show Login Screen if unauthenticated
  if (!userRole) {
    return (
      <LoginPage
        onLogin={handleLogin}
        lang={lang}
        setLang={setLang}
      />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      highContrast ? 'high-contrast' : ''
    } font-scale-${fontScale}`}>
      {/* Top Header with Threat Color Badge & 3-Dots Menu Button */}
      <Header
        activeView={activeView}
        onOpenVoicePrism={() => setIsVoicePrismOpen(true)}
        setActiveView={setActiveView}
        userRole={userRole}
        activeAlertLevel={activeAlertLevel}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenNotice={() => setActiveView('notice')}
        lang={lang}
      />

      {/* Subtle Regional Historical Monument & Cultural Motif Background Watermark */}
      {activeView !== 'moes' && <RegionalHeritageWatermark cityId={cityId} />}

      {/* Main Modular View Router */}
      {/* VIEW 1: Clean, Focused Homepage */}
      {activeView === 'home' && (
        <main className="animate-fadeIn pb-12 relative z-10">
          {/* Persona Selection Bar (Ages 10 to 80+) */}
          <PersonaBar
            activePersona={activePersona}
            onSelectPersona={setActivePersona}
            lang={lang}
          />

          {/* Current Weather Hero Card */}
          <CurrentWeatherHero
            cityId={cityId}
            setCityId={setCityId}
            activePersona={activePersona}
            activeAlertLevel={activeAlertLevel}
            onOpenNotice={() => setActiveView('notice')}
            lang={lang}
            onOpenCrowdsource={() => setIsCrowdsourceOpen(true)}
          />

          {/* REGIONAL HISTORICAL & CULTURAL WEATHER PERSONALIZATION */}
          <RegionalHeritageCard
            cityId={cityId}
            lang={lang}
          />

          {/* PROMINENT AI VOICE ASSISTANT ON HOMEPAGE */}
          <VoiceAssistantWidget
            cityId={cityId}
            lang={lang}
            onOpenFullAssistant={() => setIsVoicePrismOpen(true)}
          />

          {/* Dedicated Persona Metrics */}
          <PersonaWidgets
            cityId={cityId}
            activePersona={activePersona}
            lang={lang}
          />

          {/* Quick Hub Navigation Cards on Homepage */}
          <section className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <button
                onClick={() => setActiveView('notice')}
                className="p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:bg-amber-50/40 text-left transition-all shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-black text-monsoon-900 block">
                    {lang === 'hi' ? 'मौसम चेतावनी नोटिस बोर्ड' : 'Danger Notice Board'}
                  </span>
                  <span className="text-[11px] text-monsoon-500">
                    {lang === 'hi' ? '५ रंग कोड व आधिकारिक निर्देश →' : '5 Color codes & rules →'}
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('safety')}
                className="p-4 rounded-2xl bg-white border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/40 text-left transition-all shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-monsoon-900 block">
                    {lang === 'hi' ? 'एकीकृत सुरक्षा हब' : 'Unified Safety Hub'}
                  </span>
                  <span className="text-[11px] text-monsoon-500">
                    {lang === 'hi' ? 'दामिनी बिजली, मेघदूत फसल व रडार →' : 'Damini, Meghdoot & Radar →'}
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('forecast')}
                className="p-4 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 hover:bg-purple-50/40 text-left transition-all shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-monsoon-900 block">
                    {lang === 'hi' ? '७-दिवसीय विस्तृत पूर्वानुमान' : 'Detailed 7-Day Forecast'}
                  </span>
                  <span className="text-[11px] text-monsoon-500">
                    {lang === 'hi' ? 'घंटे-दर-घंटे बारिश संभावना →' : 'Hourly rain curve & temps →'}
                  </span>
                </div>
              </button>
            </div>
          </section>

          {/* Footer */}
          <Footer
            lang={lang}
            onOpenCrowdsource={() => setIsCrowdsourceOpen(true)}
            setActivePortal={(view) => setActiveView(view)}
          />
        </main>
      )}

      {/* VIEW 2: Dedicated Weather Danger Notice Board */}
      {activeView === 'notice' && (
        <main className="max-w-4xl mx-auto px-4 py-6 animate-fadeIn">
          <div className="mb-4">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-3 py-1.5 rounded-xl border border-monsoon-200 shadow-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'hi' ? 'मुख्य पृष्ठ पर वापस' : 'Back to Weather Home'}</span>
            </button>
          </div>
          <WeatherNoticeBoard
            activeAlertLevel={activeAlertLevel}
            lang={lang}
          />
        </main>
      )}

      {/* VIEW 3: Dedicated Unified Safety Hub (Damini + Meghdoot + Doppler Radar) */}
      {activeView === 'safety' && (
        <main className="animate-fadeIn pb-12">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-3 py-1.5 rounded-xl border border-monsoon-200 shadow-xs transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'hi' ? 'मुख्य पृष्ठ पर वापस' : 'Back to Weather Home'}</span>
            </button>
          </div>
          <SafetyHub
            cityId={cityId}
            lang={lang}
          />
        </main>
      )}

      {/* VIEW 4: Dedicated 7-Day and Hourly Forecast */}
      {activeView === 'forecast' && (
        <main className="animate-fadeIn pb-12">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <button
              onClick={() => setActiveView('home')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-white px-3 py-1.5 rounded-xl border border-monsoon-200 shadow-xs transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'hi' ? 'मुख्य पृष्ठ पर वापस' : 'Back to Weather Home'}</span>
            </button>
          </div>
          <HourlyAndWeeklyForecast
            cityId={cityId}
            lang={lang}
          />
        </main>
      )}

      {/* VIEW 5: MoES Command Center (ONLY for MoES role) */}
      {activeView === 'moes' && userRole === 'moes' && (
        <main className="animate-fadeIn">
          <MoESDashboard 
            lang={lang} 
            activeAlertLevel={activeAlertLevel}
            setActiveAlertLevel={setActiveAlertLevel}
            onOpenOfflineHub={() => setIsOfflineHubOpen(true)}
          />
        </main>
      )}

      {/* THE 3-DOTS NAVIGATION DRAWER (Carries everything) */}
      <NavigationMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeView={activeView}
        setActiveView={setActiveView}
        userRole={userRole}
        onLogout={handleLogout}
        activeAlertLevel={activeAlertLevel}
        lang={lang}
        setLang={setLang}
        fontScale={fontScale}
        setFontScale={setFontScale}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        onOpenCrowdsource={() => setIsCrowdsourceOpen(true)}
        onOpenVoicePrism={() => setIsVoicePrismOpen(true)}
        onOpenOfflineHub={() => setIsOfflineHubOpen(true)}
      />

      {/* Crowdsource Verification Dialog */}
      <CrowdsourceModal
        isOpen={isCrowdsourceOpen}
        onClose={() => setIsCrowdsourceOpen(false)}
        cityId={cityId}
        lang={lang}
      />

      {/* MAUSAM PRISM AI MULTILINGUAL VOICE ASSISTANT MODAL */}
      <MausamPrismModal
        isOpen={isVoicePrismOpen}
        onClose={() => setIsVoicePrismOpen(false)}
        currentCityId={cityId}
        activePersona={activePersona}
        appLang={lang}
      />

      {/* ZERO-DEVICE OFFLINE EMERGENCY DISPATCH HUB */}
      <OfflineDispatchHub
        isOpen={isOfflineHubOpen}
        onClose={() => setIsOfflineHubOpen(false)}
        activeAlertLevel={activeAlertLevel}
        lang={lang}
      />
    </div>
  );
}
