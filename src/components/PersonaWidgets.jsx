import React, { useState } from 'react';
import { 
  Tractor, GraduationCap, HeartPulse, Car, Flame, Anchor, Plane, CalendarDays,
  Droplets, ShieldAlert, CheckCircle, AlertTriangle, CloudRain, Sun, Wind, Clock,
  Eye, Activity, Compass, ThumbsUp, Sparkles, BookOpen, Waves, ShieldCheck,
  Sunrise, Sunset, Thermometer, Flower2, Luggage, Navigation, Bus, AlertCircle,
  CloudLightning, Leaf, Snowflake, MapPin, Gauge
} from 'lucide-react';
import { CITIES_DATA } from '../data/mockWeatherData';

export function PersonaWidgets({ cityId, activePersona, lang }) {
  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-base sm:text-lg font-extrabold text-monsoon-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-sky-600" />
          <span>
            {lang === 'hi' 
              ? 'आपकी भूमिका के लिए विशेष मौसम विवरण' 
              : 'Specialized Metrics for Your Persona'}
          </span>
        </h2>
        <span className="text-xs font-semibold text-monsoon-500 bg-monsoon-100/70 px-2.5 py-1 rounded-full border border-monsoon-200">
          {lang === 'hi' ? 'लाइव आईएमडी और सीपीसीबी डेटा' : 'Live IMD & CPCB Ground Feeds'}
        </span>
      </div>

      {/* Render Persona-Specific Widgets */}
      {activePersona === 'student' && <ParentsFamiliesWidgets city={city} lang={lang} />}
      {activePersona === 'farmer' && <AgricultureGardenersWidgets city={city} lang={lang} />}
      {activePersona === 'senior_health' && <HealthConsciousWidgets city={city} lang={lang} />}
      {activePersona === 'commuter' && <CommuterWidgets city={city} lang={lang} />}
      {activePersona === 'fitness' && <OutdoorFitnessWidgets city={city} lang={lang} />}
      {activePersona === 'coastal' && <BeachgoersSurfersWidgets city={city} lang={lang} />}
      {activePersona === 'traveler' && <TravelerWidgets city={city} lang={lang} />}
      {activePersona === 'event' && <EventPlannersWidgets city={city} lang={lang} />}
    </section>
  );
}

// ==========================================
// 1. PARENTS & FAMILIES (STUDENT COMMUTE)
// ==========================================
function ParentsFamiliesWidgets({ city, lang }) {
  const sc = city.schoolCommute || {
    status: 'Safe & On-Time',
    statusHi: 'सुरक्षित आवागमन',
    morningDrop: '07:15 AM - 08:30 AM: Clear roads',
    morningDropHi: 'सुबह 7:15 से 8:30: सड़कें साफ',
    afternoonPickup: '01:45 PM - 03:30 PM: Light drizzle risk',
    afternoonPickupHi: 'दोपहर 1:45 से 3:30: हल्की फुहार संभव'
  };

  const ra = city.rainAlerts || {
    nextRainIn: 'Scattered drizzle around 04:30 PM',
    nextRainInHi: 'शाम 04:30 बजे हल्की बौछार',
    umbrellaNeeded: city.rainfallChance > 40
  };

  const sw = city.severeWeatherWarnings || {
    active: city.daminiLightning?.alertActive || false,
    title: city.daminiLightning?.alertActive ? 'Active Lightning Proximity Alert' : 'No Severe Weather Warning',
    titleHi: city.daminiLightning?.alertActive ? 'आकाशीय बिजली सतर्कता' : 'मौसम सामान्य',
    instruction: 'Keep children in sheltered areas during recess.',
    instructionHi: 'काले बादल घिरने पर बच्चों को खुले मैदान से अंदर रखें।'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* School Commute Conditions */}
      <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
            <Bus className="w-4 h-4 text-blue-600" />
            {lang === 'hi' ? 'स्कूल आवागमन व बस मार्ग' : 'School Commute Conditions'}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
            {lang === 'hi' ? sc.statusHi : sc.status}
          </span>
        </div>
        <div className="space-y-2 mb-2 text-xs">
          <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-100">
            <span className="font-bold text-blue-900 block mb-0.5">
              {lang === 'hi' ? 'सुबह स्कूल जाने का समय (Morning Drop):' : 'Morning Drop-off Window:'}
            </span>
            <span className="text-blue-800">
              {lang === 'hi' ? sc.morningDropHi : sc.morningDrop}
            </span>
          </div>
          <div className="bg-monsoon-50 p-2.5 rounded-xl border border-monsoon-200">
            <span className="font-bold text-monsoon-900 block mb-0.5">
              {lang === 'hi' ? 'दोपहर छुट्टी का समय (Afternoon Pickup):' : 'Afternoon Dismissal Window:'}
            </span>
            <span className="text-monsoon-700">
              {lang === 'hi' ? sc.afternoonPickupHi : sc.afternoonPickup}
            </span>
          </div>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi'
            ? 'सड़क दृश्यता: ' + city.visibility + ' किमी • बच्चों के स्कूल बैग में पानी की बोतल रखें।'
            : `Visibility: ${city.visibility} km • Keep hydration bottle in school backpacks.`}
        </p>
      </div>

      {/* Rain Alerts & Daily Routine */}
      <div className="bg-white rounded-2xl p-5 border border-sky-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
            <CloudRain className="w-4 h-4 text-sky-600" />
            {lang === 'hi' ? 'वर्षा अलर्ट व दिनचर्या नियोजन' : 'Rain Alerts & Daily Routines'}
          </span>
          <span className="text-xs font-extrabold text-sky-700">
            {city.rainfallChance}% {lang === 'hi' ? 'संभावना' : 'Chance'}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg font-black text-monsoon-900">
            {lang === 'hi' ? ra.nextRainInHi : ra.nextRainIn}
          </span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-xl bg-sky-50 border border-sky-100 mb-2">
          <Droplets className="w-4 h-4 text-sky-600 flex-shrink-0" />
          <span className="text-xs font-semibold text-sky-900">
            {ra.umbrellaNeeded
              ? (lang === 'hi' ? '⚠️ रेनकोट या छाता साथ रखना अनिवार्य है' : '⚠️ Rainwear or umbrella strongly advised')
              : (lang === 'hi' ? '✓ अभी छाते की आवश्यकता नहीं है' : '✓ No rain gear required right now')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'दोपहर के समय खेल व आउटडोर गतिविधियों के लिए मौसम अनुकूल रहेगा। शाम को पार्क जाने से पहले दोबारा चेक करें।'
            : 'Favorable midday conditions for outdoor play. Verify afternoon radar before evening sports coaching.'}
        </p>
      </div>

      {/* Severe Weather Warnings & Lightning Safety */}
      <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 rounded-2xl p-5 border border-amber-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <CloudLightning className="w-4 h-4 text-amber-700" />
            {lang === 'hi' ? 'गंभीर मौसम व आकाशीय बिजली चेतावनी' : 'Severe Weather Warnings'}
          </span>
          {sw.active ? (
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-rose-600 text-white animate-pulse">
              {lang === 'hi' ? 'अलर्ट सक्रिय' : 'ACTIVE ALERT'}
            </span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              {lang === 'hi' ? 'सुरक्षित' : 'CLEAR'}
            </span>
          )}
        </div>
        <p className="text-xs font-bold text-amber-950 mb-1">
          {lang === 'hi' ? sw.titleHi : sw.title}
        </p>
        <p className="text-xs text-amber-900 leading-relaxed mb-3">
          {lang === 'hi' ? sw.instructionHi : sw.instruction}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-amber-200/80 text-[11px] text-amber-800">
          <span>{lang === 'hi' ? 'दामिनी सेंसर नेटवर्क' : 'Damini Sensor Network'}:</span>
          <span className="font-bold">{city.daminiLightning?.distanceKm || 45} km {lang === 'hi' ? 'दूरी' : 'away'}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. AGRICULTURE & GARDENERS
