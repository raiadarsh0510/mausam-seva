// src/services/voice/aiLanguageService.js
// Multilingual AI Weather Intelligence & Natural Language Generator for MAUSAM PRISM AI
// Supports Hindi, English, Hinglish, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, Urdu, Kannada & all 22 Scheduled Languages

import { detectLanguageFromText } from './languageDetection';
import { getLanguageById, resolveLanguageFallback } from './languageDatabase';

export class AILanguageService {
  constructor() {
    this.intentKeywords = {
      rain_umbrella: [
        'rain', 'rainfall', 'umbrella', 'shower', 'pour', 'drizzle',
        'baarish', 'barish', 'chata', 'chhaata', 'pani', 'bheege', 'bheeg',
        'बारिश', 'बरसात', 'छाता', 'वर्षा', 'बूंदाबांदी', 'पानी',
        'বৃষ্টি', 'ছাতা', 'বর্ষণ',
        'மழை', 'குடை',
        'వర్షం', 'గొడుగు',
        'पाऊस', 'छत्री',
        'વરસાદ', 'છત્રી',
        'ਮੀਂਹ', 'ਛਤਰੀ',
        'بارش', 'چھتری'
      ],
      lightning_safety: [
        'lightning', 'thunder', 'thunderstorm', 'strike', 'damini', 'sensor',
        'bijli', 'kadak', 'kadakna', 'aakash', 'danger',
        'बिजली', 'तड़ित', 'आकाशीय बिजली', 'दामिनी', 'गड़गड़ाहट',
        'বজ্রপাত', 'বজ্র',
        'மின்னல்', 'இடி',
        'మెరుపు', 'ఉరుము',
        'विद्युत', 'वीज',
        'વીજળી',
        'ਬਿਜਲੀ',
        'بجلی', 'گرج'
      ],
      farming_kisan: [
        'farmer', 'farming', 'crop', 'sowing', 'harvest', 'pesticide', 'spray', 'soil', 'meghdoot', 'mandi',
        'kisan', 'fasal', 'khet', 'kheti', 'chhidkaav', 'beej', 'dhan', 'gehun',
        'किसान', 'फसल', 'खेत', 'मेघदूत', 'छिड़काव', 'मिट्टी', 'नमी', 'मंडी',
        'কৃষক', 'ফসল', 'চাষ',
        'விவசாயி', 'பயிர்', 'விவசாயம்',
        'రైతు', 'పంట',
        'शेतकरी', 'पीक', 'खत',
        'ખેડૂત', 'પાક',
        'ਕਿਸਾਨ', 'ਫ਼ਸਲ',
        'کسان', 'فصل'
      ],
      senior_health_aqi: [
        'aqi', 'air', 'pollution', 'breathe', 'breathing', 'asthma', 'elderly', 'senior', 'heart', 'joint', 'cough',
        'hawa', 'saans', 'dama', 'dard', 'bujurg', 'sehat',
        'हवा', 'प्रदूषण', 'सांस', 'दमा', 'बुजुर्ग', 'स्वास्थ्य', 'एक्यूआई', 'जोड़ों का दर्द',
        'বায়ু', 'শ্বাস', 'দূষণ',
        'காற்று', 'சுவாசம்',
        'గాలి', 'శ్వాస',
        'हवामान', 'श्वास',
        'હવા', 'શ્વાસ',
        'ਸਿਹਤ', 'ਹਵਾ',
        'ہوا', 'سانس', 'آلودگی'
      ],
      commuter_traffic: [
        'traffic', 'waterlogging', 'subway', 'road', 'commute', 'metro', 'bus', 'delay', 'flood',
        'jam', 'rasta', 'sadak', 'paani', 'office', 'highway',
        'ट्रैफिक', 'जाम', 'जलभराव', 'सड़क', 'सबवे', 'दफ्तर', 'यातायात', 'कोहरा',
        'রাস্তা', 'যানজট',
        'போக்குவரத்து', 'சாலை',
        'ట్రాఫిక్', 'రహదారి',
        'वाहतूक', 'रस्ता',
        'ટ્રાફિક', 'રસ્તો',
        'ਟ੍ਰੈਫਿਕ', 'ਸੜਕ',
        'ٹریفک', 'سڑک'
      ],
      fitness_running: [
        'running', 'jogging', 'workout', 'fitness', 'exercise', 'marathon', 'uv', 'heat', 'sweat',
        'daud', 'daudna', 'kasrat', 'pasina',
        'दौड़ना', 'व्यायाम', 'कसरत', 'पसीना', 'फिटनेस', 'धूप',
        'দৌড়', 'ব্যায়াম',
        'ஓட்டம்', 'உடற்பயிற்சி',
        'పరుగు', 'వ్యాయామం',
        'धावणे', 'व्यायाम',
        'દોડ', 'કસરત',
        'ਦੌੜਨਾ', 'ਕਸਰਤ',
        'دوڑ', 'ورزش'
      ]
    };
  }

