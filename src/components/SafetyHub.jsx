import React, { useState } from 'react';
import { 
  Zap, Tractor, Radar, ShieldCheck, AlertOctagon, CheckCircle2, 
  ExternalLink, Waves, CloudLightning, Satellite
} from 'lucide-react';
import { CITIES_DATA } from '../data/mockWeatherData';

export function SafetyHub({ cityId, lang }) {
  const [activeSafetyTab, setActiveSafetyTab] = useState('damini');
  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];

  return (
    <section className="max-w-7xl mx-auto px-4 py-5">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-monsoon-200 shadow-sm">
        {/* Header with 3 Government Apps Convergence Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-monsoon-100">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg sm:text-xl font-black text-monsoon-900 tracking-tight">
                {lang === 'hi' ? 'एकीकृत राष्ट्रीय सुरक्षा हब' : 'Unified National Public Safety Hub'}
              </h3>
            </div>
            <p className="text-xs text-monsoon-500 font-medium mt-0.5">
              {lang === 'hi' 
                ? 'दामिनी (दामिनी बिजली) + मेघदूत (कृषि) + मौसम (डॉपलर रडार) — सब एक साथ' 
                : 'Damini (Lightning) + Meghdoot (Agro) + Mausam (Doppler Radar) converged into one'}
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex items-center gap-1.5 bg-monsoon-100 p-1 rounded-xl border border-monsoon-200">
            <button
              onClick={() => setActiveSafetyTab('damini')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSafetyTab === 'damini'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-monsoon-700 hover:text-monsoon-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'दामिनी (बिजली)' : 'Damini (Lightning)'}</span>
            </button>

            <button
              onClick={() => setActiveSafetyTab('meghdoot')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSafetyTab === 'meghdoot'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-monsoon-700 hover:text-monsoon-900'
              }`}
            >
              <Tractor className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'मेघदूत (फसल सलाह)' : 'Meghdoot (Agro)'}</span>
            </button>

            <button
              onClick={() => setActiveSafetyTab('radar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSafetyTab === 'radar'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-monsoon-700 hover:text-monsoon-900'
              }`}
            >
              <Radar className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'डॉपलर रडार' : 'Doppler Radar'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Damini Lightning Radar Alert */}
        {activeSafetyTab === 'damini' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                  city.daminiLightning.alertActive 
                    ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse' 
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  {city.daminiLightning.alertActive ? (lang === 'hi' ? 'सक्रिय बिजली चेतावनी' : 'Active Lightning Warning') : (lang === 'hi' ? 'सामान्य स्थिति' : 'Normal Conditions')}
                </span>
                <span className="text-xs font-semibold text-monsoon-500">
                  {lang === 'hi' ? 'आईआईटीएम पुणे सेंसर नेटवर्क' : 'IITM Pune Sensor Array'}
                </span>
              </div>

              <h4 className="text-xl font-bold text-monsoon-900 mb-2">
                {lang === 'hi' ? city.daminiLightning.statusTextHi : city.daminiLightning.statusText}
              </h4>

              <p className="text-xs sm:text-sm text-monsoon-600 leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'दामिनी सेंसर नेटवर्क भारत भर में आकाशीय बिजली की पूर्व चेतावनी (२० से ४० किमी के दायरे में) प्रदान करता है। बिजली कड़कने पर खुले मैदानों या पेड़ों के नीचे न खड़े हों।'
                  : 'The Damini lightning detection sensor network provides early warning for cloud-to-ground strikes within a 20–40 km perimeter. Stay indoors during electrical thunderstorm activity.'}
              </p>

              {/* Safety Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-monsoon-50 border border-monsoon-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-monsoon-800">
                    {lang === 'hi' ? '३०-३० का नियम अपनाएं' : 'Follow the 30-30 Rule'}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-monsoon-50 border border-monsoon-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-monsoon-800">
                    {lang === 'hi' ? 'अकेले ऊंचे पेड़ों से दूर रहें' : 'Stay away from tall trees'}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-monsoon-50 border border-monsoon-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-monsoon-800">
                    {lang === 'hi' ? 'पानी के स्रोतों व तालाब से निकलें' : 'Avoid open water & metal poles'}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-monsoon-50 border border-monsoon-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-monsoon-800">
                    {lang === 'hi' ? 'पक्के मकान या कार में शरण लें' : 'Shelter in substantial buildings'}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Radar Sweep Simulation */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-monsoon-950 text-white border border-monsoon-800 relative overflow-hidden">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-sky-500/40 flex items-center justify-center relative">
                <div className="w-36 h-36 rounded-full border border-sky-500/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-sky-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  </div>
                </div>
                {/* Sweep Hand */}
                <div className="absolute inset-0 rounded-full border-r-2 border-sky-400/80 animate-spin" style={{ animationDuration: '4s' }}></div>
                {city.daminiLightning.alertActive && (
                  <div className="absolute top-10 right-10 w-3.5 h-3.5 rounded-full bg-rose-500 animate-ping" title="Detected strike cluster"></div>
                )}
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-mono tracking-wider text-sky-300 uppercase block">
                  {lang === 'hi' ? '४० किमी लाइव रडार मॉनिटर' : '40 KM LIVE LIGHTNING SCAN'}
                </span>
                <span className="text-[11px] text-monsoon-400">
                  {lang === 'hi' ? 'निकटतम आकाशीय गतिविधि: ' : 'Nearest strike detected: '}
                  <strong className="text-white">{city.daminiLightning.distanceKm} km</strong>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Meghdoot Agro Advisories */}
        {activeSafetyTab === 'meghdoot' && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {city.meghdootAgro.zone}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-monsoon-900 mt-0.5">
                  {lang === 'hi' ? city.meghdootAgro.bulletinHi : city.meghdootAgro.bulletin}
                </h4>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                ICAR-IMD AgroMet Field Unit
              </span>
            </div>

            {/* Crop Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-monsoon-200 text-monsoon-500 uppercase tracking-wider font-semibold">
                    <th className="py-2.5 px-3">{lang === 'hi' ? 'फसल' : 'Crop'}</th>
                    <th className="py-2.5 px-3">{lang === 'hi' ? 'विकास अवस्था' : 'Stage'}</th>
                    <th className="py-2.5 px-3">{lang === 'hi' ? 'कृषि वैज्ञानिक सलाह' : 'Agro-Met Expert Advisory'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-monsoon-100">
                  {city.meghdootAgro.crops.map((c, i) => (
                    <tr key={i} className="hover:bg-monsoon-50/60 transition-colors">
                      <td className="py-3 px-3 font-bold text-monsoon-900">{c.name}</td>
                      <td className="py-3 px-3 text-monsoon-600 font-semibold">{c.stage}</td>
                      <td className="py-3 px-3 text-monsoon-800">{c.advice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Doppler Radar & Satellite Viewer */}
        {activeSafetyTab === 'radar' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 bg-monsoon-900 rounded-2xl p-5 text-white relative overflow-hidden min-h-[260px] flex flex-col justify-between">
              {/* Radar Simulation Background */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400 font-bold">
                  <Satellite className="w-4 h-4" />
                  INSAT-3D / DWR {city.name.toUpperCase()} RADAR
                </span>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-sky-200">
                  Reflectivity (dBZ) Loop
                </span>
              </div>

              {/* Simulated Cloud Reflectivity Blob */}
              <div className="relative z-10 my-8 flex items-center justify-center">
                <div className="w-56 h-36 rounded-full bg-gradient-to-r from-emerald-500/40 via-yellow-500/40 to-rose-500/50 blur-xl animate-pulse flex items-center justify-center">
                  <span className="font-mono text-xs text-white/90 font-bold px-3 py-1 rounded bg-black/40 backdrop-blur">
                    {city.condition} ({city.rainfallChance}% precip probability)
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-monsoon-300">
                <span>Coordinates: 28.61° N, 77.20° E</span>
                <span>Scan Interval: 10 Minutes</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-monsoon-900">
                {lang === 'hi' ? 'डॉपलर रडार पैमाना (dBZ)' : 'Radar Reflectivity Index'}
              </h4>
              <p className="text-xs text-monsoon-600 leading-relaxed">
                {lang === 'hi'
                  ? 'डॉपलर मौसम रडार वायुमंडल में बादलों में जलकणों के घनत्व और गति को मापता है जिससे अति-सटीक नाउकास्टिंग संभव होती है।'
                  : 'Doppler Weather Radar measures precipitation intensity and radial velocity for hyper-local nowcasting.'}
              </p>

              {/* Reflectivity scale bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-[10px] text-monsoon-500 font-bold">
                  <span>10 dBZ (Light)</span>
                  <span>35 dBZ (Moderate)</span>
                  <span>55+ dBZ (Heavy/Hail)</span>
                </div>
                <div className="h-3 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-rose-600"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
