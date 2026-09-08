import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Coins, 
  Smartphone, 
  UploadCloud, 
  RefreshCw, 
  AlertCircle,
  Play,
  Pause,
  Layers,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KarigarStudio() {
  const [activeVoicePrompt, setActiveVoicePrompt] = useState(null);
  const [isPlayingPromptAudio, setIsPlayingPromptAudio] = useState(false);
  const [isScanningStitch, setIsScanningStitch] = useState(false);
  const [stitchScanResult, setStitchScanResult] = useState(null);
  const [escrowBalance, setEscrowBalance] = useState(2100);
  const [payoutLogs, setPayoutLogs] = useState([
    { id: 'tx-1', date: 'Yesterday, 4:15 PM', desc: 'Milestone 1: Chhapayi Indigo Block Print Received', amount: 300, status: 'Credited' },
    { id: 'tx-2', date: '3 days ago', desc: 'Fabric Dispatch: Bhiwandi 100s Mulmul Allocated', amount: 0, status: 'Zero-Collateral Delivery' }
  ]);
  const [isPayoutProcessing, setIsPayoutProcessing] = useState(false);

  const voicePrompts = [
    {
      id: 'vp-1',
      title: 'Report 50% Embroidery Milestone',
      dialect: 'Awadhi',
      audioText: '“दीदी, हमार आधा काम पूरा होइ गवा है। बखिया और जाली बढ़िया बनी है, फोटो भेज रहे हैं।”',
      translation: '“Sister, half my embroidery work is done. The shadow Bakhiya and Jaali are crafted nicely, sending the inspection photo now.”',
      actionType: 'milestone'
    },
    {
      id: 'vp-2',
      title: 'Request Mill Fabric from Kendra',
      dialect: 'Urdu / Hindi',
      audioText: '“चौक केंद्र से दो थान भिवंडी मलमल और सफेद सिल्क लच्छी कल सुबह भिजवा दीजिये।”',
      translation: '“Please dispatch 2 Thaans of Bhiwandi Mulmul and white silk thread skeins from Chowk Kendra tomorrow morning.”',
      actionType: 'material'
    },
    {
      id: 'vp-3',
      title: 'Check Direct Bank Balance',
      dialect: 'Awadhi',
      audioText: '“कारीगर सेतु, हमार पिछले हफ्ते के तीन कुर्तों का पैसा खाते में आ गया क्या?”',
      translation: '“KarigarSetu, has the payment for my three kurtas from last week arrived in my bank account?”',
      actionType: 'balance'
    }
  ];

  const handleTriggerVoicePrompt = (prompt) => {
    setActiveVoicePrompt(prompt);
    setIsPlayingPromptAudio(true);
    setTimeout(() => {
      setIsPlayingPromptAudio(false);
    }, 4000);
  };

  const handleSimulateStitchScan = () => {
    setIsScanningStitch(true);
    setStitchScanResult(null);

    setTimeout(() => {
      setIsScanningStitch(false);
      setStitchScanResult({
        authenticity: 99.4,
        detectedStitches: ['Bakhiya (Shadow work)', 'Phanda (Millet grain knot)', 'Jaali (Open lattice)'],
        tensionConsistency: 'Manual human variance (authentic)',
        machineReplicaRisk: '0.2% (Pure Handcrafted)',
        qcStatus: 'Approved for Milestone Payout'
      });
    }, 2200);
  };

  const handleReleaseEscrowPayout = () => {
    setIsPayoutProcessing(true);
    setTimeout(() => {
      setIsPayoutProcessing(false);
      const newAmount = 750;
      setEscrowBalance(prev => prev + newAmount);
      setPayoutLogs(prev => [
        {
          id: `tx-${Date.now()}`,
          date: 'Just now',
          desc: 'Milestone 2 Verified: 50% Hand Embroidery (Bakhiya & Jaali)',
          amount: newAmount,
          status: 'Credited instantly via UPI'
        },
        ...prev
      ]);

      // Fire celebratory confetti for fair-trade emancipation
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C59A2C', '#6B8C6C', '#D56348', '#DBB146']
      });
    }, 1200);
  };

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF9EE] border border-[#DBB146]/40 text-xs font-semibold text-[#846217] mb-2">
            <Mic className="w-3.5 h-3.5 text-[#C59A2C]" />
            <span>Inclusive Voice-First Technology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
            Voice-First Karigar Studio (WhatsApp & Nodal Kendra)
          </h2>
          <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
            Over 80% of female artisans in Chowk & Kakori cannot navigate complex apps. KarigarSetu enables them to manage orders, submit quality proofs, and receive UPI milestone advances purely through voice notes.
          </p>
        </div>

        {/* Studio Simulation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive WhatsApp Voice Assistant */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4EEE2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#6B8C6C]/20 border border-[#6B8C6C]/40 flex items-center justify-center text-[#3F5640]">
                    <Smartphone className="w-5 h-5 text-[#537154]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1F1C1B]">
                      Awadhi / Urdu Voice Bot Simulator
                    </h3>
                    <p className="text-[11px] text-[#736B65]">Connected to Shabana Begum's WhatsApp</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#6B8C6C]/20 text-[#3F5640] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#537154] animate-ping"></span>
                  Online
                </span>
              </div>

              {/* Voice Prompts to Try */}
              <div className="py-4 space-y-3">
                <span className="text-xs font-semibold text-[#5A534E] block">
                  Tap to simulate a voice note sent by an artisan:
                </span>

                <div className="space-y-2.5">
                  {voicePrompts.map((vp) => (
                    <button
                      key={vp.id}
                      onClick={() => handleTriggerVoicePrompt(vp)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all text-xs space-y-1.5 ${
                        activeVoicePrompt?.id === vp.id
                          ? 'bg-[#FDF9EE] border-[#C59A2C] shadow-sm'
                          : 'bg-[#FAF7F2] border-[#EADFCF] hover:border-[#DBB146]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1F1C1B] flex items-center gap-1.5">
                          <Mic className="w-3.5 h-3.5 text-[#C59A2C]" />
                          {vp.title}
                        </span>
                        <span className="text-[10px] text-[#846217] bg-[#F9F0D6] px-2 py-0.5 rounded-full font-medium">
                          {vp.dialect}
                        </span>
                      </div>
                      <p className="text-xs italic text-[#5A534E]">{vp.audioText}</p>
                      <p className="text-[11px] text-[#736B65] font-normal">
                        <strong>English:</strong> {vp.translation}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Voice Interaction Box */}
              {activeVoicePrompt && (
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#DBB146]/40 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#2F2B28]">Voice Recognition Audio Stream:</span>
                    <span className="font-mono text-[#A98121] text-[11px]">
                      {isPlayingPromptAudio ? 'Listening & Transcribing...' : 'Verified by Awadhi NLP'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 h-6 bg-[#FFFDF9] px-3 rounded-lg border border-[#EADFCF]">
                    {[10, 24, 38, 18, 42, 28, 50, 20, 34, 48, 16, 30, 44, 22, 14, 32].map((v, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-200 ${
                          isPlayingPromptAudio ? 'bg-[#C59A2C] animate-pulse' : 'bg-[#EADFCF]'
                        }`}
                        style={{ height: `${isPlayingPromptAudio ? v : 20}%` }}
                      ></div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFFDF9] border border-[#6B8C6C]/40 flex items-center justify-between text-xs">
                    <span className="text-[#3F5640] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#537154]" />
                      Intent: <strong>{activeVoicePrompt.title}</strong>
                    </span>
                    <span className="text-[10px] text-[#736B65]">Response Time: 0.4s</span>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: AI Stitch Scanner & Milestone Escrow */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* AI Stitch Quality Diagnostic Box */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4EEE2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF9EE] border border-[#DBB146]/50 flex items-center justify-center text-[#C59A2C]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1F1C1B]">
                      AI Stitch Authenticity & Density Scanner
                    </h3>
                    <p className="text-[11px] text-[#736B65]">Computer-vision trained on 40,000+ Awadh hand stitches</p>
                  </div>
                </div>
              </div>

              <div className="py-4 space-y-4">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] text-center space-y-3">
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#FFFDF9] border border-[#DBB146]/30 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
                      alt="Chikankari Texture"
                      className="w-full h-full object-cover opacity-80"
                    />
                    {isScanningStitch && (
                      <div className="absolute inset-0 bg-[#C59A2C]/20 backdrop-blur-xs flex flex-col items-center justify-center">
                        <RefreshCw className="w-8 h-8 text-white animate-spin mb-2" />
                        <span className="text-xs font-bold text-white tracking-wide bg-black/50 px-3 py-1 rounded-full">
                          Analyzing Thread Tension & Stitches...
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSimulateStitchScan}
                    disabled={isScanningStitch}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FFFDF9] hover:bg-[#FDF9EE] border border-[#DBB146]/60 text-xs font-bold text-[#846217] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Camera className="w-4 h-4 text-[#C59A2C]" />
                    <span>{isScanningStitch ? 'Scanning In Progress...' : 'Simulate Artisan Photo Inspection'}</span>
                  </button>
                </div>

                {/* Scan Results */}
                {stitchScanResult && (
                  <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-2.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-bold text-[#3F5640]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#537154]" />
                        Stitch Purity: {stitchScanResult.authenticity}%
                      </span>
                      <span className="bg-[#FFFDF9] px-2 py-0.5 rounded text-[10px] border border-[#CCD8CC]">
                        GI Certified Grade-A
                      </span>
                    </div>

                    <div className="text-xs text-[#5A534E] space-y-1">
                      <p><strong>Identified:</strong> {stitchScanResult.detectedStitches.join(', ')}</p>
                      <p><strong>Machine Replica Risk:</strong> {stitchScanResult.machineReplicaRisk}</p>
                      <p><strong>Status:</strong> <span className="font-semibold text-[#537154]">{stitchScanResult.qcStatus}</span></p>
                    </div>

                    {/* Escrow Release Button */}
                    <div className="pt-2">
                      <button
                        onClick={handleReleaseEscrowPayout}
                        disabled={isPayoutProcessing}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#6B8C6C] hover:bg-[#537154] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                      >
                        <Coins className="w-4 h-4" />
                        <span>
                          {isPayoutProcessing ? 'Releasing ₹750 via UPI...' : 'Release ₹750 Instant Milestone Advance'}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Live Jan Dhan / UPI Escrow Balance Box */}
            <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-[#DBB146]/30 shadow-craft-card space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#736B65] uppercase tracking-wide font-semibold block">
                    Shabana Begum's Direct Escrow Balance
                  </span>
                  <div className="text-3xl font-bold font-serif text-[#1F1C1B] mt-0.5">
                    ₹{escrowBalance.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#537154] bg-[#F5F8F5] px-2.5 py-1 rounded-full border border-[#CCD8CC]">
                    Jan Dhan DBT Linked
                  </span>
                  <span className="text-[10px] text-[#736B65] block mt-1">Zero Middleman Deductions</span>
                </div>
              </div>

              {/* Payout Activity Logs */}
              <div className="space-y-2 border-t border-[#F4EEE2] pt-3">
                <span className="text-xs font-semibold text-[#5A534E] block">Recent Escrow Milestones:</span>
                <div className="space-y-2">
                  {payoutLogs.slice(0, 3).map((log) => (
                    <div key={log.id} className="p-2 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-[#2F2B28] block">{log.desc}</span>
                        <span className="text-[10px] text-[#736B65]">{log.date}</span>
                      </div>
                      <div className="text-right">
                        {log.amount > 0 && (
                          <span className="font-bold text-[#537154] block">+₹{log.amount}</span>
                        )}
                        <span className="text-[10px] text-[#846217]">{log.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
