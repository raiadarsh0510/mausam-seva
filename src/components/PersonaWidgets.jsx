import React from 'react';
import { 
  Tractor, GraduationCap, HeartPulse, Car, Flame, Anchor, Plane, CalendarDays,
  Droplets, ShieldAlert, CheckCircle, AlertTriangle, CloudRain, Sun, Wind, Clock,
  Eye, Activity, Compass, ThumbsUp, Sparkles, BookOpen, Waves, ShieldCheck
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
        <span className="text-xs font-semibold text-monsoon-500">
          {lang === 'hi' ? 'लाइव आईएमडी डेटा आधारित' : 'Based on live IMD feeds'}
        </span>
      </div>

      {/* Render Persona-Specific Widgets */}
      {activePersona === 'student' && <StudentWidgets city={city} lang={lang} />}
      {activePersona === 'farmer' && <FarmerWidgets city={city} lang={lang} />}
      {activePersona === 'senior_health' && <SeniorHealthWidgets city={city} lang={lang} />}
      {activePersona === 'commuter' && <CommuterWidgets city={city} lang={lang} />}
      {activePersona === 'fitness' && <FitnessWidgets city={city} lang={lang} />}
      {activePersona === 'coastal' && <CoastalWidgets city={city} lang={lang} />}
      {activePersona === 'traveler' && <TravelerWidgets city={city} lang={lang} />}
      {activePersona === 'event' && <EventWidgets city={city} lang={lang} />}
    </section>
  );
}

// 1. Student Widgets
function StudentWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            {lang === 'hi' ? 'स्कूल व कॉलेज आवागमन' : 'School Commute Safety'}
          </span>
          <CloudRain className="w-4 h-4 text-sky-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {city.rainfallChance > 60 ? (lang === 'hi' ? 'भारी बारिश अलर्ट' : 'Rain Warning') : (lang === 'hi' ? 'सुरक्षित यात्रा' : 'Safe Commute')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'स्कूल के समय (दोपहर 2–4 बजे) हल्की बूंदाबांदी संभव है। स्कूल बैग में रेनकोट या छाता अवश्य रखें।'
            : 'Scattered showers expected around afternoon dismissal (2-4 PM). Keep an umbrella or poncho in your bag.'}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-solar-700 uppercase tracking-wider">
            {lang === 'hi' ? 'खेल का मैदान व धूप (UV)' : 'Playground UV Index'}
          </span>
          <Sun className="w-4 h-4 text-solar-500" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">UV {city.uvIndex}</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-solar-100 text-solar-800">
            {city.uvIndex > 6 ? (lang === 'hi' ? 'तीव्र धूप' : 'High Exposure') : (lang === 'hi' ? 'सामान्य' : 'Moderate')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'दोपहर 12 से 3 बजे के बीच सीधी धूप से बचें। खेल के लिए शाम 4:30 बजे के बाद का समय सबसे अनुकूल है।'
            : 'Avoid direct noon sun between 12-3 PM. Ideal outdoor sports period is after 4:30 PM.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-5 border border-sky-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-sky-800 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-sky-600" />
            {lang === 'hi' ? 'मौसम विज्ञान ज्ञान' : 'Weather Science Trivia'}
          </span>
        </div>
        <p className="text-xs font-bold text-sky-900 mb-1">
          {lang === 'hi' ? 'क्यूम्यलोनिम्बस बादल क्या होते हैं?' : 'What are Cumulonimbus Clouds?'}
        </p>
        <p className="text-xs text-sky-800 leading-relaxed">
          {lang === 'hi'
            ? 'ये ऊंचे स्तंभ जैसे बादल होते हैं जो तेज आंधी और आकाशीय बिजली पैदा करते हैं। भारत का रडार नेटवर्क इन्हें 400 किमी दूर से ट्रैक करता है!'
            : 'These towering anvil-shaped clouds produce sudden downpours and lightning. India Doppler radars track them 400 km away!'}
        </p>
      </div>
    </div>
  );
}