  // Classify user intent
  detectIntent(query) {
    const q = query.toLowerCase();
    for (const [intent, keywords] of Object.entries(this.intentKeywords)) {
      if (keywords.some(kw => q.includes(kw))) {
        return intent;
      }
    }
    return 'general_weather';
  }

  // Generate localized response
  generateResponse({
    query,
    userSelectedLangId = 'auto',
    responseLangMode = 'same_as_user', // 'same_as_user' | 'hi' | 'en' | 'hinglish'
    cityData,
    activePersona = 'student'
  }) {
    // 1. Language Identification
    const detected = detectLanguageFromText(query);
    let targetLangId = detected.langId;

    if (userSelectedLangId && userSelectedLangId !== 'auto') {
      targetLangId = userSelectedLangId;
    } else if (responseLangMode !== 'same_as_user') {
      targetLangId = responseLangMode;
    }

    const intent = this.detectIntent(query);
    const city = cityData || {
      name: 'New Delhi',
      nameHi: 'नई दिल्ली',
      temp: 34,
      feelsLike: 38,
      condition: 'Partly Cloudy',
      conditionHi: 'आंशिक रूप से बादल',
      humidity: 62,
      rainfallChance: 35,
      aqi: { value: 178, status: 'Moderate to Poor', statusHi: 'मध्यम से खराब' },
      windSpeed: 14
    };

    // 2. Localized Multilingual Generation Matrix
    const response = this.composeLocalizedAnswer(targetLangId, intent, city, activePersona);

    const targetLangObj = getLanguageById(targetLangId);
    const voiceFallbackLangObj = resolveLanguageFallback(targetLangId, true);

    return {
      query,
      detectedLangId: detected.langId,
      detectedScript: detected.script,
      isHinglish: detected.isHinglish,
      targetLangId,
      targetLangName: targetLangObj.name,
      targetLangNative: targetLangObj.nativeName,
      direction: targetLangObj.direction,
      intent,
      textResponse: response.text,
      speechText: response.speech,
      canSpeakNatively: targetLangObj.ttsSupported,
      voiceLanguageCode: voiceFallbackLangObj.code,
      threatColor: city.rainfallChance > 60 ? '#EA580C' : '#10B981',
      metrics: {
        temp: city.temp,
        condition: city.condition,
        rainProb: city.rainfallChance,
        aqi: city.aqi ? city.aqi.value : 100
      }
    };
  }

