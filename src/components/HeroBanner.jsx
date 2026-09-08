import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Mic, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Coins, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

export default function HeroBanner({ setActiveTab, onScanClick }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F7F2E7] border-b border-[#EADFCF] pt-8 pb-16">
      {/* Decorative background motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E0AC]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4CEBF]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF9EE] border border-[#DBB146]/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C59A2C]" />
              <span className="text-xs font-semibold text-[#846217] tracking-wide uppercase">
                Old Lucknow Craft Provenance & Fair-Trade Network
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1C1B] leading-[1.15]">
              Ending Middleman Exploitation in <span className="text-[#A98121] italic font-serif">Chowk & Aminabad</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#5A534E] leading-relaxed max-w-2xl font-normal">
              A high-end Hazratganj boutique charges <span className="line-through text-[#D56348]">₹12,000</span> for an authentic Chikankari suit, yet the home-based woman karigar in Kakori earns just <span className="font-bold text-[#D56348]">₹250</span>. 
              <strong> KarigarSetu</strong> replaces layers of predatory middlemen with verified mill-direct fabric, voice-first WhatsApp work orders, and tamper-proof <em>CraftDNA™</em> provenance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setActiveTab('provenance')}
                className="px-6 py-3.5 rounded-xl bg-[#C59A2C] hover:bg-[#A98121] text-white font-semibold text-sm shadow-soft-glow transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Inspect CraftDNA™ Provenance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('studio')}
                className="px-6 py-3.5 rounded-xl bg-[#FFFDF9] hover:bg-[#FDF9EE] border border-[#DBB146]/50 text-[#2F2B28] font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Mic className="w-4 h-4 text-[#C59A2C]" />
                <span>Simulate Karigar Voice Studio</span>
              </button>

              <button
                onClick={() => setActiveTab('marketplace')}
                className="px-5 py-3.5 rounded-xl text-[#5A534E] hover:text-[#1F1C1B] font-semibold text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Browse GI Masterpieces</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#736B65]" />
              </button>
            </div>

            {/* Ground Truth Validation Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#FFFDF9]/80 border border-[#EADFCF] shadow-subtle">
                <div className="text-2xl font-bold font-serif text-[#C59A2C]">50%+</div>
                <div className="text-xs text-[#5A534E] font-medium">Direct Artisan Margin (vs 6% dalal baseline)</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFDF9]/80 border border-[#EADFCF] shadow-subtle">
                <div className="text-2xl font-bold font-serif text-[#6B8C6C]">₹0 Debt</div>
                <div className="text-xs text-[#5A534E] font-medium">Zero-Peshgi Mill Fabric Pool</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FFFDF9]/80 border border-[#EADFCF] shadow-subtle col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold font-serif text-[#D56348]">100% GI</div>
                <div className="text-xs text-[#5A534E] font-medium">Protection from Fake Surat Machine Print</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Provenance Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card">
              {/* Card Ribbon */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#C59A2C] to-[#A98121] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>GI Certified Awadh Batch</span>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-[#F4EEE2]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                  alt="Shabana Begum"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#DBB146]/40 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif text-lg font-bold text-[#1F1C1B]">Shabana Begum</h3>
                    <CheckCircle2 className="w-4 h-4 text-[#6B8C6C]" />
                  </div>
                  <p className="text-xs text-[#736B65]">Phool Wali Gali, Chowk, Lucknow</p>
                  <p className="text-[11px] font-semibold text-[#A98121]">Master 32-Stitch Karigar (24 yrs exp)</p>
                </div>
              </div>

              {/* Garment Preview */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#736B65]">Current Batch:</span>
                  <span className="font-mono font-semibold text-[#1F1C1B] bg-[#FDF9EE] px-2 py-0.5 rounded border border-[#DBB146]/30">
                    #LKO-CHK-8841
                  </span>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-2xl border border-[#EADFCF] space-y-2">
                  <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-[#5A534E]">Realized Wage:</span>
                    <span className="font-bold text-[#6B8C6C] text-sm">₹2,100 (50.0%)</span>
                  </div>
                  <div className="w-full bg-[#EADFCF] h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#6B8C6C] h-full" style={{ width: '50%' }} title="Artisan Payout: 50%"></div>
                    <div className="bg-[#DBB146] h-full" style={{ width: '23%' }} title="Raw Material: 23%"></div>
                    <div className="bg-[#D56348] h-full" style={{ width: '15%' }} title="Kendra & Logistics: 15%"></div>
                    <div className="bg-[#736B65] h-full" style={{ width: '12%' }} title="Fair Margin: 12%"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#736B65]">
                    <span>Traditional dalal wage: <del className="text-[#D56348]">₹280 (6.6%)</del></span>
                    <span className="font-semibold text-[#6B8C6C]">+750% increase</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F5F8F5] border border-[#CCD8CC]/50">
                    <span className="text-[10px] text-[#537154] font-semibold block uppercase">Fabric Origin</span>
                    <span className="font-medium text-[#2F2B28] text-xs">Bhiwandi 100s Mulmul</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FDF9EE] border border-[#E8CA76]/40">
                    <span className="text-[10px] text-[#846217] font-semibold block uppercase">Stitch Diagnostic</span>
                    <span className="font-medium text-[#2F2B28] text-xs">Bakhiya + Jaali Handcut</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setActiveTab('provenance')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F9F0D6] hover:bg-[#F3E0AC] text-[#846217] font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-[#DBB146]/40"
              >
                <span>View Complete Digital Craft Passport</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
