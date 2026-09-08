import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Coins, 
  Sparkles,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { clusters } from '../data/clusters';

export default function ClusterMap() {
  const [selectedClusterId, setSelectedClusterId] = useState(clusters[0].id);
  const [orderQuantity, setOrderQuantity] = useState(10);

  const selectedCluster = clusters.find(c => c.id === selectedClusterId) || clusters[0];

  // Calculate simulated direct wealth transfer vs middleman extraction
  const avgKarigarGain = 1850; // per piece on KarigarSetu
  const avgDalalLoss = 250; // what dalals used to pay
  const totalDirectToWomen = orderQuantity * avgKarigarGain;
  const oldDalalTotal = orderQuantity * avgDalalLoss;
  const extraIncomeGenerated = totalDirectToWomen - oldDalalTotal;

  return (
    <div className="py-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF9EE] border border-[#DBB146]/40 text-xs font-semibold text-[#846217] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#C59A2C]" />
            <span>Old Lucknow Grassroots Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C1B]">
            Mohalla Impact Map & Nodal Kendras
          </h2>
          <p className="text-sm text-[#5A534E] mt-1 max-w-2xl">
            Tracing our network of physical verification hubs and decentralized women’s collectives across Chowk, Aminabad, Nakhas, and Kakori.
          </p>
        </div>

        {/* Map & Cluster Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Cluster Selector & Visual Node Layout */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold text-[#736B65] uppercase tracking-wider block">
              Select Artisan Cluster:
            </span>

            <div className="space-y-3">
              {clusters.map((c) => {
                const isSelected = c.id === selectedCluster.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setSelectedClusterId(c.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FFFDF9] border-[#C59A2C] shadow-craft-card ring-1 ring-[#C59A2C]'
                        : 'bg-[#FAF7F2] border-[#EADFCF] hover:border-[#DBB146]/60'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base font-bold text-[#1F1C1B]">{c.name}</h4>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#C59A2C] animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-xs text-[#736B65] mt-0.5">{c.areaSnippet}</p>
                      </div>
                      <span className="text-xs font-bold text-[#537154] bg-[#F5F8F5] px-2 py-0.5 rounded border border-[#CCD8CC]">
                        {c.incomeUpliftMultiplier} Uplift
                      </span>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#F4EEE2] flex items-center justify-between text-xs text-[#5A534E]">
                      <span className="flex items-center gap-1 font-medium">
                        <Users className="w-3.5 h-3.5 text-[#C59A2C]" />
                        {c.activeKarigars} Registered Artisans
                      </span>
                      <span className="font-semibold text-[#846217]">{c.femaleKarigarPercentage}% Women</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Cluster In-Depth Metrics & Nodal Kendra Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#DBB146]/30 shadow-craft-card space-y-6">
              
              {/* Header of Selected Cluster */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#F4EEE2]">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FDF9EE] text-[#846217] border border-[#E8CA76]/40 uppercase tracking-wider">
                    Focal Craft: {selectedCluster.primaryCraft}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1C1B] mt-1.5">
                    {selectedCluster.name}
                  </h3>
                  <p className="text-xs text-[#5A534E] mt-0.5">
                    {selectedCluster.areaSnippet}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-[#736B65] block font-medium">Predatory Debt Eliminated</span>
                  <span className="font-serif text-2xl font-bold text-[#6B8C6C]">
                    {selectedCluster.peshgiDebtEliminatedCr}
                  </span>
                </div>
              </div>

              {/* Economic Transformation Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EADFCF] space-y-1">
                  <span className="text-[10px] text-[#D56348] uppercase font-bold tracking-wider block">
                    Old Middleman Cartel Rate
                  </span>
                  <span className="text-base font-bold text-[#736B65] line-through">
                    {selectedCluster.averageOldMiddlemanRate}
                  </span>
                  <p className="text-[11px] text-[#736B65]">Women earned pennies for weeks of manual labor</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F8F5] border border-[#CCD8CC] space-y-1">
                  <span className="text-[10px] text-[#537154] uppercase font-bold tracking-wider block">
                    KarigarSetu Direct Fair-Trade Rate
                  </span>
                  <span className="text-base font-bold text-[#3F5640]">
                    {selectedCluster.averageKarigarSetuRate}
                  </span>
                  <p className="text-[11px] text-[#537154] font-medium">Credited to Jan Dhan account via UPI</p>
                </div>
              </div>

              {/* Physical Nodal Kendra Card */}
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#DBB146]/40 space-y-3 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-bold text-[#846217] uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#C59A2C]" />
                  <span>Physical Nodal Kendra (Inspection & Material Hub)</span>
                </div>

                <div className="space-y-1.5 text-xs text-[#5A534E]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A2C] shrink-0" />
                    <strong>Location:</strong> {selectedCluster.nodalKendraAddress}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#C59A2C] shrink-0" />
                    <strong>Lead Coordinator:</strong> {selectedCluster.kendraCoordinator}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C59A2C] shrink-0" />
                    <strong>Operational Hours:</strong> {selectedCluster.openHours}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F4EEE2] text-xs text-[#5A534E]">
                  <strong className="text-[#2F2B28]">Core Impact Delivered:</strong> {selectedCluster.keyChallengesSolved}
                </div>
              </div>

              {/* Interactive Impact Calculator */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#F9F0D6] to-[#FDF9EE] border border-[#E8CA76]/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1F1C1B] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#C59A2C]" />
                      <span>Fair-Trade Direct Wealth Simulator</span>
                    </h4>
                    <p className="text-[11px] text-[#736B65]">
                      Simulate the financial shift of sourcing directly through KarigarSetu:
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold text-[#5A534E]">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 rounded-lg bg-[#FFFDF9] border border-[#DBB146] text-xs font-bold text-center text-[#1F1C1B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#DBB146]/30">
                    <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Women Artisans Receive</span>
                    <span className="text-lg font-bold text-[#537154]">
                      ₹{totalDirectToWomen.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-[#537154] block font-medium">100% direct bank credit</span>
                  </div>

                  <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#DBB146]/30">
                    <span className="text-[10px] text-[#736B65] uppercase font-semibold block">Middlemen Cartel Extracted</span>
                    <span className="text-lg font-bold text-[#D56348] line-through">
                      ₹{oldDalalTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-[#D56348] block font-medium">
                      +₹{extraIncomeGenerated.toLocaleString('en-IN')} shifted to women
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
