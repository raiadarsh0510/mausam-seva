import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { translations } from '../data/i18n';

export default function FairPriceCalculator({ language }) {
  const t = translations[language] || translations.en;
  const [retailPrice, setRetailPrice] = useState(4500);

  // KarigarSetu Dynamic Split
  const artisanShare = Math.round(retailPrice * 0.65);
  const materialShare = Math.round(retailPrice * 0.20);
  const logisticsShare = Math.round(retailPrice * 0.10);
  const platformShare = Math.round(retailPrice * 0.05);

  // Traditional Middleman Cartel Split
  const oldArtisanShare = Math.round(retailPrice * 0.066); // ~6.6%
  const oldDalalShare = Math.round(retailPrice * 0.22); // 22%
  const oldWholesaleShare = Math.round(retailPrice * 0.33); // 33%
  const oldRetailMarkup = retailPrice - oldArtisanShare - oldDalalShare - oldWholesaleShare; // ~38.4%
  const totalCartelExtracted = oldDalalShare + oldWholesaleShare + oldRetailMarkup;
  const artisanUplift = artisanShare - oldArtisanShare;

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F382A] text-[#DFCDA7] text-xs font-semibold shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Provenance Economics</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
            {t.calcTitle}
          </h2>
          <p className="text-sm text-[#5A534E]">
            {t.calcSubtitle}
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#DBB146]/30 shadow-craft-card space-y-8">
          
          {/* Price Slider Bar */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs sm:text-sm font-bold text-[#1F1C1B] uppercase tracking-wider">
                {t.retailPriceLabel}
              </label>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F382A]">
                ₹{retailPrice.toLocaleString('en-IN')}
              </div>
            </div>

            <input
              type="range"
              min="1500"
              max="15000"
              step="250"
              value={retailPrice}
              onChange={(e) => setRetailPrice(parseInt(e.target.value))}
              className="w-full h-3 bg-[#EADFCF] rounded-lg appearance-none cursor-pointer accent-[#0F382A]"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#736B65]">
              <span>₹1,500 (Daily Chikankari)</span>
              <span>₹4,500 (Masterwork)</span>
              <span>₹9,000 (Zardozi Dupatta)</span>
              <span>₹15,000 (Heirloom Royal Suit)</span>
            </div>
          </div>

          {/* Visual Percentage Allocation Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#5A534E]">
              <span>KarigarSetu Fair-Trade Allocation Split:</span>
              <span className="text-[#0F382A] font-bold">100% Audited</span>
            </div>
            
            <div className="w-full h-5 bg-[#EADFCF] rounded-xl overflow-hidden flex shadow-inner">
              <div className="bg-[#0F382A] h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: '65%' }} title="Artisan Direct Payout: 65%">
                65% Karigar
              </div>
              <div className="bg-[#C59A2C] h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: '20%' }} title="Mill Materials: 20%">
                20% Mill
              </div>
              <div className="bg-[#D56348] h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: '10%' }} title="Kendra QC: 10%">
                10%
              </div>
              <div className="bg-[#736B65] h-full flex items-center justify-center text-[10px] text-white font-bold" style={{ width: '5%' }} title="Platform: 5%">
                5%
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* KarigarSetu Direct Fair-Trade Model */}
            <div className="p-6 rounded-2xl bg-[#F5F8F5] border-2 border-[#CCD8CC] space-y-4 shadow-subtle">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0F382A]"></div>
                  <h4 className="font-serif text-lg font-bold text-[#0F382A]">
                    KarigarSetu Provenance Model
                  </h4>
                </div>
                <span className="text-[10px] font-bold bg-[#0F382A] text-white px-2 py-0.5 rounded">
                  Fair Trade Certified
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-2 rounded-xl bg-white border border-[#CCD8CC] font-bold text-[#0F382A]">
                  <span>{t.artisanShareLabel}:</span>
                  <span className="text-base font-serif font-bold">₹{artisanShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#5A534E]">
                  <span>{t.materialsLabel}:</span>
                  <span className="font-semibold text-[#1F1C1B]">₹{materialShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#5A534E]">
                  <span>{t.logisticsLabel}:</span>
                  <span className="font-semibold text-[#1F1C1B]">₹{logisticsShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#736B65]">
                  <span>{t.platformLabel}:</span>
                  <span className="font-semibold text-[#1F1C1B]">₹{platformShare.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#CCD8CC] text-xs text-[#3F5640] flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#537154] shrink-0" />
                <span>Credited directly to woman karigar's Jan Dhan account upon QC.</span>
              </div>
            </div>

            {/* Traditional Exploitative Middleman Cartel */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#D56348]/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D56348]"></div>
                  <h4 className="font-serif text-lg font-bold text-[#92361F]">
                    Traditional Chowk Middleman Cartel
                  </h4>
                </div>
                <span className="text-[10px] font-bold bg-[#FDF5F2] text-[#B9492E] px-2 py-0.5 rounded border border-[#F4CEBF]">
                  Opaque System
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-2 rounded-xl bg-[#FDF5F2] font-semibold text-[#92361F]">
                  <span>Artisan Earnings (~6.6%):</span>
                  <span className="line-through text-base font-serif font-bold">₹{oldArtisanShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#5A534E]">
                  <span>Local Dalals & Aggregators (22%):</span>
                  <span>₹{oldDalalShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#5A534E]">
                  <span>Wholesale Cartels (33%):</span>
                  <span>₹{oldWholesaleShare.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between p-1.5 text-[#5A534E]">
                  <span>City Boutiques / Resellers (38.4%):</span>
                  <span>₹{oldRetailMarkup.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EADFCF] text-xs text-[#92361F] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#D56348] shrink-0" />
                <span>₹{totalCartelExtracted.toLocaleString('en-IN')} swallowed by intermediaries.</span>
              </div>
            </div>

          </div>

          {/* Bottom Net Uplift Highlight Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F382A] to-[#18543F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft-glow border border-[#C5A880]/40">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#DFCDA7] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {t.netArtisanGain}
                </h4>
                <p className="text-xs text-[#DFCDA7]">
                  By sourcing this piece directly through KarigarSetu, you inject an extra:
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#DFCDA7]">
                +₹{artisanUplift.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-white/80 block">
                (nearly 10x what she would have received from local aggregators)
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
