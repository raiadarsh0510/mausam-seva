import React, { useState } from 'react';
import { 
  Building2, TrendingUp, AlertTriangle, ShieldCheck, Zap, Tractor, 
  HeartPulse, Send, CheckCircle2, BarChart3, Database, Radio, 
  Layers, Users, Info, ChevronRight, ArrowUpRight, Scale, Palette,
  ExternalLink, FileSpreadsheet, Eye
} from 'lucide-react';
import { MOES_ANALYTICS_DATA, WEATHER_ALERT_LEVELS } from '../../data/mockWeatherData';
import { PersonaDataViewer } from './PersonaDataViewer';

export function MoESDashboard({ lang, activeAlertLevel, setActiveAlertLevel }) {
  const [activeModelTab, setActiveModelTab] = useState('agriculture');
  const [alertSent, setAlertSent] = useState(false);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [comparisonActiveTab, setComparisonActiveTab] = useState('data'); // 'data' | 'comparison'
  const [selectedDistrict, setSelectedDistrict] = useState('Vidarbha, Maharashtra');

  const { nationalSummary, personaTraffic, predictiveModels } = MOES_ANALYTICS_DATA;
  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['yellow'];

  const handleSendEmergencyAlert = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 3000);
  };

  const openDataPortal = (tab = 'data') => {
    setComparisonActiveTab(tab);
    setShowComparisonModal(true);
  };

  return (
    <div className="min-h-screen bg-monsoon-950 text-white pb-16 font-sans">
      {/* Top MoES Authority Header */}
      <div className="bg-monsoon-900 border-b border-monsoon-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-monsoon-950 flex items-center justify-center font-black">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  {lang === 'hi' 
                    ? 'पृथ्वी विज्ञान मंत्रालय (MoES) — राष्ट्रीय जलवायु एवं मांग विश्लेषण पोर्टल' 
                    : 'Ministry of Earth Sciences (MoES) — National Climate & Demand Telemetry'}
                </h1>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  GOVT ADMIN CONSOLE
                </span>
              </div>
              <p className="text-xs text-monsoon-400">
                {lang === 'hi' 
                  ? 'नागरिक टेलीमेट्री आधारित अंतर-मंत्रालयी उत्पादन एवं मांग पूर्वानुमान प्रणाली' 
                  : 'Citizen telemetry-driven inter-ministerial production & infrastructure load prediction'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Direct Navigation Button: THE DATA */}
            <button
              onClick={() => openDataPortal('data')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-black transition-all shadow-sm"
              title="View actual citizen persona entries"
            >
              <Database className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'द डेटा (The Data — पर्सोना प्रविष्टियाँ)' : 'The Data (Persona Entries)'}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            {/* Direct Navigation Button: Gap Analysis & Comparison */}
            <button
              onClick={() => openDataPortal('comparison')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600/30 hover:bg-sky-600/50 text-sky-200 border border-sky-500/40 text-xs font-bold transition-colors"
            >
              <Scale className="w-4 h-4 text-sky-300" />
              <span>{lang === 'hi' ? 'मॉडल तुलना व अंतर' : 'Gap Analysis & Comparison'}</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono bg-monsoon-800/80 px-3 py-1.5 rounded-lg border border-monsoon-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-bold">14,280 Nodes Live</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* TOP MOES EXCLUSIVE FEATURE: 5-Color Danger Indicator Controller */}
        <div className="bg-gradient-to-r from-monsoon-900 via-monsoon-900 to-amber-950/40 border-2 border-amber-500/40 rounded-3xl p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-monsoon-800">
            <div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-400" />
                <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                  {lang === 'hi' 
                    ? 'नागरिक पोर्टल हेतु ५-रंग मौसम चेतावनी नियंत्रक (5-Color Threat Broadcast)' 
                    : 'Citizen Homepage 5-Color Danger Threat Controller'}
                </h2>
              </div>
              <p className="text-xs text-monsoon-400 mt-0.5">
                {lang === 'hi'
                  ? 'अधिकारी जिस रंग का चयन करेंगे, वह नागरिक होमपेज के शीर्ष कोने व नोटिस बोर्ड पर तुरंत लाइव प्रदर्शित होगा।'
                  : 'Selected threat level immediately updates the badge on the citizen homepage top corner and notice board in real time.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-monsoon-400 font-mono">
                {lang === 'hi' ? 'वर्तमान लाइव स्तर:' : 'Currently Live:'}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-xs font-mono font-black text-white flex items-center gap-1.5 shadow-sm"
                style={{ backgroundColor: currentAlert.dotColor }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>{currentAlert.code}</span>
              </span>
            </div>
          </div>

          {/* 5-Color Interactive Radio Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {Object.values(WEATHER_ALERT_LEVELS).map((lvl) => {
              const isSelected = activeAlertLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setActiveAlertLevel(lvl.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-monsoon-800 border-white ring-2 ring-white/60 shadow-lg scale-102'
                      : 'bg-monsoon-950/60 border-monsoon-800 hover:border-monsoon-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: lvl.dotColor }}
                    ></span>
                    {isSelected && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-black font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-black text-white block mb-0.5">
                    {lang === 'hi' ? lvl.nameHi.split('—')[0] : lvl.code}
                  </span>
                  <span className="text-[10px] text-monsoon-400 font-medium block leading-tight">
                    {lvl.severity}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* National Metric Telemetry Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-monsoon-900/90 border border-monsoon-800 rounded-2xl p-4">
            <span className="text-xs font-semibold text-monsoon-400 block mb-1">
              {lang === 'hi' ? 'दैनिक नागरिक टेलीमेट्री प्रश्न' : 'Daily Citizen Telemetry Queries'}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono">
              {nationalSummary.totalDailyQueries}
            </span>
            <span className="text-[11px] text-emerald-400 block font-semibold mt-1">
              ↑ +12.4% vs last 24h
            </span>
          </div>

          <div className="bg-monsoon-900/90 border border-monsoon-800 rounded-2xl p-4">
            <span className="text-xs font-semibold text-monsoon-400 block mb-1">
              {lang === 'hi' ? 'सक्रिय चेतावनी जिले (रेड/ऑरेंज)' : 'Active Alert Districts'}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
              {nationalSummary.activeAlertDistricts}
            </span>
            <span className="text-[11px] text-amber-300 block font-semibold mt-1">
              Monsoon & Lightning alerts
            </span>
          </div>

          <div className="bg-monsoon-900/90 border border-monsoon-800 rounded-2xl p-4">
            <span className="text-xs font-semibold text-monsoon-400 block mb-1">
              {lang === 'hi' ? 'रडार-नागरिक मैच सटीकता' : 'Radar Citizen-Match Accuracy'}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
              {nationalSummary.radarMatchAccuracy}%
            </span>
            <span className="text-[11px] text-monsoon-400 block font-semibold mt-1">
              Calibrated via 4,820 live reports
            </span>
          </div>

          <div className="bg-monsoon-900/90 border border-monsoon-800 rounded-2xl p-4">
            <span className="text-xs font-semibold text-monsoon-400 block mb-1">
              {lang === 'hi' ? 'मॉडल विश्वसनीयता स्कोर' : 'Predictive Confidence Score'}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">
              0.91 (High)
            </span>
            <span className="text-[11px] text-sky-300 block font-semibold mt-1">
              NCMRWF & IMD Coupled
            </span>
          </div>
        </div>

        {/* Section 1: Persona Telemetry Demand Breakdown + Quick Link to 'The Data' */}
        <div className="bg-monsoon-900/80 border border-monsoon-800 rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>
                  {lang === 'hi' 
                    ? 'नागरिक भूमिका आधारित टेलीमेट्री एवं मांग रुझान' 
                    : 'Citizen Persona Telemetry & Demand Streams'}
                </span>
              </h2>
              <p className="text-xs text-monsoon-400">
                {lang === 'hi'
                  ? 'नागरिकों द्वारा खोजी जा रही मौसम जानकारी सीधे विभिन्न क्षेत्रों में आगामी मांग का संकेत देती है'
                  : 'Anonymized citizen interaction data directly signals impending macro-economic & infrastructure demand'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => openDataPortal('data')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'वास्तविक पर्सोना प्रविष्टियाँ देखें (The Data)' : 'View Persona Entries (The Data)'}</span>
              </button>
              <span className="text-xs font-mono text-monsoon-400 bg-monsoon-800 px-3 py-1 rounded-full border border-monsoon-700 hidden sm:inline-block">
                Live Feed • 10s
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {personaTraffic.slice(0, 4).map((pt, i) => (
              <div key={i} className="bg-monsoon-950/70 border border-monsoon-800 rounded-xl p-3.5">
                <div className="flex items-center justify-between text-xs font-bold text-monsoon-300 mb-1">
                  <span>{pt.persona}</span>
                  <span className="font-mono text-amber-400">{pt.share}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-monsoon-800 overflow-hidden mb-2">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pt.share * 2}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-monsoon-400">
                  <span>{pt.queriesToday} queries</span>
                  <span className="text-emerald-400 font-semibold">{pt.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Cross-Ministry Production & Load Prediction Engines */}
        <div className="bg-monsoon-900/80 border border-monsoon-800 rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-monsoon-800">
            <div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-400" />
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {lang === 'hi' 
                    ? 'अंतर-मंत्रालयी उत्पादन एवं लोड पूर्वानुमान इंजन' 
                    : 'Inter-Ministerial Production & Grid Prediction Engine'}
                </h2>
              </div>
              <p className="text-xs text-monsoon-400">
                {lang === 'hi'
                  ? 'मौसम डेटा को कृषि मंत्रालय, ऊर्जा मंत्रालय और स्वास्थ्य मंत्रालय के साथ समन्वयित करता है'
                  : 'Bridges meteorological forecasting with Ministry of Agriculture, Ministry of Power & Ministry of Health'}
              </p>
            </div>

            {/* Sub-engine selector tabs */}
            <div className="flex items-center gap-1.5 bg-monsoon-950 p-1 rounded-xl border border-monsoon-800">
              <button
                onClick={() => setActiveModelTab('agriculture')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeModelTab === 'agriculture'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-monsoon-400 hover:text-white'
                }`}
              >
                <Tractor className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'कृषि उत्पादन (FCI)' : 'Agri-Yield (FCI)'}</span>
              </button>

              <button
                onClick={() => setActiveModelTab('power')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeModelTab === 'power'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-monsoon-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'ऊर्जा ग्रिड लोड' : 'Power Grid (CEA)'}</span>
              </button>

              <button
                onClick={() => setActiveModelTab('health')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeModelTab === 'health'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-monsoon-400 hover:text-white'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'स्वास्थ्य इमरजेंसी (ICMR)' : 'Health Surge (ICMR)'}</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Agriculture Crop Yield Shocks & FCI Buffer Planning */}
          {activeModelTab === 'agriculture' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-200 flex items-center justify-between">
                <span>
                  <strong>Predictive Objective:</strong> Forecast regional crop yield shocks 3–6 weeks before harvest to guide FCI procurement quotas & MSP buffer stocking.
                </span>
                <span className="font-mono text-emerald-400">Target: Ministry of Agriculture & Farmers Welfare</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {predictiveModels.agriculture.map((ag, i) => (
                  <div key={i} className="bg-monsoon-950 border border-monsoon-800 rounded-2xl p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-400">{ag.state}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          ag.riskLevel.includes('High') 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                            : ag.riskLevel.includes('Medium')
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {ag.riskLevel}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-white mb-1">{ag.crop}</h3>
                      <div className="text-xl font-black text-amber-300 font-mono mb-3">
                        {ag.projectedYieldChange}
                      </div>

                      <div className="space-y-2 text-xs border-t border-monsoon-800/80 pt-3">
                        <p className="text-monsoon-400">
                          <strong className="text-monsoon-300">Citizen Telemetry Driver:</strong> {ag.telemetryDriver}
                        </p>
                        <p className="text-emerald-300 font-medium bg-emerald-950/30 p-2 rounded-lg border border-emerald-800/30">
                          <strong>FCI Action:</strong> {ag.fciProcurementImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Power Grid Substation Load Predictions */}
          {activeModelTab === 'power' && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-xs text-amber-200 flex items-center justify-between">
                <span>
                  <strong>Predictive Objective:</strong> Forecast peak MW electricity load based on Cooling Degree Days (CDD) and heatwave query density to prevent grid tripping.
                </span>
                <span className="font-mono text-amber-400">Target: Central Electricity Authority (CEA) & DISCOMs</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {predictiveModels.powerGrid.map((pg, i) => (
                  <div key={i} className="bg-monsoon-950 border border-monsoon-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-amber-400">{pg.region}</span>
                      <span className="text-xs font-mono bg-monsoon-800 px-2 py-0.5 rounded text-monsoon-300">
                        CDD: {pg.coolingDegreeDays}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-4 my-2">
                      <span className="text-2xl font-black text-white font-mono">{pg.peakDemandMW}</span>
                      <span className={`text-sm font-bold font-mono ${pg.projectedSurge.includes('+') ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {pg.projectedSurge}
                      </span>
                    </div>
                    <p className="text-xs text-monsoon-400 mb-3">{pg.triggerFactor}</p>
                    <div className="bg-amber-950/30 border border-amber-800/30 p-2.5 rounded-xl text-xs text-amber-300">
                      <strong>Grid Dispatcher Action:</strong> {pg.actionRequired}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Public Health & Hospital Surge Alerts */}
          {activeModelTab === 'health' && (
            <div className="space-y-4">
              <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-xs text-rose-200 flex items-center justify-between">
                <span>
                  <strong>Predictive Objective:</strong> Predict respiratory & vector-borne hospital admission surges to allocate emergency nebulizers, ORS, and district beds.
                </span>
                <span className="font-mono text-rose-400">Target: Ministry of Health & Family Welfare / ICMR</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {predictiveModels.publicHealth.map((ph, i) => (
                  <div key={i} className="bg-monsoon-950 border border-monsoon-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-rose-400">{ph.cluster}</span>
                      <span className="text-xs font-mono font-bold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
                        {ph.projectedERSurge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{ph.forecastCondition}</h3>
                    <p className="text-xs text-monsoon-400 mb-2">
                      <strong className="text-monsoon-300">At-Risk Group:</strong> {ph.vulnerablePopulation}
                    </p>
                    <div className="bg-rose-950/30 border border-rose-800/30 p-2.5 rounded-xl text-xs text-rose-200">
                      <strong>Hospital Protocol:</strong> {ph.mohwAction}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Emergency Inter-Agency Common Alert Protocol (CAP) Dispatcher */}
        <div className="bg-gradient-to-r from-monsoon-900 to-rose-950/50 border border-monsoon-800 rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <h3 className="text-base font-bold text-white">
                  {lang === 'hi' 
                    ? 'राष्ट्रीय आपदा प्रबंधन (NDMA) आपातकालीन चेतावनी प्रेषक' 
                    : 'Emergency Common Alerting Protocol (CAP) Broadcast'}
                </h3>
              </div>
              <p className="text-xs text-monsoon-400 mt-1 max-w-xl">
                Simulate broadcasting verified weather red/orange alerts to State Disaster Management Authorities (SDMAs), District Collectors, and mobile citizen push channels.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-monsoon-950 border border-monsoon-700 text-xs text-white rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
              >
                <option value="Vidarbha, Maharashtra">Vidarbha (High Moisture Pest Alert)</option>
                <option value="Mumbai Suburb, MH">Mumbai Coastal (High Swell 4.1m)</option>
                <option value="Delhi-NCR">Delhi-NCR (AQI Severe Inversion)</option>
                <option value="Barabanki, UP">Barabanki (Lightning Warning)</option>
              </select>

              <button
                onClick={handleSendEmergencyAlert}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                  alertSent 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20'
                }`}
              >
                {alertSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Broadcast Dispatched!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch CAP Red Alert</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* COMPREHENSIVE GAP ANALYSIS & ARCHITECTURAL COMPARISON + THE DATA MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-monsoon-900 border border-monsoon-700 rounded-3xl p-5 sm:p-8 max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl space-y-6">
            {/* Modal Title Bar */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-monsoon-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  {comparisonActiveTab === 'data' ? <Database className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    Comprehensive Gap Analysis & Architectural Comparison
                  </h3>
                  <p className="text-xs text-monsoon-400">
                    Ministry of Earth Sciences (MoES) — Architectural Benchmarks & Ingested Persona Telemetry
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="text-monsoon-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded-xl bg-monsoon-800 hover:bg-monsoon-700 border border-monsoon-700 transition-colors"
              >
                Close [ESC]
              </button>
            </div>

            {/* REQUIRED NAVIGATION: "The Data" vs "Gap Analysis & Architecture" */}
            <div className="flex items-center gap-2 bg-monsoon-950 p-1.5 rounded-2xl border border-monsoon-800">
              {/* NAVIGATION TAB 1: THE DATA */}
              <button
                onClick={() => setComparisonActiveTab('data')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  comparisonActiveTab === 'data'
                    ? 'bg-amber-500 text-monsoon-950 shadow-lg font-black'
                    : 'text-monsoon-400 hover:text-white'
                }`}
              >
                <Database className="w-4 h-4" />
                <span>{lang === 'hi' ? 'द डेटा (The Data — वास्तविक पर्सोना प्रविष्टियाँ)' : 'The Data (Actual Persona Entries)'}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  comparisonActiveTab === 'data' ? 'bg-monsoon-900 text-amber-300 font-bold' : 'bg-monsoon-800 text-monsoon-400'
                }`}>
                  LIVE TELEMETRY
                </span>
              </button>

              {/* NAVIGATION TAB 2: GAP ANALYSIS & ARCHITECTURAL COMPARISON */}
              <button
                onClick={() => setComparisonActiveTab('comparison')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  comparisonActiveTab === 'comparison'
                    ? 'bg-sky-600 text-white shadow-lg font-black'
                    : 'text-monsoon-400 hover:text-white'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>{lang === 'hi' ? 'वास्तुकला तुलना व गैप विश्लेषण' : 'Architectural Comparison & Gap Matrix'}</span>
              </button>
            </div>

            {/* NAVIGATION CONTENT 1: THE DATA (ACTUAL PERSONA ENTRIES) */}
            {comparisonActiveTab === 'data' && (
              <PersonaDataViewer lang={lang} />
            )}

            {/* NAVIGATION CONTENT 2: ARCHITECTURAL COMPARISON & GAP ANALYSIS */}
            {comparisonActiveTab === 'comparison' && (
              <div className="space-y-6 text-xs animate-fadeIn">
                <div className="bg-sky-950/30 border border-sky-800/40 rounded-2xl p-4 text-sky-200">
                  <h4 className="font-bold text-sm text-white mb-1">
                    Problem Statement SIH26076: The Architectural Disconnect
                  </h4>
                  <p className="leading-relaxed">
                    Existing weather apps in India (IMD Mausam, Meghdoot, Damini, AccuWeather, Apple Weather) suffer from severe fragmentation, static non-personalized UIs, or lack of integration with national economic supply chains. Below is how our <strong>MausamSeva (SIH26076)</strong> model provides an end-to-end generational leap:
                  </p>
                </div>

                {/* 3-Way Comparative Benchmark Table */}
                <div className="overflow-x-auto rounded-2xl border border-monsoon-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-monsoon-950 text-monsoon-400 uppercase font-semibold text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3">Capability / Dimension</th>
                        <th className="p-3">Current IMD Mausam</th>
                        <th className="p-3">Private Apps (AccuWeather / Apple)</th>
                        <th className="p-3 text-emerald-400 bg-emerald-950/20">Our Model (MausamSeva 2.0)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-monsoon-800 bg-monsoon-900/60">
                      <tr>
                        <td className="p-3 font-bold text-white">Dynamic 8-Persona Adaptation</td>
                        <td className="p-3 text-rose-400">❌ Static one-size-fits-all</td>
                        <td className="p-3 text-rose-400">❌ Generic weather tiles</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ Yes (8 age-inclusive profiles 10 to 80+)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Consolidated Safety (Damini + Meghdoot)</td>
                        <td className="p-3 text-amber-400">⚠️ Fragmented across 3 apps</td>
                        <td className="p-3 text-rose-400">❌ No Indian crop bulletins</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ Unified in single light portal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">MoES Inter-Ministerial Forecaster</td>
                        <td className="p-3 text-rose-400">❌ None (Only broadcast out)</td>
                        <td className="p-3 text-rose-400">❌ Commercial ad monetization</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ Direct FCI yield & Power Grid forecasting</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Two-Way Citizen Ground-Truth Tuning</td>
                        <td className="p-3 text-rose-400">❌ No feedback channel</td>
                        <td className="p-3 text-rose-400">❌ Proprietary / No MoES sharing</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ 1-Tap ground validation for Doppler radars</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Vernacular Speech Assistant</td>
                        <td className="p-3 text-rose-400">❌ Text only</td>
                        <td className="p-3 text-amber-400">⚠️ English / Basic</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ Native Hindi & Regional Speech Synthesis</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">Accessibility for Ages 10–80+</td>
                        <td className="p-3 text-rose-400">❌ Small fixed fonts</td>
                        <td className="p-3 text-amber-400">⚠️ OS-dependent</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ 3-Stage Font Scaling + High Contrast</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-white">5-Color Threat Broadcast System</td>
                        <td className="p-3 text-amber-400">⚠️ 4-colors only (Green/Yellow/Orange/Red)</td>
                        <td className="p-3 text-rose-400">❌ Inconsistent generic banners</td>
                        <td className="p-3 text-emerald-400 font-bold bg-emerald-950/20">✅ 5 Tiers (+ Purple Worst Mausam Catastrophe)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 4 Architectural Pillars Callout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-monsoon-950 border border-monsoon-800 rounded-2xl p-4">
                    <h5 className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" />
                      <span>1. Supply Chain & Power Coupling</span>
                    </h5>
                    <p className="text-monsoon-400 text-[11px] leading-relaxed">
                      Citizen queries for AC cooling degree days and irrigation schedules are translated into forward MW dispatch schedules for Regional Load Despatch Centres (RLDCs) and FCI procurement buffers.
                    </p>
                  </div>

                  <div className="bg-monsoon-950 border border-monsoon-800 rounded-2xl p-4">
                    <h5 className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>2. DPDP Act 2023 Compliance</span>
                    </h5>
                    <p className="text-monsoon-400 text-[11px] leading-relaxed">
                      All citizen persona queries are hashed to 500-meter spatial centroids with zero personally identifiable information (zero PII storage), meeting highest national data governance standards.
                    </p>
                  </div>
                </div>

                {/* Switch to Data button */}
                <div className="p-4 bg-monsoon-950 border border-monsoon-800 rounded-2xl flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white">Want to see the actual ingested persona telemetry?</h5>
                    <p className="text-monsoon-400 text-[11px]">Inspect real-time citizen queries, sensor readings, and ministerial triggers.</p>
                  </div>
                  <button
                    onClick={() => setComparisonActiveTab('data')}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-monsoon-950 font-black text-xs transition-colors"
                  >
                    <Database className="w-4 h-4" />
                    <span>Switch to "The Data" Tab →</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