// 2. Farmer Widgets
function FarmerWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Soil Moisture Meter */}
      <div className="bg-white rounded-2xl p-5 border border-kisan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-kisan-700 uppercase tracking-wider">
            {lang === 'hi' ? 'मिट्टी में नमी की मात्रा' : 'Root-Zone Soil Moisture'}
          </span>
          <Droplets className="w-4 h-4 text-kisan-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">{city.soilMoisture}%</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
            {city.soilMoisture > 70 ? (lang === 'hi' ? 'अत्यधिक नमी' : 'Saturated') : (lang === 'hi' ? 'अनुकूल' : 'Optimal')}
          </span>
        </div>
        <div className="w-full h-2.5 rounded-full bg-monsoon-100 overflow-hidden mb-2">
          <div 
            className="h-full bg-kisan-600 rounded-full transition-all duration-500" 
            style={{ width: `${city.soilMoisture}%` }}
          ></div>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'सिंचाई की तुरंत आवश्यकता नहीं है। धान/सब्जियों के लिए वर्तमान नमी पर्याप्त है।'
            : 'No immediate irrigation required. Moisture adequate for active tillering crops.'}
        </p>
      </div>

      {/* Pesticide & Spraying Window */}
      <div className="bg-white rounded-2xl p-5 border border-kisan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-kisan-700 uppercase tracking-wider">
            {lang === 'hi' ? 'कीटनाशक छिड़काव खिड़की' : 'Safe Spraying Window'}
          </span>
          <Clock className="w-4 h-4 text-kisan-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xl font-black text-emerald-700">
            {city.rainfallChance > 60 ? (lang === 'hi' ? 'छिड़काव न करें' : 'Postpone Spray') : (lang === 'hi' ? 'अनुकूल (दोपहर तक)' : 'Clear (Until 3 PM)')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? `हवा की गति ${city.windSpeed} किमी/घंटा है। शाम को बारिश की संभावना को देखते हुए दोपहर 2 बजे के बाद छिड़काव टालें।`
            : `Wind speed is ${city.windSpeed} km/h. Avoid foliar spray after 2 PM due to potential rain wash-off.`}
        </p>
      </div>

      {/* Meghdoot Agro Bulletin */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
            <Tractor className="w-4 h-4 text-emerald-700" />
            {lang === 'hi' ? 'मेघदूत जिला कृषि बुलेटिन' : 'Meghdoot Agro Bulletin'}
          </span>
        </div>
        <p className="text-xs font-bold text-emerald-950 mb-1">
          {lang === 'hi' ? city.meghdootAgro.zoneHi : city.meghdootAgro.zone}
        </p>
        <p className="text-xs text-emerald-900 leading-relaxed">
          {lang === 'hi' ? city.meghdootAgro.bulletinHi : city.meghdootAgro.bulletin}
        </p>
      </div>
    </div>
  );
}

