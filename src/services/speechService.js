// Web Speech API Service for Bilingual Accessibility (Synthesis + Recognition)
class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.speaking = false;
    this.recognition = null;
    this.listening = false;

    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
      }
    }
  }

  // Text-To-Speech
  speak(text, lang = 'hi-IN', onStart, onEnd, onError) {
    if (!this.synth) {
      if (onError) onError('Speech synthesis not supported in this browser.');
      return;
    }

    this.stop();

    const cleanText = text.replace(/[•\*#_]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95; // Clear pace for senior citizens and children
    utterance.pitch = 1.0;

    const voices = this.synth.getVoices();
    const indianVoice = voices.find(v => v.lang.includes(lang === 'hi' ? 'hi' : 'IN'));
    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    utterance.onstart = () => {
      this.speaking = true;
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.speaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      this.speaking = false;
      if (onError) onError(e);
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      this.synth.cancel();
      this.speaking = false;
    }
    if (this.recognition && this.listening) {
      try {
        this.recognition.stop();
      } catch (e) {}
      this.listening = false;
    }
  }

  isSpeaking() {
    return this.synth ? this.synth.speaking : false;
  }

  isRecognitionSupported() {
    return !!this.recognition;
  }

  // Speech Recognition (Voice Input)
  startListening(lang = 'hi', onResult, onError, onEnd) {
    if (!this.recognition) {
      if (onError) onError('Speech recognition is not supported in this browser.');
      return;
    }

    this.stop();

    this.recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    this.recognition.onerror = (event) => {
      this.listening = false;
      if (onError) onError(event.error);
    };

    this.recognition.onend = () => {
      this.listening = false;
      if (onEnd) onEnd();
    };

    try {
      this.listening = true;
      this.recognition.start();
    } catch (e) {
      this.listening = false;
      if (onError) onError(e);
    }
  }

  // Natural Language QA Engine tailored to Indian meteorological data
  answerWeatherQuery(query, city, lang = 'hi') {
    const q = query.toLowerCase();

    // 1. Rain / Umbrella / Precipitation
    if (q.includes('barish') || q.includes('बारिश') || q.includes('rain') || q.includes('chata') || q.includes('छाता') || q.includes('water')) {
      if (lang === 'hi') {
        return `${city.nameHi} में आज बारिश की संभावना ${city.rainfallChance}% है। शाम के समय हल्की फुहारें संभव हैं, इसलिए छाता साथ रखना अच्छा रहेगा।`;
      }
      return `Rain probability in ${city.name} today is ${city.rainfallChance}%. Keep an umbrella handy for isolated evening showers.`;
    }

    // 2. Farmer / Crop / Fertilizer / Soil
    if (q.includes('kisan') || q.includes('किसान') || q.includes('fasal') || q.includes('फसल') || q.includes('khet') || q.includes('खेत') || q.includes('spray') || q.includes('spray') || q.includes('कीटनाशक')) {
      if (lang === 'hi') {
        return `मिट्टी में नमी ${city.soilMoisture}% है। ${city.meghdootAgro.bulletinHi} कीटनाशक का छिड़काव दोपहर 2 बजे से पहले पूरा कर लें।`;
      }
      return `Soil moisture is at ${city.soilMoisture}%. ${city.meghdootAgro.bulletin} Best spraying window is before 2 PM.`;
    }

    // 3. Lightning / Damini / Thunder
    if (q.includes('bijli') || q.includes('बिजली') || q.includes('lightning') || q.includes('damini') || q.includes('दामिनी') || q.includes('thunder')) {
      if (lang === 'hi') {
        return city.daminiLightning.alertActive 
          ? `चेतावनी: ${city.daminiLightning.statusTextHi}। पेड़ों और खुले मैदानों से दूर रहें और पक्के मकान में शरण लें।`
          : `दामिनी सेंसर नेटवर्क के अनुसार, 40 किमी के दायरे में कोई आकाशीय बिजली का खतरा नहीं है।`;
      }
      return city.daminiLightning.alertActive
        ? `Warning: ${city.daminiLightning.statusText}. Stay indoors and away from tall trees.`
        : `According to the Damini sensor array, no lightning strikes detected within 40 km.`;
    }

    // 4. AQI / Air Quality / Pollution / Health
    if (q.includes('aqi') || q.includes('hawa') || q.includes('हवा') || q.includes('pollution') || q.includes('प्रदूषण') || q.includes('health') || q.includes('swasthya') || q.includes('स्वास्थ्य') || q.includes('saas') || q.includes('सांस')) {
      if (lang === 'hi') {
        return `${city.nameHi} में वायु गुणवत्ता सूचकांक ${city.aqi.value} (${city.aqi.statusHi}) है। वरिष्ठ नागरिकों और दमा के मरीजों को दोपहर में भारी व्यायाम से बचना चाहिए।`;
      }
      return `Air Quality Index (AQI) in ${city.name} is ${city.aqi.value} (${city.aqi.status}). Elderly and asthma patients should avoid strenuous afternoon workouts.`;
    }

    // 5. Fitness / Running / Exercise
    if (q.includes('run') || q.includes('running') || q.includes('daud') || q.includes('दौड़') || q.includes('gym') || q.includes('fitness') || q.includes('फिटनेस') || q.includes('workout')) {
      if (lang === 'hi') {
        return `दौड़ने और व्यायाम के लिए सबसे उत्तम समय सुबह 5:45 से 7:15 बजे का है, जब तापमान 28 डिग्री और हवा शांत रहती है।`;
      }
      return `Optimal hours for running and outdoor workout are between 5:45 AM and 7:15 AM when temperatures are cooler and AQI is stable.`;
    }

    // 6. Commute / Road / Fog
    if (q.includes('traffic') || q.includes('road') || q.includes('सड़क') || q.includes('kohra') || q.includes('कोहरा') || q.includes('fog') || q.includes('metro') || q.includes('office')) {
      if (lang === 'hi') {
        return `सड़क पर दृश्यता ${city.visibility} किमी है। मुख्य हाईवे पर यातायात सामान्य है। शाम को हल्की बारिश से कुछ जगह धीमा ट्रैफिक हो सकता है।`;
      }
      return `Road visibility is ${city.visibility} km. General transit and highways running normally. Allow 10 min extra buffer for evening showers.`;
    }

    // Default: General Weather Overview
    if (lang === 'hi') {
      return `${city.nameHi} में अभी तापमान ${city.temp}°C है, ${city.conditionHi}। अधिकतम तापमान ${city.tempMax}°C और न्यूनतम ${city.tempMin}°C रहने का अनुमान है।`;
    }
    return `Currently in ${city.name} it is ${city.temp}°C with ${city.condition}. Forecast high is ${city.tempMax}°C and low is ${city.tempMin}°C.`;
  }
}

export const speechService = new SpeechService();
