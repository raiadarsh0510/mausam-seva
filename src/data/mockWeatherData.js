export const PERSONAS = [
  {
    id: 'student',
    name: 'Student & Youth',
    nameHi: 'विद्यार्थी और बच्चे',
    ageRange: '10–18 Years',
    icon: 'GraduationCap',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    accentColor: '#0284C7',
    description: 'School commute safety, playground weather, rain gear alerts & fun science facts',
    descriptionHi: 'स्कूल आने-जाने की सुरक्षा, खेल का मौसम, बारिश अलर्ट और मौसम विज्ञान की रोचक बातें'
  },
  {
    id: 'farmer',
    name: 'Kisan / Farmer',
    nameHi: 'किसान भाई (कृषि)',
    ageRange: '25–70+ Years',
    icon: 'Tractor',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentColor: '#16A34A',
    description: 'Soil moisture, Meghdoot crop bulletins, pesticide spray window & mandi weather',
    descriptionHi: 'मिट्टी में नमी, मेघदूत फसल सलाह, कीटनाशक छिड़काव समय और मंडी मौसम'
  },
  {
    id: 'senior_health',
    name: 'Senior & Health',
    nameHi: 'वरिष्ठ नागरिक एवं स्वास्थ्य',
    ageRange: '60–80+ Years',
    icon: 'HeartPulse',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    accentColor: '#E11D48',
    description: 'AQI respiratory alerts, joint pain/cold wave warnings, heat-stroke guide & emergency help',
    descriptionHi: 'हवा की गुणवत्ता (AQI), जोड़ों के दर्द व ठंड का अलर्ट, लू से बचाव और आपातकालीन नंबर'
  },
  {
    id: 'commuter',
    name: 'Daily Commuter',
    nameHi: 'दैनिक यात्री / ऑफिस',
    ageRange: '18–60 Years',
    icon: 'Car',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    accentColor: '#D97706',
    description: 'Road visibility (fog/smog), traffic rain-delay risk & waterlogging danger routes',
    descriptionHi: 'सड़क पर दृश्यता (कोहरा), बारिश से जाम का खतरा और जलभराव वाले रास्ते'
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    nameHi: 'फिटनेस व व्यायाम',
    ageRange: '16–50 Years',
    icon: 'Flame',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    accentColor: '#EA580C',
    description: 'Optimal running hours, heat exhaustion index, UV burn time & hydration tracker',
    descriptionHi: 'दौड़ने का सबसे सही समय, गर्मी का प्रभाव, धूप से बचाव और पानी पीने की सलाह'
  },
  {
    id: 'coastal',
    name: 'Coastal & Fisherfolk',
    nameHi: 'तटीय व मछुआरे',
    ageRange: '20–65 Years',
    icon: 'Anchor',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    accentColor: '#0891B2',
    description: 'Tide timings, wave heights, INCOIS marine safety flags & squall wind warnings',
    descriptionHi: 'ज्वार-भाटा समय, समुद्र की लहरें, तटीय सुरक्षा चेतावनी और तेज हवा अलर्ट'
  },
  {
    id: 'traveler',
    name: 'Traveler & Tourist',
    nameHi: 'यात्री व पर्यटक',
    ageRange: 'All Ages',
    icon: 'Plane',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    accentColor: '#9333EA',
    description: 'Destination forecast, packing suggestions, airport fog delays & mountain road safety',
    descriptionHi: 'गंतव्य का मौसम, क्या सामान ले जाएं, उड़ान में देरी और पहाड़ी रास्तों का हाल'
  },
  {
    id: 'event',
    name: 'Event & Family',
    nameHi: 'समारोह व परिवार',
    ageRange: 'All Ages',
    icon: 'CalendarDays',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    accentColor: '#0D9488',
    description: 'Outdoor comfort index, 12-hour rain probability curve & tent/catering safety',
    descriptionHi: 'आउटडोर कम्फर्ट स्कोर, बारिश की संभावना और पारिवारिक कार्यक्रमों का मौसम'
  }
];