// 3. Senior & Health Widgets
function SeniorHealthWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* AQI & Respiratory Advisory */}
      <div className="bg-white rounded-2xl p-5 border border-rose-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
            {lang === 'hi' ? 'श्वसन स्वास्थ्य व वायु गुणवत्ता' : 'Respiratory & AQI Risk'}
          </span>
          <HeartPulse className="w-4 h-4 text-rose-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">AQI {city.aqi.value}</span>
          <span 
            className="text-xs font-bold px-2 py-0.5 rounded text-white"
            style={{ backgroundColor: city.aqi.color }}
          >
            {lang === 'hi' ? city.aqi.statusHi : city.aqi.status}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'दमा या सांस के वरिष्ठ मरीज सुबह की सैर 8 बजे के बाद करें। जरूरत पड़ने पर इनहेलर साथ रखें।'
            : 'Elderly with asthma or COPD should schedule walks after 8 AM when morning inversion lifts.'}
        </p>
      </div>

      {/* Joint Pain & Weather Barometer */}
      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
            {lang === 'hi' ? 'जोड़ों का दर्द व नमी बैरोमीटर' : 'Arthritis & Joint Discomfort'}
          </span>
          <Activity className="w-4 h-4 text-amber-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {city.humidity > 80 ? (lang === 'hi' ? 'मध्यम से उच्च अकड़न' : 'Elevated Risk') : (lang === 'hi' ? 'कम संवेदनशीलता' : 'Low Sensitivity')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? `हवा में नमी ${city.humidity}% है। जोड़ों में दर्द या सूजन से बचने के लिए घुटनों को गर्म रखें और गुनगुने पानी का सेवन करें।`
            : `Relative humidity is ${city.humidity}%. High humidity can increase synovial joint inflammation. Keep limbs warm.`}
        </p>
      </div>

      {/* Senior Help & Emergency Helpline */}
      <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-5 border border-rose-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            {lang === 'hi' ? 'वरिष्ठ नागरिक आपातकालीन सहायता' : 'Emergency & Health Helpline'}
          </span>
        </div>
        <p className="text-xs font-bold text-rose-950 mb-1">
          {lang === 'hi' ? 'राष्ट्रीय एम्बुलेंस सेवा: 108 • वरिष्ठ सहायता: 14567' : 'National Ambulance: 108 • ElderLine: 14567'}
        </p>
        <p className="text-xs text-rose-900 leading-relaxed">
          {lang === 'hi'
            ? 'लू या अत्यधिक ठंड की स्थिति में नजदीकी प्राथमिक स्वास्थ्य केंद्र पर ओआरएस (ORS) और प्राथमिक उपचार उपलब्ध है।'
            : 'During severe heatwave or cold wave, primary health centres maintain special geriatric hydration beds.'}
        </p>
      </div>
    </div>
  );
}

// 4. Commuter Widgets
function CommuterWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
            {lang === 'hi' ? 'सड़क दृश्यता (कोहरा / धुंध)' : 'Road Visibility (Fog / Smog)'}
          </span>
          <Eye className="w-4 h-4 text-amber-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">{city.visibility} km</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            {city.visibility < 2 ? (lang === 'hi' ? 'घना कोहरा' : 'Dense Fog') : (lang === 'hi' ? 'सामान्य' : 'Clear')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'हाईवे पर गति सामान्य रखें। सुबह के समय फॉग लैंप का प्रयोग करें।'
            : 'Maintain safe braking distance. Use dipped low-beam headlights if fog patches occur.'}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
            {lang === 'hi' ? 'जलभराव व ट्रैफिक जोखिम' : 'Waterlogging & Traffic Risk'}
          </span>
          <Car className="w-4 h-4 text-sky-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {city.rainfallChance > 70 ? (lang === 'hi' ? 'मध्यम जोखिम (+25 मिनट)' : 'High Delay Risk (+25m)') : (lang === 'hi' ? 'सामान्य यातायात' : 'Normal Traffic')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'निचले सबवे और मुख्य चौराहों पर जल निकासी कार्य जारी है। मेट्रो सेवाएं पूरी तरह समय पर हैं।'
            : 'City drainage operational. Metro train networks running on normal schedules.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-sky-50 rounded-2xl p-5 border border-amber-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-700" />
            {lang === 'hi' ? 'शाम की वापसी का पूर्वानुमान' : 'Evening Return Commute'}
          </span>
        </div>
        <p className="text-xs font-bold text-amber-950 mb-1">
          {lang === 'hi' ? 'शाम 5:30 से 7:30 बजे:' : '5:30 PM - 7:30 PM Window:'}
        </p>
        <p className="text-xs text-amber-900 leading-relaxed">
          {lang === 'hi'
            ? `तापमान ${city.temp - 2}°C और बारिश की संभावना ${city.rainfallChance}%. छाता साथ रखना श्रेयस्कर रहेगा।`
            : `Temperature around ${city.temp - 2}°C with ${city.rainfallChance}% rain probability. Plan 15 min buffer.`}
        </p>
      </div>
    </div>
  );
}

