import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Award, 
  QrCode, 
  ShoppingBag, 
  Coins, 
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { artisans } from '../data/artisans';
import { translations } from '../data/i18n';

export default function ProductDetailModal({ product, onClose, onAddToCart, onOpenCustomBatch, language }) {
  if (!product) return null;
  const t = translations[language] || translations.en;
  const artisan = artisans.find(a => a.id === product.artisanId) || artisans[0];

  const [activeTab, setActiveTab] = useState('authenticity'); // 'authenticity', 'stitches', 'story'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-3xl border-2 border-[#C5A880]/60 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#F4EEE2] border border-[#EADFCF] flex items-center justify-center text-[#5A534E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Product Visual */}
          <div className="md:col-span-5 relative bg-[#F4EEE2] h-64 md:h-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0F382A] text-white shadow-sm">
                GI Certified #119
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/50 backdrop-blur-xs text-white rounded-2xl text-xs">
              <div className="flex justify-between items-center">
                <span>Authenticity:</span>
                <strong className="text-[#DFCDA7]">{product.authenticityScore}% Handcrafted</strong>
              </div>
            </div>
          </div>

          {/* Right: Verification & Story Details */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* Product Header */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#736B65] mb-1">
                  <span className="font-mono text-[#0F382A] font-bold">#{product.tagId}</span>
                  <span className="text-[#846217] font-semibold bg-[#FDF9EE] px-2 py-0.5 rounded border border-[#E8CA76]/40">
                    {product.craftType}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  {product.name}
                </h3>
              </div>

              {/* Tab selector */}
              <div className="flex items-center gap-2 border-b border-[#EADFCF] pb-2 text-xs">
                <button
                  onClick={() => setActiveTab('authenticity')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === 'authenticity'
                      ? 'bg-[#0F382A] text-white'
                      : 'text-[#5A534E] hover:bg-[#F4EEE2]'
                  }`}
                >
                  {t.verifyAuthenticity}
                </button>
                <button
                  onClick={() => setActiveTab('stitches')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    activeTab === 'stitches'
                      ? 'bg-[#0F382A] text-white'
                      : 'text-[#5A534E] hover:bg-[#F4EEE2]'
                  }`}
                >
                  32-Stitch Breakdown
                </button>
              </div>

              {/* Tab 1: Authenticity & Artisan Details */}
              {activeTab === 'authenticity' && (
                <div className="space-y-3.5 text-xs animate-fadeIn">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF]">
                    <img
                      src={artisan.avatar}
                      alt={artisan.name}
                      className="w-12 h-12 rounded-xl object-cover border border-[#0F382A]"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">{artisan.name}</h4>
                      <p className="text-[11px] text-[#736B65] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C59A2C]" />
                        {artisan.mohalla}
                      </p>
                      <span className="text-[10px] text-[#0F382A] font-semibold">{artisan.generationalLineage}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F5F8F5] border border-[#CCD8CC]">
                      <span className="text-[10px] text-[#3F5640] uppercase font-bold block">Labor Invested</span>
                      <span className="font-bold text-[#0F382A] text-sm">{product.hoursSpent} Hours</span>
                      <span className="text-[10px] text-[#537154] block">({product.daysCrafted} Days Handcrafted)</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F5F8F5] border border-[#CCD8CC]">
                      <span className="text-[10px] text-[#3F5640] uppercase font-bold block">Fair-Wage Compliance</span>
                      <span className="font-bold text-[#0F382A] text-sm">₹{product.costBreakdown.artisanPayout} (50%)</span>
                      <span className="text-[10px] text-[#537154] block">Direct Escrow to Jan Dhan</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] space-y-1">
                    <span className="text-[10px] text-[#736B65] uppercase font-bold block">Fabric Provenance</span>
                    <p className="text-[11px] text-[#2F2B28]">{product.fabricOrigin}</p>
                  </div>
                </div>
              )}

              {/* Tab 2: Stitches Breakdown */}
              {activeTab === 'stitches' && (
                <div className="space-y-3 text-xs animate-fadeIn">
                  <div className="space-y-2">
                    {product.stitchesUsed.map((st, i) => (
                      <div key={i} className="p-2 bg-[#FAF7F2] rounded-xl border border-[#EADFCF] flex items-center justify-between">
                        <div>
                          <strong className="text-[#1F1C1B]">{st.name}</strong>
                          <span className="text-[10px] text-[#736B65] block">{st.type}</span>
                        </div>
                        <span className="text-[10px] text-[#537154] font-bold bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
                          Handcut Verified
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-[#5A534E] leading-relaxed">
                    Zero machine Schiffli embroidery. Authenticated under the Lucknow Chikankari Geographical Indication Registry.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#EADFCF] flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenCustomBatch(product);
                }}
                className="flex-1 py-2.5 px-3 rounded-xl border border-[#0F382A] text-[#0F382A] hover:bg-[#F4EEE2] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Batch Order</span>
              </button>

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white text-xs font-bold transition-all shadow-soft-glow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#DFCDA7]" />
                <span>Source (₹{product.retailPrice.toLocaleString('en-IN')})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
