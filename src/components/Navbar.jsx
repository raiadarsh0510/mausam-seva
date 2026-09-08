import React from 'react';
import { 
  ShieldCheck, 
  ShoppingBag, 
  MapPin, 
  Layers, 
  Calculator, 
  Mic, 
  QrCode, 
  Globe, 
  TrendingUp,
  UserCheck,
  Sparkles,
  Building2
} from 'lucide-react';
import { translations } from '../data/i18n';

export default function Navbar({ 
  roleMode, 
  setRoleMode, 
  language, 
  setLanguage, 
  activeTab, 
  setActiveTab, 
  onScanClick, 
  cartCount, 
  setIsCartOpen 
}) {
  const t = translations[language] || translations.en;

  const buyerNavItems = [
    { id: 'marketplace', label: t.navMarketplace, icon: ShoppingBag },
    { id: 'provenance', label: t.navProvenance, icon: ShieldCheck },
    { id: 'calculator', label: t.navCalculator, icon: Calculator },
    { id: 'materials', label: t.navMaterials, icon: Layers },
    { id: 'clusters', label: t.navClusters, icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EADFCF] shadow-subtle">
      {/* Top Heritage Impact Ticker */}
      <div className="bg-gradient-to-r from-[#F9F0D6] via-[#FDF9EE] to-[#F9E7E1] border-b border-[#E8CA76]/30 px-3 sm:px-4 py-1.5 text-xs text-[#5A534E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0F382A] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFCDA7] animate-pulse mr-1"></span>
              Live Escrow
            </span>
            <span className="font-medium text-[#2F2B28] text-xs">
              {t.liveTicker}
            </span>
          </div>

          <div className="flex items-center gap-3 font-medium text-[11px] text-[#736B65]">
            <span className="hidden md:flex items-center gap-1 text-[#0F382A] font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-[#C59A2C]" />
              2.8x Average Artisan Wage Uplift
            </span>
            
            {/* Language Toggle */}
            <div className="flex items-center rounded-lg bg-[#FFFDF9] border border-[#DBB146]/50 p-0.5 shadow-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  language === 'en'
                    ? 'bg-[#0F382A] text-white shadow-xs'
                    : 'text-[#736B65] hover:text-[#1F1C1B]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  language === 'hi'
                    ? 'bg-[#0F382A] text-white shadow-xs'
                    : 'text-[#736B65] hover:text-[#1F1C1B]'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity */}
          <div 
            onClick={() => {
              if (roleMode === 'buyer') {
                setActiveTab('marketplace');
              }
            }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F382A] to-[#18543F] border border-[#C5A880]/50 flex items-center justify-center shadow-soft-glow group-hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <span className="text-2xl select-none">🪡</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#C59A2C] rounded-full ring-2 ring-[#FFFDF9]"></span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1C1B]">
                  {t.brandName}
                </span>
                <span className="font-serif text-sm font-semibold text-[#0F382A] hidden sm:inline">
                  {t.brandHindi}
                </span>
              </div>
              <p className="text-[11px] text-[#736B65] tracking-wide font-medium">
                Awadh Provenance Network <span className="text-[#C59A2C]">✦</span> Old Lucknow
              </p>
            </div>
          </div>

          {/* Center: 3-Role Switcher Toggle */}
          <div className="flex items-center bg-[#F4EEE2] p-1 rounded-2xl border border-[#DBB146]/40 shadow-xs overflow-x-auto">
            <button
              onClick={() => setRoleMode('buyer')}
              className={`min-h-[44px] px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                roleMode === 'buyer'
                  ? 'bg-[#0F382A] text-white shadow-sm'
                  : 'text-[#5A534E] hover:text-[#1F1C1B] hover:bg-[#FFFDF9]/60'
              }`}
            >
              <ShoppingBag className={`w-4 h-4 ${roleMode === 'buyer' ? 'text-[#DFCDA7]' : 'text-[#736B65]'}`} />
              <span className="hidden sm:inline">{t.roleBuyer}</span>
              <span className="sm:hidden">Buyer</span>
            </button>

            <button
              onClick={() => setRoleMode('artisan')}
              className={`min-h-[44px] px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                roleMode === 'artisan'
                  ? 'bg-[#C59A2C] text-white shadow-sm ring-2 ring-[#0F382A]/20'
                  : 'text-[#5A534E] hover:text-[#1F1C1B] hover:bg-[#FFFDF9]/60'
              }`}
            >
              <Mic className={`w-4 h-4 ${roleMode === 'artisan' ? 'text-white animate-pulse' : 'text-[#736B65]'}`} />
              <span className="hidden sm:inline">{t.roleArtisan}</span>
              <span className="sm:hidden">कारीगर</span>
            </button>

            <button
              onClick={() => setRoleMode('admin')}
              className={`min-h-[44px] px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                roleMode === 'admin'
                  ? 'bg-[#0F382A] text-white shadow-sm ring-2 ring-[#C5A880]/40'
                  : 'text-[#5A534E] hover:text-[#1F1C1B] hover:bg-[#FFFDF9]/60'
              }`}
              title="Kendra Administrative & Real Data Portal"
            >
              <Building2 className={`w-4 h-4 ${roleMode === 'admin' ? 'text-[#DFCDA7]' : 'text-[#736B65]'}`} />
              <span className="hidden sm:inline">Kendra Admin</span>
              <span className="sm:hidden">Admin</span>
            </button>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={onScanClick}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#FFFDF9] border border-[#DBB146]/50 text-[#2F2B28] hover:bg-[#FDF9EE] hover:border-[#C59A2C] transition-all shadow-xs"
              title="Scan NFC / QR Tag"
            >
              <QrCode className="w-4 h-4 text-[#0F382A]" />
              <span className="hidden lg:inline">{t.scanTagBtn}</span>
            </button>

            {roleMode === 'buyer' && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0F382A] text-white hover:bg-[#18543F] transition-all shadow-soft-glow"
              >
                <ShoppingBag className="w-4 h-4 text-[#DFCDA7]" />
                <span className="hidden sm:inline">{t.cartBtn}</span>
                {cartCount > 0 && (
                  <span className="w-5 h-5 bg-[#D56348] text-white rounded-full flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </button>
            )}
          </div>

        </div>

        {/* Sub-Navigation for Buyer Mode */}
        {roleMode === 'buyer' && (
          <div className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-none border-t border-[#EADFCF]/60">
            {buyerNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`min-h-[44px] whitespace-nowrap flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0F382A] text-white shadow-sm font-bold'
                      : 'text-[#5A534E] hover:text-[#1F1C1B] hover:bg-[#F4EEE2]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#DFCDA7]' : 'text-[#736B65]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
}