// 5. Fitness Widgets
function FitnessWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
            {lang === 'hi' ? 'दौड़ने का सबसे सही समय' : 'Optimal Running Hours'}
          </span>
          <Flame className="w-4 h-4 text-orange-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">5:45 AM - 7:15 AM</span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'सुबह तापमान कम और हवा ताजी रहती है। दोपहर में हीट इंडेक्स अधिक रहने से डीहाइड्रेशन का खतरा है।'
            : 'Lowest ambient temperature and optimal AQI occurs in early morning. Avoid strenuous outdoor runs at noon.'}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
            {lang === 'hi' ? 'गर्मी का प्रभाव व पसीना दर' : 'Sweat Rate & Hydration'}
          </span>
          <Droplets className="w-4 h-4 text-cyan-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">~650 ml / Hour</span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? `हवा में नमी ${city.humidity}% और तापमान ${city.temp}°C होने के कारण वर्कआउट के दौरान हर 20 मिनट में पानी पिएं।`
            : `Relative humidity at ${city.humidity}% slows sweat evaporation. Replenish electrolytes every 20 minutes.`}
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-solar-50 rounded-2xl p-5 border border-orange-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-orange-700" />
            {lang === 'hi' ? 'आउटडोर फिटनेस स्कोर' : 'Outdoor Workout Score'}
          </span>
        </div>
        <div className="text-3xl font-black text-orange-950 mb-1">
          7.8 / 10
        </div>
        <p className="text-xs text-orange-900 leading-relaxed">
          {lang === 'hi'
            ? 'पार्क में वॉक, जॉगिंग और साइकिलिंग के लिए अनुकूल। खुली हवा में व्यायाम करें।'
            : 'Favorable for park jogging, functional training and cycling.'}
        </p>
      </div>
    </div>
  );
}

// 6. Coastal Widgets
function CoastalWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-cyan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
            {lang === 'hi' ? 'ज्वार-भाटा समय (Tide Timings)' : 'Tide Schedule'}
          </span>
          <Waves className="w-4 h-4 text-cyan-600" />
        </div>
        <div className="mb-2">
          <span className="text-sm font-bold text-monsoon-800 block">
            {city.tide ? (lang === 'hi' ? `हाई टाइड: ${city.tide.highTideHi}` : `High: ${city.tide.highTide}`) : 'High Tide: 03:10 PM (3.8m)'}
          </span>
          <span className="text-xs text-monsoon-500 block mt-0.5">
            {city.tide ? (lang === 'hi' ? `लो टाइड: ${city.tide.lowTideHi}` : `Low: ${city.tide.lowTide}`) : 'Low Tide: 09:20 PM (0.9m)'}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'हाई टाइड के दौरान समुद्र तट के नजदीक न जाएं। ऊंची लहरें उठ सकती हैं।'
            : 'Avoid entering rocky promenades or low sandbanks during high tide peak.'}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
            {lang === 'hi' ? 'समुद्री हवा व लहरों की ऊंचाई' : 'Wave Height & Squalls'}
          </span>
          <Wind className="w-4 h-4 text-cyan-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {city.isCoastal ? '3.2 - 4.1 Meters' : 'Inland Lake / River'}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'हवा की गति 25 से 35 किमी/घंटा। समुद्र में छोटी नावों का परिचालन सतर्कता के साथ करें।'
            : 'Moderate to rough sea condition. Small craft advisory in effect.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-5 border border-cyan-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-1.5">
            <Anchor className="w-4 h-4 text-cyan-700" />
            {lang === 'hi' ? 'INCOIS मत्स्य व तटीय चेतावनी' : 'INCOIS Marine Safety Flag'}
          </span>
        </div>
        <p className="text-xs font-bold text-cyan-950 mb-1">
          {city.tide ? (lang === 'hi' ? city.tide.marineWarningHi : city.tide.marineWarning) : 'Normal coastal marine conditions for general navigation.'}
        </p>
      </div>
    </div>
  );
}