export const CITIES_DATA = {
  'delhi': {
    id: 'delhi',
    name: 'New Delhi',
    nameHi: 'नई दिल्ली',
    state: 'National Capital Territory',
    stateHi: 'राष्ट्रीय राजधानी क्षेत्र',
    temp: 34,
    feelsLike: 38,
    condition: 'Partly Cloudy',
    conditionHi: 'आंशिक रूप से बादल',
    iconType: 'cloud-sun',
    tempMin: 27,
    tempMax: 36,
    humidity: 62,
    rainfallChance: 35,
    windSpeed: 14,
    windDirection: 'ESE',
    pressure: 1008,
    visibility: 4.2, // km
    uvIndex: 7,
    soilMoisture: 42,
    isCoastal: false,
    aqi: {
      value: 178,
      status: 'Moderate to Poor',
      statusHi: 'मध्यम से खराब',
      color: '#EAB308',
      pm25: 78,
      pm10: 165
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 62,
      strikesCount: 0,
      statusText: 'No lightning detected within 40 km radius',
      statusTextHi: '40 किमी के दायरे में कोई आकाशीय बिजली दर्ज नहीं हुई'
    },
    meghdootAgro: {
      zone: 'Western Semi-Arid Agro Climatic Zone',
      zoneHi: 'पश्चिमी अर्ध-शुष्क कृषि क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Maintain optimum irrigation in Kharif fodder crops. Postpone pesticide sprays if evening rain clouds build up.',
      bulletinHi: 'खरीफ चारा फसलों में जरूरत अनुसार सिंचाई करें। शाम को बारिश की संभावना होने पर कीटनाशक छिड़काव रोक दें।',
      crops: [
        { name: 'Paddy / धान', advice: 'Keep 3-5 cm standing water during panicle initiation.', stage: 'Vegetative' },
        { name: 'Vegetables / सब्जियां', advice: 'Provide drainage channels to prevent waterlogging.', stage: 'Fruiting' }
      ]
    },
    personaTips: {
      student: {
        en: 'Light humidity today! Carry a water bottle. High probability of cloudy drizzle after 4 PM, keep a compact umbrella in your backpack.',
        hi: 'आज हल्की नमी रहेगी! पानी की बोतल साथ रखें। शाम 4 बजे के बाद हल्की बूंदाबांदी संभव है, बैग में छाता जरूर रखें।'
      },
      farmer: {
        en: 'Soil moisture is moderate at 42%. No heavy downpour expected before midnight. Favorable window for weeding until 3 PM.',
        hi: 'मिट्टी में 42% नमी है। आधी रात से पहले भारी बारिश का अंदेशा नहीं है। दोपहर 3 बजे तक निराई-गुड़ाई का अनुकूल समय है।'
      },
      senior_health: {
        en: 'AQI is 178 (Moderate/Poor). Sensitive individuals with respiratory or asthma history should avoid brisk walks between 1 PM and 4 PM.',
        hi: 'वायु गुणवत्ता सूचकांक 178 है। सांस या दमा के मरीज दोपहर 1 से 4 बजे के बीच खुली हवा में तेज टहलने से बचें।'
      },
      commuter: {
        en: 'Road visibility is normal (4.2 km). Expect mild evening traffic snarls around Ring Road due to isolated showers between 5:30 PM and 7:00 PM.',
        hi: 'सड़क पर दृश्यता 4.2 किमी सामान्य है। शाम 5:30 से 7:00 के बीच छिटपुट बारिश से रिंग रोड पर धीमा ट्रैफिक हो सकता है।'
      },
      fitness: {
        en: 'Best running window: 5:45 AM - 7:00 AM (Temp: 28°C, AQI: 140). High heat index of 38°C in afternoon, avoid outdoor cardio.',
        hi: 'दौड़ने का सबसे उत्तम समय: सुबह 5:45 से 7:00 बजे (तापमान 28°C)। दोपहर में 38°C की गर्मी महसूस होगी, बाहर व्यायाम न करें।'
      },
      coastal: {
        en: 'Inland location. General reservoir level at Wazirabad barrage is normal. No local flood alert.',
        hi: 'मैदानी क्षेत्र। वजीराबाद बैराज पर जलस्तर सामान्य है। कोई बाढ़ का खतरा नहीं है।'
      },
      traveler: {
        en: 'Clear conditions for flights at IGI Airport. Light cotton wear with a folding umbrella recommended.',
        hi: 'इंदिरा गांधी अंतरराष्ट्रीय हवाई अड्डे पर उड़ानें सामान्य हैं। हल्के सूती कपड़े और एक छाता साथ रखें।'
      },
      event: {
        en: 'Outdoor Comfort Score: 7.2/10. Safe for open-air evening gatherings. Keep waterproof canopy on standby for post-6 PM.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 7.2/10। शाम के आयोजनों के लिए सुरक्षित, हालांकि शाम 6 बजे के बाद वाटरप्रूफ शेड की व्यवस्था रखें।'
      }
    },
    hourly: [
      { time: '10 AM', temp: 32, pop: 10, icon: 'sun' },
      { time: '12 PM', temp: 34, pop: 15, icon: 'sun' },
      { time: '02 PM', temp: 36, pop: 25, icon: 'cloud-sun' },
      { time: '04 PM', temp: 35, pop: 45, icon: 'cloud-rain' },
      { time: '06 PM', temp: 32, pop: 50, icon: 'cloud-rain' },
      { time: '08 PM', temp: 30, pop: 20, icon: 'cloud' },
      { time: '10 PM', temp: 29, pop: 10, icon: 'moon' }
    ]
  },
  'mumbai': {
    id: 'mumbai',
    name: 'Mumbai',
    nameHi: 'मुंबई',
    state: 'Maharashtra',
    stateHi: 'महाराष्ट्र',
    temp: 30,
    feelsLike: 36,
    condition: 'Heavy Rain Showers',
    conditionHi: 'तेज बारिश की फुहारें',
    iconType: 'cloud-rain',
    tempMin: 25,
    tempMax: 31,
    humidity: 88,
    rainfallChance: 85,
    windSpeed: 26,
    windDirection: 'WSW',
    pressure: 1002,
    visibility: 2.8,
    uvIndex: 4,
    soilMoisture: 78,
    isCoastal: true,
    tide: {
      highTide: '02:45 PM (4.12 meters)',
      highTideHi: 'दोपहर 02:45 बजे (4.12 मीटर)',
      lowTide: '08:50 PM (0.85 meters)',
      lowTideHi: 'रात 08:50 बजे (0.85 मीटर)',
      marineWarning: 'Fishermen advised not to venture into deep sea (Wind speed 40-50 km/h)',
      marineWarningHi: 'मछुआरों को गहरे समुद्र में न जाने की सलाह (हवा की गति 40-50 किमी/घंटा)'
    },
    aqi: {
      value: 62,
      status: 'Satisfactory',
      statusHi: 'संतोषजनक',
      color: '#16A34A',
      pm25: 22,
      pm10: 55
    },
    daminiLightning: {
      alertActive: true,
      distanceKm: 14,
      strikesCount: 19,
      statusText: 'Active Lightning Cluster 14 km NW over Arabian Sea / Bandra Coast',
      statusTextHi: 'अरब सागर / बांद्रा तट के पास 14 किमी पर बिजली कड़कने की चेतावनी'
    },
    meghdootAgro: {
      zone: 'Konkan Coastal Agro-Climatic Zone',
      zoneHi: 'कोंकण तटीय कृषि क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Drain excess rainwater from paddy fields. Stake high-value horticulture crops against squally coastal gusts.',
      bulletinHi: 'धान के खेतों से अतिरिक्त पानी निकालें। तेज हवाओं से बचाव के लिए बागवानी फसलों को सहारा दें।',
      crops: [
        { name: 'Rice / भात', advice: 'Clear bund drainage channels immediately.', stage: 'Tillering' },
        { name: 'Coconut / नारळ', advice: 'Ensure drainage around tree basins.', stage: 'Perennial' }
      ]
    },
    personaTips: {
      student: {
        en: 'Heavy rain warning during school closing hours! Waterlogging possible near Kurla and Hindmata. Commute with elders.',
        hi: 'स्कूल की छुट्टी के समय तेज बारिश की चेतावनी! कुर्ला और हिंदमाता के पास जलभराव हो सकता है। बड़ों के साथ ही निकलें।'
      },
      farmer: {
        en: 'Soil saturation reached 78%. Clear field trenches so excess water drains smoothly. Do not apply chemical fertilizers today.',
        hi: 'मिट्टी में 78% नमी है। खेतों की नालियां साफ रखें ताकि पानी न भरे। आज रासायनिक खाद का छिड़काव बिल्कुल न करें।'
      },
      senior_health: {
        en: 'High humidity (88%) and damp weather may aggravate arthritis and joint stiffness. Keep interiors dry and take warm fluids.',
        hi: '88% की अधिक नमी से जोड़ों में अकड़न या दर्द बढ़ सकता है। घर को सूखा रखें और गुनगुना पानी या काढ़ा पिएं।'
      },
      commuter: {
        en: 'High tide of 4.12m at 2:45 PM coincides with rain spells. Western & Central lines may face 15-20 min delays. Avoid low-lying subways.',
        hi: 'दोपहर 2:45 बजे 4.12 मीटर का हाई टाइड और बारिश एक साथ हैं। लोकल ट्रेनें 15-20 मिनट लेट हो सकती हैं। निचले सबवे से बचें।'
      },
      fitness: {
        en: 'Seafront running track wet and slippery. Strong gusts up to 35 km/h at Marine Drive. Indoor cardio strongly recommended.',
        hi: 'मरीन ड्राइव पर ट्रैक गीला और फिसलन भरा है। 35 किमी/घंटा की हवाएं हैं, आज घर या जिम के अंदर ही कसरत करें।'
      },
      coastal: {
        en: 'RED MARINE ADVISORY: High swell waves of 3.8m expected. Sea water inundation risk along low-lying promenades.',
        hi: 'लाल समुद्री चेतावनी: 3.8 मीटर ऊंची लहरें उठ सकती हैं। निचले तटीय क्षेत्रों में समुद्र का पानी घुसने की आशंका है।'
      },
      traveler: {
        en: 'Flight operations at CSMIA Airport experiencing 20 min holding patterns due to crosswinds. Keep waterproof luggage covers.',
        hi: 'हवाई अड्डे पर उड़ानों में हल्की देरी हो सकती है। अपने बैग और सामान पर वाटरप्रूफ कवर जरूर लगाएं।'
      },
      event: {
        en: 'Outdoor Comfort Score: 3.5/10. Open-air banquet or wedding mandaps at high risk. Shift to enclosed banquet halls.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 3.5/10। खुले में कार्यक्रम करना जोखिम भरा है। तुरंत वाटरप्रूफ हॉल में शिफ्ट करें।'
      }
    },
    hourly: [
      { time: '10 AM', temp: 29, pop: 85, icon: 'cloud-rain' },
      { time: '12 PM', temp: 30, pop: 90, icon: 'cloud-lightning' },
      { time: '02 PM', temp: 29, pop: 95, icon: 'cloud-rain' },
      { time: '04 PM', temp: 28, pop: 80, icon: 'cloud-rain' },
      { time: '06 PM', temp: 27, pop: 70, icon: 'cloud-rain' },
      { time: '08 PM', temp: 27, pop: 60, icon: 'cloud' },
      { time: '10 PM', temp: 26, pop: 50, icon: 'cloud' }
    ]
  },
  'lucknow': {
    id: 'lucknow',
    name: 'Lucknow',
    nameHi: 'लखनऊ',
    state: 'Uttar Pradesh',
    stateHi: 'उत्तर प्रदेश',
    temp: 33,
    feelsLike: 37,
    condition: 'Humid & Scattered Clouds',
    conditionHi: 'उमस और छिटपुट बादल',
    iconType: 'cloud-sun',
    tempMin: 26,
    tempMax: 35,
    humidity: 74,
    rainfallChance: 40,
    windSpeed: 11,
    windDirection: 'E',
    pressure: 1006,
    visibility: 5.0,
    uvIndex: 8,
    soilMoisture: 58,
    isCoastal: false,
    aqi: {
      value: 142,
      status: 'Moderate',
      statusHi: 'मध्यम',
      color: '#F59E0B',
      pm25: 58,
      pm10: 130
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 55,
      strikesCount: 2,
      statusText: 'Isolated lightning 55 km East near Barabanki border',
      statusTextHi: 'बाराबंकी सीमा के पास 55 किमी दूर हल्की आकाशीय बिजली'
    },
    meghdootAgro: {
      zone: 'Central Plain Zone of Uttar Pradesh',
      zoneHi: 'उत्तर प्रदेश मध्य मैदानी क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Paddy crop requires continuous monitoring for stem borer and leaf folder. Weather remains favorable for urea top-dressing before rain.',
      bulletinHi: 'धान की फसल में तना छेदक कीट की निगरानी करें। बारिश से पूर्व यूरिया की टॉप ड्रेसिंग के लिए अनुकूल समय है।',
      crops: [
        { name: 'Paddy / धान', advice: 'Top dress with 25 kg urea per acre if soil is moist.', stage: 'Tillering' },
        { name: 'Sugarcane / गन्ना', advice: 'Tie taller cane stalks to prevent lodging.', stage: 'Grand Growth' }
      ]
    },
    personaTips: {
      student: {
        en: 'Warm and sticky afternoon. Carry a refillable water bottle and a sun cap for outdoor games period.',
        hi: 'दोपहर में उमस रहेगी। स्कूल के खेल के समय पानी की बोतल और धूप से बचने के लिए टोपी साथ रखें।'
      },
      farmer: {
        en: 'Soil moisture is 58%. Favorable conditions for nitrogen application. Rainfall expected in late evening hours.',
        hi: 'मिट्टी में 58% नमी है। यूरिया देने का अच्छा मौका है। देर शाम हल्की बारिश के आसार हैं।'
      },
      senior_health: {
        en: 'Slightly elevated humidity can cause lethargy and sweating. Stay hydrated and avoid stepping out in direct sun at 1 PM.',
        hi: 'उमस के कारण पसीना और सुस्ती आ सकती है। पर्याप्त पानी पिएं और दोपहर 1 बजे तेज धूप में बाहर न निकलें।'
      },
      commuter: {
        en: 'Smooth traffic on Shaheed Path & Hazratganj. No waterlogging alert currently. Evening drizzle may slow traffic around 7 PM.',
        hi: 'शहीद पथ और हजरतगंज पर यातायात सामान्य है। शाम 7 बजे हल्की फुहारों से वाहनों की गति धीमी हो सकती है।'
      },
      fitness: {
        en: 'High sweat rate today! Best hours for running are 6:00 AM - 7:15 AM or post 7:30 PM under street lighting.',
        hi: 'आज पसीना ज्यादा निकलेगा! सुबह 6:00 से 7:15 बजे या शाम 7:30 बजे के बाद दौड़ना सबसे सुरक्षित रहेगा।'
      },
      coastal: {
        en: 'Gomti river water level is currently 107.8 meters (well below the danger mark of 113m).',
        hi: 'गोमती नदी का जलस्तर 107.8 मीटर है, जो खतरे के निशान (113 मीटर) से काफी नीचे है।'
      },
      traveler: {
        en: 'Visiting Old Lucknow (Chowk, Imambara)? Wear comfortable walking sandals and light breathable cotton.',
        hi: 'पुराने लखनऊ (चौक, इमामबाड़ा) घूमने जा रहे हैं? आरामदायक चप्पल और हल्के सूती कपड़े पहनें।'
      },
      event: {
        en: 'Outdoor Comfort Score: 6.8/10. Fan misting will be appreciated by guests during evening outdoor dinner functions.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 6.8/10। शाम के खुले लॉन में पंखे या मिस्ट कूलिंग की व्यवस्था मेहमानों को राहत देगी।'
      }
    },
    hourly: [
      { time: '10 AM', temp: 31, pop: 15, icon: 'sun' },
      { time: '12 PM', temp: 33, pop: 20, icon: 'sun' },
      { time: '02 PM', temp: 35, pop: 30, icon: 'cloud-sun' },
      { time: '04 PM', temp: 34, pop: 40, icon: 'cloud-sun' },
      { time: '06 PM', temp: 31, pop: 45, icon: 'cloud-rain' },
      { time: '08 PM', temp: 29, pop: 30, icon: 'cloud' },
      { time: '10 PM', temp: 28, pop: 15, icon: 'moon' }
    ]
  },
  'shimla': {
    id: 'shimla',
    name: 'Shimla',
    nameHi: 'शिमला',
    state: 'Himachal Pradesh',
    stateHi: 'हिमाचल प्रदेश',
    temp: 18,
    feelsLike: 17,
    condition: 'Chilly Mist & Fog',
    conditionHi: 'ठंडी धुंध और कोहरा',
    iconType: 'cloud-fog',
    tempMin: 12,
    tempMax: 21,
    humidity: 85,
    rainfallChance: 60,
    windSpeed: 8,
    windDirection: 'NNE',
    pressure: 1018,
    visibility: 1.2,
    uvIndex: 5,
    soilMoisture: 72,
    isCoastal: false,
    aqi: {
      value: 34,
      status: 'Good / Pristine',
      statusHi: 'अति उत्तम',
      color: '#16A34A',
      pm25: 8,
      pm10: 25
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 80,
      strikesCount: 0,
      statusText: 'No lightning in Himalayan sector',
      statusTextHi: 'पहाड़ी क्षेत्र में बिजली का कोई खतरा नहीं'
    },
    meghdootAgro: {
      zone: 'Sub-Temperate Himalayan Horticultural Zone',
      zoneHi: 'उप-समशीतोष्ण हिमालयी बागवानी क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Apple harvesting in final stages. Avoid picking during wet mist to prevent fungal storage rot. Ensure drainage in terraced orchards.',
      bulletinHi: 'सेब की तुड़ाई अंतिम चरण में है। फफूंद से बचाव के लिए गीले कोहरे में तुड़ाई न करें। सीढ़ीदार बगीचों में पानी न रुकने दें।',
      crops: [
        { name: 'Apple / सेब', advice: 'Grade and pack only when fruit surface is fully dry.', stage: 'Harvest' },
        { name: 'Maize / मक्का', advice: 'Watch for hill cob rot in high humidity.', stage: 'Maturity' }
      ]
    },
    personaTips: {
      student: {
        en: 'Morning temperature is 14°C! Wear a warm school blazer or sweater. Wet stairs on Mall Road, walk cautiously.',
        hi: 'सुबह का तापमान 14°C है! स्कूल स्वेटर या कोट जरूर पहनें। मॉल रोड की सीढ़ियों पर फिसलन है, संभलकर चलें।'
      },
      farmer: {
        en: 'Dense mist may cause fungal spots in late apple crops. Spray systemic fungicide only when sky clears by tomorrow noon.',
        hi: 'घने कोहरे से सेब में दाग लग सकते हैं। कल दोपहर धूप खिलने पर ही फफूंदनाशक का छिड़काव करें।'
      },
      senior_health: {
        en: 'Cold damp air (12°C tonight). Excellent AQI (34). Keep knees warm with thermal clothing. Enjoy morning fresh mountain air after 8 AM.',
        hi: 'रात में 12°C की ठंडी हवा रहेगी। हवा बेहद स्वच्छ (AQI 34) है। जोड़ों को गर्म रखें और सुबह 8 बजे के बाद ताजी हवा लें।'
      },
      commuter: {
        en: 'Severe fog on Shimla-Kalka Highway (NH-5). Visibility dropped to 1.2 km near Taradevi. Drive with fog lamps on low beam.',
        hi: 'कालका-शिमला हाईवे (NH-5) पर तारादेवी के पास घना कोहरा है। दृश्यता सिर्फ 1.2 किमी है, फॉग लैंप जलाकर धीमी गति से चलें।'
      },
      fitness: {
        en: 'Chilly morning uphill run burns extra calories! Ideal hours: 7:30 AM - 10:00 AM. Wear wind-cheater jacket.',
        hi: 'पहाड़ी रास्तों पर ताजी हवा में दौड़ने का बेहतरीन मौसम! सुबह 7:30 से 10:00 बजे का समय सबसे अच्छा है। विंडचीटर पहनें।'
      },
      coastal: {
        en: 'Mountainous terrain. Landslide risk index: Low today due to light mist instead of cloudburst.',
        hi: 'पहाड़ी क्षेत्र। तेज मूसलाधार बारिश न होने के कारण आज भूस्खलन का खतरा कम है।'
      },
      traveler: {
        en: 'Pack light woolens and waterproof jackets. Toy train operations on time. Jakhu ropeway running normally.',
        hi: 'हल्के ऊनी कपड़े और वाटरप्रूफ जैकेट साथ रखें। टॉय ट्रेन और जाखू रोपवे समय पर चल रहे हैं।'
      },
      event: {
        en: 'Outdoor Comfort Score: 8.5/10. Delightful brisk weather for mountain tea parties and bonfire evenings.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 8.5/10। शाम के समय बॉनफायर और गरम चाय के साथ पारिवारिक आयोजनों के लिए शानदार मौसम।'
      }
    },
    hourly: [
      { time: '10 AM', temp: 16, pop: 40, icon: 'cloud-fog' },
      { time: '12 PM', temp: 19, pop: 45, icon: 'cloud-sun' },
      { time: '02 PM', temp: 21, pop: 50, icon: 'cloud-sun' },
      { time: '04 PM', temp: 19, pop: 60, icon: 'cloud-rain' },
      { time: '06 PM', temp: 17, pop: 50, icon: 'cloud-fog' },
      { time: '08 PM', temp: 15, pop: 30, icon: 'cloud' },
      { time: '10 PM', temp: 13, pop: 20, icon: 'moon' }
    ]
  }
};

