import React from 'react';
import { 
  X, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  Download, 
  Share2, 
  MapPin, 
  Calendar, 
  Sparkles,
  Printer
} from 'lucide-react';
import { artisans } from '../data/artisans';

export default function GiPassportModal({ product, onClose }) {
  if (!product) return null;

  const artisan = artisans.find(a => a.id === product.artisanId) || artisans[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl border-2 border-[#DBB146]/60 shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#F4EEE2] border border-[#EADFCF] flex items-center justify-center text-[#5A534E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Inner Frame with Classic Awadhi Gold Border */}
        <div className="p-6 sm:p-10 border-8 border-double border-[#E8CA76]/50 m-2 sm:m-4 rounded-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#FDF9EE]">
          
          {/* Top Emblems & Header */}
          <div className="text-center space-y-2 pb-6 border-b border-[#E8CA76]/40">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F9F0D6] border border-[#DBB146] flex items-center justify-center text-[#A98121]">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-serif text-xs uppercase tracking-widest text-[#846217] font-bold">
                Government of India GI Registry #119
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B] tracking-tight">
              Official CraftDNA™ Certificate
            </h2>
            <p className="text-xs font-serif italic text-[#736B65]">
              Geographical Indication Provenance & Fair-Trade Guarantee ✦ Old Lucknow Atelier
            </p>
          </div>

          {/* Certificate Body */}
          <div className="py-6 space-y-6">
            
            {/* Tag ID & Date */}
            <div className="flex flex-wrap items-center justify-between text-xs border-b border-[#EADFCF] pb-4">
              <div>
                <span className="text-[#736B65] uppercase block text-[10px] font-semibold">Provenance Tag ID:</span>
                <span className="font-mono text-base font-bold text-[#1F1C1B]">#{product.tagId}</span>
              </div>

              <div>
                <span className="text-[#736B65] uppercase block text-[10px] font-semibold">GI Certificate No:</span>
                <span className="font-mono text-xs font-semibold text-[#A98121]">{product.giCertificate}</span>
              </div>

              <div>
                <span className="text-[#736B65] uppercase block text-[10px] font-semibold">Handcraft Purity:</span>
                <span className="text-sm font-bold text-[#537154] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#6B8C6C]" />
                  {product.authenticityScore}% Handcrafted
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-[#736B65] uppercase text-[10px] font-semibold block">Craft Title:</span>
                <h4 className="font-serif text-lg font-bold text-[#1F1C1B]">{product.name}</h4>
                <p className="text-[11px] text-[#5A534E]">Total Hand Labor: {product.hoursSpent} Hours ({product.daysCrafted} Days)</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/30 space-y-1">
                <span className="text-[#736B65] uppercase text-[10px] font-semibold block">Artisan & Lineage:</span>
                <p className="font-serif text-base font-bold text-[#1F1C1B]">{artisan.name}</p>
                <p className="text-[11px] text-[#736B65] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C59A2C]" />
                  {artisan.mohalla}
                </p>
                <p className="text-[10px] font-semibold text-[#846217]">{artisan.generationalLineage}</p>
              </div>
            </div>

            {/* Audited Fair-Trade Ledger Seal */}
            <div className="p-4 rounded-xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#3F5640]">
                <span>Audited Direct Wage Guarantee:</span>
                <span className="text-sm text-[#537154]">₹{product.costBreakdown.artisanPayout.toLocaleString('en-IN')} (50% of Retail)</span>
              </div>
              <p className="text-[11px] text-[#5A534E]">
                This certificate attests that the artisan has received 100% of the stated wage directly in her Jan Dhan account with zero middleman deductions or *Peshgi* interest withholding.
              </p>
            </div>

            {/* Mill Provenance & Stitches */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#EADFCF]">
                <span className="text-[10px] text-[#736B65] font-semibold block uppercase">Fabric / Raw Material</span>
                <span className="font-medium text-[#2F2B28] text-[11px]">{product.fabricOrigin}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FFFDF9] border border-[#EADFCF]">
                <span className="text-[10px] text-[#736B65] font-semibold block uppercase">Stitches Executed</span>
                <span className="font-medium text-[#2F2B28] text-[11px]">
                  {product.stitchesUsed.map(s => s.name).join(', ')}
                </span>
              </div>
            </div>

            {/* QR & Verification Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E8CA76]/40">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-[#FFFDF9] border border-[#DBB146] p-1.5 flex items-center justify-center text-[#1F1C1B]">
                  <QrCode className="w-full h-full text-[#C59A2C]" />
                </div>
                <div className="text-[11px] text-[#736B65]">
                  <span className="font-bold text-[#1F1C1B] block">Cryptographic Hash:</span>
                  <span className="font-mono text-[10px] text-[#5A534E]">{product.blockchainHash}</span>
                  <span className="text-[10px] text-[#537154] block mt-0.5">● Recorded on Awadh Craft Provenance Registry</span>
                </div>
              </div>

              <div className="text-right hidden sm:block">
                <div className="font-serif italic text-base text-[#1F1C1B] border-b border-[#736B65]/40 pb-1">
                  Khurram & Shabana
                </div>
                <span className="text-[10px] text-[#736B65] uppercase">Certified by Chowk Nodal Kendra</span>
              </div>
            </div>

          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#E8CA76]/40 flex flex-wrap items-center justify-end gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-[#FFFDF9] hover:bg-[#FDF9EE] border border-[#DBB146]/50 text-xs font-bold text-[#846217] flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#C59A2C] hover:bg-[#A98121] text-white text-xs font-bold shadow-soft-glow transition-all"
            >
              Close Passport
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
