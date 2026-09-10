import React from 'react';
import { 
  AlertTriangle, ShieldAlert, AlertOctagon, CheckCircle2, 
  Info, ExternalLink, PhoneCall, Radio, X 
} from 'lucide-react';
import { WEATHER_ALERT_LEVELS } from '../data/mockWeatherData';

export function WeatherNoticeBoard({ activeAlertLevel, lang, onClose }) {
  const currentAlert = WEATHER_ALERT_LEVELS[activeAlertLevel] || WEATHER_ALERT_LEVELS['yellow'];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-monsoon-200 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-monsoon-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-monsoon-900 tracking-tight">
              {lang === 'hi' ? 'मौसम चेतावनी एवं नोटिस बोर्ड' : 'Weather Danger Level & Notice Board'}
            </h3>
            <span className="text-[11px] text-monsoon-500">
              {lang === 'hi' ? 'MoES / IMD द्वारा प्रबंधित ५-रंग चेतावनी प्रणाली' : 'Managed by Ministry of Earth Sciences (MoES)'}
            </span>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-monsoon-400 hover:text-monsoon-800 hover:bg-monsoon-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Active Threat Level Spotlight Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border-2 mb-6 ${currentAlert.lightBg}`}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span 
              className="w-3.5 h-3.5 rounded-full animate-ping"
              style={{ backgroundColor: currentAlert.dotColor }}
            ></span>
            <span className="text-xs font-black uppercase tracking-wider">
              {lang === 'hi' ? `वर्तमान जिला स्तर: ${currentAlert.nameHi}` : `Current Level: ${currentAlert.name}`}
            </span>
          </div>
          <span 
            className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase text-white"
            style={{ backgroundColor: currentAlert.dotColor }}
          >
            {lang === 'hi' ? currentAlert.badgeTextHi : currentAlert.badgeText}
          </span>
        </div>

        <h4 className="text-base sm:text-lg font-extrabold text-monsoon-950 mb-1.5">
          {lang === 'hi' ? currentAlert.descriptionHi : currentAlert.description}
        </h4>

        <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-bold">
          <span>
            {lang === 'hi' ? 'आवश्यक कार्रवाई: ' : 'Official Action Directive: '}
            <span className="font-normal">{lang === 'hi' ? currentAlert.actionHi : currentAlert.action}</span>
          </span>
        </div>
      </div>

      {/* All 5 Official Color Codes Explanation Column */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-monsoon-500 mb-3">
          {lang === 'hi' ? 'आईएमडी के ५ मौसम रंग कोड का अर्थ' : 'Understanding the 5 IMD Weather Color Codes'}
        </h4>

        <div className="space-y-2.5">
          {Object.values(WEATHER_ALERT_LEVELS).map((lvl) => {
            const isCurrent = lvl.id === activeAlertLevel;
            return (
              <div
                key={lvl.id}
                className={`p-3 rounded-xl border text-xs transition-all ${
                  isCurrent
                    ? 'border-monsoon-900 bg-monsoon-50 ring-2 ring-monsoon-400 font-medium'
                    : 'border-monsoon-200 bg-white hover:bg-monsoon-50/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full shrink-0" 
                      style={{ backgroundColor: lvl.dotColor }}
                    ></span>
                    <span className="font-bold text-monsoon-900">
                      {lang === 'hi' ? lvl.nameHi : lvl.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold text-monsoon-500">
                    {lvl.severity}
                  </span>
                </div>
                <p className="text-[11px] text-monsoon-600 leading-relaxed pl-5">
                  {lang === 'hi' ? lvl.descriptionHi : lvl.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Emergency Contacts in Notice */}
      <div className="mt-6 pt-4 border-t border-monsoon-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-bold text-monsoon-700 flex items-center gap-1.5">
          <PhoneCall className="w-3.5 h-3.5 text-solar-500" />
          <span>{lang === 'hi' ? 'आपदा प्रबंधन हेल्पलाइन: १०७८' : 'Disaster Helpline: 1078'}</span>
        </span>
        <span className="text-[11px] text-monsoon-500">
          Source: Ministry of Earth Sciences (MoES)
        </span>
      </div>
    </div>
  );
}
