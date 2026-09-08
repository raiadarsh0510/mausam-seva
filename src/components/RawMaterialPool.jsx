import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  TrendingDown, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  HelpCircle,
  Clock,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { rawMaterials } from '../data/materials';

export default function RawMaterialPool() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [requestedMaterials, setRequestedMaterials] = useState([]);
  const [showSuccessToast, setShowSuccessToast] = useState(null);

  const categories = ['All', 'Fabric', 'Zardozi Metallic Wire', 'Attar Base'];

  const filteredMaterials = selectedCategory === 'All'
    ? rawMaterials
    : rawMaterials.filter(m => m.category === selectedCategory);

  const handleRequisition = (item) => {
    setRequestedMaterials(prev => [...prev, item.id]);
    setShowSuccessToast(item.name);
    setTimeout(() => {
      setShowSuccessToast(null);
    }, 4000);
  };

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF9EE] border border-[#DBB146]/40 text-xs font-semibold text-[#846217] mb-2">
              <Layers className="w-3.5 h-3.5 text-[#C59A2C]" />
              <span>Bypassing the Moneylender Debt Trap</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
              Verified Raw Material Pool (Mill-Direct Sourcing)
            </h2>
            <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
              Local moneylenders mark up cloth and zari wire by 35%+ to lock artisans into perpetual debt. KarigarSetu aggregates demand and supplies certified raw materials directly from textile mills with zero-collateral working capital.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C59A2C] text-white shadow-sm'
                    : 'bg-[#FFFDF9] text-[#5A534E] border border-[#EADFCF] hover:border-[#DBB146]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toast Notification */}
        {showSuccessToast && (
          <div className="mb-6 p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] shadow-sm flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2.5">
              <PackageCheck className="w-5 h-5 text-[#537154]" />
              <span className="text-xs font-semibold text-[#2F2B28]">
                Requisition Confirmed: <strong>{showSuccessToast}</strong> will be dispatched to your Chowk Nodal Kendra within 24 hours.
              </span>
            </div>
            <span className="text-[10px] text-[#537154] font-bold bg-[#FFFDF9] px-2 py-0.5 rounded border border-[#CCD8CC]">
              Zero Collateral
            </span>
          </div>
        )}

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMaterials.map((item) => {
            const isRequested = requestedMaterials.includes(item.id);
            return (
              <div 
                key={item.id}
                className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Image & Badge */}
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-2xl object-cover border border-[#EADFCF] shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF9EE] text-[#846217] border border-[#E8CA76]/40 uppercase">
                          {item.category}
                        </span>
                        <span className="text-xs font-bold text-[#537154] bg-[#F5F8F5] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#CCD8CC]">
                          <TrendingDown className="w-3 h-3" />
                          Save {item.savingsPercent}%
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#1F1C1B] mt-1 leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#736B65] flex items-center gap-1 mt-0.5">
                        <Truck className="w-3.5 h-3.5 text-[#C59A2C]" />
                        {item.origin}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5A534E] leading-relaxed">
                    {item.specifications}
                  </p>

                  {/* Price & Savings Comparison Box */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Mill-Direct Price</span>
                      <span className="text-base font-bold text-[#537154]">
                        ₹{item.millDirectPricePerUnit.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#736B65] block">per {item.unit}</span>
                    </div>

                    <div className="border-l border-[#EADFCF] pl-3">
                      <span className="text-[10px] text-[#D56348] uppercase font-semibold block">Local Moneylender (Dalal)</span>
                      <span className="text-base font-bold text-[#736B65] line-through">
                        ₹{item.localDalalPricePerUnit.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#D56348] font-medium block">
                        +₹{(item.localDalalPricePerUnit - item.millDirectPricePerUnit).toLocaleString('en-IN')} extracted
                      </span>
                    </div>
                  </div>

                  {/* Certification tag */}
                  <div className="flex items-center justify-between text-xs text-[#5A534E] pt-1">
                    <span className="flex items-center gap-1 text-[#537154] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#6B8C6C]" />
                      {item.testedQuality}
                    </span>
                    <span className="text-[#736B65]">Lead time: {item.leadTimeDays} days</span>
                  </div>
                </div>

                {/* Requisition Button */}
                <div className="pt-5 mt-4 border-t border-[#F4EEE2]">
                  <button
                    onClick={() => handleRequisition(item)}
                    disabled={isRequested}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isRequested
                        ? 'bg-[#E6ECE6] text-[#3F5640] cursor-not-allowed border border-[#CCD8CC]'
                        : 'bg-[#C59A2C] hover:bg-[#A98121] text-white shadow-soft-glow'
                    }`}
                  >
                    {isRequested ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#537154]" />
                        <span>Dispatched to Nodal Kendra (Zero Debt)</span>
                      </>
                    ) : (
                      <>
                        <span>Requisition Mill Fabric (Backed by Buyer Escrow)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
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