export const MOES_ANALYTICS_DATA = {
  nationalSummary: {
    activeNodesCount: 14280,
    totalDailyQueries: '3.42 Million',
    activeAlertDistricts: 18,
    radarMatchAccuracy: 94.6,
    avgConfidenceScore: 'High (0.91)'
  },
  personaTraffic: [
    { persona: 'Kisan / Farmer', share: 38, queriesToday: '1,300,000', growth: '+14% (Monsoon peak)' },
    { persona: 'Daily Commuter', share: 22, queriesToday: '752,000', growth: '+8% (Fog alerts)' },
    { persona: 'Senior & Health', share: 15, queriesToday: '513,000', growth: '+22% (AQI tracking)' },
    { persona: 'Student & Youth', share: 11, queriesToday: '376,000', growth: '+5% (School rain)' },
    { persona: 'Fitness & Sports', share: 6, queriesToday: '205,000', growth: '+3%' },
    { persona: 'Coastal & Fisherfolk', share: 5, queriesToday: '171,000', growth: '+18% (High tides)' },
    { persona: 'Traveler & Events', share: 3, queriesToday: '103,000', growth: '+2%' }
  ],
  predictiveModels: {
    agriculture: [
      {
        state: 'Punjab & Haryana',
        crop: 'Kharif Paddy',
        projectedYieldChange: '+3.8% (Surplus)',
        riskLevel: 'Low',
        telemetryDriver: 'Optimal soil moisture queries (65-72%) across 22 districts.',
        fciProcurementImpact: 'FCI storage capacity buffer required: +180,000 Metric Tonnes.'
      },
      {
        state: 'Eastern Uttar Pradesh',
        crop: 'Maize & Pulses',
        projectedYieldChange: '-4.2% (Moderate Stress)',
        riskLevel: 'Medium',
        telemetryDriver: 'Farmers searching irrigation alternatives due to 8-day dry spell window.',
        fciProcurementImpact: 'Early MSP procurement window advised to stabilize farm-gate prices.'
      },
      {
        state: 'Maharashtra (Vidarbha)',
        crop: 'Cotton & Soybean',
        projectedYieldChange: '-7.5% (High Moisture Stress)',
        riskLevel: 'High Alert',
        telemetryDriver: 'Spike in pest advisory queries (Pink Bollworm risk) following unseasonal rainfall.',
        fciProcurementImpact: 'Emergency seed subsidy and PMFBY crop insurance claims fast-tracking.'
      }
    ],
    powerGrid: [
      {
        region: 'Northern Regional Grid (NR-Grid)',
        peakDemandMW: '74,200 MW',
        projectedSurge: '+4,800 MW (+6.9%)',
        coolingDegreeDays: 14.2,
        triggerFactor: 'Sustained Heat Index >39°C across Delhi, Jaipur & Lucknow causing AC spike.',
        actionRequired: 'Ramp thermal peaker plants & hydro storage release from Bhakra.'
      },
      {
        region: 'Western Regional Grid (WR-Grid)',
        peakDemandMW: '61,500 MW',
        projectedSurge: '-1,200 MW (-1.9%)',
        coolingDegreeDays: 8.1,
        triggerFactor: 'Heavy monsoon downpours lowering ambient temperatures in Mumbai and Pune.',
        actionRequired: 'Surplus power can be wheeled to Northern Grid via HVDC corridors.'
      }
    ],
    publicHealth: [
      {
        cluster: 'Indo-Gangetic Plain (Delhi-NCR, Kanpur, Patna)',
        forecastCondition: 'Post-Monsoon Air Stagnation & Moderate PM2.5',
        projectedERSurge: '+18% respiratory admissions (Asthma, Bronchitis)',
        vulnerablePopulation: 'Senior Citizens (65+) & Children (under 12)',
        mohwAction: 'Pre-stock district hospitals with nebulizers & corticosteroid inhalers.'
      },
      {
        cluster: 'Konkan Coastal Belt (Mumbai, Thane, Raigad)',
        forecastCondition: 'High Humidity (>85%) + Intermittent Waterlogging',
        projectedERSurge: '+25% vector-borne (Dengue/Leptospirosis) alert',
        vulnerablePopulation: 'Slum settlements & field sanitation workers',
        mohwAction: 'Civic fumigation and doxycycline prophylactic distribution.'
      }
    ],
    radarCalibration: {
      dopplerRadarReflectivity: '38 dBZ (Moderate precipitation estimated)',
      crowdsourcedReportsCount: 4820,
      citizenVerifiedRaining: 4562,
      accuracyRate: '94.6%',
      calibrationOffsetApplied: '+0.4 dBZ auto-calibrated via citizen ground-truth'
    }
  }
};


