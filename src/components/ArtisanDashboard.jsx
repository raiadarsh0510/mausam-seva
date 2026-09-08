import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Coins, 
  Layers, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  TrendingUp, 
  PlusCircle, 
  X, 
  UploadCloud, 
  Check,
  Send,
  HelpCircle,
  MapPin,
  FileText,
  Volume2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/i18n';
import { rawMaterials } from '../data/materials';

export default function ArtisanDashboard({ language }) {
  const t = translations[language] || translations.hi;

  // Khata balances
  const [clearedBalance, setClearedBalance] = useState(3850);
  const [pendingBalance, setPendingBalance] = useState(2400);
  const [completedKurtasCount, setCompletedKurtasCount] = useState(14);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(false);

  // Active Piece-rate work orders
  const [workOrders, setWorkOrders] = useState([
    {
      id: 'WO-8841',
      title: 'Royal White Mulmul Angrakha',
      craft: 'Chikankari (Bakhiya & Jaali)',
      mohalla: 'Phool Wali Gali, Chowk',
      totalPieces: 4,
      pieceRate: 950,
      totalEarnable: 3800,
      milestonePercent: 50,
      advanceAvailable: 950,
      advanceClaimed: false,
      status: 'In Progress (50% Milestone Ready)'
    },
    {
      id: 'WO-3920',
      title: 'Silk Organza Zari Border Dupatta',
      craft: 'Zardozi (Badla & Salma)',
      mohalla: 'Nakhas Atelier #4',
      totalPieces: 2,
      pieceRate: 1950,
      totalEarnable: 3900,
      milestonePercent: 30,
      advanceAvailable: 600,
      advanceClaimed: false,
      status: 'Block Print Received'
    }
  ]);

  // Voice Listing Modal State
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptText, setTranscriptText] = useState('');
  const [draftListing, setDraftListing] = useState(null);
  const [isSubmittingDraft, setIsSubmittingDraft] = useState(false);
  const [draftSuccessToast, setDraftSuccessToast] = useState(null);

  // Group Material Pooling Orders
  const [joinedPools, setJoinedPools] = useState({});

  // Trigger Voice Recording Simulation or Web Speech
  const handleStartVoiceRecording = () => {
    setIsRecording(true);
    setTranscriptText('');
    setDraftListing(null);

    // Simulate voice recording and transcription in Awadhi/Hindi
    setTimeout(() => {
      const sampleAwadhi = language === 'hi'
        ? "६ सफेद जॉर्जेट कुर्ते, बखिया और जाली का काम पूरा, काकोरी क्लस्टर"
        : "6 white georgette kurtas with shadow-work done, Kakori cluster";
      setTranscriptText(sampleAwadhi);
      setIsRecording(false);

      // Auto-fill draft
      setDraftListing({
        itemName: language === 'hi' ? "सफेद जॉर्जेट बखिया व जाली कुर्ता" : "White Georgette Bakhiya & Jaali Kurta",
        category: "Chikankari",
        fabric: "100s Count Georgette / Mulmul",
        stitches: ["Bakhiya (Shadow work)", "Jaali (Lattice)"],
        pieces: 6,
        estimatedPieceRate: 900,
        totalArtisanPayout: 5400,
        nodalKendra: "Chowk Central Kendra #01"
      });
    }, 2800);
  };

  const handleSubmitDraftListing = () => {
    setIsSubmittingDraft(true);
    setTimeout(() => {
      setIsSubmittingDraft(false);
      setIsVoiceModalOpen(false);
      setDraftSuccessToast(draftListing.itemName);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0F382A', '#C5A880', '#C59A2C']
      });

      // Add as pending order
      setWorkOrders(prev => [
        {
          id: `WO-${Math.floor(1000 + Math.random() * 9000)}`,
          title: draftListing.itemName,
          craft: `${draftListing.category} (${draftListing.stitches.join(', ')})`,
          mohalla: 'Chowk Kendra',
          totalPieces: draftListing.pieces,
          pieceRate: draftListing.estimatedPieceRate,
          totalEarnable: draftListing.totalArtisanPayout,
          milestonePercent: 10,
          advanceAvailable: 500,
          advanceClaimed: false,
          status: 'Submitted to Nodal Kendra for Inspection'
        },
        ...prev
      ]);

      setTimeout(() => {
        setDraftSuccessToast(null);
      }, 5000);
    }, 1200);
  };

  const handleClaimMilestone = (orderId) => {
    setWorkOrders(prev => prev.map(wo => {
      if (wo.id === orderId && !wo.advanceClaimed) {
        setClearedBalance(b => b + wo.advanceAvailable);
        setPendingBalance(p => Math.max(0, p - wo.advanceAvailable));
        return { ...wo, advanceClaimed: true, status: '50% Milestone Paid via UPI' };
      }
      return wo;
    }));

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#0F382A', '#C59A2C', '#6B8C6C']
    });
  };

  const handleInstantUpiWithdrawal = () => {
    if (clearedBalance <= 0) return;
    setIsWithdrawing(true);
    setTimeout(() => {
      setIsWithdrawing(false);
      setWithdrawalSuccess(true);
      setClearedBalance(0);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#0F382A', '#C59A2C', '#6B8C6C']
      });
      setTimeout(() => {
        setWithdrawalSuccess(false);
      }, 4000);
    }, 1500);
  };

  const handleJoinPool = (matId) => {
    setJoinedPools(prev => ({ ...prev, [matId]: true }));
  };

  return (
    <div className="py-8 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Toast Alert */}
        {draftSuccessToast && (
          <div className="mb-6 p-4 rounded-2xl bg-[#0F382A] text-white border border-[#C5A880]/50 shadow-lg flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#DFCDA7] shrink-0" />
              <span>
                <strong>ड्राफ्ट जमा हुआ:</strong> {draftSuccessToast} चौक केंद्र पर जांच के लिए भेज दिया गया है।
              </span>
            </div>
            <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded text-[#DFCDA7]">
              जांच लंबित
            </span>
          </div>
        )}

        {withdrawalSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-[#0F382A] text-white border border-[#C5A880] shadow-lg flex items-center gap-3 animate-fadeIn">
            <CheckCircle2 className="w-6 h-6 text-[#DFCDA7] shrink-0" />
            <div>
              <h4 className="text-sm font-bold">UPI भुगतान सफल!</h4>
              <p className="text-xs text-[#DFCDA7]">
                राशि सीधे आपके आधार से जुड़े जन धन बैंक खाते में जमा कर दी गई है। शून्य बिचौलिया कटौती।
              </p>
            </div>
          </div>
        )}

        {/* Top Karigar Header Card */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 border-2 border-[#DBB146]/40 shadow-craft-card mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F4EEE2]">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&q=80"
                  alt="Shabana Begum"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#0F382A] shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0F382A] border-2 border-white flex items-center justify-center text-white text-[10px]">
                  ✓
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#0F382A] bg-[#F5F8F5] px-2.5 py-0.5 rounded border border-[#CCD8CC]">
                  सत्यापित मास्टर कारीगर (GI Tag #119)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C1B] mt-1">
                  {t.artisanWelcome}
                </h2>
                <p className="text-xs text-[#736B65] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C59A2C]" />
                  {t.artisanMohalla}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] text-[#736B65] uppercase font-semibold block">कुल पूर्ण परिधान</span>
              <span className="font-serif text-2xl font-bold text-[#0F382A]">
                {completedKurtasCount} कुर्तियां
              </span>
              <span className="text-[10px] text-[#537154] font-medium block">
                रेटिंग: 4.9★ (शून्य मशीन मिलावट)
              </span>
            </div>
          </div>

          {/* Giant Accessible Action Trigger: "बोल कर उत्पाद जोड़ें" */}
          <div className="pt-6">
            <button
              onClick={() => setIsVoiceModalOpen(true)}
              className="w-full min-h-[56px] py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0F382A] to-[#18543F] hover:from-[#0A271D] hover:to-[#0F382A] text-white shadow-soft-glow transition-all flex items-center justify-between group border border-[#C5A880]/50"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#DFCDA7] group-hover:scale-110 transition-transform">
                  <Mic className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-bold block leading-tight">
                    {t.addViaVoiceBtn}
                  </span>
                  <span className="text-[11px] text-[#DFCDA7]">
                    {t.addViaVoiceSub}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#DFCDA7] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Section 2: Digital 'Khata' (Earnings Ledger) */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-[#F4EEE2]">
            <div className="flex items-center gap-2.5">
              <Coins className="w-5 h-5 text-[#0F382A]" />
              <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">
                {t.myKhataTitle}
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-[#0F382A] bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
              जन धन DBT खाता सुरक्षित
            </span>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            {/* Cleared Balance */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5F8F5] to-[#E8EFE8] border border-[#CCD8CC] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3F5640] uppercase tracking-wider block">
                  {t.clearedBalance}
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0F382A] mt-1">
                  ₹{clearedBalance.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-[#537154] mt-1">
                  {t.upiSubtext}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleInstantUpiWithdrawal}
                  disabled={isWithdrawing || clearedBalance <= 0}
                  className={`w-full min-h-[48px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    clearedBalance > 0
                      ? 'bg-[#0F382A] hover:bg-[#18543F] text-white shadow-soft-glow'
                      : 'bg-[#CCD8CC] text-[#5A534E] cursor-not-allowed'
                  }`}
                >
                  <Coins className="w-4 h-4 text-[#DFCDA7]" />
                  <span>
                    {isWithdrawing ? 'UPI से ट्रांसफर हो रहा है...' : t.instantUpiBtn}
                  </span>
                </button>
              </div>
            </div>

            {/* Pending Work Escrow */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FDF9EE] to-[#FAF7F2] border border-[#E8CA76]/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#846217] uppercase tracking-wider block">
                  {t.pendingWork}
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#A98121] mt-1">
                  ₹{pendingBalance.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-[#736B65] mt-1">
                  निर्माणाधीन परिधानों की सुरक्षित एस्क्रो राशि, माइलस्टोन पूरा होने पर उपलब्ध
                </p>
              </div>

              <div className="pt-4">
                <div className="p-2.5 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/30 text-xs text-[#5A534E] flex items-center justify-between">
                  <span>सक्रिय वर्क ऑर्डर:</span>
                  <span className="font-bold text-[#1F1C1B]">{workOrders.length} ऑर्डर</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Work Orders List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-[#5A534E] uppercase tracking-wider">
              {t.activeWorkOrders}
            </h4>

            <div className="space-y-3">
              {workOrders.map((wo) => (
                <div
                  key={wo.id}
                  className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#0F382A] bg-[#FFFDF9] px-2 py-0.5 rounded border border-[#EADFCF]">
                        #{wo.id}
                      </span>
                      <h5 className="font-serif text-base font-bold text-[#1F1C1B]">{wo.title}</h5>
                    </div>
                    <p className="text-xs text-[#5A534E]">{wo.craft} ✦ {wo.mohalla}</p>
                    <div className="text-[11px] text-[#736B65] flex items-center gap-3">
                      <span>{wo.totalPieces} पीस @ ₹{wo.pieceRate}/पीस</span>
                      <span>•</span>
                      <strong className="text-[#0F382A]">कुल मेहनताना: ₹{wo.totalEarnable}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {wo.advanceClaimed ? (
                      <span className="min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold bg-[#E8EFE8] text-[#3F5640] border border-[#CCD8CC] flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-[#537154]" />
                        <span>{t.milestoneClaimed} (₹{wo.advanceAvailable})</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => handleClaimMilestone(wo.id)}
                        className="min-h-[48px] px-4 py-2 rounded-xl text-xs font-bold bg-[#0F382A] hover:bg-[#18543F] text-white shadow-sm transition-all flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#DFCDA7]" />
                        <span>{t.claimMilestone} (₹{wo.advanceAvailable})</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Group Raw-Material Procurement Pooling */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F4EEE2]">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#0F382A]" />
                <h3 className="font-serif text-xl font-bold text-[#1F1C1B]">
                  कच्चा माल समूह पूल (Group Fabric & Zari Pool)
                </h3>
              </div>
              <p className="text-xs text-[#736B65] mt-0.5">
                भिवंडी व सूरत की मिलों से सीधा होलसेल रेट पर बिना किसी न्यूनतम ऑर्डर (Zero MOQ) के कपड़ा मंगाएं
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#537154] bg-[#F5F8F5] px-2.5 py-1 rounded-full border border-[#CCD8CC] self-start sm:self-auto">
              33% की सीधी बचत
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {rawMaterials.slice(0, 2).map((mat) => {
              const hasJoined = joinedPools[mat.id];
              return (
                <div key={mat.id} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#846217] uppercase bg-[#FDF9EE] px-2 py-0.5 rounded border border-[#E8CA76]/40">
                        {mat.category}
                      </span>
                      <span className="text-xs font-bold text-[#537154]">बचत: {mat.savingsPercent}%</span>
                    </div>
                    <h5 className="font-serif text-base font-bold text-[#1F1C1B] mt-1">{mat.name}</h5>
                    <p className="text-[11px] text-[#5A534E] mt-0.5">{mat.origin}</p>
                    <div className="mt-2 text-xs font-bold text-[#0F382A]">
                      मिल रेट: ₹{mat.millDirectPricePerUnit} <span className="line-through text-[#736B65] font-normal text-[10px]">(महाजन रेट: ₹{mat.localDalalPricePerUnit})</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleJoinPool(mat.id)}
                    disabled={hasJoined}
                    className={`w-full min-h-[48px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      hasJoined
                        ? 'bg-[#E8EFE8] text-[#3F5640] border border-[#CCD8CC]'
                        : 'bg-[#0F382A] hover:bg-[#18543F] text-white shadow-sm'
                    }`}
                  >
                    {hasJoined ? (
                      <>
                        <Check className="w-4 h-4 text-[#537154]" />
                        <span>समूह ऑर्डर में शामिल (डिलीवरी कल)</span>
                      </>
                    ) : (
                      <>
                        <span>समूह ऑर्डर में 1 थान जोड़ें</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DFCDA7]" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Action Button (FAB) on mobile */}
      <div className="fixed bottom-6 right-6 z-40 sm:hidden">
        <button
          onClick={() => setIsVoiceModalOpen(true)}
          className="w-14 h-14 rounded-full bg-[#0F382A] text-white flex items-center justify-center shadow-2xl border-2 border-[#C5A880] ring-4 ring-[#0F382A]/20"
        >
          <Mic className="w-6 h-6 text-[#DFCDA7] animate-pulse" />
        </button>
      </div>

      {/* MODAL: "बोल कर उत्पाद जोड़ें" (Add Product via Voice) */}
      {isVoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#C5A880] shadow-2xl space-y-6">
            <button
              onClick={() => setIsVoiceModalOpen(false)}
              className="absolute top-4 right-4 text-[#736B65] hover:text-[#1F1C1B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#0F382A] text-[#DFCDA7] flex items-center justify-center mx-auto border border-[#C5A880]/50 shadow-soft-glow">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                {t.voiceModalTitle}
              </h3>
              <p className="text-xs text-[#5A534E] max-w-sm mx-auto">
                {t.voiceModalDesc}
              </p>
            </div>

            {/* Pulsing Mic Interactive Zone */}
            <div className="py-4 text-center space-y-4">
              <div className="flex items-center justify-center">
                <button
                  onClick={handleStartVoiceRecording}
                  disabled={isRecording}
                  className={`w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-300 relative ${
                    isRecording
                      ? 'bg-[#D56348] text-white ring-8 ring-[#D56348]/20 animate-pulse'
                      : 'bg-[#0F382A] hover:bg-[#18543F] text-white shadow-soft-glow hover:scale-105'
                  }`}
                >
                  <Mic className="w-9 h-9 text-[#DFCDA7]" />
                  <span className="text-[10px] font-bold mt-1 text-[#DFCDA7]">
                    {isRecording ? 'सुन रहे हैं...' : 'माइक दबाएं'}
                  </span>
                </button>
              </div>

              <div className="text-xs text-[#736B65]">
                {isRecording ? (
                  <span className="font-semibold text-[#D56348] animate-pulse">
                    ● आवाज रिकॉर्ड हो रही है... अपना विवरण बोलें
                  </span>
                ) : (
                  <span>उदाहरण बोलें: <em>{t.voiceSamplePrompt1}</em></span>
                )}
              </div>

              {/* Transcription Result Box */}
              {transcriptText && (
                <div className="p-3.5 rounded-2xl bg-[#FDF9EE] border border-[#E8CA76]/50 text-left text-xs space-y-1 animate-fadeIn">
                  <span className="text-[10px] uppercase font-bold text-[#846217] block">
                    आवाज से पहचाना गया पाठ (Transcribed Audio):
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#1F1C1B]">
                    "{transcriptText}"
                  </p>
                </div>
              )}
            </div>

            {/* Draft Result Form */}
            {draftListing && (
              <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-3 text-xs animate-fadeIn">
                <div className="flex items-center justify-between font-bold text-[#0F382A] pb-2 border-b border-[#CCD8CC]/50">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#537154]" />
                    {t.voiceDraftDetected}
                  </span>
                  <span className="text-[10px] text-[#537154] bg-white px-2 py-0.5 rounded">
                    ऑटो-फिल हुआ
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[#2F2B28]">
                  <div>
                    <span className="text-[10px] text-[#736B65] block">उत्पाद का नाम:</span>
                    <strong>{draftListing.itemName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B65] block">कढ़ाई के टांके:</span>
                    <strong>{draftListing.stitches.join(', ')}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B65] block">संख्या:</span>
                    <strong>{draftListing.pieces} कुर्ते</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#736B65] block">अनुमानित मेहनताना:</span>
                    <strong className="text-[#0F382A]">₹{draftListing.totalArtisanPayout} (₹{draftListing.estimatedPieceRate}/पीस)</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSubmitDraftListing}
                    disabled={isSubmittingDraft}
                    className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white font-bold text-xs shadow-soft-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#DFCDA7]" />
                    <span>
                      {isSubmittingDraft ? 'चौक केंद्र को भेजा जा रहा है...' : t.submitDraftToKendra}
                    </span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
