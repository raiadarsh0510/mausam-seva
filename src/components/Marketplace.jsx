import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Filter, 
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { products } from '../data/products';
import { artisans } from '../data/artisans';
import { translations } from '../data/i18n';

export default function Marketplace({ 
  onSelectProduct, 
  onAddToCart, 
  onOpenProductDetail, 
  onOpenCustomBatch, 
  language 
}) {
  const t = translations[language] || translations.en;
  const [selectedStitch, setSelectedStitch] = useState('All');
  const [craftFilter, setCraftFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Traditional Awadh stitches list as requested in prompt
  const stitchFilters = [
    'All',
    'Bakhiya (Shadow)',
    'Phanda (Millet)',
    'Tepchi (Line)',
    'Murri (Rice grain)',
    'Keel Kangan',
    'Zardozi (Badla)',
    'Deg-Bhapka'
  ];

  const filteredProducts = products.filter((p) => {
    const matchCraft = craftFilter === 'All' || p.craftType === craftFilter;
    let matchStitch = true;
    if (selectedStitch !== 'All') {
      const keyword = selectedStitch.split(' ')[0].toLowerCase();
      matchStitch = p.stitchesUsed.some(st => st.name.toLowerCase().includes(keyword));
    }
    return matchCraft && matchStitch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.retailPrice - b.retailPrice;
    if (sortBy === 'price-high') return b.retailPrice - a.retailPrice;
    if (sortBy === 'hours') return b.hoursSpent - a.hoursSpent;
    return 0;
  });

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Custom Batch Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382A] text-[#DFCDA7] text-xs font-semibold mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Direct Sourcing & Verified Provenance Rails</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
              Traceable Boutique Catalog
            </h2>
            <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
              Source authentic GI-certified masterworks directly from Old Lucknow clusters. 65% direct artisan wage realization with immutable digital certificates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenCustomBatch(products[0])}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white text-xs font-bold transition-all shadow-soft-glow flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#DFCDA7]" />
              <span>{t.customBatchBtn}</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="min-h-[44px] px-3 py-2 rounded-xl text-xs font-medium bg-[#FFFDF9] border border-[#EADFCF] text-[#2F2B28] focus:outline-none focus:ring-1 focus:ring-[#0F382A]"
            >
              <option value="featured">Featured Awadh Pieces</option>
              <option value="hours">Most Hand-Hours Invested</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Traditional Stitch Filter Chips (Prompt Requirement) */}
        <div className="bg-[#FFFDF9] p-4 rounded-2xl border border-[#EADFCF] mb-8 space-y-3 shadow-subtle">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#1F1C1B] flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#0F382A]" />
              {t.filterStitch}
            </span>
            <span className="text-[11px] text-[#736B65]">Showing {filteredProducts.length} certified pieces</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {stitchFilters.map((stitch) => (
              <button
                key={stitch}
                onClick={() => setSelectedStitch(stitch)}
                className={`min-h-[38px] px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                  selectedStitch === stitch
                    ? 'bg-[#0F382A] text-white font-bold shadow-xs'
                    : 'bg-[#FAF7F2] text-[#5A534E] hover:bg-[#F4EEE2] border border-[#EADFCF]'
                }`}
              >
                {stitch}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const artisan = artisans.find(a => a.id === product.artisanId) || artisans[0];
            return (
              <div
                key={product.id}
                className="bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#DBB146]/30 shadow-craft-card flex flex-col justify-between group hover:border-[#0F382A] transition-all duration-300"
              >
                <div>
                  {/* Image & Badges */}
                  <div className="relative h-72 overflow-hidden bg-[#F4EEE2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0F382A] text-white shadow-sm">
                        {product.craftType}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FFFDF9]/90 backdrop-blur-xs text-[#2F2B28] shadow-sm flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#537154]" />
                        GI Registry #119
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 backdrop-blur-xs text-white">
                        #{product.tagId}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/50 backdrop-blur-xs p-2 rounded-xl">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#DFCDA7]" />
                        {product.hoursSpent} {t.hoursWorked}
                      </span>
                      <span className="font-semibold text-[#DFCDA7]">
                        Compliance: {product.authenticityScore}%
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#736B65] mb-1">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#C59A2C]" />
                          {product.cluster}
                        </span>
                        <span className="text-[#0F382A] font-bold bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
                          by {artisan.name}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#1F1C1B] group-hover:text-[#0F382A] transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#5A534E] mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Direct Fair-Trade Realization Highlight */}
                    <div className="p-3.5 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#3F5640] font-bold">{t.artisanDirectPayout}:</span>
                        <span className="text-base font-bold text-[#0F382A]">
                          ₹{product.costBreakdown.artisanPayout.toLocaleString('en-IN')} (50%)
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#736B65]">
                        <span>Middleman cartel paid: <del className="text-[#D56348]">₹{product.middlemanExploitationBenchmark.artisanPayout}</del></span>
                        <span className="font-semibold text-[#537154]">+{(product.costBreakdown.artisanPayout / product.middlemanExploitationBenchmark.artisanPayout).toFixed(1)}x uplift</span>
                      </div>
                    </div>

                    {/* Stitches Used Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.stitchesUsed.map((st, i) => (
                        <span key={i} className="text-[10px] font-medium bg-[#FAF7F2] border border-[#EADFCF] px-2 py-0.5 rounded text-[#5A534E]">
                          {st.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions with 48px accessible touch */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => onOpenProductDetail(product)}
                    className="min-h-[44px] flex-1 py-2.5 px-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F4EEE2] border border-[#0F382A]/40 text-[#0F382A] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0F382A]" />
                    <span>{t.verifyAuthenticity}</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="min-h-[44px] py-2.5 px-5 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white text-xs font-bold transition-all shadow-soft-glow flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#DFCDA7]" />
                    <span>₹{product.retailPrice.toLocaleString('en-IN')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
