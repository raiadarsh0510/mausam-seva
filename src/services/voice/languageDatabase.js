// src/services/voice/languageDatabase.js
// 22 Scheduled Languages of the Eighth Schedule to the Constitution of India + English + Hinglish
// Includes ISO codes, scripts, text directions, STT/TTS browser capability matrix, and hierarchy

export const SCHEDULED_LANGUAGES_22 = [
  {
    id: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    code: 'hi-IN',
    iso639_1: 'hi',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full', // 'full' | 'text_only' | 'voice_input_only' | 'voice_output_only' | 'limited'
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 1,
    samplePrompt: 'आज का मौसम कैसा है?',
    sampleAudioText: 'आज लखनऊ में तापमान ३४ अंश सेल्सियस है। आंशिक रूप से बादल छाए रहेंगे।'
  },
  {
    id: 'en',
    name: 'English (India)',
    nativeName: 'English',
    code: 'en-IN',
    iso639_1: 'en',
    script: 'Latin',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 2,
    samplePrompt: 'What is the weather today?',
    sampleAudioText: 'The weather in New Delhi is currently 34 degrees Celsius with partly cloudy skies.'
  },
  {
    id: 'hinglish',
    name: 'Hinglish (Roman Hindi)',
    nativeName: 'Hinglish (हिंग्लिश)',
    code: 'hi-Latn',
    iso639_1: 'hi',
    script: 'Latin',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 3,
    samplePrompt: 'Kal Lucknow mein baarish hogi kya?',
    sampleAudioText: 'Kal Lucknow mein halki baarish hone ki 65% possibility hai. Umbrella sath rakhein.'
  },
  {
    id: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    code: 'bn-IN',
    iso639_1: 'bn',
    script: 'Bengali',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 4,
    samplePrompt: 'আজ আবহাওয়া কেমন থাকবে?',
    sampleAudioText: 'আজ কলকাতায় আংশিক মেঘলা আকাশ থাকবে এবং বিকেলের দিকে বৃষ্টির সম্ভাবনা রয়েছে।'
  },
  {
    id: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    code: 'ta-IN',
    iso639_1: 'ta',
    script: 'Tamil',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 5,
    samplePrompt: 'இன்று வானிலை எப்படி இருக்கிறது?',
    sampleAudioText: 'இன்று சென்னையில் வெப்பநிலை 34 டிகிரி செல்சியஸ் ஆக இருக்கும். லேசான மழைக்கு வாய்ப்புள்ளது.'
  },
  {
    id: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    code: 'te-IN',
    iso639_1: 'te',
    script: 'Telugu',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 6,
    samplePrompt: 'ఈరోజు వాతావరణం ఎలా ఉంది?',
    sampleAudioText: 'ఈ రోజు వాతావరణం పాక్షికంగా మేఘావృతమై ఉంటుంది, సాయంత్రం జల్లులు కురిసే అవకాశం ఉంది.'
  },
  {
    id: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    code: 'mr-IN',
    iso639_1: 'mr',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 7,
    samplePrompt: 'आजचे हवामान कसे आहे?',
    sampleAudioText: 'आज मुंबईत अंशतः ढगाळ वातावरण राहील आणि दुपारी भरतीची शक्यता आहे.'
  },
  {
    id: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    code: 'gu-IN',
    iso639_1: 'gu',
    script: 'Gujarati',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 8,
    samplePrompt: 'આજનું હવામાન કેવું રહેશે?',
    sampleAudioText: 'આજે તાપમાન સામાન્ય રહેશે અને બપોર પછી વાદળછાયું વાતાવરણ બની શકે છે.'
  },
  {
    id: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    code: 'kn-IN',
    iso639_1: 'kn',
    script: 'Kannada',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 9,
    samplePrompt: 'ಇಂದಿನ ಹವಾಮಾನ ಹೇಗಿದೆ?',
    sampleAudioText: 'ಇಂದು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಹಿತಕರ ಹವಾಮಾನವಿರುತ್ತದೆ, ಸಂಜೆ ಲಘು ಮಳೆಯ ಮುನ್ಸೂಚನೆ ಇದೆ.'
  },
  {
    id: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    code: 'ml-IN',
    iso639_1: 'ml',
    script: 'Malayalam',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 10,
    samplePrompt: 'ഇന്നത്തെ കാലാവസ്ഥ എങ്ങനെയുണ്ട്?',
    sampleAudioText: 'ഇന്ന് തെളിഞ്ഞ കാലാവസ്ഥയായിരിക്കും, കടലിൽ ശക്തമായ കാറ്റിന് സാധ്യതയുണ്ട്.'
  },
  {
    id: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    code: 'pa-IN',
    iso639_1: 'pa',
    script: 'Gurmukhi',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 11,
    samplePrompt: 'ਅੱਜ ਦਾ ਮੌਸਮ ਕਿਹੋ ਜਿਹਾ ਰਹੇਗਾ?',
    sampleAudioText: 'ਅੱਜ ਪੰਜਾਬ ਵਿੱਚ ਮੌਸਮ ਸਾਫ਼ ਰਹੇਗਾ ਅਤੇ ਖੇਤੀਬਾੜੀ ਲਈ ਹਾਲਾਤ ਅਨੁਕੂਲ ਹਨ।'
  },
  {
    id: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    code: 'ur-IN',
    iso639_1: 'ur',
    script: 'Perso-Arabic',
    direction: 'rtl',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support (RTL)',
    priority: 12,
    samplePrompt: 'آج کا موسم کیسا ہے؟',
    sampleAudioText: 'آج لکھنؤ میں مطلع جزوی طور پر ابر آلود رہے گا اور درجہ حرارت 34 ڈگری سینٹی گریڈ رہے گا۔'
  },
  {
    id: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    code: 'or-IN',
    iso639_1: 'or',
    script: 'Odia',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'voice_input_only',
    capabilityBadge: '✓ Voice Input + Text Support',
    priority: 13,
    samplePrompt: 'ଆଜିର ପାଣିପାଗ କିପରି ରହିବ?',
    sampleAudioText: 'ଆଜି ଉପକୂଳବର୍ତ୍ତୀ ଓଡ଼ିଶାରେ ସାମାନ୍ୟ ବର୍ଷାର ସମ୍ଭାବନା ଅଛି।'
  },
  {
    id: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    code: 'as-IN',
    iso639_1: 'as',
    script: 'Bengali-Assamese',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'voice_input_only',
    capabilityBadge: '✓ Voice Input + Text Support',
    priority: 14,
    samplePrompt: 'আজিৰ বতৰ কেনেকুৱা হ’ব?',
    sampleAudioText: 'আজি অসমৰ বিভিন্ন স্থানত পাতলীয়া বৰষুণৰ সম্ভাৱনা আছে।'
  },
  {
    id: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    code: 'sa-IN',
    iso639_1: 'sa',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'text_only',
    capabilityBadge: '✓ Text Support Only',
    priority: 15,
    samplePrompt: 'अद्य वातावरणं कीदृशम् अस्ति?',
    sampleAudioText: 'अद्य नगरस्य तापमानं चतुस्त्रिंशत् अस्ति, मेघयुक्तम् आकाशम् भविष्यति।'
  },
  {
    id: 'ne',
    name: 'Nepali',
    nativeName: 'नेपाली',
    code: 'ne-NP',
    iso639_1: 'ne',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: true,
    ttsSupported: true,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'full',
    capabilityBadge: '✓ Full Text + Voice Support',
    priority: 16,
    samplePrompt: 'आजको मौसम कस्तो छ?',
    sampleAudioText: 'आज पहाडी क्षेत्रमा हल्का पानी पर्ने र चिसो हावा चल्ने सम्भावना छ।'
  },
  {
    id: 'mai',
    name: 'Maithili',
    nativeName: 'मैथिली',
    code: 'mai-IN',
    iso639_1: 'mai',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'text_only',
    capabilityBadge: '✓ Text Support Only',
    priority: 17,
    samplePrompt: 'आई मौसम कोना अछि?',
    sampleAudioText: 'आई मिथिलांचल मे हलुक बादल छाएल रहत आ सांझ मे वर्षा भ सकैत अछि।'
  },
  {
    id: 'kok',
    name: 'Konkani',
    nativeName: 'कोंकणी',
    code: 'kok-IN',
    iso639_1: 'kok',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'text_only',
    capabilityBadge: '✓ Text Support Only',
    priority: 18,
    samplePrompt: 'आयचें हवामान कशें आसा?',
    sampleAudioText: 'गोयांत आयज दर्याचेर व्हड ल्हारां येवपाची शक्यताय आसा।'
  },
  {
    id: 'ks',
    name: 'Kashmiri',
    nativeName: 'کٲشُر / डोगरी',
    code: 'ks-IN',
    iso639_1: 'ks',
    script: 'Perso-Arabic',
    direction: 'rtl',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support (RTL)',
    priority: 19,
    samplePrompt: 'از کیتھ پاٹھ چھُ موسم؟',
    sampleAudioText: 'از چھُ سرینگرس منٛز موسم خۄشگوار، بییہِ ہیٚکہِ ہلکہِ رُد پیٚتھ।'
  },
  {
    id: 'sd',
    name: 'Sindhi',
    nativeName: 'سنڌي / सिंधी',
    code: 'sd-IN',
    iso639_1: 'sd',
    script: 'Perso-Arabic',
    direction: 'rtl',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support (RTL)',
    priority: 20,
    samplePrompt: 'اڄ موسم ڪيئن آهي؟',
    sampleAudioText: 'اڄ سنڌ ۾ گرمي پد وچولو رهندو ۽ شام جو هلڪي هوا لڳندي.'
  },
  {
    id: 'doi',
    name: 'Dogri',
    nativeName: 'डोगरी',
    code: 'doi-IN',
    iso639_1: 'doi',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support',
    priority: 21,
    samplePrompt: 'अज्ज दा मौसम केह्-ऐ?',
    sampleAudioText: 'अज्ज जम्मू च मौसम साफ रौह्ग ते धुप खिली रौह्गी।'
  },
  {
    id: 'brx',
    name: 'Bodo',
    nativeName: 'बर’ / बड़ो',
    code: 'brx-IN',
    iso639_1: 'brx',
    script: 'Devanagari',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support',
    priority: 22,
    samplePrompt: 'दिनैनि बारहावा माबायदि?',
    sampleAudioText: 'दिनै आसामनि बड़ोलेण्ड ओनसोलआव बार-दै जाथौगौ।'
  },
  {
    id: 'sat',
    name: 'Santali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ / संताली',
    code: 'sat-IN',
    iso639_1: 'sat',
    script: 'Ol Chiki',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support (Ol Chiki)',
    priority: 23,
    samplePrompt: 'ᱛᱮᱦᱮᱧ ᱫᱚ ᱦᱚᱭ-ᱦᱤᱥᱤᱫ ᱪᱮᱫ ᱞᱮᱠᱟ?',
    sampleAudioText: 'ᱛᱮᱦᱮᱧ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮ ᱨᱤᱢᱤᱞ ᱦᱚᱭ ᱛᱟᱦᱮᱸᱱᱟ᱾'
  },
  {
    id: 'mni',
    name: 'Manipuri (Meitei)',
    nativeName: 'মৈতৈলোন্ / ꯃꯩꯇꯩꯂꯣꯟ',
    code: 'mni-IN',
    iso639_1: 'mni',
    script: 'Bengali / Meetei Mayek',
    direction: 'ltr',
    sttSupported: false,
    ttsSupported: false,
    aiSupported: true,
    translationSupported: true,
    capabilityStatus: 'limited',
    capabilityBadge: '⚠ Limited Text Support',
    priority: 24,
    samplePrompt: 'ঙসিগী নোংজু-নুংশিৎ করম্না তৌরি?',
    sampleAudioText: 'ঙসি ইম্ফালদা নুমিৎ তাদুনা নোং তাবা য়াই।'
  }
];