export const WEATHER_ALERT_LEVELS = {
  green: {
    level: 1,
    id: 'green',
    code: 'GREEN',
    name: 'Normal / All Clear',
    nameHi: 'हरा — सामान्य स्थिति',
    bg: 'bg-emerald-600',
    border: 'border-emerald-500',
    lightBg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    textColor: 'text-emerald-700',
    dotColor: '#10B981',
    badgeText: 'NO WARNING',
    badgeTextHi: 'कोई चेतावनी नहीं',
    severity: 'Safe / सुरक्षित',
    description: 'No severe weather expected. Conditions are calm and safe for all daily outdoor routines.',
    descriptionHi: 'कोई प्रतिकूल मौसम का खतरा नहीं है। सभी दैनिक गतिविधियों और यात्रा के लिए परिस्थितियां अनुकूल हैं।',
    action: 'Routine weather precautions.',
    actionHi: 'सामान्य दैनिक सावधानियां रखें।'
  },
  yellow: {
    level: 2,
    id: 'yellow',
    code: 'YELLOW',
    name: 'Watch / Be Aware',
    nameHi: 'पीला — सतर्क रहें',
    bg: 'bg-amber-500',
    border: 'border-amber-400',
    lightBg: 'bg-amber-50 text-amber-900 border-amber-200',
    textColor: 'text-amber-700',
    dotColor: '#F59E0B',
    badgeText: 'BE AWARE',
    badgeTextHi: 'सतर्क रहें',
    severity: 'Moderate / मध्यम',
    description: 'Weather is changing. Potential for isolated rain showers, moderate heat, or morning fog affecting daily travel.',
    descriptionHi: 'मौसम बदल रहा है। छिटपुट बारिश, मध्यम गर्मी या सुबह के समय हल्के कोहरे की संभावना है।',
    action: 'Keep a check on daily forecast updates.',
    actionHi: 'दैनिक मौसम बुलेटिन पर नजर बनाए रखें।'
  },
  orange: {
    level: 3,
    id: 'orange',
    code: 'ORANGE',
    name: 'Alert / Be Prepared',
    nameHi: 'नारंगी — तैयार रहें',
    bg: 'bg-orange-600',
    border: 'border-orange-500',
    lightBg: 'bg-orange-50 text-orange-900 border-orange-200',
    textColor: 'text-orange-700',
    dotColor: '#EA580C',
    badgeText: 'BE PREPARED',
    badgeTextHi: 'तैयार रहें',
    severity: 'Severe / गंभीर',
    description: 'High probability of severe weather: heavy rainfall spells, gusty squalls (50-60 km/h), localized waterlogging, or thunderstorm activity.',
    descriptionHi: 'गंभीर मौसम की उच्च संभावना: तेज मूसलाधार बारिश, तेज आंधी, स्थानीय जलभराव और आकाशीय बिजली का खतरा।',
    action: 'Avoid unnecessary travel; secure outdoor livestock and equipment.',
    actionHi: 'अनावश्यक यात्रा से बचें; खुले में रखे सामान और पशुओं को सुरक्षित स्थान पर ले जाएं।'
  },
  red: {
    level: 4,
    id: 'red',
    code: 'RED',
    name: 'Warning / Take Action',
    nameHi: 'लाल — तुरंत कार्रवाई करें',
    bg: 'bg-red-600',
    border: 'border-red-500',
    lightBg: 'bg-red-50 text-red-900 border-red-200',
    textColor: 'text-red-700',
    dotColor: '#DC2626',
    badgeText: 'TAKE ACTION',
    badgeTextHi: 'कार्रवाई करें',
    severity: 'Very Severe / अति गंभीर',
    description: 'Extremely dangerous weather! Extreme downpours (>150mm), cloudburst probability, severe lightning, road blockage, or flash flood inundation.',
    descriptionHi: 'अत्यंत खतरनाक मौसम! भीषण भारी बारिश, बादल फटने की आशंका, तेज आकाशीय बिजली, सड़क अवरोध और अचानक बाढ़ का खतरा।',
    action: 'Stay indoors in sturdy structures. Follow district administration evacuation or school holiday advisories.',
    actionHi: 'पक्के मकानों में अंदर रहें। प्रशासन के निर्देशों का पालन करें।'
  },
  purple: {
    level: 5,
    id: 'purple',
    code: 'PURPLE / VIOLET',
    name: 'Catastrophic / Worst Mausam Alert',
    nameHi: 'बैंगनी — महा-आपदा आपातकाल (Worst Mausam)',
    bg: 'bg-purple-800',
    border: 'border-purple-600',
    lightBg: 'bg-purple-50 text-purple-950 border-purple-300',
    textColor: 'text-purple-800',
    dotColor: '#7E22CE',
    badgeText: 'WORST EMERGENCY',
    badgeTextHi: 'चरम आपदा अलर्ट',
    severity: 'Catastrophic / प्रलयंकारी आपातकाल',
    description: 'Maximum worst weather catastrophe! Super cyclone, massive cloudburst floods, or catastrophic storm surge. National Disaster Response Force (NDRF) deployed.',
    descriptionHi: 'मौसम का सर्वाधिक भयावह व खतरनाक स्तर! सुपर चक्रवात, महा-जलप्रलय या विनाशकारी तूफान। एनडीआरएफ व सेना बचाव दल सक्रिय।',
    action: 'Immediate life-safety protocol. Relocate to certified cyclone/flood relief shelters immediately.',
    actionHi: 'जीवन रक्षा के सर्वोच्च उपाय करें। तुरंत सुरक्षित राहत शिविरों में शरण लें।'
  }
};
