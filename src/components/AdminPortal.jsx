import React, { useState } from 'react';
import { 
  Building2, 
  UserPlus, 
  PackagePlus, 
  Download, 
  Upload, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Camera, 
  Mic, 
  Coins, 
  MapPin, 
  Check, 
  ArrowRight,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { exportDataAsJsonFile } from '../services/storage';

export default function AdminPortal({ 
  artisans, 
  onAddArtisan, 
  products, 
  onAddProduct, 
  onResetData, 
  onImportData, 
  language 
}) {
  const [activeAdminTab, setActiveAdminTab] = useState('artisan'); // 'artisan' | 'product' | 'qc' | 'backup'
  const [toastMessage, setToastMessage] = useState(null);

  // New Artisan Form State
  const [artisanName, setArtisanName] = useState('');
  const [artisanMohalla, setArtisanMohalla] = useState('Phool Wali Gali, Chowk, Lucknow');
  const [artisanLineage, setArtisanLineage] = useState('4th Generation Awadh Karigar');
  const [artisanExp, setArtisanExp] = useState(15);
  const [artisanUpi, setArtisanUpi] = useState('shabana@okhdfcbank');
  const [artisanPhotoUrl, setArtisanPhotoUrl] = useState('');
  const [selectedStitches, setSelectedStitches] = useState(['Bakhiya (Shadow work)', 'Jaali (Lattice)']);
  const [voiceQuote, setVoiceQuote] = useState('हम कई सालों से चौक में हाथ की जाली और बखिया का काम कर रहे हैं।');
  const [voiceTranslation, setVoiceTranslation] = useState('I have been practicing hand lattice Jaali and shadow Bakhiya in Chowk for many years.');

  // New Product Form State
  const [prodTitle, setProdTitle] = useState('');
  const [prodCraft, setProdCraft] = useState('Chikankari');
  const [prodCluster, setProdCluster] = useState('Chowk (Phool Wali Gali)');
  const [prodArtisanId, setProdArtisanId] = useState(artisans[0]?.id || 'art-01');
  const [prodTagId, setProdTagId] = useState(`LKO-CHK-${Math.floor(1000 + Math.random() * 9000)}`);
  const [prodRetailPrice, setProdRetailPrice] = useState(3800);
  const [prodHours, setProdHours] = useState(120);
  const [prodDays, setProdDays] = useState(18);
  const [prodFabric, setProdFabric] = useState('Bhiwandi 100s Count Combed Mulmul Cotton (Batch #BW-995)');
  const [prodGiCert, setProdGiCert] = useState(`GI-LKO-CHK-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [prodPhotoUrl, setProdPhotoUrl] = useState('');
  const [prodDesc, setProdDesc] = useState('');

  // Handle Photo Upload (Base64)
  const handlePhotoUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle Stitches
  const handleToggleStitch = (st) => {
    if (selectedStitches.includes(st)) {
      setSelectedStitches(selectedStitches.filter(s => s !== st));
    } else {
      setSelectedStitches([...selectedStitches, st]);
    }
  };

  // Submit New Artisan
  const handleSaveArtisan = (e) => {
    e.preventDefault();
    if (!artisanName.trim()) {
      alert('Please enter artisan name.');
      return;
    }

    const newArtisan = {
      id: `art-${Date.now()}`,
      name: artisanName,
      role: `Master ${prodCraft} Karigar`,
      mohalla: artisanMohalla,
      experienceYears: parseInt(artisanExp) || 10,
      avatar: artisanPhotoUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      specialtyStitches: selectedStitches,
      generationalLineage: artisanLineage,
      shgGroup: "Chowk Women Crafts Collective",
      completedOrders: 1,
      escrowAccountStatus: `Active UPI (${artisanUpi})`,
      monthlyEarningsOld: 2500,
      monthlyEarningsNew: 8500,
      verifiedPeshgiFree: true,
      voiceNote: {
        duration: "0:25",
        language: "Awadhi / Hindi",
        quote: voiceQuote,
        translation: voiceTranslation
      }
    };

    onAddArtisan(newArtisan);
    setToastMessage(`Artisan "${artisanName}" enrolled into KarigarSetu network!`);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0F382A', '#C5A880', '#C59A2C']
    });

    // Reset Form
    setArtisanName('');
    setArtisanPhotoUrl('');
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Submit New Product
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!prodTitle.trim()) {
      alert('Please enter product title.');
      return;
    }

    const matchedArtisan = artisans.find(a => a.id === prodArtisanId) || artisans[0];
    const price = parseInt(prodRetailPrice) || 3000;
    const artisanPayout = Math.round(price * 0.50); // guaranteed 50%
    const rawMaterialCost = Math.round(price * 0.23);
    const charakFinishing = Math.round(price * 0.08);
    const logisticsKendra = Math.round(price * 0.11);
    const fairMargin = price - artisanPayout - rawMaterialCost - charakFinishing - logisticsKendra;

    const newProduct = {
      id: prodTagId,
      tagId: prodTagId,
      name: prodTitle,
      craftType: prodCraft,
      cluster: prodCluster,
      artisanId: matchedArtisan.id,
      artisanName: matchedArtisan.name,
      artisanRole: matchedArtisan.role || "Master Artisan",
      image: prodPhotoUrl || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      description: prodDesc || `${prodTitle} handcrafted by ${matchedArtisan.name} in ${prodCluster}. Verified GI provenance with zero middleman deductions.`,
      hoursSpent: parseInt(prodHours) || 80,
      daysCrafted: parseInt(prodDays) || 14,
      retailPrice: price,
      costBreakdown: {
        artisanPayout,
        rawMaterialCost,
        charakFinishing,
        logisticsKendra,
        fairMargin
      },
      middlemanExploitationBenchmark: {
        artisanPayout: Math.round(price * 0.066),
        dalalsAndAggregators: Math.round(price * 0.22),
        wholesaleCartel: Math.round(price * 0.33),
        retailerMarkup: Math.round(price * 0.384),
        retailPrice: price
      },
      stitchesUsed: selectedStitches.map(s => ({
        name: s.split(' ')[0],
        type: s,
        verifiedHandmade: true
      })),
      fabricOrigin: prodFabric,
      giCertificate: prodGiCert,
      blockchainHash: `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
      authenticityScore: 99.4,
      features: [
        "100% Handcrafted verified by Kendra QC",
        "Washable herbal Chhapayi block print",
        "Direct Jan Dhan UPI escrow secured",
        "CraftDNA™ NFC chip registered"
      ]
    };

    onAddProduct(newProduct);
    setToastMessage(`Product "${prodTitle}" added with Tag #${prodTagId}!`);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0F382A', '#C5A880', '#C59A2C']
    });

    // Reset Form
    setProdTitle('');
    setProdPhotoUrl('');
    setProdDesc('');
    setProdTagId(`LKO-CHK-${Math.floor(1000 + Math.random() * 9000)}`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Import JSON File
  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.artisans && parsed.products) {
            onImportData(parsed.artisans, parsed.products);
            setToastMessage('Real data imported and saved to persistent storage!');
          } else {
            alert('Invalid JSON structure. Must contain "artisans" and "products" arrays.');
          }
        } catch (err) {
          alert('Failed to parse JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const commonStitches = [
    'Bakhiya (Shadow work)',
    'Jaali (Open lattice)',
    'Phanda (Millet grain knot)',
    'Murri (Rice grain micro-knot)',
    'Tepchi (Linear running stitch)',
    'Keel Kangan (Wristlet knot)',
    'Hath Kati (Thread pull)',
    'Zardozi Badla (Silver wire)',
    'Deg-Bhapka Hydro-distillation'
  ];

  return (
    <div className="py-10 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-6 p-4 rounded-2xl bg-[#0F382A] text-white border border-[#C5A880] shadow-lg flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-[#DFCDA7] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F382A] text-[#DFCDA7] text-xs font-semibold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Chowk Central Nodal Kendra • Administrative Console</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
              Real Data Onboarding & Kendra Verifier
            </h2>
            <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
              Add real artisans, issue tamper-proof CraftDNA™ tags for authentic batches, and manage persistent data saved directly to your browser storage.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 bg-[#FFFDF9] p-1.5 rounded-2xl border border-[#EADFCF] shadow-xs overflow-x-auto">
            <button
              onClick={() => setActiveAdminTab('artisan')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeAdminTab === 'artisan'
                  ? 'bg-[#0F382A] text-white shadow-xs'
                  : 'text-[#5A534E] hover:text-[#1F1C1B]'
              }`}
            >
              + Add Artisan
            </button>
            <button
              onClick={() => setActiveAdminTab('product')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeAdminTab === 'product'
                  ? 'bg-[#0F382A] text-white shadow-xs'
                  : 'text-[#5A534E] hover:text-[#1F1C1B]'
              }`}
            >
              + Add Product Tag
            </button>
            <button
              onClick={() => setActiveAdminTab('qc')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeAdminTab === 'qc'
                  ? 'bg-[#0F382A] text-white shadow-xs'
                  : 'text-[#5A534E] hover:text-[#1F1C1B]'
              }`}
            >
              QC Verifier
            </button>
            <button
              onClick={() => setActiveAdminTab('backup')}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeAdminTab === 'backup'
                  ? 'bg-[#0F382A] text-white shadow-xs'
                  : 'text-[#5A534E] hover:text-[#1F1C1B]'
              }`}
            >
              Backup / Sync
            </button>
          </div>
        </div>

        {/* TAB 1: ADD REAL ARTISAN */}
        {activeAdminTab === 'artisan' && (
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#DBB146]/30 shadow-craft-card space-y-6">
            <div className="pb-4 border-b border-[#F4EEE2] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  Enroll New Grassroots Karigar
                </h3>
                <p className="text-xs text-[#736B65]">
                  Creates a verified artisan identity with voice ledger and Jan Dhan UPI linking.
                </p>
              </div>
              <span className="text-xs font-bold text-[#0F382A] bg-[#F5F8F5] px-3 py-1 rounded-full border border-[#CCD8CC]">
                {artisans.length} Active Artisans
              </span>
            </div>

            <form onSubmit={handleSaveArtisan} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Full Name of Artisan:</label>
                  <input
                    type="text"
                    required
                    value={artisanName}
                    onChange={(e) => setArtisanName(e.target.value)}
                    placeholder="e.g. Shabana Begum / Naseem Bano"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Mohalla / Village Cluster:</label>
                  <input
                    type="text"
                    required
                    value={artisanMohalla}
                    onChange={(e) => setArtisanMohalla(e.target.value)}
                    placeholder="e.g. Phool Wali Gali, Chowk, Lucknow"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Family Lineage / Background:</label>
                  <input
                    type="text"
                    value={artisanLineage}
                    onChange={(e) => setArtisanLineage(e.target.value)}
                    placeholder="e.g. 4th Generation Awadh Jaali Artisan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Years of Handcraft Experience:</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={artisanExp}
                    onChange={(e) => setArtisanExp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Aadhaar Jan Dhan / Direct UPI ID:</label>
                  <input
                    type="text"
                    value={artisanUpi}
                    onChange={(e) => setArtisanUpi(e.target.value)}
                    placeholder="e.g. shabana@jan-dhan / 94150XXXXX@upi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                  <span className="text-[10px] text-[#537154] mt-0.5 block">Zero deduction direct benefit transfer guarantee</span>
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Upload Real Artisan Photo:</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handlePhotoUpload(e, setArtisanPhotoUrl)}
                      className="text-xs text-[#736B65] file:mr-2 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0F382A] file:text-white hover:file:bg-[#18543F]"
                    />
                    {artisanPhotoUrl && (
                      <img src={artisanPhotoUrl} alt="Preview" className="w-10 h-10 rounded-xl object-cover border border-[#0F382A]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Specialty Stitches Checkboxes */}
              <div>
                <label className="font-bold text-[#1F1C1B] block mb-2">Mastered Stitches (Select all that apply):</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {commonStitches.map((st) => {
                    const isChecked = selectedStitches.includes(st);
                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() => handleToggleStitch(st)}
                        className={`p-2 rounded-xl text-left border text-xs font-medium transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#F5F8F5] border-[#0F382A] text-[#0F382A] font-bold'
                            : 'bg-[#FAF7F2] border-[#EADFCF] text-[#5A534E]'
                        }`}
                      >
                        <span>{st}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-[#0F382A]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Voice Greeting Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Voice Greeting Transcript (Awadhi / Hindi):</label>
                  <textarea
                    rows={2}
                    value={voiceQuote}
                    onChange={(e) => setVoiceQuote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">English Translation for Global Buyers:</label>
                  <textarea
                    rows={2}
                    value={voiceTranslation}
                    onChange={(e) => setVoiceTranslation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white font-bold text-xs shadow-soft-glow transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4 text-[#DFCDA7]" />
                <span>Save Real Artisan to Network Ledger</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: ADD REAL PRODUCT & CRAFTDNA TAG */}
        {activeAdminTab === 'product' && (
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#DBB146]/30 shadow-craft-card space-y-6">
            <div className="pb-4 border-b border-[#F4EEE2] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  Issue New CraftDNA™ Provenance Tag
                </h3>
                <p className="text-xs text-[#736B65]">
                  Links an authentic finished piece to its artisan, mill pedigree, and GI certificate.
                </p>
              </div>
              <span className="text-xs font-bold text-[#0F382A] bg-[#F5F8F5] px-3 py-1 rounded-full border border-[#CCD8CC]">
                {products.length} Tagged Masterpieces
              </span>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Product Title:</label>
                  <input
                    type="text"
                    required
                    value={prodTitle}
                    onChange={(e) => setProdTitle(e.target.value)}
                    placeholder="e.g. Pure Mulmul Ivory Bakhiya Kurta"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Craft Category:</label>
                  <select
                    value={prodCraft}
                    onChange={(e) => setProdCraft(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium"
                  >
                    <option>Chikankari</option>
                    <option>Zardozi</option>
                    <option>Attar</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Associate Master Artisan:</label>
                  <select
                    value={prodArtisanId}
                    onChange={(e) => setProdArtisanId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium"
                  >
                    {artisans.map((a) => (
                      <option key={a.id} value={a.id}>{a.name} ({a.mohalla})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Tag Serial ID:</label>
                  <input
                    type="text"
                    value={prodTagId}
                    onChange={(e) => setProdTagId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] font-mono text-xs font-bold text-[#0F382A]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Finished Retail Price (₹):</label>
                  <input
                    type="number"
                    min="500"
                    step="50"
                    value={prodRetailPrice}
                    onChange={(e) => setProdRetailPrice(parseInt(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-bold text-[#1F1C1B]"
                  />
                  <span className="text-[10px] text-[#537154] block mt-0.5">
                    Guaranteed Artisan Share: 50% (₹{Math.round(prodRetailPrice * 0.50)})
                  </span>
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Hand Labor Hours & Days:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Hours"
                      value={prodHours}
                      onChange={(e) => setProdHours(e.target.value)}
                      className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                    />
                    <input
                      type="number"
                      placeholder="Days"
                      value={prodDays}
                      onChange={(e) => setProdDays(e.target.value)}
                      className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Mill Fabric / Distillate Pedigree:</label>
                  <input
                    type="text"
                    value={prodFabric}
                    onChange={(e) => setProdFabric(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#1F1C1B] block mb-1">Upload Real Garment Photo:</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handlePhotoUpload(e, setProdPhotoUrl)}
                      className="text-xs text-[#736B65] file:mr-2 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#0F382A] file:text-white hover:file:bg-[#18543F]"
                    />
                    {prodPhotoUrl && (
                      <img src={prodPhotoUrl} alt="Preview" className="w-10 h-10 rounded-xl object-cover border border-[#0F382A]" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="font-bold text-[#1F1C1B] block mb-1">Story & Craft Description:</label>
                <textarea
                  rows={2}
                  value={prodDesc}
                  onChange={(e) => setProdDesc(e.target.value)}
                  placeholder="Describe the fabric weave, traditional motifs, and handcut openwork..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white font-bold text-xs shadow-soft-glow transition-all flex items-center justify-center gap-2"
              >
                <PackagePlus className="w-4 h-4 text-[#DFCDA7]" />
                <span>Issue & Register CraftDNA™ Provenance Tag</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: QC VERIFIER (Role D from Prompt) */}
        {activeAdminTab === 'qc' && (
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#DBB146]/30 shadow-craft-card space-y-6">
            <div className="pb-4 border-b border-[#F4EEE2] flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  Nodal Kendra Quality & Escrow Verifier
                </h3>
                <p className="text-xs text-[#736B65]">
                  Field Inspector: Zeenat Fatima (Lead Sahayika, Chowk Kendra #01)
                </p>
              </div>
              <span className="text-xs font-bold text-[#537154] bg-[#F5F8F5] px-3 py-1 rounded-full border border-[#CCD8CC]">
                100% Physical Inspection
              </span>
            </div>

            <div className="space-y-4 text-xs text-[#5A534E]">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-3">
                <span className="font-bold text-[#1F1C1B] block text-sm">Chowk Kendra 5-Point Physical Audit Checklist:</span>
                
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white border border-[#EADFCF]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0F382A]" />
                  <span><strong>Stitch Tension Audit:</strong> Verified irregular human knot tension (Phanda & Jaali) confirming zero Schiffli machine replica.</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white border border-[#EADFCF]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0F382A]" />
                  <span><strong>Charak & Washing Test:</strong> Completed organic Gomti herbal wash to eliminate washable indigo Chhapayi block printing.</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white border border-[#EADFCF]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0F382A]" />
                  <span><strong>Material Purity Verification:</strong> Verified BIS 98.5% silver hallmark on Zari wire / GC-MS report on sandalwood oil.</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white border border-[#EADFCF]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0F382A]" />
                  <span><strong>Direct Escrow Disbursement:</strong> 50% milestone advance credited to artisan's Aadhaar-linked Jan Dhan bank account.</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white border border-[#EADFCF]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#0F382A]" />
                  <span><strong>Physical NFC/QR Chip Sewn:</strong> Encrypted CraftDNA thread woven into lower left hemline with public ledger hash.</span>
                </label>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] flex items-center justify-between">
                <div>
                  <strong className="text-[#0F382A] text-sm block">GI Registry #119 Seal Active</strong>
                  <span className="text-[11px] text-[#537154]">All verified batches are automatically broadcast to the ONDC buyer network.</span>
                </div>
                <span className="text-xs font-bold text-[#0F382A] bg-white px-3 py-1.5 rounded-xl border border-[#CCD8CC]">
                  ✓ Verified Batch
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BACKUP & DATA SYNC */}
        {activeAdminTab === 'backup' && (
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#DBB146]/30 shadow-craft-card space-y-6">
            <div className="pb-4 border-b border-[#F4EEE2]">
              <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                Data Management & Persistence
              </h3>
              <p className="text-xs text-[#736B65]">
                Export your real artisan and product records as JSON for backups or git commits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Download JSON */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-3 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1F1C1B]">Download JSON Backup</h4>
                  <p className="text-[#5A534E] text-[11px] mt-1">
                    Exports all {artisans.length} artisans and {products.length} products to a downloadable file.
                  </p>
                </div>

                <button
                  onClick={() => exportDataAsJsonFile(artisans, products)}
                  className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#DFCDA7]" />
                  <span>Download .json Backup</span>
                </button>
              </div>

              {/* Import JSON */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-3 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1F1C1B]">Import Existing JSON</h4>
                  <p className="text-[#5A534E] text-[11px] mt-1">
                    Upload an exported KarigarSetu JSON file to restore your customized database.
                  </p>
                </div>

                <label className="w-full min-h-[44px] py-2.5 px-4 rounded-xl bg-[#FFFDF9] hover:bg-[#FDF9EE] border border-[#0F382A] text-[#0F382A] font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4" />
                  <span>Select .json File to Restore</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileImport}
                    className="hidden"
                  />
                </label>
              </div>

            </div>

            {/* Reset to initial demo data */}
            <div className="pt-4 border-t border-[#F4EEE2] flex items-center justify-between">
              <span className="text-xs text-[#736B65]">Want to restore original demo seed records?</span>
              <button
                onClick={onResetData}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#D56348] hover:bg-[#FDF5F2] border border-[#F4CEBF] transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Seed Data</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
