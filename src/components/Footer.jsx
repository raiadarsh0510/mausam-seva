import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Heart, 
  Sparkles, 
  ExternalLink,
  Award,
  Globe,
  Phone
} from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EADFCF] text-[#5A534E] text-xs">
      {/* Top Heritage Strip */}
      <div className="bg-[#FFFDF9] border-b border-[#EADFCF] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF9EE] border border-[#DBB146]/50 flex items-center justify-center text-[#C59A2C] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">GI Registry #119</h4>
              <p className="text-[11px] text-[#736B65] mt-0.5">
                Authentic Lucknow Chikankari & Zardozi protected under the GI Act 1999.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8F5] border border-[#CCD8CC] flex items-center justify-center text-[#537154] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">50% Wage Guarantee</h4>
              <p className="text-[11px] text-[#736B65] mt-0.5">
                Audited escrow ledger ensures zero-dalal retention and direct UPI transfers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF5F2] border border-[#F3CFC4] flex items-center justify-center text-[#D56348] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">ONDC Seller Node</h4>
              <p className="text-[11px] text-[#736B65] mt-0.5">
                Interoperable discovery across Paytm, Mystore, Pincode & pan-India buyer apps.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] flex items-center justify-center text-[#846217] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1F1C1B]">Chowk Nodal Kendra</h4>
              <p className="text-[11px] text-[#736B65] mt-0.5">
                Phool Wali Gali & Akbari Gate, Old Lucknow, UP 226003.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🪡</span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1C1B]">
                KarigarSetu
              </span>
              <span className="font-serif text-sm font-semibold text-[#A98121]">
                कारीगर सेतु
              </span>
            </div>
            <p className="text-xs text-[#5A534E] leading-relaxed">
              A hyper-local fair-trade provenance network connecting home-based Awadhi craftswomen directly with mill-sourced fabrics, global boutiques, and conscious consumers. Restoring dignity and fair margins to the artisans of Old Lucknow.
            </p>
            <div className="text-[11px] text-[#736B65] pt-1">
              Registered with UP Handloom & Handicrafts Board ✦ Open Source Public Goods Initiative
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#1F1C1B] uppercase tracking-wider">
              Explore
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('provenance')} className="hover:text-[#C59A2C] transition-colors">
                  CraftDNA™ Inspector
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('studio')} className="hover:text-[#C59A2C] transition-colors">
                  Karigar Voice Studio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('materials')} className="hover:text-[#C59A2C] transition-colors">
                  Mill-Direct Material Pool
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('marketplace')} className="hover:text-[#C59A2C] transition-colors">
                  Fair-Trade Boutique
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('clusters')} className="hover:text-[#C59A2C] transition-colors">
                  Mohalla Impact Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Traditional 32 Stitches of Lucknow */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#1F1C1B] uppercase tracking-wider">
              Traditional Awadh Stitches
            </h5>
            <p className="text-[11px] text-[#736B65] leading-relaxed">
              Tepchi (linear run), Bakhiya (shadow work), Phanda (millet grain knot), Murri (rice micro-knot), Jaali (open lattice), Hath Kati, Keel Kangan, Pechni, Sidhaul, Ghas Patti.
            </p>
            <div className="text-[11px] text-[#537154] font-medium flex items-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#6B8C6C]" />
              Zero machine imitation guarantee
            </div>
          </div>

          {/* Col 4: Contact & Nodal Office */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-serif text-sm font-bold text-[#1F1C1B] uppercase tracking-wider">
              Old City Kendras
            </h5>
            <div className="space-y-2 text-xs text-[#5A534E]">
              <p>
                <strong>Central Kendra:</strong> Phool Wali Gali, Chowk, Lucknow (Opp. Tehsin Masjid)
              </p>
              <p>
                <strong>Helpline (Awadhi/Hindi):</strong> +91 522 262 9011
              </p>
              <p>
                <strong>WhatsApp Voice Node:</strong> +91 94150 28841
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[#EADFCF] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#736B65]">
          <p>© 2026 KarigarSetu Foundation. Preserving the Living Heritage of Chowk & Aminabad.</p>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">GI Registry Compliance</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Artisan Bill of Rights</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Open ONDC Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
