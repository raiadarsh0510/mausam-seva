// src/components/RegionalHeritageCard.jsx
import React, { useState } from 'react';
import { Landmark, Compass, Wind, Sparkles, BookOpen, ChevronRight, Info, Music, ShieldCheck } from 'lucide-react';
import { REGIONAL_HERITAGE_DATA } from '../data/regionalHeritageData';

export function RegionalHeritageCard({ cityId = 'delhi', lang = 'hi' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const heritage = REGIONAL_HERITAGE_DATA[cityId] || REGIONAL_HERITAGE_DATA['delhi'];

  return (
    <section className="max-w-7xl mx-auto px-4 py-3 animate-fadeIn">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-sky-50/70 border border-amber-200/80 shadow-sm p-5 sm:p-6 transition-all hover:border-amber-300">
        {/* Soft decorative background tint */}
        <div 
          className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full blur-2xl opacity-15 pointer-events-none"
          style={{ backgroundColor: heritage.accentColor }}
        ></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-amber-100">
          <div className="flex items-start gap-3.5">
            <div 
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0"
              style={{ backgroundColor: heritage.accentColor }}
            >
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {lang === 'hi' ? 'क्षेत्रीय धरोहर व मौसम संस्कृति' : 'Regional Heritage & Weather Culture'}
                </span>
                <span className="text-xs font-semibold text-monsoon-500 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-sky-600" />
                  {heritage.region}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-monsoon-900 mt-0.5">
                {lang === 'hi' ? heritage.monumentNameHi : heritage.monumentName}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold transition-all shadow-2xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {isExpanded 
                ? (lang === 'hi' ? 'संक्षिप्त विवरण' : 'Show Less') 
                : (lang === 'hi' ? 'ऐतिहासिक मौसम ज्ञान' : 'Explore Climate Lore')}
            </span>
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Core Heritage & Weather Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4 items-center">
          {/* Tagline & Architectural Climate Adaptation */}
          <div className="md:col-span-7 space-y-2.5">
            <p className="text-xs sm:text-sm font-semibold text-monsoon-700 leading-relaxed">
              <span className="font-bold text-monsoon-900">
                {lang === 'hi' ? 'वास्तुकला एवं जलवायु अनुकूलन: ' : 'Architectural Climate Adaptation: '}
              </span>
              {lang === 'hi' ? heritage.architecturalAdaptationHi : heritage.architecturalAdaptation}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-monsoon-600 bg-white/80 p-2.5 rounded-xl border border-amber-100">
              <Wind className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {lang === 'hi' ? heritage.culturalWeatherLoreHi : heritage.culturalWeatherLore}
              </span>
            </div>
          </div>

          {/* Traditional Vernacular Proverb / Weather Lore Box */}
          <div className="md:col-span-5 bg-gradient-to-br from-amber-100/60 to-amber-50 rounded-2xl p-3.5 border border-amber-200/90 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-1">
              <Music className="w-3.5 h-3.5 text-amber-700" />
              <span>{lang === 'hi' ? 'पारंपरिक लोक मौसम कहावत' : 'Traditional Vernacular Weather Wisdom'}</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-amber-950 font-serif italic leading-snug">
              {heritage.traditionalFolkProverb}
            </p>
            <p className="text-[11px] text-amber-800/80 font-medium mt-1">
              {heritage.traditionalFolkProverbEn}
            </p>
          </div>
        </div>

        {/* Expandable In-Depth Cultural & Synoptic Heritage Section */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
            <div className="bg-white p-3 rounded-xl border border-monsoon-200/80">
              <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {lang === 'hi' ? 'ऐतिहासिक वेधशालाएं' : 'Ancient Observatories'}
              </span>
              <p className="text-xs text-monsoon-600 leading-normal">
                {lang === 'hi'
                  ? 'राजा सवाई जयसिंह के जंतर-मंतर व प्राचीन वेधशालाओं द्वारा सदियों से सूर्य-स्थिति, नक्षत्र व वर्षा चक्र का वैज्ञानिक मापन किया जाता रहा है।'
                  : 'Centuries of celestial solar tracking, monsoon wind calendars, and traditional rain gauges (Vrishthi-man) rooted in Indian science.'}
              </p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-monsoon-200/80">
              <span className="text-[11px] font-bold text-sky-800 flex items-center gap-1 mb-1">
                <Compass className="w-3.5 h-3.5 text-sky-600" />
                {lang === 'hi' ? 'पारंपरिक जल संचयन' : 'Heritage Water Harvesting'}
              </span>
              <p className="text-xs text-monsoon-600 leading-normal">
                {lang === 'hi'
                  ? 'बावड़ी, जोहड़, केरे, टैंक व आहर-पाइन जैसी ऐतिहासिक जल प्रणालियां बाढ़ नियंत्रण और भूजल रिचार्ज का प्राकृतिक कवच हैं।'
                  : 'Historic Baolis, Johads, Kere cascades, and stepwells built as natural buffers against monsoon flash floods and seasonal droughts.'}
              </p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-monsoon-200/80">
              <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {lang === 'hi' ? 'मौसम आधारित पर्व' : 'Seasonal Festivities'}
              </span>
              <p className="text-xs text-monsoon-600 leading-normal">
                {lang === 'hi'
                  ? 'तीज, पोंगल, बिहू, बैसाखी, नारली पूर्णिमा व छठ महापर्व सीधे ऋतु-परिवर्तन और प्रकृति की कृतज्ञता से जुड़े हैं।'
                  : 'Festivals like Teej, Pongal, Bihu, Baisakhi, and Narali Purnima align with monsoon arrival and agrarian crop transitions.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
