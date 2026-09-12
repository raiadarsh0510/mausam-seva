export const PERSONAS = [
  {
    id: 'student',
    name: 'Parents & Families',
    nameHi: 'माता-पिता व परिवार (स्कूल)',
    ageRange: 'Parents & Kids (All Ages)',
    icon: 'GraduationCap',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    accentColor: '#0284C7',
    description: 'School commute conditions, rain alerts, and severe weather warnings to plan daily routines',
    descriptionHi: 'स्कूल आने-जाने का रास्ता, बारिश का अलर्ट और दिनचर्या के लिए मौसम चेतावनियां'
  },
  {
    id: 'farmer',
    name: 'Agriculture & Gardeners',
    nameHi: 'कृषि व बागवानी (किसान)',
    ageRange: '20–70+ Years',
    icon: 'Tractor',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentColor: '#16A34A',
    description: 'Soil moisture, rainfall predictions, frost alerts, and seasonal planting guidance',
    descriptionHi: 'मिट्टी में नमी, बारिश का पूर्वानुमान, पाला (कोल्ड वेव) अलर्ट और मौसमी बुवाई सलाह'
  },
  {
    id: 'senior_health',
    name: 'Health-Conscious Users',
    nameHi: 'स्वास्थ्य-सचेत नागरिक व बुजुर्ग',
    ageRange: 'All Ages / Seniors (60+)',
    icon: 'HeartPulse',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    accentColor: '#E11D48',
    description: 'Highlight Air Quality Index (AQI), pollen count, UV index, and humidity levels to help manage allergies, asthma, or skin sensitivity',
    descriptionHi: 'हवा की गुणवत्ता (AQI), परागकण (पॉलेन), धूप (UV) और नमी से एलर्जी व सांस की सुरक्षा'
  },
  {
    id: 'commuter',
    name: 'Commuters & Transit',
    nameHi: 'दैनिक यात्री व कम्यूटर',
    ageRange: '18–60 Years',
    icon: 'Car',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    accentColor: '#D97706',
    description: 'Integrate weather with traffic updates, visibility conditions, and alerts for storms or fog that affect travel',
    descriptionHi: 'ट्रैफिक जाम अपडेट, सड़क दृश्यता (कोहरा) और आंधी-तूफान से यात्रा में व्यवधान अलर्ट'
  },
  {
    id: 'fitness',
    name: 'Outdoor Fitness Enthusiasts',
    nameHi: 'आउटडोर फिटनेस व स्पोर्ट्स',
    ageRange: '16–55 Years',
    icon: 'Flame',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    accentColor: '#EA580C',
    description: 'Show sunrise/sunset times, best running hours, wind speed, and heat alerts to optimize workout planning',
    descriptionHi: 'सूर्योदय/सूर्यास्त समय, दौड़ने का सबसे उत्तम समय, हवा की गति और हीट अलर्ट'
  },
  {
    id: 'coastal',
    name: 'Beachgoers & Surfers',
    nameHi: 'समुद्र तट, सर्फर्स व तटीय',
    ageRange: 'All Ages / Coastal',
    icon: 'Anchor',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    accentColor: '#0891B2',
    description: 'Display sea conditions, tide timings, wave height, and water temperature for safe and enjoyable beach activities',
    descriptionHi: 'समुद्र की स्थिति, ज्वार-भाटा समय, लहरों की ऊंचाई और पानी का तापमान'
  },
  {
    id: 'traveler',
    name: 'Travelers & Tourists',
    nameHi: 'यात्री व पर्यटक',
    ageRange: 'All Ages',
    icon: 'Plane',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    accentColor: '#9333EA',
    description: 'Provide quick access to saved destinations, severe weather alerts for flights, and packing suggestions (e.g., Carry a raincoat in London)',
    descriptionHi: 'पसंदीदा शहरों का मौसम, उड़ानों में मौसम का असर और पैकिंग सुझाव (जैसे लंदन के लिए रेनकोट)'
  },
  {
    id: 'event',
    name: 'Event Planners & Gatherings',
    nameHi: 'इवेंट प्लानर व समारोह',
    ageRange: 'All Ages',
    icon: 'CalendarDays',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    accentColor: '#0D9488',
    description: 'Offer extended forecasts, probability of rain, and comfort index for outdoor gatherings or weddings',
    descriptionHi: 'विस्तृत पूर्वानुमान, बारिश की संभावना और शादी/समारोह के लिए आउटडोर कम्फर्ट स्कोर'
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
        sunTimes: {
      sunrise: '05:48 AM',
      sunriseHi: 'सुबह 05:48',
      sunset: '06:34 PM',
      sunsetHi: 'शाम 06:34'
    },
    pollen: {
      count: 'Moderate',
      countHi: 'मध्यम',
      treePollen: 'Low',
      grassPollen: 'Moderate',
      weedPollen: 'Moderate',
      dominantAllergen: 'Grass & Dust Pollen',
      dominantAllergenHi: 'घास व धूल परागकण',
      skinSensitivity: 'Moderate (SPF 30+ recommended; high dust allergy risk)',
      skinSensitivityHi: 'मध्यम (धूल से त्वचा एलर्जी का जोखिम, SPF 30+ लगाएं)'
    },
    heatAlert: {
      level: 'Yellow Heat Watch',
      levelHi: 'येलो हीट वॉच',
      text: 'Afternoon heat index reaches 39°C. Morning window (5:30 - 7:30 AM) is optimal for workouts.',
      textHi: 'दोपहर में गर्मी 39°C महसूस होगी। सुबह 5:30 से 7:30 बजे व्यायाम के लिए सबसे सही समय है।'
    },
    seaConditions: {
      isCoastal: false,
      state: 'Inland Plains / Yamuna River',
      stateHi: 'मैदानी क्षेत्र / यमुना नदी बेसिन',
      waveHeight: 'Calm / Riverine',
      waterTemp: 26,
      waterTempHi: '26°C',
      surfSuitability: 'Not applicable (Inland)',
      surfSuitabilityHi: 'लागू नहीं (मैदानी क्षेत्र)'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Light Drizzle', icon: 'cloud-rain', packing: 'Carry a waterproof raincoat & compact umbrella', packingHi: 'वाटरप्रूफ रेनकोट और छाता साथ रखें' },
      { city: 'Jaipur', temp: '34°C', condition: 'Sunny & Dry', icon: 'sun', packing: 'UV sunglasses, light cotton & sunscreen', packingHi: 'धूप का चश्मा, हल्के सूती कपड़े व सनस्क्रीन' },
      { city: 'Goa', temp: '29°C', condition: 'Warm Breeze', icon: 'waves', packing: 'Breathable beachwear & waterproof footwear', packingHi: 'बीचवियर और वाटरप्रूफ फुटवियर' },
      { city: 'Srinagar', temp: '15°C', condition: 'Chilly Evening', icon: 'cloud', packing: 'Pack a warm fleece jacket & windcheater', packingHi: 'गर्म फ्लीस जैकेट और विंडचीटर साथ रखें' }
    ],
    flightAlerts: {
      airportCode: 'DEL (IGI Airport)',
      status: 'Normal / Minor Holding (10m)',
      statusHi: 'उड़ानें सामान्य / 10 मिनट विलंब',
      advisory: 'Runway visual range clear (4.2 km). No severe wind-shear or thunderstorm hold.',
      advisoryHi: 'रनवे पर दृश्यता सामान्य है। कोई आंधी या तूफान की चेतावनी नहीं।'
    },
    packingSuggestions: {
      primary: 'Light cotton wear, UV sunglasses, folding umbrella for late afternoon drizzle',
      primaryHi: 'हल्के सूती कपड़े, धूप का चश्मा, शाम की बौछार के लिए छोटा छाता'
    },
    schoolCommute: {
      status: 'Safe & On-Time',
      statusHi: 'सुरक्षित आवागमन',
      morningDrop: '07:00 AM - 08:30 AM: Clear skies, visibility 4.5 km',
      morningDropHi: 'सुबह 7:00 से 8:30: आसमान साफ, दृश्यता 4.5 किमी',
      afternoonPickup: '01:30 PM - 03:30 PM: Warm with isolated cloud buildup; carry water bottle',
      afternoonPickupHi: 'दोपहर 1:30 से 3:30: धूप व उमस, पानी की बोतल साथ रखें'
    },
    rainAlerts: {
      nextRainIn: 'Isolated drizzle expected around 04:45 PM (35% probability)',
      nextRainInHi: 'शाम 04:45 बजे 35% बूंदाबांदी की संभावना',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: false,
      title: 'No Active Severe Thunderstorm Warning',
      titleHi: 'कोई गंभीर तूफान चेतावनी सक्रिय नहीं',
      instruction: 'Routine weather monitoring active across NCR districts.',
      instructionHi: 'दिल्ली-एनसीआर में सामान्य मौसम निगरानी जारी है।'
    },
    rainfallPredictions: {
      next24h: '8 - 14 mm',
      next48h: '20 mm cumulative',
      probabilityPeak: 'Peak rain probability at 05:30 PM (35%)',
      probabilityPeakHi: 'शाम 5:30 बजे अधिकतम 35% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '14.2°C (No Frost Risk)',
      groundTempMinHi: '14.2°C (पाले का कोई खतरा नहीं)',
      advice: 'Safe for open garden beds and young nursery saplings.',
      adviceHi: 'खुले बगीचे और नर्सरी के पौधों के लिए सुरक्षित।'
    },
    seasonalPlanting: {
      season: 'Late Kharif / Pre-Rabi Prep',
      seasonHi: 'खरीफ कटाई व रबी पूर्व तैयारी',
      plantingTips: 'Prepare garden soil with organic compost for winter greens (spinach, fenugreek, coriander). Farmers should plan mustard sowing.',
      plantingTipsHi: 'पालक, मेथी, धनिया की बुवाई के लिए क्यारियां तैयार करें। किसान सरसों की बुवाई की योजना बनाएं।'
    },
    trafficUpdate: {
      status: 'Normal Flow on Arterials',
      statusHi: 'मुख्य मार्गों पर यातायात सामान्य',
      arterialRoads: 'Ring Road, DND Flyway & NH-48 moving smoothly. Minto Bridge & underpasses dry and clear.',
      arterialRoadsHi: 'रिंग रोड व डीएनडी पर सामान्य आवागमन। मिंटो ब्रिज और अंडरपास पूरी तरह सूखे व सुरक्षित हैं।'
    },
    stormFogAlert: {
      active: false,
      message: 'No dense fog or dust storm affecting Delhi-NCR highways or Metro transit.',
      messageHi: 'हाईवे या दिल्ली मेट्रो पर कोहरे अथवा धूल भरी आंधी का कोई प्रभाव नहीं है।'
    },
    comfortIndex: {
      score: '7.4 / 10 (Comfortable)',
      label: 'Favorable for Evening Gatherings',
      labelHi: 'शाम के आयोजनों के लिए अनुकूल',
      factors: 'Breeze 14 km/h, Humidity 62%, Heat Index 38°C (cooling to 30°C post 7 PM)',
      factorsHi: 'हवा 14 किमी/घं, नमी 62%, शाम 7 बजे के बाद मौसम सुखद'
    },
    probabilityOfRain: {
      morning: '10%',
      afternoon: '20%',
      evening: '35% (Outdoor lawns safe with backup canopy)',
      eveningHi: '35% (शाम के लॉन सुरक्षित, बैकअप शेड रखें)',
      night: '15%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '34°C / 27°C', rainProb: '35%', comfort: '7.4/10 (Good)' },
      { day: 'Saturday / शनिवार', temp: '35°C / 26°C', rainProb: '25%', comfort: '7.8/10 (Pleasant)' },
      { day: 'Sunday / रविवार', temp: '33°C / 25°C', rainProb: '55%', comfort: '6.0/10 (Rain Canopy Advised)' }
    ],
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
        sunTimes: {
      sunrise: '06:12 AM',
      sunriseHi: 'सुबह 06:12',
      sunset: '06:48 PM',
      sunsetHi: 'शाम 06:48'
    },
    pollen: {
      count: 'Low',
      countHi: 'कम',
      treePollen: 'Low',
      grassPollen: 'Low',
      weedPollen: 'Low',
      dominantAllergen: 'Fungal Spores & High Humidity',
      dominantAllergenHi: 'फंगल बीजाणु व अत्यधिक नमी',
      skinSensitivity: 'High humidity fungal rash risk; keep skin dry and use antifungal dusting powder',
      skinSensitivityHi: 'उमस से त्वचा में फंगल इन्फेक्शन का खतरा, त्वचा को सूखा रखें'
    },
    heatAlert: {
      level: 'Normal / Muggy',
      levelHi: 'उमस भरा सामान्य',
      text: 'Moderate ambient temp (30°C) with high sweat rate due to 88% humidity. Indoor cardio advised.',
      textHi: 'तापमान 30°C लेकिन 88% नमी से अत्यधिक पसीना। इंडोर व्यायाम की सलाह।'
    },
    seaConditions: {
      isCoastal: true,
      state: 'Rough Swells & Active Coastal Squalls',
      stateHi: 'उछाल भरी लहरें व तटीय तेज हवा',
      waveHeight: '3.2 - 4.1 Meters',
      waterTemp: 29,
      waterTempHi: '29°C (गरम)',
      surfSuitability: 'Extreme Caution: Experienced surfers only with life-vest; swimming banned',
      surfSuitabilityHi: 'अत्यधिक सतर्कता: समुद्र में तैरना वर्जित, केवल अनुभवी सर्फर्स'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Overcast Drizzle', icon: 'cloud-rain', packing: 'Waterproof trench coat & slip-resistant shoes', packingHi: 'वाटरप्रूफ कोट और वाटरप्रूफ जूते' },
      { city: 'Goa', temp: '28°C', condition: 'Monsoon Swell', icon: 'waves', packing: 'Quick-dry apparel, umbrella & rain slippers', packingHi: 'जल्दी सूखने वाले कपड़े व छाता' },
      { city: 'Pune', temp: '25°C', condition: 'Breezy Showers', icon: 'cloud-rain', packing: 'Light hoodie and rain protection', packingHi: 'हल्की जैकेट और रेनकोट' },
      { city: 'Dubai', temp: '38°C', condition: 'Hot & Sunny', icon: 'sun', packing: 'Breathable cotton & sunglasses', packingHi: 'हल्के सूती वस्त्र व धूप का चश्मा' }
    ],
    flightAlerts: {
      airportCode: 'BOM (CSMIA Airport)',
      status: 'Holding Patterns Active (20m delay)',
      statusHi: 'हल्की देरी (20 मिनट)',
      advisory: 'Crosswinds up to 35 km/h on Runway 27. Intermittent heavy rain squalls causing air traffic sequencing delays.',
      advisoryHi: 'रनवे पर 35 किमी/घंटा की क्रॉसविंड। तेज फुहारों से उड़ानों में हल्की देरी।'
    },
    packingSuggestions: {
      primary: 'Heavy duty umbrella, waterproof backpack pouch, quick-dry synthetic wear',
      primaryHi: 'मजबूत छाता, वाटरप्रूफ बैग कवर, जल्दी सूखने वाले कपड़े'
    },
    schoolCommute: {
      status: 'Rain Caution / Watch Waterlogging',
      statusHi: 'बारिश सतर्कता / जलभराव पर नजर रखें',
      morningDrop: '06:45 AM - 08:15 AM: Heavy showers; commute with adult supervision',
      morningDropHi: 'सुबह 6:45 से 8:15: तेज बारिश; बच्चों के साथ बड़े जरूर रहें',
      afternoonPickup: '01:45 PM - 03:30 PM: High Tide at 2:45 PM coincides with dismissal; check local school bus alert',
      afternoonPickupHi: 'दोपहर 2:45 बजे हाई टाइड; स्कूल वैन मार्ग पर जलभराव चेक करें'
    },
    rainAlerts: {
      nextRainIn: 'Continuous moderate to heavy spells throughout afternoon',
      nextRainInHi: 'दोपहर भर रुक-रुक कर तेज बारिश जारी रहेगी',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: true,
      title: 'Yellow Marine & Urban Waterlogging Advisory',
      titleHi: 'येलो तटीय व जलभराव सतर्कता',
      instruction: 'Stay away from seafront promenades (Marine Drive, Bandra Bandstand) during high tide peak (2:45 PM).',
      instructionHi: 'दोपहर 2:45 बजे हाई टाइड के दौरान मरीन ड्राइव व समुद्र तट के पास न जाएं।'
    },
    rainfallPredictions: {
      next24h: '45 - 65 mm',
      next48h: '110 mm cumulative',
      probabilityPeak: 'Peak rain probability at 02:00 PM (95%)',
      probabilityPeakHi: 'दोपहर 2:00 बजे 95% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '24.5°C (Tropical Maritime)',
      groundTempMinHi: '24.5°C (पाले का कोई खतरा नहीं)',
      advice: 'No frost risk in coastal Maharashtra.',
      adviceHi: 'तटीय महाराष्ट्र में पाले का कोई जोखिम नहीं।'
    },
    seasonalPlanting: {
      season: 'Late Monsoon Kharif Care',
      seasonHi: 'मानसून फसल व बागवानी संरक्षण',
      plantingTips: 'Ensure container garden drainage holes are clear to prevent root rot. Clear terrace drains.',
      plantingTipsHi: 'गमलों की जल निकासी नाली साफ रखें ताकि पौधों की जड़ें न सड़ें। छत की नालियां खुली रखें।'
    },
    trafficUpdate: {
      status: 'Slow Moving / Waterlogging Delays',
      statusHi: 'धीमा यातायात / जलभराव से देरी',
      arterialRoads: 'King Circle, Hindmata & Milan subway slow moving (+25m). Western Railway operating with 10-min speed restrictions.',
      arterialRoadsHi: 'हिंदमाता व मिलन सबवे में जलभराव के कारण 25 मिनट की देरी। लोकल ट्रेनें 10 मिनट धीमी गति से चल रही हैं।'
    },
    stormFogAlert: {
      active: true,
      message: 'Squally coastal wind up to 45 km/h with sudden blinding rain sheets reducing sea-link visibility to 1.8 km.',
      messageHi: '45 किमी/घं की तेज हवाएं और बारिश से बांद्रा-वर्ली सी-लिंक पर दृश्यता 1.8 किमी तक घट सकती है।'
    },
    comfortIndex: {
      score: '3.5 / 10 (Poor Outdoor Comfort)',
      label: 'High Humidity & Rain Squalls',
      labelHi: 'अत्यधिक उमस व तेज बारिश',
      factors: 'Humidity 88%, Rain 85%, Gusts 35 km/h, High Tide 4.12m',
      factorsHi: 'नमी 88%, बारिश 85%, तेज हवा 35 किमी/घं, हाई टाइड 4.12 मीटर'
    },
    probabilityOfRain: {
      morning: '85%',
      afternoon: '95% (Avoid open-air setups)',
      evening: '70%',
      night: '60%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '30°C / 25°C', rainProb: '85%', comfort: '3.5/10 (Shift Indoors)' },
      { day: 'Saturday / शनिवार', temp: '29°C / 25°C', rainProb: '80%', comfort: '4.0/10 (Heavy Rain Risk)' },
      { day: 'Sunday / रविवार', temp: '30°C / 26°C', rainProb: '60%', comfort: '5.5/10 (Moderate Rain)' }
    ],
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
        sunTimes: {
      sunrise: '05:44 AM',
      sunriseHi: 'सुबह 05:44',
      sunset: '06:28 PM',
      sunsetHi: 'शाम 06:28'
    },
    pollen: {
      count: 'Moderate',
      countHi: 'मध्यम',
      treePollen: 'Low',
      grassPollen: 'Moderate',
      weedPollen: 'Low',
      dominantAllergen: 'Crop & Grass Pollen',
      dominantAllergenHi: 'फसल व घास परागकण',
      skinSensitivity: 'Moderate (Warm humidity sweat rash risk)',
      skinSensitivityHi: 'मध्यम (उमस से पसीने और खुजली का खतरा)'
    },
    heatAlert: {
      level: 'Normal / Humid',
      levelHi: 'सामान्य उमस',
      text: 'Ambient temp 33°C (feels like 37°C). Best workout window: 6:00 AM - 7:15 AM.',
      textHi: 'तापमान 33°C (37°C जैसा अहसास)। व्यायाम का सही समय: सुबह 6:00 से 7:15 बजे।'
    },
    seaConditions: {
      isCoastal: false,
      state: 'Inland / Gomti River Basin',
      stateHi: 'मैदानी / गोमती नदी घाटी',
      waveHeight: 'Calm River',
      waterTemp: 27,
      waterTempHi: '27°C',
      surfSuitability: 'Not applicable (Riverine)',
      surfSuitabilityHi: 'लागू नहीं (नदी क्षेत्र)'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Overcast', icon: 'cloud-rain', packing: 'Waterproof jacket & umbrella', packingHi: 'वाटरप्रूफ जैकेट और छाता' },
      { city: 'Varanasi', temp: '33°C', condition: 'Humid & Clear', icon: 'sun', packing: 'Cotton wear & slip-on sandals', packingHi: 'सूती कपड़े और आरामदायक चप्पल' },
      { city: 'Nainital', temp: '18°C', condition: 'Pleasant Hill Air', icon: 'cloud', packing: 'Light sweater & walking shoes', packingHi: 'हल्का स्वेटर और चलने के जूते' }
    ],
    flightAlerts: {
      airportCode: 'LKO (Chaudhary Charan Singh Airport)',
      status: 'On-Time',
      statusHi: 'समय पर',
      advisory: 'Clear flight corridors. Visibility 5.0 km, zero terminal hold.',
      advisoryHi: 'रनवे दृश्यता ५ किमी, उड़ानें बिल्कुल समय पर हैं।'
    },
    packingSuggestions: {
      primary: 'Light cotton kurtas, umbrella for evening, sunglasses',
      primaryHi: 'हल्के सूती कुर्ते, शाम के लिए छाता, धूप का चश्मा'
    },
    schoolCommute: {
      status: 'Safe & Clear',
      statusHi: 'सुरक्षित व सुगम',
      morningDrop: '07:15 AM - 08:30 AM: Clear roads, pleasant morning breeze',
      morningDropHi: 'सुबह 7:15 से 8:30: सड़कें साफ, सुहावनी हवा',
      afternoonPickup: '01:30 PM - 03:30 PM: Humid & warm; carry cold water flask',
      afternoonPickupHi: 'दोपहर 1:30 से 3:30: धूप व उमस, ठंडा पानी साथ रखें'
    },
    rainAlerts: {
      nextRainIn: 'Light showers expected around 07:00 PM (40% probability)',
      nextRainInHi: 'शाम 07:00 बजे 40% हल्की बारिश संभव',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: false,
      title: 'No Severe Weather Warning Active',
      titleHi: 'कोई गंभीर मौसम चेतावनी नहीं',
      instruction: 'Routine seasonal monitoring in Central UP districts.',
      instructionHi: 'मध्य उत्तर प्रदेश में मौसम सामान्य बना हुआ है।'
    },
    rainfallPredictions: {
      next24h: '10 - 16 mm',
      next48h: '22 mm cumulative',
      probabilityPeak: 'Peak rain probability at 07:00 PM (40%)',
      probabilityPeakHi: 'शाम 7:00 बजे अधिकतम 40% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '16.0°C (No Frost Risk)',
      groundTempMinHi: '16.0°C (पाले का कोई खतरा नहीं)',
      advice: 'Ideal soil temperature for vegetable nurseries.',
      adviceHi: 'सब्जियों की नर्सरी के लिए उत्तम तापमान।'
    },
    seasonalPlanting: {
      season: 'Rabi Pre-Sowing Window',
      seasonHi: 'रबी पूर्व बुवाई काल',
      plantingTips: 'Plough field for early potato and mustard planting. Home gardeners can sow cabbage, cauliflower and peas.',
      plantingTipsHi: 'अगेती आलू और सरसों की बुवाई के लिए खेत जोतें। गोभी और मटर के बीज बोएं।'
    },
    trafficUpdate: {
      status: 'Smooth Traffic on Key Corridors',
      statusHi: 'प्रमुख मार्गों पर सुगम यातायात',
      arterialRoads: 'Hazratganj, Shaheed Path & Gomti Nagar running clear. Underpasses dry and operational.',
      arterialRoadsHi: 'हजरतगंज, शहीद पथ और गोमती नगर में सुगम आवागमन। सबवे सूखे हैं।'
    },
    stormFogAlert: {
      active: false,
      message: 'No storm or fog hazard across Lucknow urban and suburban routes.',
      messageHi: 'लखनऊ शहरी व उपनगरीय मार्गों पर कोहरे या आंधी का कोई खतरा नहीं।'
    },
    comfortIndex: {
      score: '6.8 / 10 (Moderate Comfort)',
      label: 'Good for Evening Functions with Misting',
      labelHi: 'शाम के कार्यक्रमों के लिए अच्छा',
      factors: 'Wind 11 km/h, Humidity 74%, Heat Index 37°C',
      factorsHi: 'हवा 11 किमी/घं, नमी 74%, हीट इंडेक्स 37°C'
    },
    probabilityOfRain: {
      morning: '15%',
      afternoon: '30%',
      evening: '40%',
      night: '20%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '33°C / 26°C', rainProb: '40%', comfort: '6.8/10 (Pleasant Evening)' },
      { day: 'Saturday / शनिवार', temp: '34°C / 26°C', rainProb: '30%', comfort: '7.2/10 (Good)' },
      { day: 'Sunday / रविवार', temp: '32°C / 25°C', rainProb: '50%', comfort: '6.5/10 (Drizzle Chance)' }
    ],
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
        sunTimes: {
      sunrise: '06:02 AM',
      sunriseHi: 'सुबह 06:02',
      sunset: '06:36 PM',
      sunsetHi: 'शाम 06:36'
    },
    pollen: {
      count: 'Low',
      countHi: 'कम',
      treePollen: 'Low (Pine & Oak)',
      grassPollen: 'Low',
      weedPollen: 'Low',
      dominantAllergen: 'Pine Pollen (Minimal)',
      dominantAllergenHi: 'चीड़ परागकण (नगण्य)',
      skinSensitivity: 'Cold dry wind chapping risk; apply cold cream / lip balm',
      skinSensitivityHi: 'ठंडी हवा से त्वचा रूखी होने का खतरा, कोल्ड क्रीम लगाएं'
    },
    heatAlert: {
      level: 'Cold Wave / Chilly Alert',
      levelHi: 'ठंड व शीत लहर अलर्ट',
      text: 'Night temperature drops to 12°C. Frost watch in higher shaded valleys.',
      textHi: 'रात का तापमान 12°C तक गिरेगा। घाटी के छायादार हिस्सों में ठंड का असर।'
    },
    seaConditions: {
      isCoastal: false,
      state: 'Mountainous Hills / River Sutlej',
      stateHi: 'पहाड़ी क्षेत्र / सतलुज बेसिन',
      waveHeight: 'Highland Stream',
      waterTemp: 14,
      waterTempHi: '14°C (शीतल)',
      surfSuitability: 'Not applicable (Alpine)',
      surfSuitabilityHi: 'लागू नहीं (पहाड़ी)'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Rain', icon: 'cloud-rain', packing: 'Waterproof mac & warm layers', packingHi: 'वाटरप्रूफ कोट व गर्म कपड़े' },
      { city: 'Manali', temp: '14°C', condition: 'Crisp Mountain Breeze', icon: 'cloud', packing: 'Heavy jacket & woolens', packingHi: 'भारी जैकेट व ऊनी वस्त्र' },
      { city: 'Chandigarh', temp: '31°C', condition: 'Sunny & Warm', icon: 'sun', packing: 'Cotton wear & sun protection', packingHi: 'सूती कपड़े और धूप का चश्मा' }
    ],
    flightAlerts: {
      airportCode: 'SLV (Shimla Airport Jubbarhatti)',
      status: 'Caution / Cloud Cover',
      statusHi: 'सतर्कता / घने बादल',
      advisory: 'Table-top runway operating with visibility 1.2 km in morning fog. Afternoon flights clear.',
      advisoryHi: 'सुबह के कोहरे में दृश्यता 1.2 किमी। दोपहर में उड़ानों के लिए मौसम साफ।'
    },
    packingSuggestions: {
      primary: 'Warm fleece jacket, thermals for night, trekking shoes with good grip',
      primaryHi: 'गर्म फ्लीस जैकेट, रात के लिए थर्मल, फिसलन-रोधी ट्रेकिंग जूते'
    },
    schoolCommute: {
      status: 'Chilly Morning / Fog Caution',
      statusHi: 'ठंडी सुबह / कोहरा सतर्कता',
      morningDrop: '07:30 AM - 08:30 AM: Chilly 14°C, dense fog patches on Ridge & Mall Road',
      morningDropHi: 'सुबह 7:30 से 8:30: 14°C की ठंडक, मॉल रोड पर घना कोहरा',
      afternoonPickup: '02:00 PM - 03:30 PM: Pleasant 20°C; light jacket sufficient',
      afternoonPickupHi: 'दोपहर 2:00 से 3:30: सुहावना 20°C, हल्की जैकेट पर्याप्त'
    },
    rainAlerts: {
      nextRainIn: 'Passing mountain mist and drizzle between 03:30 PM and 06:00 PM',
      nextRainInHi: 'दोपहर 3:30 से शाम 6:00 के बीच पहाड़ी धुंध व फुहारें',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: false,
      title: 'Dense Mountain Fog Advisory',
      titleHi: 'घने पहाड़ी कोहरे की चेतावनी',
      instruction: 'Drive in low gear on steep descending hairpins on Shimla-Kalka highway.',
      instructionHi: 'कालका-शिमला हाईवे के मोड़ों पर धीमी गति और लो-गियर में चलें।'
    },
    rainfallPredictions: {
      next24h: '15 - 25 mm',
      next48h: '35 mm cumulative',
      probabilityPeak: 'Peak drizzle probability at 04:00 PM (60%)',
      probabilityPeakHi: 'शाम 4:00 बजे 60% संभावना'
    },
    frostAlert: {
      active: true,
      groundTempMin: '2.8°C (Ground Frost Alert in Shaded Slopes)',
      groundTempMinHi: '2.8°C (छायादार ढलानों पर पाला अलर्ट)',
      advice: 'Cover exotic flora and young nursery saplings with straw or polythene sheeting tonight.',
      adviceHi: 'नाजुक पौधों और नर्सरी को रात में प्लास्टिक शीट या पुआल से ढकें।'
    },
    seasonalPlanting: {
      season: 'Temperate Autumn Orchard Care',
      seasonHi: 'पहाड़ी शरद ऋतु बागवानी',
      plantingTips: 'Post-apple harvest orchard sanitation. Plant garlic, broad beans, and winter ornamental bulbs (tulips, daffodils).',
      plantingTipsHi: 'सेब के बगीचों की सफाई करें। लहसुन, बाकला और ट्यूलिप के कंद लगाएं।'
    },
    trafficUpdate: {
      status: 'Slow on Foggy Mountain Sections',
      statusHi: 'कोहरे के कारण पहाड़ी मोड़ पर धीमी गति',
      arterialRoads: 'NH-5 Shimla bypass moving cautiously due to mist near Taradevi. Circular Road clear.',
      arterialRoadsHi: 'तारादेवी के पास धुंध के चलते एनएच-5 पर धीमी गति। सर्कुलर रोड साफ है।'
    },
    stormFogAlert: {
      active: true,
      message: 'Visibility dropped to 1.2 km on upper ridges. Switch on amber fog lamps.',
      messageHi: 'ऊपरी चोटियों पर दृश्यता घटकर 1.2 किमी रह गई है। फॉग लैंप जलाकर चलें।'
    },
    comfortIndex: {
      score: '8.5 / 10 (Delightful Brisk Comfort)',
      label: 'Perfect for Bonfires & Warm Gatherings',
      labelHi: 'बॉनफायर व चाय पार्टी के लिए सर्वोत्तम',
      factors: 'Brisk wind 8 km/h, Temperature 18°C, Fresh Mountain Air',
      factorsHi: 'ताजा पहाड़ी हवा, तापमान 18°C, हल्की ठंडक'
    },
    probabilityOfRain: {
      morning: '40%',
      afternoon: '50%',
      evening: '60% (Chilly mist)',
      night: '25%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '18°C / 12°C', rainProb: '60%', comfort: '8.5/10 (Crisp & Cozy)' },
      { day: 'Saturday / शनिवार', temp: '19°C / 11°C', rainProb: '45%', comfort: '8.8/10 (Sunny Clear Slopes)' },
      { day: 'Sunday / रविवार', temp: '17°C / 10°C', rainProb: '65%', comfort: '7.5/10 (Chilly Mountain Fog)' }
    ],
    hourly: [
      { time: '10 AM', temp: 16, pop: 40, icon: 'cloud-fog' },
      { time: '12 PM', temp: 19, pop: 45, icon: 'cloud-sun' },
      { time: '02 PM', temp: 21, pop: 50, icon: 'cloud-sun' },
      { time: '04 PM', temp: 19, pop: 60, icon: 'cloud-rain' },
      { time: '06 PM', temp: 17, pop: 50, icon: 'cloud-fog' },
      { time: '08 PM', temp: 15, pop: 30, icon: 'cloud' },
      { time: '10 PM', temp: 13, pop: 20, icon: 'moon' }
    ]  },
  'kolkata': {
    id: 'kolkata',
    name: 'Kolkata',
    nameHi: 'कोलकाता',
    state: 'West Bengal',
    stateHi: 'पश्चिम बंगाल',
    temp: 32,
    feelsLike: 39,
    condition: 'Tropical Humid & Breezy',
    conditionHi: 'उष्णकटिबंधीय उमस व तेज हवा',
    iconType: 'cloud-rain',
    tempMin: 26,
    tempMax: 34,
    humidity: 82,
    rainfallChance: 65,
    windSpeed: 18,
    windDirection: 'S',
    pressure: 1004,
    visibility: 3.5,
    uvIndex: 6,
    soilMoisture: 74,
    isCoastal: true,
    tide: {
      highTide: '01:15 PM (3.85 meters - Hooghly Bore)',
      highTideHi: 'दोपहर 01:15 बजे (3.85 मीटर - हुगली ज्वार)',
      lowTide: '07:40 PM (0.92 meters)',
      lowTideHi: 'शाम 07:40 बजे (0.92 मीटर)',
      marineWarning: 'Riverine craft and ferry services to maintain cautious navigation during tidal bore',
      marineWarningHi: 'हुगली में ज्वार के समय नौका व स्टीमर सेवाओं को सावधानी बरतने के निर्देश'
    },
    aqi: {
      value: 88,
      status: 'Satisfactory',
      statusHi: 'संतोषजनक',
      color: '#16A34A',
      pm25: 32,
      pm10: 75
    },
    daminiLightning: {
      alertActive: true,
      distanceKm: 22,
      strikesCount: 8,
      statusText: 'Kalbaishakhi squall line building 22 km North-West over Hooghly / Burdwan',
      statusTextHi: 'हुगली/बर्धमान के ऊपर २२ किमी उत्तर-पश्चिम में कालबैशाखी बादलों का जमाव'
    },
    meghdootAgro: {
      zone: 'Gangetic Alluvial & Deltaic Zone',
      zoneHi: 'गंगा डेल्टाई एवं जलोढ़ कृषि क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Aman paddy transplantation in final stages. Drain surplus water from betel vine nurseries.',
      bulletinHi: 'अमन धान की रोपाई अंतिम दौर में। पान के बरेजों से अतिरिक्त पानी तुरंत निकालें।',
      crops: [
        { name: 'Paddy / धान', advice: 'Maintain 3-4 cm water depth in newly planted fields.', stage: 'Transplanting' },
        { name: 'Jute / पटसन', advice: 'Ideal retting water temperatures across ponds.', stage: 'Retting' }
      ]
    },
    personaTips: {
      student: {
        en: 'Humid afternoon! Tram and bus travel normal. Keep a raincoat handy for late afternoon Kalbaishakhi thundershowers.',
        hi: 'उमस भरा दिन! ट्राम और बस सेवा सामान्य है। शाम को तेज बौछार की संभावना के चलते छाता साथ रखें।'
      },
      farmer: {
        en: 'Soil moisture is optimal at 74%. Good conditions for Aman rice tillering. Secure irrigation bunds.',
        hi: 'मिट्टी में 74% नमी है। अमन धान के कल्ले फूटने के लिए अनुकूल समय है। मेड़ों को मजबूत रखें।'
      },
      senior_health: {
        en: 'Elevated relative humidity (82%). Drink coconut water and tender fluids; keep interiors airy.',
        hi: '82% की अधिक नमी में निर्जलीकरण से बचें। नारियल पानी पिएं और कमरों में हवा का आवागमन बनाए रखें।'
      },
      commuter: {
        en: 'Howrah Bridge & Vidyasagar Setu clear. Ferry services across Babu Ghat operating on scheduled intervals.',
        hi: 'हावड़ा ब्रिज व विद्यासागर सेतु पर यातायात सुगम है। बाबू घाट से नौका सेवाएं समय पर चल रही हैं।'
      },
      fitness: {
        en: 'High sweat index! Best running window: 5:30 AM - 6:45 AM around Rabindra Sarovar lake.',
        hi: 'पसीना अधिक निकलेगा! रवींद्र सरोवर के चारों ओर सुबह 5:30 से 6:45 बजे दौड़ना सबसे उत्तम है।'
      },
      coastal: {
        en: 'Hooghly tidal surge warning active during afternoon high tide. Sundarbans delta alerts issued.',
        hi: 'दोपहर के समय हुगली में ज्वार का उभार संभव है। सुंदरवन डेल्टा के लिए सामान्य सतर्कता जारी।'
      },
      traveler: {
        en: 'Victoria Memorial gardens pleasant in evening breeze. Carry umbrella while visiting Park Street & New Market.',
        hi: 'शाम को विक्टोरिया मेमोरियल का मौसम खुशनुमा रहेगा। बाजारों में भ्रमण के दौरान छाता साथ रखें।'
      },
      event: {
        en: 'Outdoor Comfort Score: 6.2/10. Safe for pandal and cultural gatherings with waterproof rain shades.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 6.2/10। पंडाल व सांस्कृतिक आयोजनों में वाटरप्रूफ शेड की व्यवस्था आवश्यक है।'
      }
    },
        sunTimes: {
      sunrise: '05:22 AM',
      sunriseHi: 'सुबह 05:22',
      sunset: '05:48 PM',
      sunsetHi: 'शाम 05:48'
    },
    pollen: {
      count: 'Low to Moderate',
      countHi: 'कम से मध्यम',
      treePollen: 'Low',
      grassPollen: 'Moderate',
      weedPollen: 'Low',
      dominantAllergen: 'Jute Fiber & Mold Spores',
      dominantAllergenHi: 'पटसन रेशा व फफूंद बीजाणु',
      skinSensitivity: 'High humidity sweat dermatitis risk; wear loose cotton',
      skinSensitivityHi: 'उमस से पसीने और घमौरियों का खतरा, ढीले सूती वस्त्र पहनें'
    },
    heatAlert: {
      level: 'Yellow Muggy Warning',
      levelHi: 'येलो उमस चेतावनी',
      text: 'Feels like 39°C due to 82% humidity. Best running window: 5:30 AM - 6:45 AM.',
      textHi: '82% नमी से 39°C जैसी उमस। सुबह 5:30 से 6:45 बजे दौड़ने का सर्वोत्तम समय।'
    },
    seaConditions: {
      isCoastal: true,
      state: 'Tidal Delta & Riverine Surge (Hooghly Bore)',
      stateHi: 'ज्वारीय डेल्टा व हुगली ज्वार का उभार',
      waveHeight: '3.85m Hooghly Bore / 2.5m Bay of Bengal',
      waterTemp: 29,
      waterTempHi: '29°C',
      surfSuitability: 'Coastal Digha/Bakkhali: Moderate waves; beware of rip currents in delta',
      surfSuitabilityHi: 'दीघा/बक्खाली तट: मध्यम लहरें; डेल्टा में तेज बहाव से बचें'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Rain', icon: 'cloud-rain', packing: 'Waterproof coat & compact umbrella', packingHi: 'वाटरप्रूफ कोट व छाता' },
      { city: 'Darjeeling', temp: '17°C', condition: 'Cool Mist', icon: 'cloud', packing: 'Woolen cardigan & umbrella', packingHi: 'ऊनी कार्डिगन और छाता' },
      { city: 'Puri', temp: '31°C', condition: 'Coastal Wind', icon: 'waves', packing: 'Beachwear & flip-flops', packingHi: 'बीचवियर और चप्पल' }
    ],
    flightAlerts: {
      airportCode: 'CCU (Netaji Subhash Chandra Bose Airport)',
      status: 'Normal Operations',
      statusHi: 'उड़ानें सामान्य',
      advisory: 'Runway visual range 3.5 km. Watch for passing evening thunderstorm cells.',
      advisoryHi: 'रनवे दृश्यता 3.5 किमी। शाम को बादलों से हल्की देरी संभव।'
    },
    packingSuggestions: {
      primary: 'Fine cotton apparel, folding umbrella, handkerchief for humidity',
      primaryHi: 'हल्के सूती कपड़े, फोल्डिंग छाता, रुमाल'
    },
    schoolCommute: {
      status: 'Safe / Afternoon Rain Watch',
      statusHi: 'सुरक्षित / दोपहर बाद बारिश पर नजर',
      morningDrop: '06:45 AM - 08:15 AM: Overcast & humid, roads fully operational',
      morningDropHi: 'सुबह 6:45 से 8:15: बादल व उमस, यातायात सुगम',
      afternoonPickup: '01:45 PM - 03:30 PM: Thunderstorm clouds building; keep umbrellas ready',
      afternoonPickupHi: 'दोपहर 1:45 से 3:30: बादलों का जमाव, छाता साथ रखें'
    },
    rainAlerts: {
      nextRainIn: 'Passing squall showers around 04:15 PM (65% probability)',
      nextRainInHi: 'शाम 04:15 बजे 65% गरज-चमक के साथ बौछारें संभव',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: true,
      title: 'Kalbaishakhi / Thundersquall Watch',
      titleHi: 'कालबैशाखी / गरज-चमक सतर्कता',
      instruction: 'Take shelter in permanent buildings if gust front arrives after 4 PM.',
      instructionHi: 'शाम 4 बजे के बाद तेज हवा चलने पर पक्के भवनों में शरण लें।'
    },
    rainfallPredictions: {
      next24h: '25 - 40 mm',
      next48h: '60 mm cumulative',
      probabilityPeak: 'Peak rain probability at 04:00 PM (70%)',
      probabilityPeakHi: 'शाम 4:00 बजे 70% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '25.0°C (Deltaic Tropical)',
      groundTempMinHi: '25.0°C (पाले का कोई जोखिम नहीं)',
      advice: 'No frost risk in Gangetic Bengal.',
      adviceHi: 'बंगाल के मैदानी भाग में पाले का कोई खतरा नहीं।'
    },
    seasonalPlanting: {
      season: 'Aman Rice & Winter Vegetable Nursery',
      seasonHi: 'अमन धान व शीतकालीन सब्जी नर्सरी',
      plantingTips: 'Transplant Aman paddy seedlings. Sow seeds of brinjal, tomato and winter marigold in raised nursery beds.',
      plantingTipsHi: 'अमन धान की रोपाई करें। बैंगन, टमाटर और गेंदे के बीज ऊंची क्यारियों में बोएं।'
    },
    trafficUpdate: {
      status: 'Normal on Bridges / Cautious near Tram tracks',
      statusHi: 'पुलों पर सामान्य आवागमन / ट्राम पटरियों पर सतर्क रहें',
      arterialRoads: 'AJC Bose Road Flyway & EM Bypass moving well. Ferry services on Hooghly cautious during high tide bore.',
      arterialRoadsHi: 'ईएम बाईपास व फ्लाईवे सुगम। हुगली में ज्वार के समय नौका सेवाओं को सतर्कता बरतने की सलाह।'
    },
    stormFogAlert: {
      active: true,
      message: 'Sudden squally wind up to 50 km/h possible during evening Kalbaishakhi pass.',
      messageHi: 'शाम को कालबैशाखी के दौरान 50 किमी/घं की तेज हवाएं संभव हैं।'
    },
    comfortIndex: {
      score: '6.2 / 10 (Muggy Comfort)',
      label: 'Safe for Pandal & Gatherings with Rainproofing',
      labelHi: 'वाटरप्रूफ व्यवस्था के साथ आयोजन संभव',
      factors: 'Wind 18 km/h, Humidity 82%, Heat Index 39°C',
      factorsHi: 'हवा 18 किमी/घं, नमी 82%, शाम की फुहारें'
    },
    probabilityOfRain: {
      morning: '35%',
      afternoon: '55%',
      evening: '70% (Thunderstorm risk)',
      night: '30%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '32°C / 26°C', rainProb: '65%', comfort: '6.2/10 (Thundershowers)' },
      { day: 'Saturday / शनिवार', temp: '31°C / 26°C', rainProb: '70%', comfort: '5.8/10 (Rain Canopy Required)' },
      { day: 'Sunday / रविवार', temp: '33°C / 27°C', rainProb: '45%', comfort: '7.0/10 (Breezy Afternoon)' }
    ],
    hourly: [
      { time: '10 AM', temp: 30, pop: 35, icon: 'cloud-sun' },
      { time: '12 PM', temp: 32, pop: 45, icon: 'cloud-sun' },
      { time: '02 PM', temp: 33, pop: 55, icon: 'cloud-rain' },
      { time: '04 PM', temp: 31, pop: 70, icon: 'cloud-lightning' },
      { time: '06 PM', temp: 29, pop: 60, icon: 'cloud-rain' },
      { time: '08 PM', temp: 28, pop: 30, icon: 'cloud' },
      { time: '10 PM', temp: 27, pop: 20, icon: 'moon' }
    ]
  },
  'bengaluru': {
    id: 'bengaluru',
    name: 'Bengaluru',
    nameHi: 'बेंगलुरु',
    state: 'Karnataka',
    stateHi: 'कर्नाटक',
    temp: 26,
    feelsLike: 25,
    condition: 'Pleasant & Mild Breeze',
    conditionHi: 'सुहावना मौसम व ठंडी बयार',
    iconType: 'cloud-sun',
    tempMin: 19,
    tempMax: 28,
    humidity: 68,
    rainfallChance: 30,
    windSpeed: 16,
    windDirection: 'WSW',
    pressure: 1012,
    visibility: 6.0,
    uvIndex: 6,
    soilMoisture: 52,
    isCoastal: false,
    aqi: {
      value: 48,
      status: 'Good / Clean',
      statusHi: 'उत्तम एवं स्वच्छ',
      color: '#16A34A',
      pm25: 14,
      pm10: 42
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 75,
      strikesCount: 0,
      statusText: 'No convective lightning over Bengaluru Urban',
      statusTextHi: 'बेंगलुरु शहरी क्षेत्र में आकाशीय बिजली का कोई खतरा नहीं'
    },
    meghdootAgro: {
      zone: 'Eastern Dry Agro-Climatic Zone',
      zoneHi: 'पूर्वी शुष्क कृषि क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Favorable conditions for Ragi (Finger Millet) weeding and inter-cultivation. Monitor red gram for pod borers.',
      bulletinHi: 'रागी की फसल में निराई-गुड़ाई का अनुकूल समय। अरहर में कीटों की निगरानी करें।',
      crops: [
        { name: 'Ragi / रागी', advice: 'Thinning of seedlings to maintain proper spacing.', stage: 'Vegetative' },
        { name: 'Vegetables / तरकारी', advice: 'Provide stakes for tomato and capsicum plants.', stage: 'Flowering' }
      ]
    },
    personaTips: {
      student: {
        en: 'Perfect outdoor school weather (25°C). Great for sports period and playground science experiments.',
        hi: 'स्कूल के खेल और बाहरी गतिविधियों के लिए बेहद सुखद मौसम (25°C)।'
      },
      farmer: {
        en: 'Adequate soil moisture (52%). Good window for dryland horticultural planting and manure application.',
        hi: 'मिट्टी में 52% नमी है। बागवानी फसलों में जैविक खाद देने का सबसे बढ़िया समय है।'
      },
      senior_health: {
        en: 'Pristine AQI (48) with comfortable 24-26°C. Excellent day for evening walks in Cubbon Park or Lalbagh.',
        hi: 'हवा बहुत साफ (AQI 48) है। कब्बन पार्क या लालबाग में शाम की सैर के लिए आदर्श दिन।'
      },
      commuter: {
        en: 'Smooth traffic on Outer Ring Road (ORR) and Silk Board. Mild passing clouds, no waterlogging expected.',
        hi: 'आउटर रिंग रोड और सिल्क बोर्ड पर यातायात सामान्य है। जलभराव का कोई खतरा नहीं है।'
      },
      fitness: {
        en: 'Runner’s paradise today! Comfortable temperatures and low humidity throughout morning and evening.',
        hi: 'दौड़ने के लिए बेहतरीन मौसम! सुबह और शाम दोनों समय सुहावना तापमान रहेगा।'
      },
      coastal: {
        en: 'Inland plateau elevation (920m). Kere lake cascade system functioning normally without overflow risk.',
        hi: 'पठारी क्षेत्र। झीलों और जलाशयों का जलस्तर सामान्य सीमा के अंदर है।'
      },
      traveler: {
        en: 'Pleasant weather for exploring Vidhana Soudha, Bangalore Palace, and Nandi Hills.',
        hi: 'विधान सौध, पैलेस और नंदी हिल्स घूमने के लिए बेहद खुशनुमा और सुहावना मौसम।'
      },
      event: {
        en: 'Outdoor Comfort Score: 9.4/10. Outstanding conditions for open-air weddings, concerts, and gatherings.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 9.4/10। खुले में शादी, संगीत समारोह या कार्यक्रमों के लिए सर्वोत्तम दिन।'
      }
    },
        sunTimes: {
      sunrise: '06:08 AM',
      sunriseHi: 'सुबह 06:08',
      sunset: '06:24 PM',
      sunsetHi: 'शाम 06:24'
    },
    pollen: {
      count: 'Low to Moderate',
      countHi: 'कम से मध्यम',
      treePollen: 'Moderate (Acacia & Gulmohar)',
      grassPollen: 'Low',
      weedPollen: 'Low',
      dominantAllergen: 'Garden Tree Pollen',
      dominantAllergenHi: 'बगीचे के पेड़ परागकण',
      skinSensitivity: 'Low sensitivity; pristine air quality supports healthy skin',
      skinSensitivityHi: 'कम संवेदनशीलता; स्वच्छ हवा से त्वचा सुरक्षित'
    },
    heatAlert: {
      level: 'All Clear / Pristine Comfort',
      levelHi: 'उत्तम एवं सुहावना',
      text: 'Pleasant temperatures (26°C max). All morning and evening hours ideal for outdoor athletics.',
      textHi: 'सुहावना तापमान (अधिकतम 26°C)। सुबह और शाम खेलकूद के लिए उत्तम।'
    },
    seaConditions: {
      isCoastal: false,
      state: 'Deccan Plateau Elevation (920m)',
      stateHi: 'दक्कन का पठार (ऊंचाई 920 मीटर)',
      waveHeight: 'Inland Lake Waters',
      waterTemp: 23,
      waterTempHi: '23°C',
      surfSuitability: 'Not applicable (Plateau)',
      surfSuitabilityHi: 'लागू नहीं (पठारी क्षेत्र)'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Light Rain', icon: 'cloud-rain', packing: 'Raincoat and compact umbrella', packingHi: 'रेनकोट और छाता' },
      { city: 'Coorg', temp: '21°C', condition: 'Coffee Mist', icon: 'cloud', packing: 'Light jacket & walking shoes', packingHi: 'हल्की जैकेट और जूते' },
      { city: 'Mysuru', temp: '27°C', condition: 'Sunny & Pleasant', icon: 'sun', packing: 'Comfortable cotton wear', packingHi: 'आरामदायक सूती कपड़े' }
    ],
    flightAlerts: {
      airportCode: 'BLR (Kempegowda Airport)',
      status: 'On-Time',
      statusHi: 'समय पर',
      advisory: 'Excellent ceiling and runway visibility (6.0 km). No departure holds.',
      advisoryHi: 'रनवे दृश्यता ६ किमी उत्तम। सभी उड़ानें समय पर हैं।'
    },
    packingSuggestions: {
      primary: 'Comfortable casuals, light windcheater for breezy evenings, folding umbrella',
      primaryHi: 'आरामदायक कपड़े, शाम की बयार के लिए हल्की जैकेट, छोटा छाता'
    },
    schoolCommute: {
      status: 'Smooth & Pleasant',
      statusHi: 'सुहावना व समय पर',
      morningDrop: '07:30 AM - 08:30 AM: Refreshing 21°C, light breeze, clear roads',
      morningDropHi: 'सुबह 7:30 से 8:30: ताजगी भरा 21°C, सड़कें साफ',
      afternoonPickup: '02:00 PM - 03:30 PM: Mild passing clouds (26°C); ideal for sports bus transit',
      afternoonPickupHi: 'दोपहर 2:00 से 3:30: सुहावने बादल (26°C), सुगम आवागमन'
    },
    rainAlerts: {
      nextRainIn: 'Light scattered drizzle possible near Bannerghatta around 05:30 PM (30%)',
      nextRainInHi: 'शाम 05:30 बजे 30% हल्की बूंदाबांदी संभव',
      umbrellaNeeded: false
    },
    severeWeatherWarnings: {
      active: false,
      title: 'No Severe Weather Warning',
      titleHi: 'कोई गंभीर मौसम चेतावनी नहीं',
      instruction: 'Ideal weather across Bengaluru Urban & Rural districts.',
      instructionHi: 'बेंगलुरु में मौसम बेहद सुहावना व सुरक्षित बना हुआ है।'
    },
    rainfallPredictions: {
      next24h: '5 - 10 mm',
      next48h: '15 mm cumulative',
      probabilityPeak: 'Peak rain probability at 06:00 PM (30%)',
      probabilityPeakHi: 'शाम 6:00 बजे 30% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '18.0°C (No Frost Risk)',
      groundTempMinHi: '18.0°C (पाले का कोई खतरा नहीं)',
      advice: 'Ideal soil temperature for gardening and ornamental flowers.',
      adviceHi: 'बागवानी और सजावटी फूलों के लिए सर्वोत्तम तापमान।'
    },
    seasonalPlanting: {
      season: 'Ragi & Horticultural Inter-Cropping',
      seasonHi: 'रागी व बागवानी अंतःफसल',
      plantingTips: 'Optimal time for planting kitchen garden herbs (basil, mint, rosemary) and potted roses.',
      plantingTipsHi: 'तुलसी, पुदीना और गुलाब के पौधे लगाने का सबसे उत्तम समय।'
    },
    trafficUpdate: {
      status: 'Normal Flow on Major Tech Corridors',
      statusHi: 'आईटी कॉरिडोर पर सामान्य यातायात',
      arterialRoads: 'Outer Ring Road (Silk Board to Marathahalli) moving smoothly. Namma Metro running on 5-min headways.',
      arterialRoadsHi: 'आउटर रिंग रोड पर यातायात सुगम। नम्मा मेट्रो 5 मिनट की फ्रीक्वेंसी पर चल रही है।'
    },
    stormFogAlert: {
      active: false,
      message: 'Zero fog or squall impact. Clear road visual distance (6.0 km).',
      messageHi: 'कोहरे या आंधी का कोई प्रभाव नहीं। दृश्यता ६ किमी उत्तम।'
    },
    comfortIndex: {
      score: '9.4 / 10 (Outstanding Comfort)',
      label: 'World-Class Outdoor Gathering Weather',
      labelHi: 'खुले में शादी व समारोह के लिए सर्वोत्तम',
      factors: 'Breeze 16 km/h, Temp 26°C, Humidity 68%, Pristine AQI 48',
      factorsHi: 'हवा 16 किमी/घं, तापमान 26°C, हवा बेहद स्वच्छ'
    },
    probabilityOfRain: {
      morning: '10%',
      afternoon: '25%',
      evening: '30%',
      night: '10%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '26°C / 19°C', rainProb: '30%', comfort: '9.4/10 (Outstanding)' },
      { day: 'Saturday / शनिवार', temp: '27°C / 19°C', rainProb: '25%', comfort: '9.5/10 (Ideal Wedding Weather)' },
      { day: 'Sunday / रविवार', temp: '26°C / 18°C', rainProb: '35%', comfort: '9.2/10 (Breezy & Cool)' }
    ],
    hourly: [
      { time: '10 AM', temp: 23, pop: 10, icon: 'sun' },
      { time: '12 PM', temp: 26, pop: 15, icon: 'cloud-sun' },
      { time: '02 PM', temp: 27, pop: 25, icon: 'cloud-sun' },
      { time: '04 PM', temp: 26, pop: 35, icon: 'cloud' },
      { time: '06 PM', temp: 24, pop: 30, icon: 'cloud-rain' },
      { time: '08 PM', temp: 22, pop: 15, icon: 'cloud' },
      { time: '10 PM', temp: 20, pop: 10, icon: 'moon' }
    ]
  },
  'jaipur': {
    id: 'jaipur',
    name: 'Jaipur',
    nameHi: 'जयपुर',
    state: 'Rajasthan',
    stateHi: 'राजस्थान',
    temp: 36,
    feelsLike: 40,
    condition: 'Sunny & Dry Heat',
    conditionHi: 'तेज धूप और गर्म मौसम',
    iconType: 'sun',
    tempMin: 27,
    tempMax: 38,
    humidity: 42,
    rainfallChance: 15,
    windSpeed: 12,
    windDirection: 'WNW',
    pressure: 1007,
    visibility: 5.5,
    uvIndex: 9,
    soilMoisture: 32,
    isCoastal: false,
    aqi: {
      value: 165,
      status: 'Moderate to Poor',
      statusHi: 'मध्यम से खराब',
      color: '#EAB308',
      pm25: 68,
      pm10: 175
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 90,
      strikesCount: 0,
      statusText: 'No lightning activity across eastern Rajasthan plains',
      statusTextHi: 'पूर्वी राजस्थान के मैदानी भाग में बिजली का कोई खतरा नहीं'
    },
    meghdootAgro: {
      zone: 'Semi-Arid Eastern Plain Zone',
      zoneHi: 'अर्ध-शुष्क पूर्वी मैदानी क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Irrigate Pearl Millet (Bajra) and Guar during critical flowering stage. Harvest rainwater into farm ponds (Khets).',
      bulletinHi: 'बाजरा और ग्वार में फूल आने की अवस्था पर सिंचाई करें। खेत-तलाई में वर्षा जल संचित करें।',
      crops: [
        { name: 'Bajra / बाजरा', advice: 'Provide light sprinkler irrigation in sandy soils.', stage: 'Grain Filling' },
        { name: 'Guar / ग्वार', advice: 'Spray 2% DAP solution to support pod development.', stage: 'Pod Formation' }
      ]
    },
    personaTips: {
      student: {
        en: 'High UV Index (9)! Wear a broad-brim sunhat and carry a water flask to school. Stay in shade during lunch break.',
        hi: 'तेज धूप और यूवी इंडेक्स 9! स्कूल में पानी की बोतल रखें और दोपहर में धूप में खेलने से बचें।'
      },
      farmer: {
        en: 'Soil moisture is 32%. Operate drip irrigation systems early in morning to minimize evaporative water loss.',
        hi: 'मिट्टी में 32% नमी है। वाष्पीकरण से बचने के लिए सुबह के समय ही ड्रिप से सिंचाई करें।'
      },
      senior_health: {
        en: 'High afternoon temperature (38°C). Avoid stepping out between 12 PM and 4 PM. Consume lemonade or chaas.',
        hi: 'दोपहर में 38°C तक गर्मी रहेगी। 12 से 4 बजे बाहर निकलने से बचें, नींबू पानी या छाछ का सेवन करें।'
      },
      commuter: {
        en: 'Road surfaces hot. Keep vehicle tires properly pressurized. Clear visibility on Jaipur-Ajmer Expressway.',
        hi: 'सड़कें गर्म रहेंगी। वाहनों के टायर में हवा का दबाव सही रखें। एक्सप्रेसवे पर दृश्यता सामान्य है।'
      },
      fitness: {
        en: 'Outdoor running only safe before 6:30 AM. Extreme dehydration risk in late morning hours.',
        hi: 'दौड़ने के लिए केवल सुबह 6:30 से पहले का समय सुरक्षित है। बाद में लू और डिहाइड्रेशन का खतरा है।'
      },
      coastal: {
        en: 'Semi-arid desert border. Traditional Baoris and Kund reservoirs holding adequate storage reserves.',
        hi: 'रेगिस्तानी क्षेत्र। पारंपरिक बावड़ियों व कुंडों में जल स्तर संतोषजनक बना हुआ है।'
      },
      traveler: {
        en: 'Visit Amer Fort and Hawa Mahal during cooler morning hours (8 AM - 10:30 AM). Keep sunglasses handy.',
        hi: 'आमेर किला और हवा महल घूमने सुबह 8 से 10:30 बजे के बीच जाएं। धूप का चश्मा साथ रखें।'
      },
      event: {
        en: 'Outdoor Comfort Score: 5.0/10 during day; improves to 8.0/10 post 7:30 PM under desert evening breeze.',
        hi: 'दिन में गर्मी रहेगी, लेकिन शाम 7:30 बजे के बाद गुलाबी ठंडक से आउटडोर कार्यक्रम सुखद रहेंगे।'
      }
    },
        sunTimes: {
      sunrise: '06:05 AM',
      sunriseHi: 'सुबह 06:05',
      sunset: '06:42 PM',
      sunsetHi: 'शाम 06:42'
    },
    pollen: {
      count: 'Moderate to High',
      countHi: 'मध्यम से अधिक',
      treePollen: 'Low',
      grassPollen: 'Low',
      weedPollen: 'Moderate (Parthenium & Dust)',
      dominantAllergen: 'Dry Windborne Dust & Parthenium',
      dominantAllergenHi: 'सूखी धूल व गाजरघास',
      skinSensitivity: 'High UV (9) & dry wind sun allergy risk; apply sunscreen SPF 50+',
      skinSensitivityHi: 'तेज धूप व यूवी 9 से त्वचा जलने का खतरा, SPF 50+ लगाएं'
    },
    heatAlert: {
      level: 'Orange Heat Warning',
      levelHi: 'ऑरेंज हीट अलर्ट',
      text: 'Peak afternoon temperature reaches 38°C (feels like 40°C). Outdoor athletics strictly before 6:30 AM.',
      textHi: 'दोपहर में तापमान 38°C पहुंचेगा। आउटडोर व्यायाम सुबह 6:30 बजे से पहले ही करें।'
    },
    seaConditions: {
      isCoastal: false,
      state: 'Semi-Arid Desert Boundary / Jal Mahal Basin',
      stateHi: 'अर्ध-शुष्क रेगिस्तानी सीमा / जल महल',
      waveHeight: 'Calm Inland Water',
      waterTemp: 28,
      waterTempHi: '28°C',
      surfSuitability: 'Not applicable (Arid Inland)',
      surfSuitabilityHi: 'लागू नहीं (रेगिस्तानी क्षेत्र)'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Rain', icon: 'cloud-rain', packing: 'Waterproof coat & compact umbrella', packingHi: 'वाटरप्रूफ कोट व छाता' },
      { city: 'Udaipur', temp: '32°C', condition: 'Warm & Lake Breeze', icon: 'sun', packing: 'Sunglasses & cotton wear', packingHi: 'धूप का चश्मा व सूती कपड़े' },
      { city: 'Jaisalmer', temp: '38°C', condition: 'Sunny Desert', icon: 'sun', packing: 'Sun hat & hydration flask', packingHi: 'धूप से बचने की टोपी व पानी की बोतल' }
    ],
    flightAlerts: {
      airportCode: 'JAI (Jaipur International Airport)',
      status: 'On-Time Operations',
      statusHi: 'समय पर',
      advisory: 'Clear flight operations. Visibility 5.5 km, dry runway surface.',
      advisoryHi: 'रनवे दृश्यता 5.5 किमी साफ। सभी उड़ानें समय पर।'
    },
    packingSuggestions: {
      primary: 'Wide-brim sun hat, UV sunglasses, SPF 50+ sunscreen, cotton stole / scarf',
      primaryHi: 'धूप से बचने की टोपी, धूप का चश्मा, सनस्क्रीन, सूती गमछा'
    },
    schoolCommute: {
      status: 'Heat Caution at Dismissal',
      statusHi: 'दोपहर की छुट्टी में धूप से सतर्कता',
      morningDrop: '07:15 AM - 08:30 AM: Comfortable 28°C, clear skies',
      morningDropHi: 'सुबह 7:15 से 8:30: आरामदायक 28°C, आसमान साफ',
      afternoonPickup: '01:30 PM - 03:30 PM: Scorching 37°C; ensure bus air-ventilation and carry hydration',
      afternoonPickupHi: 'दोपहर 1:30 से 3:30: तेज धूप 37°C, स्कूल वैन में पानी साथ रखें'
    },
    rainAlerts: {
      nextRainIn: 'Zero significant rainfall forecast for next 48 hours',
      nextRainInHi: 'अगले 48 घंटों में बारिश की कोई संभावना नहीं',
      umbrellaNeeded: false
    },
    severeWeatherWarnings: {
      active: true,
      title: 'High UV & Afternoon Dry Heat Advisory',
      titleHi: 'तीव्र पराबैंगनी किरणें (UV 9) व शुष्क गर्मी सतर्कता',
      instruction: 'Limit direct sun exposure between 12:00 PM and 04:00 PM.',
      instructionHi: 'दोपहर 12 से 4 बजे के बीच सीधे धूप में खड़े रहने से बचें।'
    },
    rainfallPredictions: {
      next24h: '0 - 2 mm (Trace)',
      next48h: '4 mm cumulative',
      probabilityPeak: 'Low rain probability (15%)',
      probabilityPeakHi: 'बारिश की संभावना केवल 15%'
    },
    frostAlert: {
      active: false,
      groundTempMin: '19.5°C (Warm Desert Soil)',
      groundTempMinHi: '19.5°C (पाले का कोई खतरा नहीं)',
      advice: 'Ensure morning drip watering to protect roots from daytime desert heat.',
      adviceHi: 'दिन की गर्मी से जड़ों को बचाने के लिए सुबह ड्रिप से पानी दें।'
    },
    seasonalPlanting: {
      season: 'Arid Kharif Maturation & Rabi Mustard Prep',
      seasonHi: 'खरीफ कटाई व रबी सरसों की तैयारी',
      plantingTips: 'Harvest matured pearl millet (Bajra). Prepare sandy loam soils with gypsum for mustard sowing.',
      plantingTipsHi: 'पके बाजरे की कटाई करें। सरसों की बुवाई के लिए खेत में जिप्सम मिलाकर तैयार करें।'
    },
    trafficUpdate: {
      status: 'Clear Highways & City Roads',
      statusHi: 'सड़कें व हाईवे पूरी तरह साफ',
      arterialRoads: 'Tonk Road, JLN Marg & Jaipur-Ajmer Expressway moving at normal speeds. Road surface dry and hot.',
      arterialRoadsHi: 'टोंक रोड और जेएलएन मार्ग पर यातायात सुगम। सड़कें सूखी हैं।'
    },
    stormFogAlert: {
      active: false,
      message: 'Clear visibility across Jaipur. No dust storm warning today.',
      messageHi: 'दृश्यता साफ है। आज धूल भरी आंधी का कोई अंदेशा नहीं।'
    },
    comfortIndex: {
      score: '5.0 / 10 (Hot Daytime) -> 8.0 / 10 (Pleasant Post 7:30 PM)',
      label: 'Ideal for Evening Palatial & Lawn Weddings',
      labelHi: 'शाम के समय शाही शादी व उत्सव के लिए शानदार',
      factors: 'Day Temp 36°C cooling rapidly to 28°C under starlit desert sky',
      factorsHi: 'दिन में धूप लेकिन रात में गुलाबी ठंडक'
    },
    probabilityOfRain: {
      morning: '5%',
      afternoon: '10%',
      evening: '15%',
      night: '5%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '36°C / 27°C', rainProb: '15%', comfort: '7.8/10 (Cool Starlit Night)' },
      { day: 'Saturday / शनिवार', temp: '37°C / 27°C', rainProb: '10%', comfort: '8.0/10 (Dry & Pleasant Evening)' },
      { day: 'Sunday / रविवार', temp: '36°C / 26°C', rainProb: '20%', comfort: '7.5/10 (Fine for Banquets)' }
    ],
    hourly: [
      { time: '10 AM', temp: 33, pop: 5, icon: 'sun' },
      { time: '12 PM', temp: 36, pop: 10, icon: 'sun' },
      { time: '02 PM', temp: 38, pop: 10, icon: 'sun' },
      { time: '04 PM', temp: 37, pop: 15, icon: 'sun' },
      { time: '06 PM', temp: 34, pop: 15, icon: 'cloud-sun' },
      { time: '08 PM', temp: 31, pop: 10, icon: 'moon' },
      { time: '10 PM', temp: 29, pop: 5, icon: 'moon' }
    ]
  },
  'chennai': {
    id: 'chennai',
    name: 'Chennai',
    nameHi: 'चेन्नई',
    state: 'Tamil Nadu',
    stateHi: 'तमिलनाडु',
    temp: 31,
    feelsLike: 37,
    condition: 'Coastal Breezy & Humid',
    conditionHi: 'तटीय हवा व समुद्री नमी',
    iconType: 'cloud-rain',
    tempMin: 26,
    tempMax: 33,
    humidity: 80,
    rainfallChance: 55,
    windSpeed: 20,
    windDirection: 'ENE',
    pressure: 1008,
    visibility: 4.5,
    uvIndex: 7,
    soilMoisture: 66,
    isCoastal: true,
    tide: {
      highTide: '11:30 AM (1.25 meters)',
      highTideHi: 'सुबह 11:30 बजे (1.25 मीटर)',
      lowTide: '05:45 PM (0.35 meters)',
      lowTideHi: 'शाम 05:45 बजे (0.35 मीटर)',
      marineWarning: 'Small fishing craft advised to exercise caution along North Tamil Nadu coast',
      marineWarningHi: 'उत्तर तमिलनाडु तट पर छोटी नौकाओं को सतर्कता बरतने की सलाह'
    },
    aqi: {
      value: 58,
      status: 'Satisfactory',
      statusHi: 'संतोषजनक',
      color: '#16A34A',
      pm25: 18,
      pm10: 52
    },
    daminiLightning: {
      alertActive: false,
      distanceKm: 48,
      strikesCount: 1,
      statusText: 'Scattered offshore lightning 48 km East into Bay of Bengal',
      statusTextHi: 'बंगाल की खाड़ी में ४८ किमी दूर समुद्र के ऊपर हल्की आकाशीय चमक'
    },
    meghdootAgro: {
      zone: 'North Eastern Coastal Agro-Climatic Zone',
      zoneHi: 'पूर्वोत्तर तटीय कृषि क्षेत्र',
      advisoryDate: '10 September 2026',
      bulletin: 'Prepare nursery beds for Samba paddy sowing. Ensure proper drainage in coastal groundnut plots.',
      bulletinHi: 'सांबा धान की बुवाई हेतु नर्सरी तैयार करें। मूंगफली के खेतों में जल निकासी दुरुस्त रखें।',
      crops: [
        { name: 'Paddy (Samba) / சம்பா நெல்', advice: 'Treat seeds with Pseudomonas fluorescens before sowing.', stage: 'Nursery' },
        { name: 'Groundnut / நிலக்கடலை', advice: 'Watch for tikka leaf spot in humid morning dew.', stage: 'Vegetative' }
      ]
    },
    personaTips: {
      student: {
        en: 'Breezy coastal commute. Carry an umbrella as short passing coastal showers are likely near 3 PM.',
        hi: 'समुद्री हवा का आनंद! दोपहर 3 बजे के आसपास हल्की फुहारें पड़ सकती हैं, छाता साथ रखें।'
      },
      farmer: {
        en: 'Soil moisture is 66%. Good period for land preparation ahead of the Northeast Monsoon onset.',
        hi: 'मिट्टी में 66% नमी है। पूर्वोत्तर मानसून के आगमन से पहले खेत की तैयारी का उचित समय।'
      },
      senior_health: {
        en: 'Warm sea breeze (31°C). Good air quality (AQI 58). Enjoy the pleasant evening breeze along Marina promenade.',
        hi: 'हल्की समुद्री धूप और स्वच्छ हवा। मरीना बीच पर शाम की ताजी हवा का आनंद लें।'
      },
      commuter: {
        en: 'Traffic moving well on Mount Road & OMR. Light showers may cause minor slowdowns near Guindy.',
        hi: 'माउंट रोड और ओएमआर पर यातायात सामान्य है। गिंडी के पास हल्की बारिश से वाहन धीमे हो सकते हैं।'
      },
      fitness: {
        en: 'Seafront running along Besant Nagar / Elliot’s Beach is wonderful between 5:30 AM and 6:45 AM.',
        hi: 'इलियट्स बीच और बेसेंट नगर के तट पर सुबह 5:30 से 6:45 बजे दौड़ने के लिए सुहावना मौसम।'
      },
      coastal: {
        en: 'INCOIS Yellow Flag alert: Moderate wave swells up to 2.2m. Beach visitors advised to heed lifeguard flags.',
        hi: '२.२ मीटर तक की लहरें उठने की संभावना। समुद्र तट पर जाने वाले लोग लाइफगार्ड की सलाह मानें।'
      },
      traveler: {
        en: 'Great day for heritage walks at Kapaleeshwarar Temple and UNESCO Shore Temple in Mamallapuram.',
        hi: 'कपालेश्वर मंदिर और महाबलीपुरम के तटीय मंदिरों के भ्रमण के लिए अच्छा दिन।'
      },
      event: {
        en: 'Outdoor Comfort Score: 7.6/10. Evening sea breeze makes open-air lawn events delightful after sunset.',
        hi: 'आउटडोर कम्फर्ट स्कोर: 7.6/10। सूर्यास्त के बाद ठंडी समुद्री बयार से आउटडोर आयोजन शानदार रहेंगे।'
      }
    },
        sunTimes: {
      sunrise: '05:58 AM',
      sunriseHi: 'सुबह 05:58',
      sunset: '06:14 PM',
      sunsetHi: 'शाम 06:14'
    },
    pollen: {
      count: 'Low',
      countHi: 'कम',
      treePollen: 'Low',
      grassPollen: 'Low',
      weedPollen: 'Low',
      dominantAllergen: 'Sea Salt Spray & Coastal Humidity',
      dominantAllergenHi: 'समुद्री नमक फुहार व तटीय नमी',
      skinSensitivity: 'Moderate (Salt spray dry skin & high UV 7; moisturize & use sunscreen)',
      skinSensitivityHi: 'मध्यम (समुद्री नमक से त्वचा का रूखापन, सनस्क्रीन लगाएं)'
    },
    heatAlert: {
      level: 'Yellow Coastal Heat Index',
      levelHi: 'येलो तटीय उमस वॉच',
      text: 'Ambient temp 31°C with 80% humidity (feels like 37°C). Best jogging hours: 5:30 AM - 6:45 AM.',
      textHi: 'तापमान 31°C व 80% नमी (37°C जैसा अहसास)। दौड़ने का समय: सुबह 5:30 से 6:45 बजे।'
    },
    seaConditions: {
      isCoastal: true,
      state: 'Moderate Swell with Energetic Shorebreak',
      stateHi: 'मध्यम समुद्री उछाल व तटीय लहरें',
      waveHeight: '1.8 - 2.4 Meters',
      waterTemp: 29,
      waterTempHi: '29°C (गुनगुना)',
      surfSuitability: 'Excellent for surfing at Covelong (Kovalam) Beach & Marina seafront',
      surfSuitabilityHi: 'कोवलम और मरीना बीच पर सर्फिंग व बीच वॉक के लिए उत्तम'
    },
    savedDestinations: [
      { city: 'London', temp: '16°C', condition: 'Rain', icon: 'cloud-rain', packing: 'Waterproof coat & compact umbrella', packingHi: 'वाटरप्रूफ कोट व छाता' },
      { city: 'Puducherry', temp: '30°C', condition: 'Coastal Breeze', icon: 'waves', packing: 'Beachwear & flip-flops', packingHi: 'बीचवियर और चप्पल' },
      { city: 'Ooty', temp: '16°C', condition: 'Chilly Hills', icon: 'cloud', packing: 'Warm jacket & umbrella', packingHi: 'गर्म जैकेट और छाता' }
    ],
    flightAlerts: {
      airportCode: 'MAA (Chennai International Airport)',
      status: 'Normal Flight Movements',
      statusHi: 'उड़ानें सामान्य',
      advisory: 'Runway visual range 4.5 km. Crosswinds at 20 km/h within normal operating envelope.',
      advisoryHi: 'रनवे दृश्यता 4.5 किमी सामान्य। हवा की गति सामान्य सीमा में है।'
    },
    packingSuggestions: {
      primary: 'Light cotton / linen apparel, sunglasses, folding umbrella for quick passing showers',
      primaryHi: 'हल्के सूती या लिनन कपड़े, धूप का चश्मा, छोटा छाता'
    },
    schoolCommute: {
      status: 'Safe & Coastal Breezy',
      statusHi: 'सुरक्षित व तटीय बयार',
      morningDrop: '07:15 AM - 08:30 AM: Pleasant 27°C, sea breeze, clear roads',
      morningDropHi: 'सुबह 7:15 से 8:30: सुहावना 27°C, सड़कें साफ',
      afternoonPickup: '02:00 PM - 03:30 PM: Passing short showers possible (32°C); carry compact umbrella',
      afternoonPickupHi: 'दोपहर 2:00 से 3:30: हल्की बौछार संभव (32°C), छाता साथ रखें'
    },
    rainAlerts: {
      nextRainIn: 'Short passing coastal shower likely around 03:45 PM (55% probability)',
      nextRainInHi: 'दोपहर बाद 03:45 बजे 55% हल्की तटीय फुहार संभव',
      umbrellaNeeded: true
    },
    severeWeatherWarnings: {
      active: false,
      title: 'No Severe Cyclone or Storm Warning',
      titleHi: 'कोई गंभीर तूफान या चक्रवात चेतावनी नहीं',
      instruction: 'Yellow Flag caution for small fishing catamarans venturing beyond 10 nautical miles.',
      instructionHi: '10 समुद्री मील से दूर जाने वाली छोटी नौकाओं के लिए सामान्य सतर्कता।'
    },
    rainfallPredictions: {
      next24h: '15 - 25 mm',
      next48h: '40 mm cumulative',
      probabilityPeak: 'Peak rain probability at 04:00 PM (55%)',
      probabilityPeakHi: 'शाम 4:00 बजे 55% संभावना'
    },
    frostAlert: {
      active: false,
      groundTempMin: '25.5°C (Coastal Tropical)',
      groundTempMinHi: '25.5°C (पाले का कोई खतरा नहीं)',
      advice: 'No frost risk in coastal Tamil Nadu.',
      adviceHi: 'तटीय तमिलनाडु में पाले का कोई जोखिम नहीं।'
    },
    seasonalPlanting: {
      season: 'Pre-Northeast Monsoon (Samba Season)',
      seasonHi: 'सांबा धान बुवाई पूर्व काल',
      plantingTips: 'Prepare seedling nursery for Samba paddy. Plant coastal coconut saplings and jasmine (Mogra) bushes.',
      plantingTipsHi: 'सांबा धान की नर्सरी तैयार करें। नारियल के पौधे और मोगरा/चमेली लगाएं।'
    },
    trafficUpdate: {
      status: 'Smooth Traffic on Mount Road & OMR',
      statusHi: 'माउंट रोड व ओएमआर पर सुगम यातायात',
      arterialRoads: 'Anna Salai, OMR IT Highway and ECR moving normally. Guindy underpass clear.',
      arterialRoadsHi: 'अन्ना सलाई और ईसीआर पर यातायात सामान्य। गिंडी अंडरपास सूखा है।'
    },
    stormFogAlert: {
      active: false,
      message: 'Zero fog. Crisp coastal visual range across East Coast Road (4.5 km).',
      messageHi: 'कोहरे का कोई असर नहीं। ईसीआर पर दृश्यता 4.5 किमी उत्तम।'
    },
    comfortIndex: {
      score: '7.6 / 10 (Good Coastal Comfort)',
      label: 'Delightful Post-Sunset Sea Breeze for Events',
      labelHi: 'सूर्यास्त के बाद तटीय समारोह के लिए उत्तम',
      factors: 'Sea breeze 20 km/h, Temp 28°C after 6 PM, Humidity 80%',
      factorsHi: 'समुद्री हवा 20 किमी/घं, शाम को सुखद तापमान'
    },
    probabilityOfRain: {
      morning: '25%',
      afternoon: '45%',
      evening: '55%',
      night: '25%'
    },
    extendedForecast: [
      { day: 'Friday / शुक्रवार', temp: '31°C / 26°C', rainProb: '55%', comfort: '7.6/10 (Pleasant Sea Breeze)' },
      { day: 'Saturday / शनिवार', temp: '32°C / 26°C', rainProb: '45%', comfort: '7.8/10 (Great for Beach Venues)' },
      { day: 'Sunday / रविवार', temp: '30°C / 25°C', rainProb: '65%', comfort: '6.8/10 (Short Coastal Showers)' }
    ],
    hourly: [
      { time: '10 AM', temp: 29, pop: 25, icon: 'cloud-sun' },
      { time: '12 PM', temp: 31, pop: 35, icon: 'cloud-sun' },
      { time: '02 PM', temp: 32, pop: 45, icon: 'cloud-rain' },
      { time: '04 PM', temp: 30, pop: 55, icon: 'cloud-rain' },
      { time: '06 PM', temp: 28, pop: 40, icon: 'cloud' },
      { time: '08 PM', temp: 27, pop: 25, icon: 'moon' },
      { time: '10 PM', temp: 26, pop: 15, icon: 'moon' }
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
