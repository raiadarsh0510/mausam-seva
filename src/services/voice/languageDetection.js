// src/services/voice/languageDetection.js
// Advanced Multilingual & Mixed-Language (Hinglish/Code-Mixed) Detection Engine

const HINGLISH_LEXICON = [
  'kya', 'baarish', 'barish', 'hogi', 'hoga', 'kaisa', 'kaise', 'kaisi',
  'aaj', 'kal', 'parso', 'mausam', 'weather', 'garmi', 'thand', 'sardi',
  'bijli', 'kisan', 'khet', 'fasal', 'pani', 'paani', 'chahiye', 'rahega',
  'batao', 'dhup', 'dhoop', 'badal', 'hawa', 'aqi', 'chata', 'chhaata',
  'subah', 'shaam', 'dopahar', 'mein', 'ko', 'se', 'hai', 'hain', 'ho',
  'bhi', 'nahi', 'nahin', 'halka', 'tez', 'kitna', 'kitni', 'temperature'
];

export function detectLanguageFromText(text) {
  if (!text || typeof text !== 'string') {
    return { langId: 'hi', script: 'Devanagari', confidence: 0.5, isHinglish: false };
  }

  const clean = text.trim();
  if (!clean) {
    return { langId: 'hi', script: 'Devanagari', confidence: 0.5, isHinglish: false };
  }

  // 1. Script Range Checks via Unicode Blocks
  // Tamil: U+0B80 to U+0BFF
  if (/[஀-௿]/.test(clean)) {
    return { langId: 'ta', script: 'Tamil', confidence: 0.98, isHinglish: false };
  }

  // Telugu: U+0C00 to U+0C7F
  if (/[ఀ-౿]/.test(clean)) {
    return { langId: 'te', script: 'Telugu', confidence: 0.98, isHinglish: false };
  }

  // Kannada: U+0C80 to U+0CFF
  if (/[ಀ-೿]/.test(clean)) {
    return { langId: 'kn', script: 'Kannada', confidence: 0.98, isHinglish: false };
  }

  // Malayalam: U+0D00 to U+0D7F
  if (/[ഀ-ൿ]/.test(clean)) {
    return { langId: 'ml', script: 'Malayalam', confidence: 0.98, isHinglish: false };
  }

  // Gujarati: U+0A80 to U+0AFF
  if (/[઀-૿]/.test(clean)) {
    return { langId: 'gu', script: 'Gujarati', confidence: 0.98, isHinglish: false };
  }

  // Gurmukhi (Punjabi): U+0A00 to U+0A7F
  if (/[਀-੿]/.test(clean)) {
    return { langId: 'pa', script: 'Gurmukhi', confidence: 0.98, isHinglish: false };
  }

  // Bengali / Assamese: U+0980 to U+09FF
  if (/[ঀ-৿]/.test(clean)) {
    // Assamese specific characters: ৱ (w), ৰ (r)
    if (/[ৱৰ]/.test(clean)) {
      return { langId: 'as', script: 'Bengali-Assamese', confidence: 0.92, isHinglish: false };
    }
    return { langId: 'bn', script: 'Bengali', confidence: 0.96, isHinglish: false };
  }

  // Odia: U+0B00 to U+0B7F
  if (/[଀-୿]/.test(clean)) {
    return { langId: 'or', script: 'Odia', confidence: 0.98, isHinglish: false };
  }

  // Perso-Arabic (Urdu, Kashmiri, Sindhi): U+0600 to U+06FF
  if (/[؀-ۿ]/.test(clean)) {
    // Kashmiri specific diacritics / Sindhi characters
    if (/[ټپٺڀٿڌڏڊڍڦڄڃڇڙ]/.test(clean)) {
      return { langId: 'sd', script: 'Perso-Arabic', confidence: 0.88, isHinglish: false };
    }
    if (/[ۆۄؠ]/.test(clean)) {
      return { langId: 'ks', script: 'Perso-Arabic', confidence: 0.88, isHinglish: false };
    }
    return { langId: 'ur', script: 'Perso-Arabic', confidence: 0.95, isHinglish: false };
  }

  // Ol Chiki (Santali): U+1C50 to U+1C7F
  if (/[᱐-᱿]/.test(clean)) {
    return { langId: 'sat', script: 'Ol Chiki', confidence: 0.99, isHinglish: false };
  }

  // Devanagari (Hindi, Marathi, Sanskrit, Nepali, Maithili, Konkani, Bodo, Dogri): U+0900 to U+097F
  if (/[ऀ-ॿ]/.test(clean)) {
    const lower = clean.toLowerCase();
    // Marathi specific markers
    if (/(आहे|नाही|कसे|कसा|पाऊस|ढगाळ|हवामान|आजचे|उद्या)/.test(lower)) {
      return { langId: 'mr', script: 'Devanagari', confidence: 0.94, isHinglish: false };
    }
    // Nepali specific markers
    if (/(छ|हुनेछ|कस्तो|पानी|गर्मी|चिसो|आजको)/.test(lower)) {
      return { langId: 'ne', script: 'Devanagari', confidence: 0.90, isHinglish: false };
    }
    // Sanskrit specific markers
    if (/(अस्ति|कीदृशम्|वातावरणम्|अद्य|श्वः|वर्षति)/.test(lower)) {
      return { langId: 'sa', script: 'Devanagari', confidence: 0.92, isHinglish: false };
    }
    // Maithili specific markers
    if (/(अछि|कोना|आई|काल्हि|वर्षा)/.test(lower)) {
      return { langId: 'mai', script: 'Devanagari', confidence: 0.88, isHinglish: false };
    }
    // Default Devanagari is Hindi
    return { langId: 'hi', script: 'Devanagari', confidence: 0.98, isHinglish: false };
  }

  // 2. Latin Script: Differentiate English vs Hinglish
  if (/[a-zA-Z]/.test(clean)) {
    const words = clean.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);
    let hinglishMatchCount = 0;

    for (const w of words) {
      if (HINGLISH_LEXICON.includes(w)) {
        hinglishMatchCount++;
      }
    }

    const hinglishRatio = words.length > 0 ? hinglishMatchCount / words.length : 0;

    if (hinglishMatchCount >= 1 || hinglishRatio > 0.15) {
      return { 
        langId: 'hinglish', 
        script: 'Latin', 
        confidence: Math.min(0.95, 0.6 + hinglishMatchCount * 0.15), 
        isHinglish: true 
      };
    }

    return { langId: 'en', script: 'Latin', confidence: 0.92, isHinglish: false };
  }

  // Fallback to Hindi
  return { langId: 'hi', script: 'Devanagari', confidence: 0.5, isHinglish: false };
}
