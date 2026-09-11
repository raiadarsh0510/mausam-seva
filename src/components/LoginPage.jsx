import React, { useState } from 'react';
import { 
  ShieldCheck, CloudSun, Building2, User, KeyRound, Phone, 
  ArrowRight, Lock, CheckCircle2, Sparkles, AlertTriangle, ChevronRight
} from 'lucide-react';

export function LoginPage({ onLogin, lang, setLang }) {
  const [selectedRole, setSelectedRole] = useState('citizen'); // 'citizen' | 'moes'

  // Citizen form state
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // MoES form state
  const [govEmail, setGovEmail] = useState('officer.met@imd.gov.in');
  const [employeeId, setEmployeeId] = useState('MOES-IND-8841');
  const [securityPin, setSecurityPin] = useState('••••••');

  const handleCitizenLogin = (e) => {
    if (e) e.preventDefault();
    onLogin('citizen');
  };

  const handleMoESLogin = (e) => {
    if (e) e.preventDefault();
    onLogin('moes');
  };

  return (
    <div className="min-h-screen bg-monsoon-950 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Top Gov Header */}
      <header className="border-b border-monsoon-800 bg-monsoon-900/90 backdrop-blur px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center text-white font-bold shadow-sm">
              <CloudSun className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white block">
                {lang === 'hi' ? 'मौसम सेवा (MausamSeva 2.0)' : 'MausamSeva 2.0'}
              </span>
              <span className="text-[10px] text-monsoon-400 font-medium">
                {lang === 'hi' 
                  ? 'पृथ्वी विज्ञान मंत्रालय (MoES) • भारत सरकार' 
                  : 'Ministry of Earth Sciences (MoES) • Govt. of India'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-3 py-1.5 rounded-lg border border-monsoon-700 bg-monsoon-800 text-xs font-bold text-sky-300 hover:text-white transition-colors"
          >
            {lang === 'en' ? 'हिंदी में बदलें' : 'In English'}
          </button>
        </div>
      </header>

      {/* Main Login Canvas */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Role Selector Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                {lang === 'hi' ? 'सुरक्षित पोर्टल प्रवेश' : 'Secure Portal Gateway'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                {lang === 'hi' ? 'अपनी पहचान के अनुसार प्रवेश करें' : 'Choose Your Access Portal'}
              </h2>
              <p className="text-xs sm:text-sm text-monsoon-400 leading-relaxed">
                {lang === 'hi'
                  ? 'नागरिकों के लिए व्यक्तिगत दैनिक मौसम और अधिकारियों के लिए राष्ट्रीय निर्णय सहायता प्रणाली।'
                  : 'Tailored weather intelligence for citizens and high-level predictive analytics for MoES officials.'}
              </p>
            </div>

            {/* Role Switcher Cards */}
            <div className="space-y-3">
              {/* Citizen Card Option */}
              <button
                type="button"
                onClick={() => setSelectedRole('citizen')}
                className={`w-full p-4 rounded-2xl border text-left transition-all ${
                  selectedRole === 'citizen'
                    ? 'bg-gradient-to-r from-sky-900/60 to-blue-900/40 border-sky-500 ring-2 ring-sky-500/40 shadow-lg'
                    : 'bg-monsoon-900/60 border-monsoon-800 hover:border-monsoon-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${selectedRole === 'citizen' ? 'bg-sky-500 text-white' : 'bg-monsoon-800 text-monsoon-300'}`}>
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-extrabold text-white block">
                        {lang === 'hi' ? 'आम नागरिक (Citizen Portal)' : 'Citizen Access'}
                      </span>
                      <span className="text-[11px] text-monsoon-400">
                        {lang === 'hi' ? 'उम्र १० वर्ष से ८०+ तक' : 'For all ages 10 to 80+'}
                      </span>
                    </div>
                  </div>
                  {selectedRole === 'citizen' && (
                    <CheckCircle2 className="w-5 h-5 text-sky-400" />
                  )}
                </div>
                <p className="text-xs text-monsoon-300 ml-10">
                  {lang === 'hi'
                    ? '८ भूमिकाएं, बोलकर सुनने की सुविधा, दामिनी बिजली अलर्ट व कोई विज्ञापन नहीं।'
                    : '8 dynamic personas, voice assistant, Damini lightning safety & zero ads.'}
                </p>
              </button>

              {/* MoES Admin Option */}
              <button
                type="button"
                onClick={() => setSelectedRole('moes')}
                className={`w-full p-4 rounded-2xl border text-left transition-all ${
                  selectedRole === 'moes'
                    ? 'bg-gradient-to-r from-amber-950/70 to-monsoon-900 border-amber-500 ring-2 ring-amber-500/40 shadow-lg'
                    : 'bg-monsoon-900/60 border-monsoon-800 hover:border-monsoon-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl ${selectedRole === 'moes' ? 'bg-amber-500 text-monsoon-950' : 'bg-monsoon-800 text-monsoon-300'}`}>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-extrabold text-white block">
                          {lang === 'hi' ? 'मंत्रालय (MoES Admin)' : 'MoES Executive Command'}
                        </span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          GOVT ONLY
                        </span>
                      </div>
                      <span className="text-[11px] text-amber-300/80">
                        {lang === 'hi' ? 'अधिकारी / वैज्ञानिक प्रमाणीकरण' : 'NIC / Authorized Personnel'}
                      </span>
                    </div>
                  </div>
                  {selectedRole === 'moes' && (
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  )}
                </div>
                <p className="text-xs text-monsoon-300 ml-10">
                  {lang === 'hi'
                    ? 'राष्ट्रीय टेलीमेट्री, फसल उत्पादन अनुमान, ग्रिड लोड व आपात चेतावनी प्रेषक।'
                    : 'National telemetry, crop yield forecasting, grid load & CAP alert broadcasts.'}
                </p>
              </button>
            </div>

            <div className="text-[11px] text-monsoon-400 border-t border-monsoon-800/80 pt-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'नागरिकों को केवल नागरिक दृश्य दिखेगा, जबकि मंत्रालय दोनों में स्विच कर सकता है।'
                  : 'Citizens access strictly citizen views; MoES accounts have access to both portals.'}
              </span>
            </div>
          </div>

          {/* Right Column: Active Role Login Card */}
          <div className="lg:col-span-7">
            {selectedRole === 'citizen' ? (
              /* Citizen Login: Friendly, Accessible, Simple */
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-2xl text-monsoon-900 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-monsoon-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-monsoon-900">
                          {lang === 'hi' ? 'नागरिक लॉगिन' : 'Citizen Login'}
                        </h3>
                        <span className="text-xs text-monsoon-500">
                          {lang === 'hi' ? 'सरल व सुरक्षित प्रवेश' : 'Simple & Accessible Authentication'}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      DPDP 2023 Safe
                    </span>
                  </div>

                  <form onSubmit={handleCitizenLogin} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-monsoon-700 block mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर (Mobile Number)' : 'Mobile Phone Number'}
                      </label>
                      <div className="flex items-center border border-monsoon-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-500">
                        <span className="px-3 py-2.5 bg-monsoon-100 text-xs font-bold text-monsoon-700 border-r border-monsoon-300">
                          +91
                        </span>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full px-3 py-2.5 text-sm text-monsoon-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    {!otpSent ? (
                      <button
                        type="button"
                        onClick={() => setOtpSent(true)}
                        className="w-full py-2.5 rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs transition-colors"
                      >
                        {lang === 'hi' ? 'ओटीपी प्राप्त करें (Send OTP)' : 'Send OTP Verification'}
                      </button>
                    ) : (
                      <div>
                        <label className="text-xs font-bold text-monsoon-700 block mb-1">
                          {lang === 'hi' ? '४-अंकीय ओटीपी दर्ज करें' : 'Enter 4-Digit OTP'}
                        </label>
                        <input
                          type="text"
                          placeholder="••••"
                          maxLength="4"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-monsoon-300 text-center font-mono tracking-widest text-lg font-bold focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <span className="text-[11px] text-emerald-600 block mt-1 font-semibold">
                          ✓ {lang === 'hi' ? 'ओटीपी भेजा गया: 1234' : 'Mock OTP: 1234'}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-extrabold text-sm shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{lang === 'hi' ? 'पोर्टल में प्रवेश करें' : 'Enter Citizen Weather Portal'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Quick 1-Click Guest Pass */}
                <div className="mt-6 pt-4 border-t border-monsoon-100 text-center">
                  <span className="text-xs text-monsoon-500 block mb-2">
                    {lang === 'hi' ? 'बिना नंबर दर्ज किए तुरंत देखना चाहते हैं?' : 'Want to explore immediately as citizen?'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onLogin('citizen')}
                    className="w-full py-2.5 rounded-xl bg-monsoon-100 hover:bg-monsoon-200 text-monsoon-800 font-bold text-xs transition-colors"
                  >
                    🚀 {lang === 'hi' ? 'तुरंत नागरिक प्रवेश (1-Click Guest Entry)' : '1-Click Instant Citizen Access'}
                  </button>
                </div>
              </div>
            ) : (
              /* MoES Official Login: White, Light Blue, Dark Blue & Purple Palette */
              <div className="bg-gradient-to-b from-[#0C1A30] via-[#1E1B4B] to-[#070F2B] rounded-3xl p-6 sm:p-8 border-2 border-purple-500/60 shadow-2xl shadow-purple-950/50 text-white flex flex-col justify-between h-full relative overflow-hidden">
                {/* Background decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/20">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-400 text-white flex items-center justify-center font-bold shadow-md shadow-purple-900/40">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-2">
                          <span>MoES Executive Command</span>
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        </h3>
                        <span className="text-[11px] text-sky-300 font-mono">
                          National Meteorological Decision Support
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-purple-500/25 text-purple-200 border border-purple-400/40 uppercase">
                      Classified / Restricted
                    </span>
                  </div>

                  <form onSubmit={handleMoESLogin} className="space-y-3.5">
                    <div>
                      <label className="text-[11px] font-mono font-bold text-monsoon-300 uppercase tracking-wider block mb-1">
                        Official Gov Email (NIC / MoES)
                      </label>
                      <input
                        type="email"
                        value={govEmail}
                        onChange={(e) => setGovEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-monsoon-900 border border-monsoon-700 text-xs font-mono text-sky-200 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-monsoon-300 uppercase tracking-wider block mb-1">
                        Government Employee ID / Token
                      </label>
                      <input
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-monsoon-900 border border-monsoon-700 text-xs font-mono text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold text-monsoon-300 uppercase tracking-wider block mb-1">
                        Secure 6-Digit PIN / 2FA Passcode
                      </label>
                      <input
                        type="password"
                        value={securityPin}
                        onChange={(e) => setSecurityPin(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-monsoon-900 border border-monsoon-700 text-xs font-mono text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 tracking-widest"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-monsoon-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Authenticate MoES Officer Session</span>
                    </button>
                  </form>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-monsoon-800 text-center">
                  <span className="text-[11px] text-monsoon-400 block mb-2">
                    Evaluation & Jury Demo Mode:
                  </span>
                  <button
                    type="button"
                    onClick={() => onLogin('moes')}
                    className="w-full py-2.5 rounded-xl bg-monsoon-800 hover:bg-monsoon-700 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 transition-colors"
                  >
                    ⚡ Fast 1-Click MoES Official Login
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-monsoon-800 py-3 px-4 text-center text-xs text-monsoon-500 font-mono">
        SIH26076: Ministry of Earth Sciences • India Meteorological Department • Sugamya Bharat Access
      </footer>
    </div>
  );
}
