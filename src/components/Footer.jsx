import React from 'react';
import { CloudSun, ShieldCheck, Heart, ExternalLink, HelpCircle, PhoneCall } from 'lucide-react';

export function Footer({ lang, onOpenCrowdsource, setActivePortal }) {
  return (
    <footer className="bg-monsoon-900 text-white border-t border-monsoon-800 pt-12 pb-8 px-4 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-monsoon-800 text-xs">
        {/* Col 1: Government Identity */}
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold">
              <CloudSun className="w-5 h-5" />
            </div>
            <span className="text-base font-black tracking-tight">
              {lang === 'hi' ? 'मौसम सेवा (MausamSeva 2.0)' : 'MausamSeva 2.0'}
            </span>
          </div>
          <p className="text-monsoon-400 max-w-md leading-relaxed">
            {lang === 'hi'
              ? 'पृथ्वी विज्ञान मंत्रालय (MoES) और भारत मौसम विज्ञान विभाग (IMD) की आधिकारिक पहल। १० वर्ष से ८०+ वर्ष के सभी नागरिकों के लिए व्यक्तिगत मौसम, दामिनी तड़ित अलर्ट एवं मेघदूत कृषि बुलेटिन।'
              : 'Official initiative under Ministry of Earth Sciences (MoES) and India Meteorological Department (IMD). Personalized climate advisories, Damini lightning safety, and Meghdoot agro bulletins for ages 10 to 80+.'}
          </p>
          <div className="flex items-center gap-2 text-[11px] text-monsoon-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Digital Personal Data Protection (DPDP) Act Compliant • No Ads</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3">
            {lang === 'hi' ? 'महत्वपूर्ण सेवाएं' : 'Key Services'}
          </h4>
          <ul className="space-y-2 text-monsoon-300">
            <li>
              <button 
                onClick={onOpenCrowdsource}
                className="hover:text-sky-300 text-left transition-colors flex items-center gap-1"
              >
                <span>{lang === 'hi' ? 'नागरिक सत्यापन (Crowdsource)' : 'Ground-Truth Verification'}</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePortal('moes')}
                className="hover:text-amber-300 text-left transition-colors flex items-center gap-1"
              >
                <span>{lang === 'hi' ? 'MoES मंत्रालय डैशबोर्ड' : 'MoES Inter-Ministry Console'}</span>
              </button>
            </li>
            <li>
              <a 
                href="https://mausam.imd.gov.in" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Official IMD Web Portal</span>
                <ExternalLink className="w-3 h-3 text-monsoon-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Emergency Helplines */}
        <div>
          <h4 className="text-sm font-bold text-white mb-3">
            {lang === 'hi' ? 'आपातकालीन हेल्पलाइन' : 'National Helplines'}
          </h4>
          <ul className="space-y-2 text-monsoon-300">
            <li className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-solar-400" />
              <span>NDMA Disaster: <strong>1078</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kisan Call Centre: <strong>1800-180-1551</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>National Ambulance: <strong>108</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
              <span>Senior Citizen Helpline: <strong>14567</strong></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] text-monsoon-400">
        <p>
          © 2026 Ministry of Earth Sciences (MoES), Government of India. Smart India Hackathon (SIH26076).
        </p>
        <p className="flex items-center gap-1">
          <span>Accessible India Initiative (सुगम्य भारत)</span>
          <span>•</span>
          <span>WCAG 2.1 AA Compliant</span>
        </p>
      </div>
    </footer>
  );
}
