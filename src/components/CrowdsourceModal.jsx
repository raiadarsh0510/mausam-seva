import React, { useState } from 'react';
import { 
  X, MessageCircleCheck, CloudRain, Sun, Cloud, Waves, CheckCircle2, Sparkles 
} from 'lucide-react';
import { crowdsourceService } from '../services/crowdsourceService';
import { CITIES_DATA } from '../data/mockWeatherData';

export function CrowdsourceModal({ isOpen, onClose, cityId, lang }) {
  if (!isOpen) return null;

  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];
  const [selectedStatus, setSelectedStatus] = useState('raining');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const OPTIONS = [
    { id: 'heavy_rain', label: 'तेज़ बारिश', labelEn: 'Heavy Downpour', icon: CloudRain, color: 'text-rose-600' },
    { id: 'drizzling', label: 'हल्की फुहार', labelEn: 'Light Drizzle', icon: CloudRain, color: 'text-sky-600' },
    { id: 'cloudy', label: 'घने बादल', labelEn: 'Overcast & Cloudy', icon: Cloud, color: 'text-monsoon-600' },
    { id: 'clear', label: 'धूप व साफ', labelEn: 'Clear & Sunny', icon: Sun, color: 'text-amber-500' },
    { id: 'waterlogged', label: 'सड़क पर जलभराव', labelEn: 'Street Waterlogged', icon: Waves, color: 'text-teal-600' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    crowdsourceService.submitReport({
      cityId,
      cityName: city.name,
      status: selectedStatus,
      note
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-monsoon-200 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full text-monsoon-400 hover:text-monsoon-900 hover:bg-monsoon-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-extrabold text-monsoon-900 mb-2">
              {lang === 'hi' ? 'धन्यवाद नागरिक साथी!' : 'Thank You, Citizen!'}
            </h3>
            <p className="text-xs sm:text-sm text-monsoon-600 max-w-sm mx-auto leading-relaxed">
              {lang === 'hi'
                ? 'आपकी रिपोर्ट सफलतापूर्वक दर्ज हुई। इससे आईएमडी (IMD) के डॉपलर रडार और एआई मॉडल को वास्तविक समय में कैलिब्रेट करने में मदद मिली।'
                : 'Your report was submitted. This feeds directly into calibrating IMD Doppler radar models in real time.'}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>+10 Citizen Climate Karma Points Earned</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageCircleCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                {lang === 'hi' ? 'नागरिक ग्राउंड-ट्रूथ सत्यापन' : 'Citizen Ground-Truth Feedback'}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-monsoon-900 mb-1">
              {lang === 'hi' ? `${city.nameHi} में अभी क्या स्थिति है?` : `What is the real condition in ${city.name}?`}
            </h3>
            <p className="text-xs text-monsoon-500 mb-5">
              {lang === 'hi' 
                ? 'आपका १-टैप इनपुट सरकारी रडार की सटीकता को ९५% से अधिक बनाए रखने में मदद करता है।' 
                : 'Your 1-tap validation helps calibrate national Doppler radar accuracy above 95%.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedStatus === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setSelectedStatus(opt.id)}
                      className={`flex items-center gap-3 p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20 shadow-xs'
                          : 'border-monsoon-200 hover:border-monsoon-300 bg-white'
                      }`}
                    >
                      <div className={`p-2 rounded-xl bg-white shadow-xs ${opt.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-monsoon-900 block">
                          {lang === 'hi' ? opt.label : opt.labelEn}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="text-xs font-bold text-monsoon-700 block mb-1">
                  {lang === 'hi' ? 'अतिरिक्त टिप्पणी या इलाका (वैकल्पिक)' : 'Specific Area or Landmark (Optional)'}
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा. मुख्य चौराहे पर हल्की फुहार...' : 'e.g. Near Metro Station / Ring road...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-monsoon-200 text-xs text-monsoon-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-monsoon-600 hover:bg-monsoon-100 transition-colors"
                >
                  {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                >
                  {lang === 'hi' ? 'पुष्टि भेजें (Submit)' : 'Submit Verification'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