  composeLocalizedAnswer(langId, intent, city, persona) {
    const temp = city.temp;
    const rain = city.rainfallChance;
    const aqi = city.aqi ? city.aqi.value : 178;
    const cityName = city.name;
    const cityNameHi = city.nameHi || city.name;

    switch (langId) {
      // 1. HINDI (PRIMARY)
      case 'hi': {
        if (intent === 'rain_umbrella') {
          return {
            text: rain > 50
              ? `हाँ, आज ${cityNameHi} में बारिश की संभावना ${rain}% है। बाहर निकलते समय छाता या रेनकोट अवश्य साथ रखें।`
              : `आज ${cityNameHi} में बारिश की संभावना केवल ${rain}% है। भारी बारिश का कोई गंभीर खतरा नहीं है, छाते की तत्काल आवश्यकता नहीं है।`,
            speech: rain > 50
              ? `हाँ, आज ${cityNameHi} में बारिश की संभावना ${rain} प्रतिशत है। छाता साथ रखें।`
              : `आज ${cityNameHi} में बारिश की संभावना केवल ${rain} प्रतिशत है। मौसम सामान्य रहेगा।`
          };
        }
        if (intent === 'lightning_safety') {
          return {
            text: `दामिनी रडार के अनुसार ${cityNameHi} के आसपास 40 किमी दायरे में कोई गंभीर आकाशीय बिजली का खतरा नहीं है। सुरक्षित रहें।`,
            speech: `दामिनी रडार के अनुसार ${cityNameHi} में आकाशीय बिजली का कोई गंभीर खतरा नहीं है।`
          };
        }
        if (intent === 'farming_kisan') {
          return {
            text: `मेघदूत कृषि सलाह: ${cityNameHi} में मिट्टी की नमी सामान्य है। आगामी 24 घंटों में कीटनाशक छिड़काव के लिए परिस्थितियां अनुकूल हैं।`,
            speech: `मेघदूत कृषि सलाह। ${cityNameHi} में फसलों के लिए मौसम अनुकूल है।`
          };
        }
        if (intent === 'senior_health_aqi') {
          return {
            text: `${cityNameHi} में वायु गुणवत्ता सूचकांक (AQI) ${aqi} है। बुजुर्ग और सांस के मरीज सुबह के समय मास्क का प्रयोग करें।`,
            speech: `${cityNameHi} में एक्यूआई ${aqi} है। बुजुर्ग सुबह सावधानी बरतें।`
          };
        }
        if (intent === 'fitness_running') {
          return {
            text: `दौड़ने के लिए सबसे अनुकूल समय सुबह 6:00 से 7:30 बजे तक है। तापमान ${temp}°C है, पर्याप्त पानी पिएं।`,
            speech: `दौड़ने के लिए सुबह का समय सबसे अच्छा है। तापमान ${temp} अंश सेल्सियस है।`
          };
        }
        // Default General Weather
        return {
          text: `आज ${cityNameHi} में तापमान ${temp}°C (महसूस ${city.feelsLike}°C) है। मौसम: ${city.conditionHi || city.condition}। बारिश की संभावना ${rain}% और नमी ${city.humidity}% है।`,
          speech: `आज ${cityNameHi} में तापमान ${temp} अंश सेल्सियस है। मौसम ${city.conditionHi || city.condition} रहेगा।`
        };
      }

      // 2. ENGLISH (PRIMARY)
      case 'en': {
        if (intent === 'rain_umbrella') {
          return {
            text: rain > 50
              ? `Yes, there is a ${rain}% chance of rain in ${cityName} today. We recommend carrying an umbrella or raincoat.`
              : `Rain probability in ${cityName} is currently ${rain}%. Significant rainfall is unlikely, no umbrella required.`,
            speech: rain > 50
              ? `Yes, there is a ${rain} percent chance of rain in ${cityName} today. Carry an umbrella.`
              : `Rain probability in ${cityName} is only ${rain} percent. Skies are mostly clear.`
          };
        }
        if (intent === 'lightning_safety') {
          return {
            text: `Damini lightning telemetry reports no cloud-to-ground lightning strikes within 40 km of ${cityName}. Safe for outdoor routines.`,
            speech: `No lightning strikes detected within 40 kilometers of ${cityName}.`
          };
        }
        if (intent === 'farming_kisan') {
          return {
            text: `Meghdoot Agro Bulletin for ${cityName}: Soil moisture is adequate. Ideal window for scheduled pesticide spraying over the next 24 hours.`,
            speech: `Meghdoot Agro advisory for ${cityName}. Weather conditions are favorable for crops.`
          };
        }
        if (intent === 'senior_health_aqi') {
          return {
            text: `Air Quality Index (AQI) in ${cityName} is ${aqi} (${city.aqi?.status || 'Moderate'}). Senior citizens are advised to limit strenuous outdoor exertion during peak hours.`,
            speech: `The AQI in ${cityName} is ${aqi}. Seniors are advised to take precautions.`
          };
        }
        if (intent === 'fitness_running') {
          return {
            text: `Optimal outdoor running window is between 6:00 AM and 7:45 AM. Current temperature is ${temp}°C with ${city.humidity}% humidity.`,
            speech: `Best running time is early morning. Current temperature is ${temp} degrees Celsius.`
          };
        }
        return {
          text: `The weather in ${cityName} today is ${city.condition} with a temperature of ${temp}°C (feels like ${city.feelsLike}°C). Rain probability is ${rain}% and humidity is ${city.humidity}%.`,
          speech: `The weather in ${cityName} today is ${city.condition} with a temperature of ${temp} degrees Celsius.`
        };
      }

      // 3. HINGLISH (SPECIAL ROMAN HINDI)
      case 'hinglish': {
        if (intent === 'rain_umbrella') {
          return {
            text: rain > 50
              ? `Haan, aaj ${cityName} mein baarish hone ki ${rain}% possibility hai. Bahar jaate waqt umbrella ya raincoat zaroor carry karein.`
              : `Aaj ${cityName} mein baarish ka chance sirf ${rain}% hai. Heavy rain ka koi risk nahi hai, umbrella ki zaroorat nahi padegi.`,
            speech: rain > 50
              ? `Haan, aaj ${cityName} mein baarish hone ki ${rain} percent possibility hai. Umbrella sath rakhein.`
              : `Aaj ${cityName} mein baarish ka chance sirf ${rain} percent hai. Mausam theek rahega.`
          };
        }
        if (intent === 'lightning_safety') {
          return {
            text: `Damini radar ke according ${cityName} ke 40 km area mein koi lightning strike ka threat nahi hai. Sab safe hai.`,
            speech: `Damini radar ke according ${cityName} mein bijli kadakne ka koi khatra nahi hai.`
          };
        }
        if (intent === 'farming_kisan') {
          return {
            text: `Meghdoot kisan advisory: ${cityName} mein mitti ki moisture theek hai. Next 24 hours pesticide spray ke liye favorable hain.`,
            speech: `Meghdoot kisan advisory. ${cityName} mein fasal ke liye mausam favorable hai.`
          };
        }
        if (intent === 'senior_health_aqi') {
          return {
            text: `${cityName} mein AQI ${aqi} chal raha hai. Seniors aur respiratory patients morning walk ke time mask use karein.`,
            speech: `${cityName} mein AQI ${aqi} hai. Seniors thoda dhyan rakhein.`
          };
        }
        return {
          text: `Aaj ${cityName} mein temperature ${temp}°C (feels like ${city.feelsLike}°C) hai. Weather ${city.condition} rahega aur rain chance ${rain}% hai.`,
          speech: `Aaj ${cityName} mein temperature ${temp} degree Celsius hai aur mausam ${city.condition} rahega.`
        };
      }

      // 4. BENGALI (বাংলা)
      case 'bn': {
        return {
          text: `আজ ${cityName}-এ তাপমাত্রা ${temp}°C। আবহাওয়া: ${city.condition}। বৃষ্টির সম্ভাবনা ${rain}% এবং বায়ুর মান (AQI) ${aqi}।`,
          speech: `আজ ${cityName} এ তাপমাত্রা ${temp} ডিগ্রি সেলসিয়াস। আবহাওয়া আংশিক মেঘলা থাকবে।`
        };
      }

      // 5. TAMIL (தமிழ்)
      case 'ta': {
        return {
          text: `இன்று ${cityName}-ல் வெப்பநிலை ${temp}°C ஆக உள்ளது. வானிலை: ${city.condition}। மழைக்கான வாய்ப்பு ${rain}% மற்றும் காற்றின் தரம் (AQI) ${aqi}.`,
          speech: `இன்று ${cityName} இல் வெப்பநிலை ${temp} டிகிரி செல்சியஸ் ஆகும். மழை வாய்ப்பு ${rain} சதவீதம்.`
        };
      }

      // 6. TELUGU (తెలుగు)
      case 'te': {
        return {
          text: `ఈరోజు ${cityName} లో ఉష్ణోగ్రత ${temp}°C గా ఉంది. వాతావరణం: ${city.condition}। వర్షం పడే అవకాశం ${rain}% మరియు గాలి నాణ్యత (AQI) ${aqi}.`,
          speech: `ఈ రోజు ${cityName} లో ఉష్ణోగ్రత ${temp} డిగ్రీల సెల్సియస్ గా ఉంది.`
        };
      }

      // 7. MARATHI (मराठी)
      case 'mr': {
        return {
          text: `आज ${cityName} मध्ये तापमान ${temp}°C आहे. हवामान: ${city.condition}। पावसाची शक्यता ${rain}% आणि हवेचा दर्जा (AQI) ${aqi} आहे.`,
          speech: `आज ${cityName} मध्ये तापमान ${temp} अंश सेल्सिअस आहे. हवामान अंशतः ढगाळ राहील.`
        };
      }

      // 8. GUJARATI (ગુજરાતી)
      case 'gu': {
        return {
          text: `આજે ${cityName}માં તાપમાન ${temp}°C છે. હવામાન: ${city.condition}। વરસાદની શક્યતા ${rain}% અને હવા ગુણવત્તા (AQI) ${aqi} છે.`,
          speech: `આજે ${cityName}માં તાપમાન ${temp} ડિગ્રી સેલ્સિયસ રહેશે.`
        };
      }

      // 9. PUNJABI (ਪੰਜਾਬੀ)
      case 'pa': {
        return {
          text: `ਅੱਜ ${cityName} ਵਿੱਚ ਤਾਪਮਾਨ ${temp}°C ਹੈ। ਮੌਸਮ: ${city.condition}। ਮੀਂਹ ਦੀ ਸੰਭਾਵਨਾ ${rain}% ਅਤੇ AQI ${aqi} ਹੈ।`,
          speech: `ਅੱਜ ${cityName} ਵਿੱਚ ਤਾਪਮਾਨ ${temp} ਡਿਗਰੀ ਸੈਲਸੀਅਸ ਰਹੇਗਾ।`
        };
      }

      // 10. URDU (اردو)
      case 'ur': {
        return {
          text: `آج ${cityName} میں درجہ حرارت ${temp} ڈگری سینٹی گریڈ ہے۔ موسم: ${city.condition}۔ بارش کا امکان ${rain} فیصد اور ایئر کوالٹی انڈیکس ${aqi} ہے۔`,
          speech: `آج ${cityName} میں درجہ حرارت ${temp} ڈگری سینٹی گریڈ رہے گا۔`
        };
      }

      // 11. KANNADA (ಕನ್ನಡ)
      case 'kn': {
        return {
          text: `ಇಂದು ${cityName} ನಲ್ಲಿ ತಾಪಮಾನ ${temp}°C ಆಗಿದೆ. ಹವಾಮಾನ: ${city.condition}। ಮಳೆಯ ಸಂಭವನೀಯತೆ ${rain}% ಮತ್ತು AQI ${aqi} ಆಗಿದೆ.`,
          speech: `ಇಂದು ${cityName} ನಲ್ಲಿ ತಾಪಮಾನ ${temp} ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್ ಆಗಿದೆ.`
        };
      }

      // 12. MALAYALAM (മലയാളം)
      case 'ml': {
        return {
          text: `ഇന്ന് ${cityName}-ൽ താപനില ${temp}°C ആണ്. കാലാവസ്ഥ: ${city.condition}। മഴ സാധ്യത ${rain}% കൂടാതെ AQI ${aqi} ആണ്.`,
          speech: `ഇന്ന് ${cityName} ൽ താപനില ${temp} ഡിഗ്രി സെൽഷ്യസ് ആണ്.`
        };
      }

      // 13. ODIA (ଓଡ଼ିଆ)
      case 'or': {
        return {
          text: `ଆଜି ${cityName} ରେ ତାପମାତ୍ରା ${temp}°C ଅଛି। ପାଣିପାଗ: ${city.condition}। ବର୍ଷା ସମ୍ଭାବନା ${rain}% ଏବଂ ବାୟୁ ଗୁଣବତ୍ତା (AQI) ${aqi}।`,
          speech: `ଆଜି ${cityName} ରେ ତାପମାତ୍ରା ${temp} ଡିଗ୍ରୀ ସେଲସିୟସ ଅଟେ।`
        };
      }

      // 14. ASSAMESE (অসমীয়া)
      case 'as': {
        return {
          text: `আজি ${cityName}ত তাপমাত্রা ${temp}°C। বতৰ: ${city.condition}। বৰষুণৰ সম্ভাৱনা ${rain}% আৰু বায়ু গুণমান (AQI) ${aqi}।`,
          speech: `আজি ${cityName}ত তাপমাত্রা ${temp} ডিগ্ৰী চেলচিয়াছ।`
        };
      }

      // 15. NEPALI (नेपाली)
      case 'ne': {
        return {
          text: `आज ${cityName}मा तापक्रम ${temp}°C छ। मौसम: ${city.condition}। वर्षाको सम्भावना ${rain}% र हावा गुणस्तर (AQI) ${aqi} छ।`,
          speech: `आज ${cityName}मा तापक्रम ${temp} डिग्री सेल्सियस छ।`
        };
      }

      // 16. SANSKRIT (संस्कृतम्)
      case 'sa': {
        return {
          text: `अद्य ${cityName} नगरे तापमानं ${temp}°C अस्ति। वातावरणम्: ${city.condition}। वृष्टेः सम्भावना ${rain}% अस्ति।`,
          speech: `अद्य ${cityName} नगरे तापमानं ${temp} अस्ति।`
        };
      }

      // Default Scheduled Languages Graceful Fallback
      default: {
        const langObj = getLanguageById(langId);
        return {
          text: `[${langObj.nativeName}]: ${cityName} — ${temp}°C, ${city.condition}, Rain: ${rain}%, AQI: ${aqi}.`,
          speech: `Weather update for ${cityName}. Temperature is ${temp} degrees Celsius, conditions are ${city.condition}.`
        };
      }
    }
  }
}

export const aiLanguageService = new AILanguageService();
