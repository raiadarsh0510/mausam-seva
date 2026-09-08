import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CraftDnaInspector from './components/CraftDnaInspector';
import KarigarStudio from './components/KarigarStudio';
import RawMaterialPool from './components/RawMaterialPool';
import Marketplace from './components/Marketplace';
import ClusterMap from './components/ClusterMap';
import FairPriceCalculator from './components/FairPriceCalculator';
import ArtisanDashboard from './components/ArtisanDashboard';
import AdminPortal from './components/AdminPortal';
import ProductDetailModal from './components/ProductDetailModal';
import CustomBatchModal from './components/CustomBatchModal';
import GiPassportModal from './components/GiPassportModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { 
  getInitialArtisans, 
  getInitialProducts, 
  saveStoredArtisans, 
  saveStoredProducts, 
  resetStorageToDefaults 
} from './services/storage';
import { QrCode, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [roleMode, setRoleMode] = useState('buyer'); // 'buyer' | 'artisan' | 'admin'
  const [language, setLanguage] = useState('en'); // 'en' | 'hi'
  const [activeTab, setActiveTab] = useState('marketplace'); // 'marketplace', 'provenance', 'calculator', 'materials', 'clusters', 'studio'
  
  // Persistent data state
  const [artisans, setArtisans] = useState(getInitialArtisans);
  const [products, setProducts] = useState(getInitialProducts);
  const [selectedProductId, setSelectedProductId] = useState(() => {
    const prods = getInitialProducts();
    return prods[0]?.id || 'LKO-CHK-8841';
  });

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductDetail, setActiveProductDetail] = useState(null);
  const [activeCustomBatch, setActiveCustomBatch] = useState(null);
  const [passportProduct, setPassportProduct] = useState(null);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const [tagInput, setTagInput] = useState('');

  // Save to localStorage when artisans change
  const handleAddArtisan = (newArtisan) => {
    const updated = [newArtisan, ...artisans];
    setArtisans(updated);
    saveStoredArtisans(updated);
  };

  // Save to localStorage when products change
  const handleAddProduct = (newProduct) => {
    const updated = [newProduct, ...products];
    setProducts(updated);
    saveStoredProducts(updated);
    setSelectedProductId(newProduct.id);
  };

  // Reset to default seed records
  const handleResetData = () => {
    if (confirm('Are you sure you want to reset to initial Chowk seed records? Any custom data will be cleared.')) {
      resetStorageToDefaults();
      window.location.reload();
    }
  };

  // Import JSON records
  const handleImportData = (importedArtisans, importedProducts) => {
    setArtisans(importedArtisans);
    setProducts(importedProducts);
    saveStoredArtisans(importedArtisans);
    saveStoredProducts(importedProducts);
    if (importedProducts.length > 0) {
      setSelectedProductId(importedProducts[0].id);
    }
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScanSubmit = (e) => {
    e.preventDefault();
    const query = tagInput.trim().toUpperCase();
    const found = products.find((p) => p.tagId.toUpperCase().includes(query) || p.name.toUpperCase().includes(query));
    if (found) {
      setSelectedProductId(found.id);
      setRoleMode('buyer');
      setActiveTab('provenance');
      setIsScanModalOpen(false);
      setTagInput('');
    } else {
      alert(`Tag ID "${tagInput}" not found in current demo registry. Try LKO-CHK-8841 or check the Kendra Admin portal.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2F2B28] flex flex-col selection:bg-[#F3E0AC] selection:text-[#432E0A]">
      {/* Top Navigation with 3-Role Switch and Language Selector */}
      <Navbar
        roleMode={roleMode}
        setRoleMode={setRoleMode}
        language={language}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onScanClick={() => setIsScanModalOpen(true)}
        cartCount={cart.length}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Container */}
      <main className="flex-1">
        
        {/* KENDRA ADMIN PORTAL (REAL DATA ONBOARDING) */}
        {roleMode === 'admin' && (
          <AdminPortal
            artisans={artisans}
            onAddArtisan={handleAddArtisan}
            products={products}
            onAddProduct={handleAddProduct}
            onResetData={handleResetData}
            onImportData={handleImportData}
            language={language}
          />
        )}

        {/* ARTISAN MODE VIEW */}
        {roleMode === 'artisan' && (
          <ArtisanDashboard language={language} />
        )}

        {/* BUYER MODE VIEWS */}
        {roleMode === 'buyer' && (
          <>
            {activeTab === 'marketplace' && (
              <>
                <HeroBanner
                  setActiveTab={setActiveTab}
                  onScanClick={() => setIsScanModalOpen(true)}
                />
                <Marketplace
                  onSelectProduct={(productId) => {
                    setSelectedProductId(productId);
                    setActiveTab('provenance');
                  }}
                  onAddToCart={handleAddToCart}
                  onOpenProductDetail={(prod) => setActiveProductDetail(prod)}
                  onOpenCustomBatch={(prod) => setActiveCustomBatch(prod)}
                  language={language}
                />
              </>
            )}

            {activeTab === 'provenance' && (
              <CraftDnaInspector
                selectedProductId={selectedProductId}
                setSelectedProductId={setSelectedProductId}
                onOpenPassport={(product) => setPassportProduct(product)}
              />
            )}

            {activeTab === 'calculator' && (
              <FairPriceCalculator language={language} />
            )}

            {activeTab === 'materials' && (
              <RawMaterialPool />
            )}

            {activeTab === 'clusters' && (
              <ClusterMap />
            )}

            {activeTab === 'studio' && (
              <KarigarStudio />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modal: Verify Authenticity Product Detail */}
      {activeProductDetail && (
        <ProductDetailModal
          product={activeProductDetail}
          onClose={() => setActiveProductDetail(null)}
          onAddToCart={handleAddToCart}
          onOpenCustomBatch={(prod) => setActiveCustomBatch(prod)}
          language={language}
        />
      )}

      {/* Modal: Custom Production Batch Booking */}
      {activeCustomBatch && (
        <CustomBatchModal
          product={activeCustomBatch}
          onClose={() => setActiveCustomBatch(null)}
          language={language}
        />
      )}

      {/* Modal: GI Digital Passport */}
      {passportProduct && (
        <GiPassportModal
          product={passportProduct}
          onClose={() => setPassportProduct(null)}
        />
      )}

      {/* Drawer: Boutique Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Modal: Tag Scanner Dialog */}
      {isScanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl p-6 border-2 border-[#0F382A] shadow-2xl space-y-5">
            <button
              onClick={() => setIsScanModalOpen(false)}
              className="absolute top-4 right-4 text-[#736B65] hover:text-[#1F1C1B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0F382A] text-[#DFCDA7] flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1F1C1B]">
                  Simulate NFC / QR Tag Scan
                </h3>
                <p className="text-xs text-[#736B65]">Enter the Tag ID sewn into the garment</p>
              </div>
            </div>

            <form onSubmit={handleScanSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#5A534E] block mb-1">
                  Tag Identifier:
                </label>
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="e.g. LKO-CHK-8841"
                  autoFocus
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DBB146]/50 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#0F382A]"
                />
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-medium text-[#736B65] block">Quick Select Active Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {products.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setTagInput(p.tagId)}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#FAF7F2] border border-[#EADFCF] hover:border-[#0F382A] text-[#5A534E]"
                    >
                      #{p.tagId}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] py-3 rounded-xl bg-[#0F382A] hover:bg-[#18543F] text-white text-xs font-bold shadow-soft-glow transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>Read Provenance Record</span>
                <ArrowRight className="w-4 h-4 text-[#DFCDA7]" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
