// src/components/RegionalHeritageWatermark.jsx
import React from 'react';
import { REGIONAL_HERITAGE_DATA } from '../data/regionalHeritageData';

/**
 * RegionalHeritageWatermark
 * Renders a rich, full-color architectural heritage mural watermark in the Citizen Dashboard
 * featuring vibrant regional monuments and cultural motifs (India Gate, Gateway of India,
 * Rumi Darwaza, Christ Church, Howrah Bridge, Vidhana Soudha, Hawa Mahal, Shore Temple).
 */
export function RegionalHeritageWatermark({ cityId = 'delhi' }) {
  const heritage = REGIONAL_HERITAGE_DATA[cityId] || REGIONAL_HERITAGE_DATA['delhi'];

  // Vibrant Full-Color Monument SVGs based on selected region
  const renderMonumentSvg = () => {
    switch (heritage.monumentSvgType) {
      case 'india_gate':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="delhiStone" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="50%" stopColor="#B91C1C" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
              <linearGradient id="delhiGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="delhiSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Plinth Base Steps */}
            <rect x="30" y="330" width="340" height="15" rx="3" fill="#78350F" />
            <rect x="50" y="318" width="300" height="14" rx="2" fill="#9A3412" />
            <rect x="75" y="305" width="250" height="15" fill="#B45309" />
            {/* Main Pylons */}
            <rect x="85" y="110" width="65" height="195" fill="url(#delhiStone)" />
            <rect x="250" y="110" width="65" height="195" fill="url(#delhiStone)" />
            {/* Arch Aperture Backing Glow */}
            <path d="M150 305 V175 C150 120, 250 120, 250 175 V305 Z" fill="url(#delhiSky)" />
            {/* Center Arch Border */}
            <path d="M148 305 V175 C148 118, 252 118, 252 175 V305 H240 V175 C240 130, 160 130, 160 175 V305 Z" fill="#FBBF24" />
            {/* Cornice Entablature */}
            <rect x="70" y="90" width="260" height="22" rx="3" fill="#B91C1C" stroke="#FEF08A" strokeWidth="1" />
            <rect x="90" y="68" width="220" height="24" rx="2" fill="#DC2626" />
            <rect x="115" y="48" width="170" height="22" rx="2" fill="#EA580C" />
            {/* Crown Cenotaph Canopy */}
            <path d="M165 48 C165 18, 235 18, 235 48 Z" fill="url(#delhiGold)" stroke="#78350F" strokeWidth="1.5" />
            <circle cx="200" cy="18" r="4" fill="#FDE047" stroke="#B45309" strokeWidth="1" />
            {/* Gold Moldings */}
            <rect x="95" y="78" width="210" height="3" fill="#FDE047" />
            <rect x="100" y="120" width="35" height="4" rx="1" fill="#FDE047" />
            <rect x="265" y="120" width="35" height="4" rx="1" fill="#FDE047" />
            {/* Eternal Flame Amar Jawan Jyoti Base */}
            <path d="M190 305 L200 280 L210 305 Z" fill="#F59E0B" />
            <circle cx="200" cy="278" r="5" fill="#EF4444" />
          </svg>
        );

      case 'gateway_india':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="mumbaiBasalt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="40%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="mumbaiSea" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="mumbaiGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            {/* Arabian Sea Waves */}
            <path d="M10 345 Q40 338, 70 345 T130 345 T190 345 T250 345 T310 345 T370 345 V360 H10 Z" fill="url(#mumbaiSea)" />
            <path d="M25 352 Q55 345, 85 352 T145 352 T205 352 T265 352 T325 352 T385 352 V360 H25 Z" fill="#0369A1" opacity="0.7" />
            {/* Plinth */}
            <rect x="25" y="325" width="350" height="12" rx="2" fill="#78350F" />
            <rect x="45" y="315" width="310" height="12" fill="#92400E" />
            {/* Outer Turrets */}
            <rect x="50" y="90" width="45" height="225" fill="url(#mumbaiBasalt)" />
            <rect x="305" y="90" width="45" height="225" fill="url(#mumbaiBasalt)" />
            {/* Turret Domes */}
            <path d="M50 90 C50 55, 95 55, 95 90 Z" fill="url(#mumbaiGold)" stroke="#78350F" />
            <path d="M305 90 C305 55, 350 55, 350 90 Z" fill="url(#mumbaiGold)" stroke="#78350F" />
            <circle cx="72.5" cy="52" r="3" fill="#FEF08A" />
            <circle cx="327.5" cy="52" r="3" fill="#FEF08A" />
            {/* Center Mass Arch Structure */}
            <rect x="95" y="90" width="210" height="225" fill="url(#mumbaiBasalt)" />
            {/* Grand Central Arch Cutout */}
            <path d="M130 315 V165 C130 90, 270 90, 270 165 V315 Z" fill="#FFFBEB" />
            <path d="M142 315 V175 C142 110, 258 110, 258 175 V315 Z" fill="#BAE6FD" opacity="0.6" />
            {/* Center Dome on Top */}
            <rect x="125" y="75" width="150" height="18" rx="3" fill="#B45309" />
            <path d="M140 75 C140 20, 260 20, 260 75 Z" fill="url(#mumbaiGold)" stroke="#78350F" strokeWidth="1.5" />
            <line x1="200" y1="20" x2="200" y2="8" stroke="#FDE047" strokeWidth="3" />
            <circle cx="200" cy="6" r="3" fill="#FEF08A" />
            {/* Side Small Arches */}
            <path d="M100 315 V215 C100 195, 125 195, 125 215 V315 Z" fill="#FEF3C7" />
            <path d="M275 315 V215 C275 195, 300 195, 300 215 V315 Z" fill="#FEF3C7" />
          </svg>
        );

      case 'rumi_darwaza':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="lucknowTerracotta" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="50%" stopColor="#C2410C" />
                <stop offset="100%" stopColor="#9A3412" />
              </linearGradient>
              <linearGradient id="lucknowGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <radialGradient id="lucknowGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FED7AA" />
              </radialGradient>
            </defs>
            {/* Base Steps */}
            <rect x="40" y="330" width="320" height="15" fill="#7C2D12" rx="2" />
            {/* Awadhi Grand Portal */}
            <path d="M65 330 V220 C65 100, 150 40, 200 40 C250 40, 335 100, 335 220 V330 Z" fill="url(#lucknowTerracotta)" stroke="#FBBF24" strokeWidth="2" />
            {/* Inner Portal Recess */}
            <path d="M90 330 V230 C90 135, 155 80, 200 80 C245 80, 310 135, 310 230 V330 Z" fill="url(#lucknowGlow)" />
            {/* Inner Cusped Doorway */}
            <path d="M135 330 V260 C135 225, 265 225, 265 260 V330 Z" fill="#9A3412" stroke="#FEF08A" strokeWidth="2" />
            {/* Crown Chhatri Lantern */}
            <path d="M175 40 C175 10, 225 10, 225 40 Z" fill="url(#lucknowGold)" stroke="#7C2D12" strokeWidth="1.5" />
            <line x1="200" y1="10" x2="200" y2="2" stroke="#FDE047" strokeWidth="2" />
            <circle cx="200" cy="2" r="3" fill="#FEF08A" />
            {/* Rosette & Jali Windows */}
            <circle cx="200" cy="140" r="22" fill="#7C3AED" stroke="#FDE047" strokeWidth="2" />
            <circle cx="200" cy="140" r="14" fill="#FEF08A" />
            <circle cx="150" cy="180" r="12" fill="#C2410C" stroke="#FDE047" strokeWidth="1.5" />
            <circle cx="250" cy="180" r="12" fill="#C2410C" stroke="#FDE047" strokeWidth="1.5" />
            {/* Ornamental Turret Finials */}
            <circle cx="65" cy="220" r="5" fill="#FDE047" />
            <circle cx="335" cy="220" r="5" fill="#FDE047" />
          </svg>
        );

      case 'himalayan_church':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="shimlaSnow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="shimlaPine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#059669" />
                <stop offset="100%" stopColor="#064E3B" />
              </linearGradient>
              <linearGradient id="shimlaStone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
            </defs>
            {/* Snow Peak Mountains in Background */}
            <polygon points="10,290 100,130 180,240 280,100 390,290" fill="url(#shimlaSnow)" opacity="0.85" />
            {/* Snow Caps */}
            <polygon points="100,130 80,165 100,155 120,165" fill="#FFFFFF" />
            <polygon points="280,100 260,135 280,125 300,135" fill="#FFFFFF" />
            {/* Mountain Ground */}
            <rect x="30" y="325" width="340" height="20" rx="3" fill="#064E3B" />
            {/* Pine Trees Left */}
            <polygon points="65,325 80,230 95,325" fill="url(#shimlaPine)" />
            <polygon points="50,290 80,200 110,290" fill="url(#shimlaPine)" />
            {/* Pine Trees Right */}
            <polygon points="325,325 340,240 355,325" fill="url(#shimlaPine)" />
            <polygon points="310,295 340,210 370,295" fill="url(#shimlaPine)" />
            {/* Church Gothic Nave Hall */}
            <polygon points="190,325 190,170 270,120 310,175 310,325" fill="url(#shimlaStone)" stroke="#78350F" strokeWidth="1.5" />
            {/* Church Tower */}
            <rect x="135" y="80" width="60" height="245" fill="url(#shimlaStone)" stroke="#78350F" strokeWidth="2" />
            {/* Steeple Spire */}
            <polygon points="130,80 165,15 200,80" fill="#047857" stroke="#064E3B" strokeWidth="2" />
            <line x1="165" y1="15" x2="165" y2="4" stroke="#FDE047" strokeWidth="2.5" />
            <circle cx="165" cy="3" r="3" fill="#FEF08A" />
            {/* Golden Glowing Clock Face */}
            <circle cx="165" cy="125" r="16" fill="#FEF08A" stroke="#B45309" strokeWidth="2" />
            <line x1="165" y1="125" x2="165" y2="114" stroke="#78350F" strokeWidth="2" />
            <line x1="165" y1="125" x2="173" y2="125" stroke="#78350F" strokeWidth="2" />
          </svg>
        );

      case 'howrah_bridge':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="kolkataSteel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="kolkataRiver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
            </defs>
            {/* Hooghly River Waters */}
            <rect x="10" y="325" width="380" height="30" fill="url(#kolkataRiver)" rx="3" />
            <path d="M20 340 Q70 332, 120 340 T220 340 T320 340 T380 340" stroke="#67E8F9" strokeWidth="2" fill="none" />
            <path d="M40 348 Q90 342, 140 348 T240 348 T340 348" stroke="#BAE6FD" strokeWidth="1.5" fill="none" opacity="0.8" />
            {/* Riverboat on Hooghly */}
            <path d="M170 335 L190 335 L200 342 L160 342 Z" fill="#D97706" />
            <polygon points="178,335 178,322 188,335" fill="#EF4444" />
            {/* Left Pylon Tower */}
            <polygon points="75,325 95,75 115,75 135,325" fill="url(#kolkataSteel)" stroke="#93C5FD" strokeWidth="1.5" />
            {/* Right Pylon Tower */}
            <polygon points="265,325 285,75 305,75 325,325" fill="url(#kolkataSteel)" stroke="#93C5FD" strokeWidth="1.5" />
            {/* Roadway Bridge Deck */}
            <rect x="20" y="245" width="360" height="12" rx="2" fill="#F59E0B" stroke="#78350F" strokeWidth="1.5" />
            <line x1="20" y1="251" x2="380" y2="251" stroke="#FFFFFF" strokeDasharray="6 4" strokeWidth="2" />
            {/* Cantilever Truss Network */}
            <line x1="105" y1="75" x2="200" y2="160" stroke="#1D4ED8" strokeWidth="3" />
            <line x1="295" y1="75" x2="200" y2="160" stroke="#1D4ED8" strokeWidth="3" />
            <line x1="200" y1="160" x2="200" y2="245" stroke="#2563EB" strokeWidth="3" />
            <line x1="105" y1="75" x2="40" y2="245" stroke="#3B82F6" strokeWidth="2" />
            <line x1="295" y1="75" x2="360" y2="245" stroke="#3B82F6" strokeWidth="2" />
            <line x1="105" y1="75" x2="160" y2="245" stroke="#60A5FA" strokeWidth="2" />
            <line x1="295" y1="75" x2="240" y2="245" stroke="#60A5FA" strokeWidth="2" />
          </svg>
        );

      case 'vidhana_soudha':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="blrGranite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="50%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#312E81" />
              </linearGradient>
              <linearGradient id="blrGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            {/* Plinth */}
            <rect x="30" y="325" width="340" height="15" rx="3" fill="#1E1B4B" />
            <rect x="50" y="315" width="300" height="12" fill="#312E81" />
            {/* Side Wings */}
            <rect x="50" y="195" width="85" height="120" fill="url(#blrGranite)" />
            <rect x="265" y="195" width="85" height="120" fill="url(#blrGranite)" />
            {/* Side Chhatri Domes */}
            <path d="M75 195 C75 165, 110 165, 110 195 Z" fill="url(#blrGold)" stroke="#312E81" />
            <path d="M290 195 C290 165, 325 165, 325 195 Z" fill="url(#blrGold)" stroke="#312E81" />
            {/* Central Portico Structure */}
            <rect x="135" y="165" width="130" height="150" fill="url(#blrGranite)" />
            {/* Grand Pillars */}
            <rect x="145" y="165" width="8" height="150" fill="#E0E7FF" />
            <rect x="175" y="165" width="8" height="150" fill="#E0E7FF" />
            <rect x="215" y="165" width="8" height="150" fill="#E0E7FF" />
            <rect x="245" y="165" width="8" height="150" fill="#E0E7FF" />
            {/* Central Grand Dome */}
            <rect x="145" y="145" width="110" height="20" rx="3" fill="#F59E0B" />
            <path d="M160 145 C160 75, 240 75, 240 145 Z" fill="url(#blrGold)" stroke="#312E81" strokeWidth="2" />
            {/* Golden Ashoka Lion Capital Crown */}
            <line x1="200" y1="75" x2="200" y2="52" stroke="#FDE047" strokeWidth="3" />
            <circle cx="200" cy="48" r="7" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />
          </svg>
        );

      case 'hawa_mahal':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="jaipurPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FB7185" />
                <stop offset="50%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#BE123C" />
              </linearGradient>
              <linearGradient id="jaipurGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            {/* Base Street Plinth */}
            <rect x="40" y="325" width="320" height="15" rx="3" fill="#881337" />
            {/* 5-Tier Honeycomb Pyramid Façade */}
            {/* Tier 1 */}
            <rect x="65" y="260" width="270" height="65" fill="url(#jaipurPink)" stroke="#881337" strokeWidth="1.5" />
            {/* Tier 2 */}
            <rect x="95" y="200" width="210" height="60" fill="url(#jaipurPink)" stroke="#881337" strokeWidth="1.5" />
            {/* Tier 3 */}
            <rect x="125" y="140" width="150" height="60" fill="url(#jaipurPink)" stroke="#881337" strokeWidth="1.5" />
            {/* Tier 4 */}
            <rect x="155" y="85" width="90" height="55" fill="url(#jaipurPink)" stroke="#881337" strokeWidth="1.5" />
            {/* Tier 5 (Crown) */}
            <rect x="175" y="45" width="50" height="40" fill="url(#jaipurPink)" stroke="#881337" strokeWidth="1.5" />
            <path d="M175 45 C175 22, 225 22, 225 45 Z" fill="url(#jaipurGold)" stroke="#881337" strokeWidth="1.5" />
            <circle cx="200" cy="20" r="3" fill="#FEF08A" />
            {/* Ornate Jharokha Casements with glowing white/gold lattice windows */}
            {/* Tier 1 Jharokhas */}
            <rect x="90" y="275" width="22" height="35" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="140" y="275" width="22" height="35" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="190" y="275" width="22" height="35" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="240" y="275" width="22" height="35" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="290" y="275" width="22" height="35" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            {/* Tier 2 Jharokhas */}
            <rect x="115" y="215" width="22" height="32" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="165" y="215" width="22" height="32" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="215" y="215" width="22" height="32" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="265" y="215" width="22" height="32" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            {/* Tier 3 Jharokhas */}
            <rect x="145" y="155" width="22" height="30" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="190" y="155" width="22" height="30" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="235" y="155" width="22" height="30" rx="11" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            {/* Tier 4 Jharokhas */}
            <rect x="170" y="100" width="20" height="26" rx="10" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="210" y="100" width="20" height="26" rx="10" fill="#FFF1F2" stroke="#BE123C" strokeWidth="1.5" />
          </svg>
        );

      case 'shore_temple':
        return (
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
            <defs>
              <linearGradient id="chennaiGranite" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="chennaiOcean" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0891B2" />
                <stop offset="50%" stopColor="#0284C7" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>
              <linearGradient id="chennaiGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            {/* Bay of Bengal Ocean Shoreline */}
            <path d="M10 335 Q60 325, 110 335 T210 335 T310 335 T390 335 V360 H10 Z" fill="url(#chennaiOcean)" />
            <path d="M25 344 Q75 338, 125 344 T225 344 T325 344 V360 H25 Z" fill="#0E7490" opacity="0.7" />
            {/* Beach Sands Base */}
            <rect x="30" y="320" width="340" height="15" rx="3" fill="#B45309" />
            {/* Main Vimana Pyramid Tower */}
            <polygon points="120,320 230,320 215,240 200,170 190,110 175,55 160,110 150,170 135,240" fill="url(#chennaiGranite)" stroke="#78350F" strokeWidth="2" />
            {/* Tier Horizontals */}
            <line x1="135" y1="240" x2="215" y2="240" stroke="#FDE047" strokeWidth="3" />
            <line x1="150" y1="170" x2="200" y2="170" stroke="#FDE047" strokeWidth="3" />
            <line x1="160" y1="110" x2="190" y2="110" stroke="#FDE047" strokeWidth="3" />
            {/* Kalasa Crown Finial */}
            <circle cx="175" cy="45" r="9" fill="url(#chennaiGold)" stroke="#78350F" strokeWidth="2" />
            <line x1="175" y1="36" x2="175" y2="24" stroke="#FDE047" strokeWidth="3" />
            <circle cx="175" cy="22" r="3" fill="#FEF08A" />
            {/* Subsidiary Vimana Tower */}
            <polygon points="230,320 300,320 285,260 275,200 265,150 255,200 245,260" fill="url(#chennaiGranite)" stroke="#78350F" strokeWidth="1.5" />
            <circle cx="265" cy="142" r="7" fill="url(#chennaiGold)" stroke="#78350F" strokeWidth="1.5" />
            {/* Nandi Stone Sculptures at Periphery */}
            <rect x="70" y="295" width="35" height="25" rx="4" fill="#92400E" />
            <circle cx="95" cy="290" r="7" fill="#F59E0B" />
            <circle cx="55" cy="310" r="5" fill="#F59E0B" />
            <circle cx="335" cy="310" r="5" fill="#F59E0B" />
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
          <div className="flex justify-around items-center opacity-85 text-sky-800 py-1.5 border-b border-sky-300/60 bg-sky-50/50 backdrop-blur-xs">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="text-xs font-mono font-bold select-none text-sky-700">▲●▼ ⚲ ♒ ⛵</span>
            ))}
          </div>
        );
      case 'kolam_geometric':
        return (
          <div className="flex justify-around items-center opacity-85 text-indigo-800 py-1.5 border-b border-indigo-300/60 bg-indigo-50/50 backdrop-blur-xs">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono font-bold select-none text-indigo-700">❖ ✦ ◈ ✦ ❖</span>
            ))}
          </div>
        );
      case 'alpana_terracotta':
        return (
          <div className="flex justify-around items-center opacity-85 text-rose-800 py-1.5 border-b border-rose-300/60 bg-rose-50/50 backdrop-blur-xs">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono font-bold select-none text-rose-700">❀ ꕤ ❁ ꕤ ❀</span>
            ))}
          </div>
        );
      case 'jali_lotus':
      case 'chikankari_paisley':
      default:
        return (
          <div className="flex justify-around items-center opacity-85 text-amber-900 py-1.5 border-b border-amber-300/60 bg-amber-50/50 backdrop-blur-xs">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono font-bold select-none text-amber-800">❧ ❖ ❂ ❖ ❧</span>
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

      {/* Primary Vibrant Full-Color Architectural Watermark (Right-Bottom) */}
      <div 
        className="absolute -right-8 bottom-12 sm:bottom-20 w-[360px] sm:w-[520px] md:w-[650px] lg:w-[760px] h-[320px] sm:h-[460px] md:h-[580px] opacity-[0.28] sm:opacity-[0.36] hover:opacity-[0.50] transition-opacity duration-700 filter drop-shadow-2xl"
      >
        {renderMonumentSvg()}
      </div>

      {/* Secondary Mirrored Soft Accent (Left-Top) */}
      <div 
        className="absolute -left-16 top-24 w-[280px] sm:w-[420px] h-[260px] sm:h-[380px] opacity-[0.16] sm:opacity-[0.22] transition-opacity duration-700 filter drop-shadow-lg"
      >
        {renderMonumentSvg()}
      </div>

      {/* Legible Regional Heritage Cultural Seal (Bottom-Left) */}
      <div className="absolute left-6 bottom-6 opacity-90 hidden md:block max-w-sm bg-white/85 backdrop-blur-md border border-amber-300/80 p-3 rounded-2xl shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          <p className="text-[11px] font-mono tracking-wider uppercase font-black text-amber-950">
            🏛️ {heritage.region} • {heritage.monumentName}
          </p>
        </div>
        <p className="text-[11px] font-serif italic text-monsoon-700 mt-1 font-semibold leading-snug">
          {heritage.traditionalFolkProverb}
        </p>
      </div>
    </div>
  );
}
