import React from 'react';
import { CloudSun, CloudRain, Sun, Moon, Cloud, Calendar, Clock, Droplets } from 'lucide-react';
import { CITIES_DATA } from '../data/mockWeatherData';

export function HourlyAndWeeklyForecast({ cityId, lang }) {
  const city = CITIES_DATA[cityId] || CITIES_DATA['delhi'];

  const weeklyData = [
    { day: lang === 'hi' ? 'आज (बुधवार)' : 'Today (Wed)', tempMax: city.tempMax, tempMin: city.tempMin, condition: city.condition, conditionHi: city.conditionHi, pop: city.rainfallChance, icon: CloudRain },
    { day: lang === 'hi' ? 'गुरुवार' : 'Thursday', tempMax: city.tempMax + 1, tempMin: city.tempMin, condition: 'Scattered Showers', conditionHi: 'छिटपुट बारिश', pop: 45, icon: CloudRain },
    { day: lang === 'hi' ? 'शुक्रवार' : 'Friday', tempMax: city.tempMax, tempMin: city.tempMin - 1, condition: 'Partly Cloudy', conditionHi: 'आंशिक बादल', pop: 20, icon: CloudSun },
    { day: lang === 'hi' ? 'शनिवार' : 'Saturday', tempMax: city.tempMax - 1, tempMin: city.tempMin - 1, condition: 'Sunny & Pleasant', conditionHi: 'धूप व सुहावना', pop: 10, icon: Sun },
    { day: lang === 'hi' ? 'रविवार' : 'Sunday', tempMax: city.tempMax - 2, tempMin: city.tempMin - 2, condition: 'Clear Sky', conditionHi: 'साफ आसमान', pop: 5, icon: Sun },
    { day: lang === 'hi' ? 'सोमवार' : 'Monday', tempMax: city.tempMax, tempMin: city.tempMin - 1, condition: 'Light Mist', conditionHi: 'हल्की धुंध', pop: 15, icon: Cloud },
    { day: lang === 'hi' ? 'मंगलवार' : 'Tuesday', tempMax: city.tempMax + 1, tempMin: city.tempMin, condition: 'Passing Clouds', conditionHi: 'बादल छाए रहेंगे', pop: 25, icon: CloudSun }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hourly Nowcast Strip */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-sm font-extrabold text-monsoon-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>{lang === 'hi' ? 'घंटे-दर-घंटे लाइव नौकास्ट (Hourly Forecast)' : 'Hourly Weather Nowcast'}</span>
            </h3>
            <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
              {lang === 'hi' ? 'अगले १२ घंटे' : 'Next 12 Hours'}
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 overflow-x-auto pb-1">
            {city.hourly.map((h, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center p-3 rounded-xl border transition-all ${
                  idx === 0 
                    ? 'bg-sky-50/80 border-sky-300 ring-1 ring-sky-200' 
                    : 'bg-monsoon-50/50 border-monsoon-200 hover:bg-white'
                }`}
              >
                <span className="text-[11px] font-bold text-monsoon-600 mb-1">{h.time}</span>
                <div className="my-1.5 text-sky-600">
                  {h.pop > 50 ? <CloudRain className="w-5 h-5 text-sky-600" /> : <CloudSun className="w-5 h-5 text-solar-500" />}
                </div>
                <span className="text-base font-extrabold text-monsoon-900">{h.temp}°</span>
                <div className="flex items-center gap-0.5 mt-1 text-[10px] font-bold text-sky-700">
                  <Droplets className="w-2.5 h-2.5" />
                  <span>{h.pop}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Day Extended Outlook */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-monsoon-200 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-extrabold text-monsoon-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>{lang === 'hi' ? '७ दिवसीय विस्तृत पूर्वानुमान' : '7-Day Extended Outlook'}</span>
            </h3>
            <span className="text-[11px] font-semibold text-monsoon-500">
              {lang === 'hi' ? 'आईएमडी सिनॉप्टिक मॉडल' : 'Synoptic Model'}
            </span>
          </div>

          <div className="space-y-2">
            {weeklyData.slice(0, 5).map((w, idx) => {
              const Icon = w.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-monsoon-50 transition-colors text-xs"
                >
                  <span className="font-bold text-monsoon-800 w-28">{w.day}</span>
                  <div className="flex items-center gap-1.5 w-32">
                    <Icon className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-monsoon-600 truncate">{lang === 'hi' ? w.conditionHi : w.condition}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-right">
                    <span className="text-monsoon-400">{w.tempMin}°</span>
                    <div className="w-12 h-1.5 rounded-full bg-monsoon-200 overflow-hidden hidden sm:block">
                      <div className="h-full bg-solar-500 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <span className="font-bold text-monsoon-900">{w.tempMax}°</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
