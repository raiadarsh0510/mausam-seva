import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Coins, 
  Calendar, 
  Send,
  Layers,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { translations } from '../data/i18n';

export default function CustomBatchModal({ product, onClose, language }) {
  const t = translations[language] || translations.en;
  const [pieces, setPieces] = useState(25);
  const [selectedFabric, setSelectedFabric] = useState('Bhiwandi 100s Pure Mulmul Cotton');
  const [customNotes, setCustomNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const pricePerPiece = 2400; // wholesale fair rate
  const totalBatchCost = pieces * pricePerPiece;
  const milestoneDeposit = Math.round(totalBatchCost * 0.30); // 30% initial escrow deposit

  const handleSubmitBatch = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderConfirmed(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0F382A', '#C5A880', '#C59A2C']
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#0F382A] shadow-2xl space-y-6 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#736B65] hover:text-[#1F1C1B]"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-[#0F382A] text-[#DFCDA7] flex items-center justify-center mx-auto shadow-soft-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
              Custom Batch Escrow Locked!
            </h3>
            <p className="text-xs text-[#5A534E] max-w-sm mx-auto leading-relaxed">
              Your order for <strong>{pieces} pieces</strong> has been assigned to the <strong>Noor Women Handcraft Collective in Chowk</strong>. 
              The initial 30% escrow deposit (₹{milestoneDeposit.toLocaleString('en-IN')}) has been secured in the Karigar Escrow Contract.
            </p>
            <div className="p-3 bg-[#FDF9EE] rounded-xl border border-[#E8CA76]/40 text-xs text-[#846217] max-w-sm mx-auto font-medium">
              Chowk Nodal Kendra Coordinator Zeenat Fatima will coordinate milestone inspections.
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#0F382A] text-white text-xs font-bold shadow-soft-glow"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF9EE] border border-[#DBB146]/40 text-[10px] font-bold text-[#846217] mb-2 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C59A2C]" />
                <span>B2B Direct Cluster Procurement</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                {t.customBatchTitle}
              </h3>
              <p className="text-xs text-[#5A534E] mt-0.5">
                {t.customBatchDesc}
              </p>
            </div>

            <form onSubmit={handleSubmitBatch} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-[#1F1C1B] block mb-1">Target Quantity (Pieces):</label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={pieces}
                  onChange={(e) => setPieces(Math.max(10, parseInt(e.target.value) || 10))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] font-bold text-sm text-[#1F1C1B] focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                />
                <span className="text-[10px] text-[#736B65] mt-0.5 block">Minimum boutique batch: 10 pieces</span>
              </div>

              <div>
                <label className="font-bold text-[#1F1C1B] block mb-1">Mill Fabric Sourcing Base:</label>
                <select
                  value={selectedFabric}
                  onChange={(e) => setSelectedFabric(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs font-medium text-[#1F1C1B]"
                >
                  <option>Bhiwandi 100s Pure Mulmul Cotton</option>
                  <option>Handloom Chanderi Silk-Cotton Blend</option>
                  <option>Pure Silk Organza with Badla Zari</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-[#1F1C1B] block mb-1">Special Motif / Stitch Instructions:</label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. Include fine Jaali necklines and shadow Bakhiya on ivory base..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADFCF] text-xs focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                />
              </div>

              {/* Escrow Milestone Preview */}
              <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-2">
                <div className="flex justify-between font-bold text-[#0F382A]">
                  <span>Total Wholesale Batch Value:</span>
                  <span className="text-sm">₹{totalBatchCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#537154]">
                  <span>Initial 30% Escrow Milestone Deposit:</span>
                  <span className="font-bold">₹{milestoneDeposit.toLocaleString('en-IN')}</span>
                </div>
                <p className="text-[10px] text-[#5A534E] pt-1 border-t border-[#CCD8CC]">
                  Remaining 70% released in stages directly to artisan Jan Dhan accounts upon physical QC at Chowk Nodal Kendra.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white text-xs font-bold transition-all shadow-soft-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#DFCDA7]" />
                <span>
                  {isSubmitting ? 'Booking Batch Escrow...' : `Lock Custom Batch Order (₹${milestoneDeposit.toLocaleString('en-IN')} Escrow)`}
                </span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}
