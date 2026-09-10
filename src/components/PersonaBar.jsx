import React from 'react';
import { 
  GraduationCap, Tractor, HeartPulse, Car, Flame, Anchor, Plane, CalendarDays, CheckCircle2 
} from 'lucide-react';
import { PERSONAS } from '../data/mockWeatherData';

const ICON_MAP = {
  GraduationCap,
  Tractor,
  HeartPulse,
  Car,
  Flame,
  Anchor,
  Plane,
  CalendarDays
};

export function PersonaBar({ activePersona, onSelectPersona, lang }) {
  return (
    <section className="bg-white border-b border-monsoon-200 py-3 px-4 shadow-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {lang === 'hi' ? '१. अपनी भूमिका / प्रोफ़ाइल चुनें' : '1. Select Your Persona / Profile'}
            </span>
            <span className="text-[11px] text-monsoon-500 hidden sm:inline">
              {lang === 'hi' 
                ? '(उम्र १० वर्ष से ८०+ तक सभी के लिए अनुकूलित)' 
                : '(Customized for ages 10 to 80+)'}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            {lang === 'hi' ? '८ गतिशील प्रोफाइल' : '8 Dynamic Profiles'}
          </span>
        </div>

        {/* Scrollable Horizontal Persona Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
          {PERSONAS.map((p) => {
            const Icon = ICON_MAP[p.icon] || GraduationCap;
            const isSelected = activePersona === p.id;

            return (
              <button
                key={p.id}
                onClick={() => onSelectPersona(p.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-150 ${
                  isSelected
                    ? 'bg-monsoon-900 text-white border-monsoon-900 shadow-md scale-102 ring-2 ring-sky-400'
                    : 'bg-monsoon-50/70 hover:bg-white text-monsoon-800 border-monsoon-200 hover:border-monsoon-300'
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-sky-500 text-white' : 'bg-white text-monsoon-700 shadow-xs'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold leading-tight">
                      {lang === 'hi' ? p.nameHi : p.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    )}
                  </div>
                  <span className={`text-[10px] font-medium block leading-none mt-0.5 ${
                    isSelected ? 'text-monsoon-300' : 'text-monsoon-500'
                  }`}>
                    {p.ageRange}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