// STATE TO REGIONAL & DIALECT LANGUAGES MAPPING HIERARCHY
export const STATE_LANGUAGES_HIERARCHY = {
  'delhi': {
    stateName: 'Delhi (NCT)',
    primaryLanguage: 'hi',
    secondaryLanguages: ['en', 'pa', 'ur'],
    dialects: ['Khariboli', 'Haryanvi']
  },
  'uttar_pradesh': {
    stateName: 'Uttar Pradesh',
    primaryLanguage: 'hi',
    secondaryLanguages: ['ur', 'en'],
    dialects: ['Awadhi', 'Bhojpuri', 'Braj Bhasha', 'Bundeli', 'Kannauji']
  },
  'maharashtra': {
    stateName: 'Maharashtra',
    primaryLanguage: 'mr',
    secondaryLanguages: ['hi', 'en', 'gu'],
    dialects: ['Varhadi', 'Konkani', 'Malvani', 'Ahirani']
  },
  'himachal_pradesh': {
    stateName: 'Himachal Pradesh',
    primaryLanguage: 'hi',
    secondaryLanguages: ['en', 'doi', 'pa'],
    dialects: ['Pahari', 'Kangri', 'Mandeali', 'Kulluvi']
  },
  'tamil_nadu': {
    stateName: 'Tamil Nadu',
    primaryLanguage: 'ta',
    secondaryLanguages: ['en'],
    dialects: ['Madurai Tamil', 'Kongu Tamil', 'Tirunelveli']
  },
  'west_bengal': {
    stateName: 'West Bengal',
    primaryLanguage: 'bn',
    secondaryLanguages: ['hi', 'en', 'ne'],
    dialects: ['Rarhi', 'Varendra', 'Rajbanshi']
  },
  'punjab': {
    stateName: 'Punjab',
    primaryLanguage: 'pa',
    secondaryLanguages: ['hi', 'en'],
    dialects: ['Majhi', 'Doabi', 'Malwai', 'Pwadhi']
  },
  'karnataka': {
    stateName: 'Karnataka',
    primaryLanguage: 'kn',
    secondaryLanguages: ['en', 'te', 'mr', 'ta'],
    dialects: ['Kundagannada', 'Havyaka', 'Arebhashe']
  },
  'gujarat': {
    stateName: 'Gujarat',
    primaryLanguage: 'gu',
    secondaryLanguages: ['hi', 'en'],
    dialects: ['Kathiyawadi', 'Surati', 'Charotari', 'Kutchi']
  }
};

