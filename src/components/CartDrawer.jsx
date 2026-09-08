import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Coins
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveFromCart, onClearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.retailPrice, 0);
  const totalArtisanPayout = cart.reduce((sum, item) => sum + item.costBreakdown.artisanPayout, 0);
  const totalMiddlemanExtractedAvoided = cart.reduce((sum, item) => sum + (item.middlemanExploitationBenchmark.wholesaleCartel + item.middlemanExploitationBenchmark.dalalsAndAggregators), 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#C59A2C', '#6B8C6C', '#D56348', '#DBB146']
      });
    }, 1500);
  };

  const handleDone = () => {
    setOrderSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] border-l border-[#EADFCF] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EADFCF] flex items-center justify-between bg-gradient-to-r from-[#F9F0D6] to-[#FFFDF9]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#DBB146]/50 flex items-center justify-center text-[#C59A2C] shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1C1B]">Boutique Order Cart</h3>
                <p className="text-[11px] text-[#736B65]">Direct Sourcing from Chowk & Aminabad</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#EADFCF] flex items-center justify-center text-[#5A534E] hover:bg-[#FAF7F2]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#F5F8F5] border-2 border-[#CCD8CC] text-[#537154] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1C1B]">
                  Fair-Trade Order Placed!
                </h3>
                <p className="text-xs text-[#5A534E] max-w-xs mx-auto leading-relaxed">
                  ₹{totalArtisanPayout.toLocaleString('en-IN')} has been allocated to the Karigar UPI Escrow fund. Your GI digital passports have been registered on the Awadh Provenance Ledger.
                </p>
                <div className="p-3 bg-[#FDF9EE] rounded-xl border border-[#E8CA76]/40 text-xs text-[#846217] max-w-xs mx-auto font-medium">
                  Dispatched via Chowk Nodal Kendra #01 with sewn-in NFC CraftDNA™ chips.
                </div>
                <button
                  onClick={handleDone}
                  className="px-6 py-2.5 rounded-xl bg-[#C59A2C] hover:bg-[#A98121] text-white text-xs font-bold shadow-soft-glow"
                >
                  Return to Boutique
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-3 text-[#736B65]">
                <ShoppingBag className="w-12 h-12 text-[#EADFCF] mx-auto" />
                <p className="text-sm font-medium">Your boutique order is currently empty.</p>
                <p className="text-xs text-[#5A534E]">Browse the fair-trade catalog to support grassroots karigars directly.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] flex items-center gap-3.5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-[#EADFCF]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-[#1F1C1B] truncate">{item.name}</h4>
                      <p className="text-[11px] text-[#736B65] mt-0.5">by {item.artisanName} ✦ {item.cluster}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-[#1F1C1B]">₹{item.retailPrice.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] font-semibold text-[#537154] bg-[#F5F8F5] px-1.5 py-0.5 rounded">
                          ₹{item.costBreakdown.artisanPayout} to Artisan
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(index)}
                      className="p-1.5 text-[#736B65] hover:text-[#D56348] transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Direct Impact Summary */}
                <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-[#3F5640]">
                    <span className="flex items-center gap-1">
                      <Coins className="w-4 h-4 text-[#537154]" />
                      Direct Artisan Escrow Allocation:
                    </span>
                    <span className="text-sm">₹{totalArtisanPayout.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-[11px] text-[#5A534E]">
                    Bypasses <strong>₹{totalMiddlemanExtractedAvoided.toLocaleString('en-IN')}</strong> in historical aggregator and wholesale markups.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout */}
          {!orderSuccess && cart.length > 0 && (
            <div className="p-6 border-t border-[#EADFCF] bg-[#FAF7F2] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5A534E]">
                  <span>Total Order Value:</span>
                  <span className="font-bold text-[#1F1C1B] text-base">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#736B65]">
                  <span>ONDC Open Network Shipping:</span>
                  <span className="text-[#537154] font-medium">Free (Nodal Kendra Direct)</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 px-4 rounded-xl bg-[#C59A2C] hover:bg-[#A98121] text-white text-xs font-bold transition-all shadow-soft-glow flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span>Processing Escrow & Registering GI...</span>
                ) : (
                  <>
                    <span>Confirm Fair-Trade Order (₹{totalAmount.toLocaleString('en-IN')})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-[#736B65] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#537154]" />
                100% Guaranteed GI Provenance Tag Included with Each Item
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
