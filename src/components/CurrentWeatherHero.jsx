import React, { useState, useEffect } from 'react';
import { 
  MapPin, Navigation, Volume2, VolumeX, CloudRain, Sun, CloudSun, 
  Wind, Droplets, Zap, ShieldAlert, Sparkles, MessageCircleCheck, ArrowUpRight,
  Radio, AlertTriangle, Landmark
} from 'lucide-react';
import { speechService } from '../services/speechService';
import { CITIES_DATA, PERSONAS, WEATHER_ALERT_LEVELS } from '../data/mockWeatherData';
import { REGIONAL_HERITAGE_DATA } from '../data/regionalHeritageData';

export function CurrentWeatherHero({
  cityId,
  setCityId,
  activePersona,
  activeAlertLevel,
  onOpenNotice,
  lang,
  onOpenCrowdsource
}) {
  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];
  const persona = PERSONAS.find(p => p.id === activePersona) || PERSONAS[0];
  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['yellow'];
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Get current persona tip
  const personaTip = city.personaTips[activePersona] 
    ? (lang === 'hi' ? city.personaTips[activePersona].hi : city.personaTips[activePersona].en)
    : (lang === 'hi' ? city.personaTips.student.hi : city.personaTips.student.en);

  useEffect(() => {
    return () => speechService.stop();
  }, [cityId, activePersona]);

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      speechService.stop();
      setIsSpeaking(false);
    } else {
      const intro = lang === 'hi'
        ? `${city.nameHi} में अभी तापमान ${city.temp} डिग्री सेल्सियस है। ${city.conditionHi}। चेतावनी स्तर: ${currentAlert.nameHi}। ${persona.nameHi} के लिए विशेष सलाह: ${personaTip}`
        : `Current temperature in ${city.name} is ${city.temp} degrees celsius with ${city.condition}. Threat alert level: ${currentAlert.name}. Advisory for ${persona.name}: ${personaTip}`;

      speechService.speak(
        intro,
        lang,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false),
        () => setIsSpeaking(false)
      );
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-5">
      {/* Top Location & Crowdsource verification bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {/* City Selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white border border-monsoon-200 rounded-xl px-3 py-1.5 shadow-xs">
            <MapPin className="w-4 h-4 text-sky-600" />
            <select
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              className="bg-transparent font-bold text-sm text-monsoon-900 focus:outline-none cursor-pointer"
            >
              <option value="delhi">{lang === 'hi' ? '🏛️ नई दिल्ली (लाल किला / उत्तर भारत)' : '🏛️ New Delhi (Red Fort / Northern Plains)'}</option>
              <option value="mumbai">{lang === 'hi' ? '🌊 मुंबई (गेटवे ऑफ इंडिया / कोंकण)' : '🌊 Mumbai (Gateway of India / Konkan)'}</option>
              <option value="lucknow">{lang === 'hi' ? '🕌 लखनऊ (रूमी दरवाज़ा / अवध)' : '🕌 Lucknow (Rumi Darwaza / Awadh)'}</option>
              <option value="shimla">{lang === 'hi' ? '🏔️ शिमला (क्राइस्ट चर्च / हिमालय)' : '🏔️ Shimla (Christ Church / Himalayas)'}</option>
              <option value="kolkata">{lang === 'hi' ? '🌉 कोलकाता (हावड़ा ब्रिज / डेल्टा)' : '🌉 Kolkata (Howrah Bridge / Bengal Delta)'}</option>
              <option value="bengaluru">{lang === 'hi' ? '🏛️ बेंगलुरु (विधान सौध / दक्कन)' : '🏛️ Bengaluru (Vidhana Soudha / Deccan)'}</option>
              <option value="jaipur">{lang === 'hi' ? '🏰 जयपुर (हवा महल / थार)' : '🏰 Jaipur (Hawa Mahal / Thar Desert)'}</option>
              <option value="chennai">{lang === 'hi' ? '🛕 चेन्नई (तटीय मंदिर / कोरोमंडल)' : '🛕 Chennai (Shore Temple / Coromandel)'}</option>
            </select>
          </div>

          <button
            onClick={() => setCityId('delhi')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold hover:bg-sky-100 transition-colors shadow-xs"
            title="Detect GPS location"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden sm:inline">{lang === 'hi' ? 'मेरा स्थान' : 'Live GPS'}</span>
          </button>
        </div>

        {/* 1-Tap Crowdsourced Validation & Notice Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotice}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-monsoon-200 text-monsoon-800 text-xs font-bold hover:bg-monsoon-50 transition-colors shadow-xs"
            title="Open 5-Color Danger Notice Board"
          >
            <Radio className="w-4 h-4 text-rose-500 animate-pulse" />
            <span>{lang === 'hi' ? 'चेतावनी नोटिस बोर्ड' : 'Danger Notice Board'}</span>
          </button>

          <button
            onClick={onOpenCrowdsource}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-102"
          >
            <MessageCircleCheck className="w-4 h-4 text-emerald-200" />
            <span>{lang === 'hi' ? 'क्या यहाँ बारिश हो रही है?' : 'Is it Raining?'}</span>
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] uppercase font-mono tracking-wider">
              +10 Karma
            </span>
          </button>
        </div>
      </div>

      {/* Main Atmospheric Hero Card with Top Corner Danger Color Badge */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-sky-800 to-monsoon-950 text-white p-6 sm:p-8 shadow-xl shadow-sky-900/15">
        {/* Background cloud illustration circles */}
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-sky-500/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-80 h-80 rounded-full bg-solar-500/10 blur-3xl pointer-events-none"></div>

        {/* TOP CORNER DANGER COLOR INDICATOR (MANAGED BY MOES) */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
          <button
            onClick={onOpenNotice}
            className="flex items-center gap-2 px-3 py-1.5 rounded-2xl backdrop-blur-md shadow-lg border border-white/20 transition-all hover:scale-105"
            style={{ backgroundColor: currentAlert.dotColor + 'DD' }}
            title="Managed by MoES - Click for full Notice details"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
            <div className="text-left leading-tight">
              <span className="text-[9px] uppercase font-mono tracking-wider text-white/80 block">
                {lang === 'hi' ? 'MoES चेतावनी' : 'MoES Threat Level'}
              </span>
              <span className="text-xs font-black text-white block">
                {lang === 'hi' ? currentAlert.nameHi.split('—')[0] : currentAlert.code}
              </span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Temperature, Condition & Quick Stats */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold text-sky-100 border border-white/20">
                {lang === 'hi' ? city.stateHi : city.state}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-solar-400/20 text-solar-200 text-xs font-bold border border-solar-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-solar-300" />
                {lang === 'hi' ? 'आईएमडी प्रमाणित' : 'IMD Verified Feed'}
              </span>
              {REGIONAL_HERITAGE_DATA[cityId] && (
                <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-200 text-xs font-bold border border-amber-400/30 flex items-center gap-1">
                  <Landmark className="w-3 h-3 text-amber-300" />
                  {lang === 'hi' ? REGIONAL_HERITAGE_DATA[cityId].monumentNameHi : REGIONAL_HERITAGE_DATA[cityId].monumentName}
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-4 sm:gap-6 my-2">
              <span className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white drop-shadow-sm">
                {city.temp}°
              </span>
              <div>
                <span className="text-xl sm:text-2xl font-bold block text-sky-100">
                  {lang === 'hi' ? city.conditionHi : city.condition}
                </span>
                <span className="text-xs sm:text-sm text-sky-200 font-medium mt-0.5 block">
                  {lang === 'hi' 
                    ? `महसूस: ${city.feelsLike}°C • न्यूनतम: ${city.tempMin}° / अधिकतम: ${city.tempMax}°` 
                    : `Feels like ${city.feelsLike}°C • Low: ${city.tempMin}° / High: ${city.tempMax}°`}
                </span>
              </div>
            </div>

            {/* Metric Strips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur rounded-xl p-2.5 border border-white/10">
                <span className="text-[11px] text-sky-200 block flex items-center gap-1">
                  <CloudRain className="w-3.5 h-3.5 text-sky-300" />
                  {lang === 'hi' ? 'बारिश की संभावना' : 'Rain Chance'}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white mt-0.5 block">
                  {city.rainfallChance}%
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-2.5 border border-white/10">
                <span className="text-[11px] text-sky-200 block flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-cyan-300" />
                  {lang === 'hi' ? 'हवा में नमी' : 'Humidity'}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white mt-0.5 block">
                  {city.humidity}%
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-2.5 border border-white/10">
                <span className="text-[11px] text-sky-200 block flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-teal-300" />
                  {lang === 'hi' ? 'हवा की गति' : 'Wind Speed'}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white mt-0.5 block">
                  {city.windSpeed} km/h {city.windDirection}
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-2.5 border border-white/10">
                <span className="text-[11px] text-sky-200 block flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 text-solar-300" />
                  {lang === 'hi' ? 'वायु गुणवत्ता (AQI)' : 'Air Quality'}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    {city.aqi.value}
                  </span>
                  <span 
                    className="text-[10px] px-1.5 py-0.5 rounded font-bold"
                    style={{ backgroundColor: city.aqi.color + '40', color: '#FFF' }}
                  >
                    {lang === 'hi' ? city.aqi.statusHi : city.aqi.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Persona-Tailored Action Box & Voice Assistant */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="bg-white/95 text-monsoon-900 rounded-2xl p-5 shadow-lg border border-white/30 backdrop-blur">
              <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-monsoon-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                  <span className="text-xs font-black uppercase tracking-wider text-sky-800">
                    {lang === 'hi' ? `सलाह: ${persona.nameHi}` : `Action Advisory: ${persona.name}`}
                  </span>
                </div>

                {/* Text-To-Speech Button */}
                <button
                  onClick={handleToggleSpeech}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    isSpeaking
                      ? 'bg-rose-600 text-white animate-pulse shadow-md shadow-rose-600/30'
                      : 'bg-sky-100 text-sky-800 hover:bg-sky-200'
                  }`}
                  title="Listen in vernacular voice"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'रोकें' : 'Stop'}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-sky-700" />
                      <span>{lang === 'hi' ? 'बोलकर सुनाओ' : 'Listen Advice'}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm sm:text-base font-semibold text-monsoon-800 leading-relaxed">
                "{personaTip}"
              </p>

              {/* Damini Lightning Alert Tag */}
              <div className={`mt-3 p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 border ${
                city.daminiLightning.alertActive 
                  ? 'bg-rose-50 text-rose-800 border-rose-200' 
                  : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                <div className="flex items-center gap-2">
                  <Zap className={`w-4 h-4 ${city.daminiLightning.alertActive ? 'text-rose-600 animate-bounce' : 'text-emerald-600'}`} />
                  <span>
                    {lang === 'hi' 
                      ? (city.daminiLightning.alertActive ? city.daminiLightning.statusTextHi : 'दामिनी: कोई आकाशीय बिजली का खतरा नहीं')
                      : (city.daminiLightning.alertActive ? city.daminiLightning.statusText : 'Damini: No lightning detected nearby')}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Micro-Nowcast Strip */}
            <div className="bg-black/30 backdrop-blur rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs text-sky-100">
              <span className="font-bold flex items-center gap-1.5">
                <CloudSun className="w-4 h-4 text-solar-300" />
                {lang === 'hi' ? 'अगले ६ घंटे का अनुमान:' : 'Next 6-Hour Nowcast:'}
              </span>
              <div className="flex items-center gap-4">
                {city.hourly.slice(0, 3).map((h, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[10px] text-sky-300 block">{h.time}</span>
                    <span className="font-extrabold">{h.temp}°</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
