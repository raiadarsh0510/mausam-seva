// src/components/RegionalHeritageWatermark.jsx
import React from 'react';
import { REGIONAL_HERITAGE_DATA } from '../data/regionalHeritageData';

/**
 * RegionalHeritageWatermark
 * Renders an ethereal, ultra-light background layer in the Citizen Dashboard
 * featuring stylized architectural monuments and traditional Indian motifs
 * (Warli, Kolam, Alpana, Jali, Paisley, etc.) customized per selected region.
 */
export function RegionalHeritageWatermark({ cityId = 'delhi' }) {
  const heritage = REGIONAL_HERITAGE_DATA[cityId] || REGIONAL_HERITAGE_DATA['delhi'];

  // Monument SVGs based on region
  const renderMonumentSvg = () => {
    switch (heritage.monumentSvgType) {
      case 'india_gate':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Base platform */}
            <path d="M40 330 H360 V340 H40 Z" strokeWidth="3" />
            <path d="M60 320 H340 V330 H60 Z" strokeWidth="2.5" />
            <path d="M80 305 H320 V320 H80 Z" strokeWidth="2" />
            {/* Main Pylons */}
            <path d="M90 305 V110 H145 V305" strokeWidth="2.5" />
            <path d="M255 305 V110 H310 V305" strokeWidth="2.5" />
            {/* Center Arch */}
            <path d="M145 305 V170 C145 125, 255 125, 255 170 V305" strokeWidth="3" />
            <path d="M158 305 V175 C158 140, 242 140, 242 175 V305" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Top Attic & Cornice */}
            <path d="M75 110 H325 V90 H75 Z" strokeWidth="2.5" />
            <path d="M95 90 H305 V65 H95 Z" strokeWidth="2" />
            <path d="M120 65 H280 V45 H120 Z" strokeWidth="2" />
            {/* Dome canopy crown */}
            <path d="M165 45 C165 20, 235 20, 235 45 Z" strokeWidth="2" />
            <circle cx="200" cy="20" r="3" fill="currentColor" />
            {/* Inscriptions and architectural moldings */}
            <line x1="100" y1="78" x2="300" y2="78" strokeWidth="1.5" />
            <line x1="110" y1="125" x2="130" y2="125" strokeWidth="1.5" />
            <line x1="270" y1="125" x2="290" y2="125" strokeWidth="1.5" />
          </svg>
        );

      case 'gateway_india':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Steps plinth */}
            <path d="M30 335 H370 V345 H30 Z" strokeWidth="3" />
            <path d="M50 325 H350 V335 H50 Z" strokeWidth="2.5" />
            {/* Outer Minarets */}
            <path d="M55 325 V90 H95 V325" strokeWidth="2.5" />
            <path d="M305 325 V90 H345 V325" strokeWidth="2.5" />
            {/* Minaret Domes */}
            <path d="M55 90 C55 60, 95 60, 95 90 Z" strokeWidth="2" />
            <path d="M305 90 C305 60, 345 60, 345 90 Z" strokeWidth="2" />
            {/* Center Massive Arch */}
            <path d="M125 325 V160 C125 95, 275 95, 275 160 V325" strokeWidth="3" />
            <path d="M140 325 V170 C140 115, 260 115, 260 170 V325" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Side subsidiary arches */}
            <path d="M95 325 V210 C95 190, 125 190, 125 210 V325" strokeWidth="2" />
            <path d="M275 325 V210 C275 190, 305 190, 305 210 V325" strokeWidth="2" />
            {/* Central Grand Dome */}
            <path d="M130 90 H270 V75 H130 Z" strokeWidth="2.5" />
            <path d="M145 75 C145 25, 255 25, 255 75 Z" strokeWidth="2.5" />
            <line x1="200" y1="25" x2="200" y2="10" strokeWidth="2" />
            {/* Arabian sea wave ripples at base */}
            <path d="M20 348 Q40 342, 60 348 T100 348 T140 348 T180 348 T220 348 T260 348 T300 348 T340 348 T380 348" strokeWidth="1.5" />
          </svg>
        );

      case 'rumi_darwaza':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Base */}
            <path d="M50 330 H350" strokeWidth="3" />
            {/* Flying semi-circular Awadhi portal arch */}
            <path d="M70 330 V220 C70 110, 150 50, 200 50 C250 50, 330 110, 330 220 V330" strokeWidth="3" />
            <path d="M95 330 V230 C95 140, 160 85, 200 85 C240 85, 305 140, 305 230 V330" strokeWidth="2" strokeDasharray="4 4" />
            {/* Crown Chhatri */}
            <path d="M180 50 C180 20, 220 20, 220 50 Z" strokeWidth="2" />
            <line x1="200" y1="20" x2="200" y2="5" strokeWidth="2" />
            {/* Cusped arches details */}
            <path d="M140 330 V260 C140 230, 260 230, 260 260 V330" strokeWidth="2.5" />
            {/* Jali vents */}
            <circle cx="200" cy="140" r="18" strokeWidth="1.5" />
            <circle cx="155" cy="180" r="10" strokeWidth="1.5" />
            <circle cx="245" cy="180" r="10" strokeWidth="1.5" />
          </svg>
        );

      case 'himalayan_church':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Mountain Range Backdrop */}
            <path d="M10 280 L110 160 L190 230 L290 130 L390 280" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M50 325 H350" strokeWidth="3" />
            {/* Clock Tower of Christ Church */}
            <path d="M140 325 V80 H200 V325" strokeWidth="2.5" />
            {/* Sloping Pyramidal Spire */}
            <path d="M135 80 L170 15 L205 80 Z" strokeWidth="2.5" />
            <line x1="170" y1="15" x2="170" y2="5" strokeWidth="2" />
            {/* Clock face */}
            <circle cx="170" cy="120" r="16" strokeWidth="2" />
            <line x1="170" y1="120" x2="170" y2="112" strokeWidth="1.5" />
            <line x1="170" y1="120" x2="176" y2="120" strokeWidth="1.5" />
            {/* Gothic Nave Hall */}
            <path d="M200 325 V170 L280 130 L310 180 V325" strokeWidth="2" />
            {/* Pine Trees */}
            <path d="M80 325 L95 240 L110 325 Z M70 280 L95 220 L120 280 Z" strokeWidth="1.5" />
            <path d="M330 325 L345 250 L360 325 Z M320 290 L345 230 L370 290 Z" strokeWidth="1.5" />
          </svg>
        );

      case 'howrah_bridge':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Hooghly Waterline */}
            <path d="M20 330 H380" strokeWidth="3" />
            <path d="M30 340 Q70 335, 110 340 T190 340 T270 340 T350 340" strokeWidth="1.5" />
            {/* Pylons of Cantilever Bridge */}
            <path d="M80 330 V110 L100 80 L120 110 V330" strokeWidth="2.5" />
            <path d="M280 330 V110 L300 80 L320 110 V330" strokeWidth="2.5" />
            {/* Bridge Deck Roadway */}
            <path d="M30 250 H370" strokeWidth="3" />
            {/* Cantilever Trusses & Cross Bracings */}
            <path d="M100 80 L200 160 L300 80" strokeWidth="2" />
            <path d="M100 80 L50 250 M120 110 L160 250 M280 110 L240 250 M300 80 L350 250" strokeWidth="1.5" />
            <line x1="160" y1="250" x2="200" y2="160" strokeWidth="1.5" />
            <line x1="240" y1="250" x2="200" y2="160" strokeWidth="1.5" />
            <line x1="200" y1="160" x2="200" y2="250" strokeWidth="2" />
          </svg>
        );

      case 'vidhana_soudha':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Grand Granite Plinth */}
            <path d="M40 330 H360 V340 H40 Z" strokeWidth="3" />
            <path d="M60 320 H340 V330 H60 Z" strokeWidth="2" />
            {/* Pillars of Central Porch */}
            <path d="M140 320 V170 H260 V320" strokeWidth="2.5" />
            <line x1="165" y1="320" x2="165" y2="170" strokeWidth="2" />
            <line x1="190" y1="320" x2="190" y2="170" strokeWidth="2" />
            <line x1="210" y1="320" x2="210" y2="170" strokeWidth="2" />
            <line x1="235" y1="320" x2="235" y2="170" strokeWidth="2" />
            {/* Central Grand Dome with Lion Capital */}
            <path d="M170 140 C170 90, 230 90, 230 140 Z" strokeWidth="2.5" />
            <path d="M150 170 H250 V140 H150 Z" strokeWidth="2" />
            <line x1="200" y1="90" x2="200" y2="65" strokeWidth="2" />
            <circle cx="200" cy="60" r="5" strokeWidth="1.5" />
            {/* Side Wings & Chhatris */}
            <path d="M60 320 V200 H140 V320" strokeWidth="2" />
            <path d="M260 320 V200 H340 V320" strokeWidth="2" />
            <path d="M85 200 C85 170, 115 170, 115 200 Z" strokeWidth="1.5" />
            <path d="M285 200 C285 170, 315 170, 315 200 Z" strokeWidth="1.5" />
          </svg>
        );

      case 'hawa_mahal':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Base Street Plinth */}
            <path d="M60 330 H340" strokeWidth="3" />
            {/* Pyramid 5-Tier Facade */}
            {/* Tier 1 (Base) */}
            <path d="M80 330 V260 H320 V330" strokeWidth="2.5" />
            {/* Tier 2 */}
            <path d="M105 260 V200 H295 V260" strokeWidth="2" />
            {/* Tier 3 */}
            <path d="M130 200 V140 H270 V200" strokeWidth="2" />
            {/* Tier 4 */}
            <path d="M155 140 V90 H245 V140" strokeWidth="2" />
            {/* Tier 5 (Crown) */}
            <path d="M180 90 V50 H220 V90" strokeWidth="2" />
            <path d="M185 50 C185 30, 215 30, 215 50 Z" strokeWidth="2" />
            {/* Honeycomb Jharokhas */}
            {/* Casements Tier 1 */}
            <path d="M110 310 C110 290, 135 290, 135 310 Z M155 310 C155 290, 180 290, 180 310 Z M220 310 C220 290, 245 290, 245 310 Z M265 310 C265 290, 290 290, 290 310 Z" strokeWidth="1.5" />
            {/* Casements Tier 2 */}
            <path d="M135 240 C135 220, 160 220, 160 240 Z M185 240 C185 220, 215 220, 215 240 Z M240 240 C240 220, 265 220, 265 240 Z" strokeWidth="1.5" />
            {/* Casements Tier 3 */}
            <path d="M160 180 C160 160, 185 160, 185 180 Z M215 180 C215 160, 240 160, 240 180 Z" strokeWidth="1.5" />
            {/* Casement Tier 4 */}
            <path d="M190 125 C190 110, 210 110, 210 125 Z" strokeWidth="1.5" />
          </svg>
        );

      case 'shore_temple':
        return (
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Coromandel Coast Waterline */}
            <path d="M30 330 H370" strokeWidth="3" />
            <path d="M40 340 Q90 332, 140 340 T240 340 T340 340" strokeWidth="1.5" />
            {/* Main Vimana (Tower) */}
            <path d="M120 330 H230 L210 240 L195 170 L185 110 L175 60 L165 110 L155 170 L140 240 Z" strokeWidth="2.5" />
            {/* Kalasa Crown */}
            <circle cx="175" cy="50" r="8" strokeWidth="2" />
            <line x1="175" y1="42" x2="175" y2="30" strokeWidth="2" />
            {/* Subsidiary Vimana */}
            <path d="M230 330 H300 L285 270 L275 210 L265 160 L255 210 L245 270 Z" strokeWidth="2" />
            <circle cx="265" cy="150" r="6" strokeWidth="1.5" />
            {/* Mandapa base & stone nandi sculptures */}
            <path d="M70 330 H120 V280 H70 Z" strokeWidth="2" />
            <circle cx="95" cy="270" r="8" strokeWidth="1.5" />
            <line x1="60" y1="330" x2="60" y2="310" strokeWidth="2" />
            <line x1="330" y1="330" x2="330" y2="310" strokeWidth="2" />
          </svg>
        );

      default:
        return null;
    }
  };

  // Traditional Motif Borders
  const renderCulturalPatternBorder = () => {
    switch (heritage.patternType) {
      case 'warli_maritime':
        return (
          <div className="flex justify-around items-center opacity-30 text-sky-900 py-1 border-b border-sky-200/40">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="text-xs font-mono select-none">▲●▼ ⚲ ♒</span>
            ))}
          </div>
        );
      case 'kolam_geometric':
        return (
          <div className="flex justify-around items-center opacity-30 text-indigo-900 py-1 border-b border-indigo-200/40">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono select-none">❖ ✦ ◈ ✦ ❖</span>
            ))}
          </div>
        );
      case 'alpana_terracotta':
        return (
          <div className="flex justify-around items-center opacity-30 text-rose-900 py-1 border-b border-rose-200/40">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono select-none">❀ ꕤ ❁ ꕤ ❀</span>
            ))}
          </div>
        );
      case 'jali_lotus':
      case 'chikankari_paisley':
      default:
        return (
          <div className="flex justify-around items-center opacity-25 text-amber-900 py-1 border-b border-amber-200/40">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono select-none">❧ ❖ ❂ ❖ ❧</span>
            ))}
          </div>
        );
    }
  };

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-all duration-700"
      aria-hidden="true"
    >
      {/* Light Cultural Border Ribbon at top */}
      <div className="absolute top-16 left-0 right-0 z-0">
        {renderCulturalPatternBorder()}
      </div>

      {/* Primary Light Monument Silhouette Watermark (Right-Bottom) */}
      <div 
        className="absolute -right-12 bottom-16 sm:bottom-24 w-[340px] sm:w-[500px] md:w-[620px] lg:w-[720px] h-[300px] sm:h-[450px] md:h-[550px] opacity-[0.05] sm:opacity-[0.07] text-monsoon-900 transition-transform duration-1000 transform hover:scale-105"
        style={{ color: heritage.accentColor }}
      >
        {renderMonumentSvg()}
      </div>

      {/* Secondary Mirrored Soft Motif (Left-Top) */}
      <div 
        className="absolute -left-20 top-28 w-[280px] sm:w-[420px] h-[260px] sm:h-[380px] opacity-[0.03] sm:opacity-[0.04] text-monsoon-800"
        style={{ color: heritage.accentColor }}
      >
        {renderMonumentSvg()}
      </div>

      {/* Subtle regional folklore watermark stamp */}
      <div className="absolute left-6 bottom-6 opacity-[0.08] sm:opacity-[0.12] hidden md:block max-w-sm">
        <p className="text-[11px] font-mono tracking-widest uppercase font-bold text-monsoon-700">
          🏛️ {heritage.region} • {heritage.monumentName}
        </p>
        <p className="text-[10px] font-serif italic text-monsoon-600 mt-0.5">
          {heritage.traditionalFolkProverb}
        </p>
      </div>
    </div>
  );
}