// ==========================================
function AgricultureGardenersWidgets({ city, lang }) {
  const rp = city.rainfallPredictions || {
    next24h: '12 - 18 mm',
    next48h: '25 mm cumulative',
    probabilityPeak: 'Peak rain probability at 05:30 PM (45%)',
    probabilityPeakHi: 'शाम 5:30 बजे 45% संभावना'
  };

  const fa = city.frostAlert || {
    active: false,
    groundTempMin: '14°C (No Frost Risk)',
    groundTempMinHi: '14°C (पाले का कोई खतरा नहीं)',
    advice: 'Safe for open nursery beds and vegetable seedlings.',
    adviceHi: 'नर्सरी व खुले पौधों के लिए सुरक्षित।'
  };

  const sp = city.seasonalPlanting || {
    season: 'Late Kharif / Pre-Rabi Window',
    seasonHi: 'खरीफ कटाई व रबी पूर्व तैयारी',
    plantingTips: 'Prepare field beds for mustard, gram, and winter vegetables. Home gardeners can mulch beds.',
    plantingTipsHi: 'सरसों, चना और मौसमी सब्जियों की बुवाई की तैयारी करें। बगीचे में पौधों की मल्चिंग करें।'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Root-Zone Soil Moisture */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-emerald-600" />
            {lang === 'hi' ? 'मिट्टी में नमी' : 'Soil Moisture'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            {city.soilMoisture > 70 ? (lang === 'hi' ? 'अत्यधिक' : 'Saturated') : (lang === 'hi' ? 'अनुकूल' : 'Optimal')}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">{city.soilMoisture}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-monsoon-100 overflow-hidden mb-2">
          <div 
            className="h-full bg-emerald-600 rounded-full transition-all duration-500" 
            style={{ width: `${city.soilMoisture}%` }}
          ></div>
        </div>
        <p className="text-[11px] text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'जड़ क्षेत्र (0-15 सेमी) में पर्याप्त नमी। ड्रिप सिंचाई का समय अनुकूल।'
            : 'Root-zone (0-15cm) moisture adequate. Plan irrigation accordingly.'}
        </p>
      </div>

      {/* Rainfall Predictions */}
      <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
            <CloudRain className="w-4 h-4 text-emerald-600" />
            {lang === 'hi' ? 'वर्षा पूर्वानुमान' : 'Rainfall Predictions'}
          </span>
          <span className="text-xs font-extrabold text-emerald-700">24h - 48h</span>
        </div>
        <div className="mb-2">
          <div className="text-sm font-extrabold text-monsoon-900">
            {lang === 'hi' ? `अगले 24 घंटे: ${rp.next24h}` : `Next 24h: ${rp.next24h}`}
          </div>
          <div className="text-xs text-monsoon-600">
            {lang === 'hi' ? `48 घंटे संचयी: ${rp.next48h}` : `48h Cumulative: ${rp.next48h}`}
          </div>
        </div>
        <p className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
          {lang === 'hi' ? rp.probabilityPeakHi : rp.probabilityPeak}
        </p>
      </div>

      {/* Frost Alerts (पाला चेतावनी) */}
      <div className={`rounded-2xl p-5 border shadow-xs ${fa.active ? 'bg-rose-50 border-rose-300' : 'bg-white border-emerald-200'}`}>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${fa.active ? 'text-rose-800' : 'text-emerald-800'}`}>
            <Snowflake className="w-4 h-4 text-sky-600" />
            {lang === 'hi' ? 'पाला चेतावनी (Frost Alert)' : 'Frost & Freeze Alert'}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${fa.active ? 'bg-rose-600 text-white animate-pulse' : 'bg-emerald-100 text-emerald-800'}`}>
            {fa.active ? (lang === 'hi' ? 'सक्रिय चेतावनी' : 'ACTIVE') : (lang === 'hi' ? 'सुरक्षित' : 'NO FROST')}
          </span>
        </div>
        <div className="text-sm font-extrabold text-monsoon-900 mb-1">
          {lang === 'hi' ? `न्यूनतम धरातल तापमान: ${fa.groundTempMinHi || fa.groundTempMin}` : `Min Ground Temp: ${fa.groundTempMin}`}
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi' ? fa.adviceHi : fa.advice}
        </p>
      </div>

      {/* Seasonal Planting Guidance */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
            <Leaf className="w-4 h-4 text-emerald-700" />
            {lang === 'hi' ? 'मौसमी बुवाई व बागवानी' : 'Seasonal Planting'}
          </span>
        </div>
        <p className="text-xs font-bold text-emerald-950 mb-1">
          {lang === 'hi' ? sp.seasonHi : sp.season}
        </p>
        <p className="text-xs text-emerald-900 leading-relaxed mb-2">
          {lang === 'hi' ? sp.plantingTipsHi : sp.plantingTips}
        </p>
        <div className="pt-2 border-t border-emerald-200 text-[11px] text-emerald-800 font-semibold">
          {lang === 'hi' ? 'मेघदूत कृषि बुलेटिन द्वारा सत्यापित' : 'Validated by GKMS Agromet Advisory'}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. HEALTH-CONSCIOUS USERS & SENIORS
// ==========================================
function HealthConsciousWidgets({ city, lang }) {
  const pol = city.pollen || {
    count: 'Moderate',
    countHi: 'मध्यम',
    treePollen: 'Low',
    grassPollen: 'Moderate',
    weedPollen: 'Low',
    dominantAllergen: 'Grass & Dust Pollen',
    dominantAllergenHi: 'घास व धूल परागकण',
    skinSensitivity: 'Moderate (SPF 30+ recommended; dust allergy risk)',
    skinSensitivityHi: 'मध्यम (धूल से त्वचा एलर्जी का जोखिम, SPF 30+ लगाएं)'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* 1. Air Quality Index (AQI) */}
      <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-rose-600" />
            {lang === 'hi' ? 'वायु गुणवत्ता (AQI)' : 'Air Quality (AQI)'}
          </span>
          <span 
            className="text-[10px] font-bold px-2 py-0.5 rounded text-white"
            style={{ backgroundColor: city.aqi?.color || '#E11D48' }}
          >
            {lang === 'hi' ? city.aqi?.statusHi : city.aqi?.status}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">AQI {city.aqi?.value}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-monsoon-700 bg-rose-50/70 p-2 rounded-xl border border-rose-100 mb-2">
          <span>PM2.5: <b>{city.aqi?.pm25} µg/m³</b></span>
          <span>PM10: <b>{city.aqi?.pm10} µg/m³</b></span>
        </div>
        <p className="text-[11px] text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'दमा व सांस के मरीज सुबह की सैर 8 बजे के बाद करें। इनहेलर पास रखें।'
            : 'Asthma and COPD patients should avoid early morning smog inversion.'}
        </p>
      </div>

      {/* 2. Pollen Count & Allergy Management */}
      <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
            <Flower2 className="w-4 h-4 text-amber-600" />
            {lang === 'hi' ? 'परागकण (Pollen Count)' : 'Pollen Count & Allergies'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            {lang === 'hi' ? pol.countHi : pol.count}
          </span>
        </div>
        <div className="space-y-1.5 text-xs text-monsoon-800 mb-2">
          <div className="flex justify-between">
            <span className="text-monsoon-500">{lang === 'hi' ? 'प्रमुख एलर्जेन:' : 'Dominant Allergen:'}</span>
            <span className="font-bold">{lang === 'hi' ? pol.dominantAllergenHi : pol.dominantAllergen}</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span>{lang === 'hi' ? 'घास परागकण:' : 'Grass Pollen:'} <b>{pol.grassPollen}</b></span>
            <span>{lang === 'hi' ? 'वृक्ष परागकण:' : 'Tree:'} <b>{pol.treePollen}</b></span>
          </div>
        </div>
        <p className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
          {lang === 'hi'
            ? 'परागकण संवेदनशीलता वाले लोग बाहर चश्मा और फेस मास्क पहनें।'
            : 'Individuals with hay fever or rhinitis should wear sunglasses & masks outdoors.'}
        </p>
      </div>

      {/* 3. UV Index & Skin Sensitivity */}
      <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-orange-500" />
            {lang === 'hi' ? 'पराबैंगनी किरणें (UV) व त्वचा' : 'UV Index & Skin Care'}
          </span>
          <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
            UV {city.uvIndex}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl font-extrabold text-monsoon-900">
            {city.uvIndex >= 8 
              ? (lang === 'hi' ? 'अत्यधिक तेज धूप' : 'Very High UV') 
              : (lang === 'hi' ? 'मध्यम धूप' : 'Moderate UV')}
          </span>
        </div>
        <div className="text-xs text-orange-900 bg-orange-50/70 p-2.5 rounded-xl border border-orange-100 mb-2">
          <span className="font-bold block mb-0.5">{lang === 'hi' ? 'त्वचा संवेदनशीलता सलाह:' : 'Skin Sensitivity Guidance:'}</span>
          <span className="text-[11px]">{lang === 'hi' ? pol.skinSensitivityHi : pol.skinSensitivity}</span>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi' ? 'दोपहर 12 से 3 बजे सीधी धूप से बचें।' : 'Avoid unshielded sun exposure between 12-3 PM.'}
        </p>
      </div>

      {/* 4. Humidity & Asthma / Joint Discomfort */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-rose-700" />
            {lang === 'hi' ? 'नमी व जोड़ों का दर्द बैरोमीटर' : 'Humidity & Joint Ease'}
          </span>
          <span className="text-xs font-extrabold text-rose-800">{city.humidity}%</span>
        </div>
        <div className="text-xs font-bold text-rose-950 mb-1">
          {city.humidity > 75 
            ? (lang === 'hi' ? 'उच्च नमी — जोड़ों में अकड़न का खतरा' : 'Elevated Joint Stiffness Risk') 
            : (lang === 'hi' ? 'संतुलित नमी — सामान्य स्थिति' : 'Optimal Humidity Levels')}
        </div>
        <p className="text-[11px] text-rose-900 leading-relaxed mb-3">
          {lang === 'hi'
            ? 'अधिक नमी से गठिया व जोड़ों में खिंचाव हो सकता है। घुटनों को गर्म रखें और गुनगुना पानी पिएं।'
            : 'High humidity increases synovial joint tension. Keep limbs warm and maintain hydration.'}
        </p>
        <div className="pt-2 border-t border-rose-200 text-[11px] text-rose-800 font-bold flex justify-between">
          <span>{lang === 'hi' ? 'वरिष्ठ हेल्पलाइन:' : 'Elderline Helpline:'}</span>
          <span>14567 • {lang === 'hi' ? 'एम्बुलेंस' : 'Ambulance'}: 108</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. COMMUTERS & TRANSIT
// ==========================================
function CommuterWidgets({ city, lang }) {
  const tu = city.trafficUpdate || {
    status: 'Normal Traffic Flow',
    statusHi: 'यातायात सामान्य',
    arterialRoads: 'Ring Road and expressways moving normally. Underpasses dry and clear.',
    arterialRoadsHi: 'रिंग रोड और मुख्य मार्गों पर सुगम आवागमन। निचले सबवे में जलभराव नहीं है।'
  };

  const sfa = city.stormFogAlert || {
    active: false,
    message: 'No storm or fog hazard currently affecting highway or metro corridors.',
    messageHi: 'सड़क या मेट्रो पर किसी कोहरे अथवा आंधी का व्यवधान नहीं है।'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Weather-Integrated Traffic Updates */}
      <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-amber-600" />
            {lang === 'hi' ? 'मौसम आधारित ट्रैफिक अपडेट' : 'Weather & Traffic Updates'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            {lang === 'hi' ? tu.statusHi : tu.status}
          </span>
        </div>
        <p className="text-xs text-monsoon-800 font-medium mb-3 leading-relaxed">
          {lang === 'hi' ? tu.arterialRoadsHi : tu.arterialRoads}
        </p>
        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-900">
          <span className="font-bold block mb-0.5">{lang === 'hi' ? 'जलभराव जोखिम (Waterlogging):' : 'Waterlogging Vulnerability:'}</span>
          <span>{city.rainfallChance > 60 ? (lang === 'hi' ? 'निचले सबवे में 15-20 मिनट की देरी संभव' : 'Low-lying subways may see 15-20m delay') : (lang === 'hi' ? 'सभी अंडरपास सूखे व सुरक्षित' : 'Underpasses clear and pumped')}</span>
        </div>
      </div>

      {/* Visibility Conditions (Fog / Smog) */}
      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-monsoon-700 uppercase tracking-wider flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-monsoon-600" />
            {lang === 'hi' ? 'सड़क दृश्यता (Visibility)' : 'Visibility Conditions'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-monsoon-100 text-monsoon-800">
            {city.visibility < 2 ? (lang === 'hi' ? 'घना कोहरा' : 'Dense Fog') : (lang === 'hi' ? 'साफ दृश्यता' : 'Clear')}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">{city.visibility} km</span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed mb-2">
          {city.visibility < 2
            ? (lang === 'hi' ? 'हाईवे पर गति धीमी रखें। लो-बीम फॉग लैंप जलाकर चलें।' : 'Use low-beam fog lights and maintain safe braking distance.')
            : (lang === 'hi' ? 'दृश्यता अच्छी है। एक्सप्रेसवे पर सामान्य गति से यात्रा करें।' : 'Clear road visual range for expressways and city flyovers.')}
        </p>
        <div className="text-[11px] text-monsoon-500 pt-2 border-t border-monsoon-100">
          {lang === 'hi' ? `हवा की गति: ${city.windSpeed} किमी/घंटा (${city.windDirection})` : `Wind: ${city.windSpeed} km/h (${city.windDirection})`}
        </div>
      </div>

      {/* Storm & Fog Transit Alerts */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            {lang === 'hi' ? 'आंधी व कोहरा यात्रा अलर्ट' : 'Storm & Fog Transit Alerts'}
          </span>
          {sfa.active && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-600 text-white animate-pulse">
              ALERT
            </span>
          )}
        </div>
        <p className="text-xs font-bold text-amber-950 mb-1">
          {sfa.active ? (lang === 'hi' ? 'सड़क यात्रा चेतावनी' : 'Transit Caution Active') : (lang === 'hi' ? 'सफर के लिए सुगम' : 'Safe for Commute')}
        </p>
        <p className="text-xs text-amber-900 leading-relaxed mb-3">
          {lang === 'hi' ? sfa.messageHi : sfa.message}
        </p>
        <div className="pt-2 border-t border-amber-200 text-[11px] text-amber-800">
          <span className="font-bold">{lang === 'hi' ? 'शाम की वापसी (Evening Return):' : 'Evening Return Window:'}</span>{' '}
          {lang === 'hi' ? `तापमान ${city.temp - 2}°C, बारिश ${city.rainfallChance}%` : `Temp ${city.temp - 2}°C, Rain ${city.rainfallChance}%`}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 5. OUTDOOR FITNESS ENTHUSIASTS
// ==========================================
function OutdoorFitnessWidgets({ city, lang }) {
  const st = city.sunTimes || {
    sunrise: '05:48 AM',
    sunriseHi: 'सुबह 05:48',
    sunset: '06:34 PM',
    sunsetHi: 'शाम 06:34'
  };

  const ha = city.heatAlert || {
    level: 'Yellow Heat Watch',
    levelHi: 'येलो हीट वॉच',
    text: 'Safe morning workout window. Avoid strenuous noon cardio.',
    textHi: 'सुबह व्यायाम के लिए सुरक्षित। दोपहर में तेज धूप से बचें।'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* 1. Sunrise & Sunset Times */}
      <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sunrise className="w-4 h-4 text-amber-500" />
            {lang === 'hi' ? 'सूर्योदय व सूर्यास्त' : 'Sunrise & Sunset Times'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-100 text-center">
            <Sunrise className="w-4 h-4 text-amber-600 mx-auto mb-1" />
            <span className="text-[10px] text-monsoon-600 block">{lang === 'hi' ? 'सूर्योदय' : 'Sunrise'}</span>
            <span className="text-xs font-extrabold text-monsoon-900">{lang === 'hi' ? st.sunriseHi : st.sunrise}</span>
          </div>
          <div className="bg-orange-50/70 p-2.5 rounded-xl border border-orange-100 text-center">
            <Sunset className="w-4 h-4 text-orange-600 mx-auto mb-1" />
            <span className="text-[10px] text-monsoon-600 block">{lang === 'hi' ? 'सूर्यास्त' : 'Sunset'}</span>
            <span className="text-xs font-extrabold text-monsoon-900">{lang === 'hi' ? st.sunsetHi : st.sunset}</span>
          </div>
        </div>
        <p className="text-[11px] text-monsoon-500 text-center">
          {lang === 'hi' ? 'दौड़ने का प्रकाश समय: 5:40 AM से 6:40 PM' : 'Natural daylight window: 5:40 AM - 6:40 PM'}
        </p>
      </div>

      {/* 2. Best Running Hours */}
      <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-600" />
            {lang === 'hi' ? 'दौड़ने का सबसे सही समय' : 'Best Running Hours'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            {lang === 'hi' ? 'अनुकूल' : 'Optimal'}
          </span>
        </div>
        <div className="space-y-2 mb-2 text-xs">
          <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100">
            <span className="font-bold text-emerald-950 block">{lang === 'hi' ? 'प्रातःकाल (Morning Slot):' : 'Morning Slot (Cool & Clean):'}</span>
            <span className="text-emerald-900 font-extrabold text-sm">05:30 AM - 07:15 AM</span>
          </div>
          <div className="bg-monsoon-50 p-2 rounded-xl border border-monsoon-200">
            <span className="font-bold text-monsoon-900 block">{lang === 'hi' ? 'सायंकाल (Evening Slot):' : 'Evening Slot (Cooling):'}</span>
            <span className="text-monsoon-800 font-extrabold text-sm">07:30 PM - 09:00 PM</span>
          </div>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi' ? 'दोपहर 11 से 4 बजे के बीच दौड़ने से बचें।' : 'Avoid outdoor cardio between 11 AM and 4 PM.'}
        </p>
      </div>

      {/* 3. Wind Speed & Aerodynamics */}
      <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-800 uppercase tracking-wider flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-cyan-600" />
            {lang === 'hi' ? 'हवा की गति व खिंचाव' : 'Wind Speed & Resistance'}
          </span>
          <span className="text-xs font-extrabold text-monsoon-900">{city.windDirection}</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">{city.windSpeed} km/h</span>
        </div>
        <div className="w-full h-2 rounded-full bg-monsoon-100 overflow-hidden mb-2">
          <div 
            className="h-full bg-cyan-600 rounded-full transition-all duration-500" 
            style={{ width: `${Math.min(100, city.windSpeed * 3)}%` }}
          ></div>
        </div>
        <p className="text-[11px] text-monsoon-600">
          {city.windSpeed > 25
            ? (lang === 'hi' ? 'तेज हवा: साइकिलिंग व दौड़ने में अतिरिक्त ऊर्जा लगेगी।' : 'Strong resistance for cycling and track sprints.')
            : (lang === 'hi' ? 'हल्की बयार: आउटडोर वर्कआउट के लिए बहुत सुखद।' : 'Gentle breeze: Favorable for cycling and park circuits.')}
        </p>
      </div>

      {/* 4. Heat Alerts & Workout Optimization */}
      <div className="bg-gradient-to-br from-orange-50 to-solar-50 rounded-2xl p-5 border border-orange-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-950 uppercase tracking-wider flex items-center gap-1.5">
            <Thermometer className="w-4 h-4 text-orange-700" />
            {lang === 'hi' ? 'हीट अलर्ट व पसीना दर' : 'Heat Alerts & Planning'}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-200 text-orange-950">
            {lang === 'hi' ? ha.levelHi : ha.level}
          </span>
        </div>
        <div className="text-xs font-bold text-orange-950 mb-1">
          {lang === 'hi' ? `तापमान ${city.temp}°C (अनुभूत ${city.feelsLike}°C)` : `Temp ${city.temp}°C (Feels like ${city.feelsLike}°C)`}
        </div>
        <p className="text-xs text-orange-900 leading-relaxed mb-2">
          {lang === 'hi' ? ha.textHi : ha.text}
        </p>
        <div className="pt-2 border-t border-orange-200 text-[11px] text-orange-950 font-semibold flex justify-between">
          <span>{lang === 'hi' ? 'पसीना दर:' : 'Hydration Guide:'}</span>
          <span>~650 ml / {lang === 'hi' ? 'घंटा पिएं' : 'hr water'}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 6. BEACHGOERS & SURFERS
// ==========================================
function BeachgoersSurfersWidgets({ city, lang }) {
  const sc = city.seaConditions || {
    isCoastal: city.isCoastal,
    state: city.isCoastal ? 'Moderate Swell with Good Surf' : 'Inland Lake Waters',
    stateHi: city.isCoastal ? 'मध्यम समुद्री उछाल व सर्फिंग' : 'मैदानी जलाशय',
    waveHeight: city.isCoastal ? '1.8 - 2.4 Meters' : 'Calm',
    waterTemp: 28,
    waterTempHi: '28°C (गुनगुना)',
    surfSuitability: 'Suitable for surfing with caution',
    surfSuitabilityHi: 'सर्फिंग व बीच वॉक के लिए अनुकूल'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* 1. Sea Conditions & Surf Suitability */}
      <div className="bg-white rounded-2xl p-5 border border-cyan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
            <Waves className="w-4 h-4 text-cyan-600" />
            {lang === 'hi' ? 'समुद्र की स्थिति (Sea Conditions)' : 'Sea Conditions & Surfing'}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
            {city.isCoastal ? (lang === 'hi' ? 'तटीय' : 'COASTAL') : (lang === 'hi' ? 'मैदानी' : 'INLAND')}
          </span>
        </div>
        <div className="text-sm font-extrabold text-monsoon-900 mb-1">
          {lang === 'hi' ? sc.stateHi : sc.state}
        </div>
        <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-100 text-xs text-cyan-950 font-medium mb-2">
          {lang === 'hi' ? sc.surfSuitabilityHi : sc.surfSuitability}
        </div>
        <p className="text-[11px] text-monsoon-500">
          {city.isCoastal
            ? (lang === 'hi' ? 'लाइफगार्ड के झंडे और निर्देशों का पालन करें।' : 'Observe beach lifeguard flags before entering water.')
            : (lang === 'hi' ? 'मैदानी क्षेत्र: झील व नदी जल स्तर सामान्य।' : 'Inland waterbody level normal.')}
        </p>
      </div>

      {/* 2. Tide Timings (High / Low Tide) */}
      <div className="bg-white rounded-2xl p-5 border border-cyan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-600" />
            {lang === 'hi' ? 'ज्वार-भाटा समय (Tide Timings)' : 'Tide Timings'}
          </span>
        </div>
        <div className="space-y-2 mb-2 text-xs">
          <div className="bg-sky-50 p-2.5 rounded-xl border border-sky-100">
            <span className="font-bold text-sky-950 block">{lang === 'hi' ? 'हाई टाइड (High Tide):' : 'High Tide Peak:'}</span>
            <span className="text-sky-900 font-extrabold">
              {city.tide ? (lang === 'hi' ? city.tide.highTideHi : city.tide.highTide) : '02:45 PM (4.1m)'}
            </span>
          </div>
          <div className="bg-monsoon-50 p-2.5 rounded-xl border border-monsoon-200">
            <span className="font-bold text-monsoon-900 block">{lang === 'hi' ? 'लो टाइड (Low Tide):' : 'Low Tide Slot:'}</span>
            <span className="text-monsoon-700 font-bold">
              {city.tide ? (lang === 'hi' ? city.tide.lowTideHi : city.tide.lowTide) : '08:50 PM (0.8m)'}
            </span>
          </div>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi' ? 'हाई टाइड के चरम समय चट्टानों से दूर रहें।' : 'Stay clear of wet rocky breakwaters during high tide peak.'}
        </p>
      </div>

      {/* 3. Wave Height & Swell */}
      <div className="bg-white rounded-2xl p-5 border border-cyan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider flex items-center gap-1.5">
            <Wind className="w-4 h-4 text-cyan-600" />
            {lang === 'hi' ? 'लहरों की ऊंचाई (Wave Height)' : 'Wave Height & Swell'}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {sc.waveHeight || (city.isCoastal ? '2.5 - 3.8m' : 'Calm')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed mb-2">
          {city.isCoastal
            ? (lang === 'hi' ? `हवा की गति ${city.windSpeed} किमी/घंटा। सर्फर्स के लिए मध्यम से ऊंची लहरें।` : `Coastal wind at ${city.windSpeed} km/h creating energetic shorebreak.`)
            : (lang === 'hi' ? 'शांत पानी, तैराकी व नौकायन के लिए सामान्य स्थिति।' : 'Calm lake surface; normal recreational boating.')}
        </p>
        <div className="text-[11px] text-cyan-900 bg-cyan-50 p-2 rounded-lg border border-cyan-100">
          {city.tide?.marineWarning ? (lang === 'hi' ? city.tide.marineWarningHi : city.tide.marineWarning) : 'Normal coastal marine conditions.'}
        </div>
      </div>

      {/* 4. Water Temperature for Beach Activities */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 border border-cyan-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-950 uppercase tracking-wider flex items-center gap-1.5">
            <Thermometer className="w-4 h-4 text-cyan-700" />
            {lang === 'hi' ? 'पानी का तापमान (Water Temp)' : 'Water Temperature'}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-cyan-950">
            {sc.waterTemp}°C
          </span>
          <span className="text-xs font-bold text-cyan-800">
            ({sc.waterTemp >= 26 ? (lang === 'hi' ? 'गुनगुना / सुखद' : 'Warm & Pleasant') : (lang === 'hi' ? 'ठंडा पानी' : 'Brisk / Cool')})
          </span>
        </div>
        <p className="text-xs text-cyan-900 leading-relaxed mb-3">
          {lang === 'hi'
            ? 'समुद्र में तैरने, स्नोर्केलिंग और वॉटर स्पोर्ट्स के लिए तापमान बेहद सुखद है। धूप से बचने के लिए वाटरप्रूफ सनस्क्रीन लगाएं।'
            : 'Comfortable thermal profile for recreational swimming, surfing, and paddle-boarding. Apply reef-safe waterproof sunscreen.'}
        </p>
        <div className="pt-2 border-t border-cyan-200 text-[11px] text-cyan-900 font-bold flex justify-between">
          <span>{lang === 'hi' ? 'सुरक्षा स्थिति:' : 'Marine Advisory:'}</span>
          <span>{city.isCoastal ? 'INCOIS Yellow Flag' : 'All Clear'}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. TRAVELERS & TOURISTS
// ==========================================
function TravelerWidgets({ city, lang }) {
  const [selectedDest, setSelectedDest] = useState(0);

  const destinations = city.savedDestinations || [
    { city: 'London', temp: '16°C', condition: 'Light Rain', icon: 'cloud-rain', packing: 'Carry a waterproof raincoat & compact umbrella', packingHi: 'वाटरप्रूफ रेनकोट और छाता साथ रखें' },
    { city: 'Jaipur', temp: '34°C', condition: 'Sunny & Dry', icon: 'sun', packing: 'UV sunglasses, light cotton & sunscreen', packingHi: 'धूप का चश्मा, हल्के सूती कपड़े व सनस्क्रीन' },
    { city: 'Goa', temp: '29°C', condition: 'Warm Breeze', icon: 'waves', packing: 'Breathable beachwear & waterproof footwear', packingHi: 'बीचवियर और वाटरप्रूफ फुटवियर' },
    { city: 'Srinagar', temp: '15°C', condition: 'Chilly Evening', icon: 'cloud', packing: 'Pack a warm fleece jacket & windcheater', packingHi: 'गर्म फ्लीस जैकेट और विंडचीटर साथ रखें' }
  ];

  const fa = city.flightAlerts || {
    airportCode: 'DEL / BOM',
    status: 'Normal Operations',
    statusHi: 'उड़ानें सामान्य',
    advisory: 'Runway visual range normal. No severe holding delays reported.',
    advisoryHi: 'रनवे दृश्यता सामान्य है। उड़ानों में कोई बड़ा व्यवधान नहीं।'
  };

  const ps = city.packingSuggestions || {
    primary: 'Light cotton wear, UV sunglasses, folding umbrella',
    primaryHi: 'हल्के सूती कपड़े, धूप का चश्मा, छोटा छाता'
  };

  const activeDest = destinations[selectedDest] || destinations[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Quick Access to Saved Destinations */}
      <div className="bg-white rounded-2xl p-5 border border-purple-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-800 uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-purple-600" />
            {lang === 'hi' ? 'सहेजे गए गंतव्य (Saved Destinations)' : 'Saved Destinations Quick View'}
          </span>
        </div>
        {/* Destination Quick Chips */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {destinations.map((d, idx) => (
            <button
              key={d.city}
              onClick={() => setSelectedDest(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedDest === idx
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-purple-50 text-purple-800 hover:bg-purple-100'
              }`}
            >
              {d.city}
            </button>
          ))}
        </div>
        {/* Active Selected Destination Card */}
        <div className="bg-purple-50/80 p-3.5 rounded-xl border border-purple-200 mb-2">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-base font-black text-purple-950">{activeDest.city}</span>
            <span className="text-lg font-black text-purple-700">{activeDest.temp}</span>
          </div>
          <span className="text-xs font-semibold text-purple-800 block mb-2">{activeDest.condition}</span>
          <div className="p-2 rounded-lg bg-white border border-purple-200 text-xs text-purple-950 font-medium">
            <span className="font-bold text-purple-900 block mb-0.5">{lang === 'hi' ? 'पैकिंग सुझाव:' : 'Packing Tip:'}</span>
            <span>{lang === 'hi' ? activeDest.packingHi : activeDest.packing}</span>
          </div>
        </div>
      </div>

      {/* 2. Severe Weather Alerts for Flights */}
      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-800 uppercase tracking-wider flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-purple-600" />
            {lang === 'hi' ? 'उड़ान मौसम अलर्ट (Flight Weather)' : 'Flight Weather Alerts'}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
            {fa.airportCode}
          </span>
        </div>
        <div className="text-sm font-extrabold text-monsoon-900 mb-1">
          {lang === 'hi' ? fa.statusHi : fa.status}
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed mb-3">
          {lang === 'hi' ? fa.advisoryHi : fa.advisory}
        </p>
        <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 text-xs text-purple-900">
          <span className="font-bold block mb-0.5">{lang === 'hi' ? 'हवाई अड्डा रनवे स्थिति:' : 'Airport Runway Met Status:'}</span>
          <span>{lang === 'hi' ? `दृश्यता: ${city.visibility} किमी • हवा: ${city.windSpeed} किमी/घंटा` : `RVR: ${city.visibility} km • Crosswind: ${city.windSpeed} km/h`}</span>
        </div>
      </div>

      {/* 3. Packing Suggestions & Sightseeing */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
            <Luggage className="w-4 h-4 text-purple-700" />
            {lang === 'hi' ? 'स्मार्ट पैकिंग चेकलिस्ट' : 'Packing Suggestions'}
          </span>
        </div>
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 bg-white/80 p-2 rounded-xl border border-purple-200">
            <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span>{lang === 'hi' ? ps.primaryHi : ps.primary}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-900 bg-white/80 p-2 rounded-xl border border-purple-200">
            <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span>{city.temp < 22 ? (lang === 'hi' ? 'गर्म कपड़े व जैकेट' : 'Light woolens or windcheater') : (lang === 'hi' ? 'सूती वस्त्र व पानी की बोतल' : 'Breathable cottons & sunscreen')}</span>
          </div>
        </div>
        <div className="pt-2 border-t border-purple-200 text-xs flex justify-between items-center text-purple-950">
          <span className="font-bold">{lang === 'hi' ? 'पर्यटन स्कोर:' : 'Sightseeing Score:'}</span>
          <span className="font-black text-sm text-purple-800">8.5 / 10</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 8. EVENT PLANNERS & GATHERINGS
// ==========================================
function EventPlannersWidgets({ city, lang }) {
  const ci = city.comfortIndex || {
    score: '7.8 / 10 (Comfortable)',
    label: 'Favorable for Evening Gatherings',
    labelHi: 'शाम के आयोजनों के लिए उत्तम',
    factors: 'Wind 14 km/h, Humidity 62%, Heat Index 34°C',
    factorsHi: 'हवा 14 किमी/घं, नमी 62%, हीट इंडेक्स 34°C'
  };

  const pr = city.probabilityOfRain || {
    morning: '10%',
    afternoon: '25%',
    evening: '45% (Keep backup canopy ready)',
    eveningHi: '45% (शाम को वाटरप्रूफ शेड रखें)',
    night: '20%'
  };

  const ef = city.extendedForecast || [
    { day: 'Friday / शुक्रवार', temp: '34°C / 26°C', rainProb: '35%', comfort: '7.8/10 (Good)' },
    { day: 'Saturday / शनिवार', temp: '33°C / 25°C', rainProb: '60%', comfort: '5.2/10 (Canopy Needed)' },
    { day: 'Sunday / रविवार', temp: '31°C / 24°C', rainProb: '70%', comfort: '4.5/10 (Prefer Indoor)' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Comfort Index for Outdoor Gatherings */}
      <div className="bg-white rounded-2xl p-5 border border-teal-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5">
            <Gauge className="w-4 h-4 text-teal-600" />
            {lang === 'hi' ? 'समारोह कम्फर्ट इंडेक्स' : 'Outdoor Comfort Index'}
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-teal-900">{ci.score}</span>
        </div>
        <span className="text-xs font-bold text-teal-800 block mb-2">
          {lang === 'hi' ? ci.labelHi : ci.label}
        </span>
        <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100 text-xs text-teal-950 mb-2">
          <span className="font-bold block mb-0.5">{lang === 'hi' ? 'वातावरणीय कारक:' : 'Environmental Metrics:'}</span>
          <span>{lang === 'hi' ? ci.factorsHi : ci.factors}</span>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi'
            ? `हवा की गति ${city.windSpeed} किमी/घंटा — टेंट व स्टेज बैकड्रॉप के लिए सुरक्षित स्थिति।`
            : `Wind at ${city.windSpeed} km/h is safe for decorative canopies and marquee pegs.`}
        </p>
      </div>

      {/* 2. Probability of Rain Across Event Slots */}
      <div className="bg-white rounded-2xl p-5 border border-teal-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5">
            <CloudRain className="w-4 h-4 text-teal-600" />
            {lang === 'hi' ? 'वर्षा की संभावना (इवेंट स्लॉट)' : 'Probability of Rain by Slot'}
          </span>
          <span className="text-xs font-extrabold text-teal-700">
            {city.rainfallChance}% {lang === 'hi' ? 'औसत' : 'Avg'}
          </span>
        </div>
        <div className="space-y-2 text-xs mb-2">
          <div className="flex justify-between items-center p-2 rounded-lg bg-monsoon-50 border border-monsoon-100">
            <span>{lang === 'hi' ? 'सुबह (Morning Ceremony):' : 'Morning Slot (8 AM - 12 PM):'}</span>
            <span className="font-bold text-monsoon-900">{pr.morning}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-monsoon-50 border border-monsoon-100">
            <span>{lang === 'hi' ? 'दोपहर (Afternoon Reception):' : 'Afternoon Slot (12 PM - 4 PM):'}</span>
            <span className="font-bold text-monsoon-900">{pr.afternoon}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-teal-50 border border-teal-200 font-bold text-teal-950">
            <span>{lang === 'hi' ? 'शाम/डिनर (Evening Dinner):' : 'Evening Banquet (6 PM - 11 PM):'}</span>
            <span className="text-teal-800">{lang === 'hi' ? pr.eveningHi : pr.evening}</span>
          </div>
        </div>
        <p className="text-[11px] text-monsoon-500">
          {lang === 'hi'
            ? 'खानपान व मिठाइयों को उच्च नमी से बचाने के लिए ढककर रखें।'
            : 'Cover open buffet counters to maintain food freshness against ambient humidity.'}
        </p>
      </div>

      {/* 3. Extended 3-Day Forecast for Weddings / Gatherings */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-5 border border-teal-300 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-950 uppercase tracking-wider flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4 text-teal-700" />
            {lang === 'hi' ? '3-दिवसीय विस्तृत पूर्वानुमान (Extended)' : 'Extended 3-Day Outlook'}
          </span>
        </div>
        <div className="space-y-2 mb-3">
          {ef.map((item, idx) => (
            <div key={idx} className="bg-white/85 p-2 rounded-xl border border-teal-200 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-teal-950 block">{item.day}</span>
                <span className="text-[11px] text-monsoon-600">{item.temp}</span>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-teal-800 block">{item.rainProb} {lang === 'hi' ? 'बारिश' : 'Rain'}</span>
                <span className="text-[10px] text-emerald-800 font-semibold">{item.comfort}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-teal-200 text-[11px] text-teal-900 font-bold text-center">
          {lang === 'hi' ? 'खुले लॉन बनाम इनडोर हॉल निर्णय सहायता' : 'Open Lawn vs. Banquet Hall Decision Support'}
        </div>
      </div>
    </div>
  );
}
