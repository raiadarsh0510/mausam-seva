import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Award, 
  MapPin, 
  Clock, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Share2, 
  Download,
  Info,
  ExternalLink,
  QrCode,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { products } from '../data/products';
import { artisans } from '../data/artisans';

export default function CraftDnaInspector({ selectedProductId, setSelectedProductId, onOpenPassport }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeDiagnosticTab, setActiveDiagnosticTab] = useState('cost'); // 'cost', 'stitches', 'pedigree'

  // Find currently selected product or fallback to first
  const currentProduct = products.find(p => p.id === selectedProductId) || products[0];
  const artisan = artisans.find(a => a.id === currentProduct.artisanId) || artisans[0];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    const found = products.find(p => p.tagId.toUpperCase().includes(query) || p.name.toUpperCase().includes(query));
    if (found) {
      setSelectedProductId(found.id);
    }
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    // Auto reset after 15 seconds simulation if started
    if (!isPlayingAudio) {
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 15000);
    }
  };

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF9EE] border border-[#DBB146]/40 text-xs font-semibold text-[#846217] mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59A2C]" />
              <span>Cryptographic Provenance Engine</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
              CraftDNA™ Physical-Digital Twin Inspector
            </h2>
            <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
              Every garment carries a sewn-in NFC chip or QR thread. Tap or enter any tag ID to inspect its artisan voice ledger, mill pedigree, and audited fair-trade cost breakdown.
            </p>
          </div>

          {/* Quick Tag Selector Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-medium text-[#736B65] whitespace-nowrap hidden sm:inline">Try Demo Tags:</span>
            {products.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedProductId(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap ${
                  currentProduct.id === item.id
                    ? 'bg-[#C59A2C] text-white shadow-sm'
                    : 'bg-[#FFFDF9] text-[#5A534E] border border-[#EADFCF] hover:border-[#C59A2C]'
                }`}
              >
                #{item.tagId}
              </button>
            ))}
          </div>
        </div>

        {/* Search / Scan Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Tag ID (e.g. LKO-CHK-8841) or artisan name..."
              className="w-full pl-11 pr-32 py-3.5 rounded-2xl bg-[#FFFDF9] border border-[#DBB146]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#C59A2C] shadow-subtle text-[#2F2B28]"
            />
            <Search className="w-5 h-5 text-[#C59A2C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#C59A2C] hover:bg-[#A98121] text-white text-xs font-semibold transition-colors"
            >
              Inspect Tag
            </button>
          </div>
        </form>

        {/* Main Provenance Inspection Console */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#DBB146]/30 shadow-craft-card overflow-hidden">
          
          {/* Top Tag Header */}
          <div className="bg-gradient-to-r from-[#F9F0D6] via-[#FDF9EE] to-[#FAF7F2] p-6 border-b border-[#E8CA76]/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/50 flex items-center justify-center text-[#C59A2C] shadow-sm">
                <QrCode className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-bold text-[#1F1C1B]">
                    Tag #{currentProduct.tagId}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6B8C6C]/20 text-[#3F5640] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#537154]" />
                    GI Verified Provenance
                  </span>
                </div>
                <p className="text-xs text-[#736B65]">
                  {currentProduct.craftType} ✦ {currentProduct.cluster} ✦ Handcrafted in Old Lucknow
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenPassport(currentProduct)}
                className="px-4 py-2 rounded-xl bg-[#FFFDF9] hover:bg-[#FDF9EE] border border-[#DBB146]/50 text-xs font-semibold text-[#846217] flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#C59A2C]" />
                <span>Export GI Passport</span>
              </button>
            </div>
          </div>

          {/* Body Content: 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* Left: Product & Artisan Profile */}
            <div className="lg:col-span-5 space-y-6">
              {/* Product Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-[#EADFCF] group">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#C59A2C] uppercase tracking-wider">
                    {currentProduct.craftType} Masterpiece
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1 text-white leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/90 mt-0.5">
                    {currentProduct.hoursSpent} Hours of Hand Embroidery • {currentProduct.daysCrafted} Days
                  </p>
                </div>
              </div>

              {/* Artisan Audio & Profile Card */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={artisan.avatar}
                    alt={artisan.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-[#DBB146]/50 shadow-sm"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-[#1F1C1B]">{artisan.name}</h4>
                      <span className="text-[11px] font-semibold text-[#846217] bg-[#FDF9EE] px-2 py-0.5 rounded border border-[#E8CA76]/40">
                        {artisan.generationalLineage}
                      </span>
                    </div>
                    <p className="text-xs text-[#5A534E] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C59A2C]" />
                      {artisan.mohalla}
                    </p>
                  </div>
                </div>

                {/* Voice Note Player */}
                <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/30 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleAudio}
                        className="w-8 h-8 rounded-full bg-[#C59A2C] hover:bg-[#A98121] text-white flex items-center justify-center shadow-sm transition-all"
                      >
                        {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>
                      <div>
                        <span className="font-semibold text-[#2F2B28] block">
                          Artisan Voice Greeting ({artisan.voiceNote.language})
                        </span>
                        <span className="text-[10px] text-[#736B65]">
                          {isPlayingAudio ? 'Playing Awadhi voice recording...' : `Tap to listen (${artisan.voiceNote.duration})`}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#A98121] bg-[#FDF9EE] px-2 py-0.5 rounded">
                      {isPlayingAudio ? '● LIVE' : artisan.voiceNote.duration}
                    </span>
                  </div>

                  {/* Audio Waveform simulation */}
                  <div className="flex items-center gap-1 h-5 px-1">
                    {[12, 28, 16, 32, 24, 40, 18, 26, 35, 14, 28, 38, 20, 30, 22, 34, 16, 25].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-[#C59A2C] animate-pulse' : 'bg-[#EADFCF]'
                        }`}
                        style={{ height: `${isPlayingAudio ? Math.min(100, h * 1.5) : h}%` }}
                      ></div>
                    ))}
                  </div>

                  <p className="text-xs italic text-[#5A534E] border-t border-[#F4EEE2] pt-2">
                    "{artisan.voiceNote.quote}"
                  </p>
                  <p className="text-[11px] text-[#736B65]">
                    <strong>English:</strong> {artisan.voiceNote.translation}
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Detailed Diagnostic Console */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Diagnostic Tab Navigation */}
              <div className="flex items-center gap-2 border-b border-[#EADFCF] pb-3">
                <button
                  onClick={() => setActiveDiagnosticTab('cost')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeDiagnosticTab === 'cost'
                      ? 'bg-[#F9F0D6] text-[#846217] border border-[#DBB146]/50 shadow-sm'
                      : 'text-[#5A534E] hover:bg-[#F4EEE2]'
                  }`}
                >
                  ⚖️ Transparent Cost Anatomy (Fair vs Cartel)
                </button>
                <button
                  onClick={() => setActiveDiagnosticTab('stitches')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeDiagnosticTab === 'stitches'
                      ? 'bg-[#F9F0D6] text-[#846217] border border-[#DBB146]/50 shadow-sm'
                      : 'text-[#5A534E] hover:bg-[#F4EEE2]'
                  }`}
                >
                  🪡 32-Stitch & Anti-Surat Verification
                </button>
                <button
                  onClick={() => setActiveDiagnosticTab('pedigree')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeDiagnosticTab === 'pedigree'
                      ? 'bg-[#F9F0D6] text-[#846217] border border-[#DBB146]/50 shadow-sm'
                      : 'text-[#5A534E] hover:bg-[#F4EEE2]'
                  }`}
                >
                  🏛️ Mill Origin & GI Blockchain Proof
                </button>
              </div>

              {/* Tab 1: Transparent Cost Anatomy */}
              {activeDiagnosticTab === 'cost' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EADFCF]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-serif text-lg font-bold text-[#1F1C1B]">
                        Retail Price Breakdown: ₹{currentProduct.retailPrice}
                      </h4>
                      <span className="text-xs font-bold text-[#6B8C6C] bg-[#F5F8F5] px-2.5 py-1 rounded-full border border-[#CCD8CC]">
                        KarigarSetu Fair-Trade Standard
                      </span>
                    </div>

                    {/* Side by Side Comparison Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Exploitative Middleman Cartel */}
                      <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#D56348]/30 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#D56348] uppercase tracking-wide">
                            Traditional Chowk Cartel
                          </span>
                          <span className="text-[11px] text-[#736B65]">Historical Dalal Loop</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between p-1.5 rounded bg-[#FDF5F2] font-semibold text-[#B9492E]">
                            <span>Home Karigar Wage:</span>
                            <span>₹{currentProduct.middlemanExploitationBenchmark.artisanPayout} (6.6%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Dalals / Local Aggregators:</span>
                            <span>₹{currentProduct.middlemanExploitationBenchmark.dalalsAndAggregators} (22.4%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Wholesale Middlemen:</span>
                            <span>₹{currentProduct.middlemanExploitationBenchmark.wholesaleCartel} (32.8%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Hazratganj / City Retailer:</span>
                            <span>₹{currentProduct.middlemanExploitationBenchmark.retailerMarkup} (38.2%)</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#F4EEE2] text-[11px] text-[#92361F] flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>Artisan trapped in debt via raw material advances (*Peshgi*).</span>
                        </div>
                      </div>

                      {/* KarigarSetu Transparent Fair Trade */}
                      <div className="p-4 rounded-xl bg-[#FFFDF9] border border-[#6B8C6C]/40 space-y-3 shadow-subtle">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#537154] uppercase tracking-wide">
                            KarigarSetu Provenance
                          </span>
                          <span className="text-[11px] text-[#3F5640] font-semibold">Audited Escrow</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between p-1.5 rounded bg-[#F5F8F5] font-bold text-[#3F5640]">
                            <span>Direct Artisan Payout:</span>
                            <span>₹{currentProduct.costBreakdown.artisanPayout} (50.0%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Direct Mill Fabric (Bhiwandi):</span>
                            <span>₹{currentProduct.costBreakdown.rawMaterialCost} (22.6%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Organic Charak & Finishing:</span>
                            <span>₹{currentProduct.costBreakdown.charakFinishing} (8.3%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#5A534E]">
                            <span>Nodal Kendra Verification:</span>
                            <span>₹{currentProduct.costBreakdown.logisticsKendra} (10.7%)</span>
                          </div>
                          <div className="flex justify-between p-1 text-[#736B65]">
                            <span>Sustainable Platform Fund:</span>
                            <span>₹{currentProduct.costBreakdown.fairMargin} (8.4%)</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#F4EEE2] text-[11px] text-[#537154] font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>Instant UPI release to Jan Dhan. Zero moneylender debt.</span>
                        </div>
                      </div>

                    </div>

                    <div className="mt-4 p-3 bg-[#FDF9EE] rounded-xl border border-[#E8CA76]/40 flex items-center justify-between text-xs">
                      <span className="text-[#846217] font-semibold">Net Wage Uplift for {artisan.name}:</span>
                      <span className="text-base font-bold text-[#A98121]">
                        +750% (₹2,100 vs ₹280)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: 32-Stitch & Anti-Surat Verification */}
              {activeDiagnosticTab === 'stitches' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF]">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-serif text-base font-bold text-[#1F1C1B]">
                        32 Traditional Awadh Stitches Identified
                      </h4>
                      <span className="text-xs font-mono font-bold text-[#A98121]">
                        Purity: {currentProduct.authenticityScore}%
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentProduct.stitchesUsed.map((st, idx) => (
                        <div key={idx} className="p-2.5 bg-[#FFFDF9] rounded-xl border border-[#DBB146]/30 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold text-[#2F2B28]">{st.name}</span>
                            <span className="text-[11px] text-[#736B65] block">{st.type}</span>
                          </div>
                          <span className="text-[10px] font-semibold text-[#537154] bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
                            Handcut Verified
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Counterfeit comparison */}
                    <div className="mt-4 p-3.5 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/40 space-y-2">
                      <div className="text-xs font-bold text-[#846217] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59A2C]" />
                        <span>Why Surat Machine Embroidery Fails the Scan</span>
                      </div>
                      <p className="text-xs text-[#5A534E] leading-relaxed">
                        Surat machine replicas produce continuous, synthetic, uniform backstitch loops. Real Awadhi hand Chikankari uses uneven tension knots (<em>Phanda</em>) and hand-pulled threads through warp/weft (<em>Jaali</em>) that cannot be reproduced on mechanical Schiffli looms.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Mill Origin & GI Blockchain Proof */}
              {activeDiagnosticTab === 'pedigree' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-base font-bold text-[#1F1C1B]">
                        Immutable Provenance & Ledger Metadata
                      </h4>
                      <span className="text-xs font-mono text-[#537154] bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
                        Verified
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 bg-[#FFFDF9] rounded-xl border border-[#EADFCF]">
                        <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Fabric / Raw Material Pedigree</span>
                        <span className="font-medium text-[#2F2B28]">{currentProduct.fabricOrigin}</span>
                      </div>

                      <div className="p-2.5 bg-[#FFFDF9] rounded-xl border border-[#EADFCF]">
                        <span className="text-[10px] text-[#736B65] uppercase font-semibold block">GI Registration Number</span>
                        <span className="font-mono font-medium text-[#A98121]">{currentProduct.giCertificate}</span>
                      </div>

                      <div className="p-2.5 bg-[#FFFDF9] rounded-xl border border-[#EADFCF]">
                        <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Cryptographic Hash on Public Craft Ledger</span>
                        <span className="font-mono text-[11px] text-[#5A534E]">{currentProduct.blockchainHash}</span>
                      </div>

                      <div className="p-2.5 bg-[#FFFDF9] rounded-xl border border-[#EADFCF]">
                        <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Geolocation of Karkhana / Kendra</span>
                        <span className="text-xs text-[#2F2B28]">26.8654° N, 80.9082° E (Phool Wali Gali, Chowk, Lucknow)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {currentProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[#5A534E]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8C6C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