// 7. Traveler Widgets
function TravelerWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-purple-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
            {lang === 'hi' ? 'यात्रा पैकिंग सुझाव' : 'Packing Checklist'}
          </span>
          <Plane className="w-4 h-4 text-purple-600" />
        </div>
        <ul className="text-xs text-monsoon-700 space-y-1.5 mb-2 font-medium">
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>{city.rainfallChance > 40 ? (lang === 'hi' ? 'वाटरप्रूफ रेनकोट / छाता' : 'Waterproof raincoat / umbrella') : (lang === 'hi' ? 'धूप का चश्मा व सनस्क्रीन' : 'Sunglasses & UV sunscreen')}</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>{city.temp < 20 ? (lang === 'hi' ? 'हल्के ऊनी वस्त्र / जैकेट' : 'Light woolens or windcheater') : (lang === 'hi' ? 'सांस लेने योग्य सूती कपड़े' : 'Breathable cotton wear')}</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
            {lang === 'hi' ? 'उड़ान व ट्रेन मौसम प्रभाव' : 'Transit Delay Index'}
          </span>
          <Compass className="w-4 h-4 text-purple-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">
            {city.visibility < 2 || city.rainfallChance > 80 ? (lang === 'hi' ? 'संभावित देरी (15-30 मि)' : 'Moderate Delay Risk') : (lang === 'hi' ? 'समय पर (On-Time)' : 'Minimal Transit Impact')}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'हवाई अड्डे पर रनवे दृश्यता सामान्य है। ट्रेन परिचालन निर्बाध जारी है।'
            : 'Airport CAT-I/II lighting active. Rail services operating on scheduled paths.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-700" />
            {lang === 'hi' ? 'पर्यटन अनुकूलता स्कोर' : 'Sightseeing Score'}
          </span>
        </div>
        <div className="text-3xl font-black text-purple-950 mb-1">
          8.2 / 10
        </div>
        <p className="text-xs text-purple-900 leading-relaxed">
          {lang === 'hi'
            ? 'स्मारकों, पार्कों और दर्शनीय स्थलों के भ्रमण के लिए सुखद मौसम।'
            : 'Pleasant weather for outdoor monument visits and heritage trails.'}
        </p>
      </div>
    </div>
  );
}

// 8. Event Widgets
function EventWidgets({ city, lang }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-5 border border-teal-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            {lang === 'hi' ? 'समारोह कम्फर्ट स्कोर' : 'Outdoor Comfort Score'}
          </span>
          <CalendarDays className="w-4 h-4 text-teal-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black text-monsoon-900">
            {city.rainfallChance > 60 ? '4.8 / 10' : '8.4 / 10'}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'शाम के लॉन कार्यक्रमों के लिए वाटरप्रूफ टेंट की व्यवस्था तैयार रखें।'
            : 'Waterproof weatherproofing recommended for outdoor lawn dinners post 6 PM.'}
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
            {lang === 'hi' ? 'शाम की हवा व टेंट स्थिरता' : 'Tent Wind Stability'}
          </span>
          <Wind className="w-4 h-4 text-teal-600" />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black text-monsoon-900">{city.windSpeed} km/h</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
            {lang === 'hi' ? 'स्थिर' : 'Safe for Canopies'}
          </span>
        </div>
        <p className="text-xs text-monsoon-600 leading-relaxed">
          {lang === 'hi'
            ? 'सामान्य हवा। हल्के कैनोपी और स्टेज बैकड्रॉप के लिए सुरक्षित स्थिति।'
            : 'Winds well within structural safety limit for decorative arches and temporary sheds.'}
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-5 border border-teal-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-teal-700" />
            {lang === 'hi' ? 'खानपान व नमी चेतावनी' : 'Catering & Food Hygiene'}
          </span>
        </div>
        <p className="text-xs font-bold text-teal-950 mb-1">
          {lang === 'hi' ? `हवा में नमी ${city.humidity}% है` : `Ambient humidity at ${city.humidity}%`}
        </p>
        <p className="text-xs text-teal-900 leading-relaxed">
          {lang === 'hi'
            ? 'मिठाइयों और खुले व्यंजनों को ढककर रखें ताकि नमी से ताजगी बनी रहे।'
            : 'Keep desserts and open food trays covered to protect against high ambient humidity.'}
        </p>
      </div>
    </div>
  );
}