// CITY TO DEFAULT RECOMMENDED LANGUAGE HIERARCHY
export const CITY_LANGUAGE_MAPPINGS = {
  'delhi': { stateKey: 'delhi', recommendedLang: 'hi', fallbackLang: 'en' },
  'lucknow': { stateKey: 'uttar_pradesh', recommendedLang: 'hi', fallbackLang: 'ur' },
  'mumbai': { stateKey: 'maharashtra', recommendedLang: 'mr', fallbackLang: 'hi' },
  'shimla': { stateKey: 'himachal_pradesh', recommendedLang: 'hi', fallbackLang: 'en' }
};

// HELPER: Lookup language by ID or Code
export function getLanguageById(langId) {
  if (!langId) return SCHEDULED_LANGUAGES_22[0];
  const found = SCHEDULED_LANGUAGES_22.find(
    l => l.id === langId || l.code.toLowerCase() === langId.toLowerCase() || l.iso639_1 === langId
  );
  return found || SCHEDULED_LANGUAGES_22[0]; // fallback to Hindi
}

// HELPER: Resolve Fallback Language Chain
export function resolveLanguageFallback(requestedLangId, isVoiceMode = false) {
  const langObj = getLanguageById(requestedLangId);
  if (!isVoiceMode) return langObj;

  // In voice mode, if TTS is not supported, fallback cleanly
  if (langObj.ttsSupported) return langObj;

  // Hindi or English fallback based on script
  if (['Devanagari', 'Perso-Arabic'].includes(langObj.script)) {
    return getLanguageById('hi');
  }
  return getLanguageById('en');
}
