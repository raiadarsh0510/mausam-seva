// src/data/personaEntriesData.js
// Ministry of Earth Sciences (MoES) — Actual Citizen Persona Telemetry & Ingestion Dataset

export const PERSONA_SCHEMAS = [
  {
    id: 'farmer',
    name: 'Kisan / Farmer',
    nameHi: 'किसान भाई (कृषि)',
    targetDemographic: 'Ages 25–70+ (Rural Agrarian Workforce)',
    sharePct: 38,
    dailyVolume: '1,300,000 entries/day',
    inputModality: 'Vernacular Speech Recognition & WhatsApp Bot',
    keyParameters: [
      { key: 'soil_moisture_pct', label: 'Topsoil Moisture (0-15cm)', unit: '%' },
      { key: 'spray_window_safe', label: 'Pesticide Wash-off Risk Window', unit: 'Hours' },
      { key: 'damini_lightning_dist', label: 'Lightning Proximity', unit: 'km' },
      { key: 'mandi_rain_risk', label: 'Produce Shed Rain Threat', unit: 'Probability %' }
    ],
    interMinisterialConsumer: 'Ministry of Agriculture & Farmers Welfare / Food Corporation of India (FCI)',
    predictiveModel: 'Regional Crop Yield Shocks & Early MSP Procurement Buffer Allocation',
    privacyCompliance: 'DPDP Act 2023 — Spatial 500m Grid Anonymization (Zero Personal PII)'
  },
  {
    id: 'senior_health',
    name: 'Senior Citizen & Health',
    nameHi: 'वरिष्ठ नागरिक एवं स्वास्थ्य',
    targetDemographic: 'Ages 60–80+ (Elderly & Vulnerable Patients)',
    sharePct: 15,
    dailyVolume: '513,000 entries/day',
    inputModality: 'Large Font Dialers & Vernacular Voice Assistant',
    keyParameters: [
      { key: 'aqi_pm25', label: 'Fine Particulate Matter Inversion', unit: 'µg/m³' },
      { key: 'heat_stress_index', label: 'Wet Bulb Temperature Index', unit: '°C' },
      { key: 'humidity_joint_stiffness', label: 'Barometric / Humidity Shift', unit: 'hPa / %' },
      { key: 'emergency_sos_ready', label: 'Senior Care Helpline 14567 Link', unit: 'Active' }
    ],
    interMinisterialConsumer: 'Ministry of Health & Family Welfare / ICMR',
    predictiveModel: 'District Hospital ER Surge & Nebulizer/ORS Emergency Stocking',
    privacyCompliance: 'Health Telemetry Anonymization — HIPAA/ABDM Safe Harbor Level 3'
  },
  {
    id: 'commuter',
    name: 'Daily Commuter & Office',
    nameHi: 'दैनिक यात्री / ऑफिस',
    targetDemographic: 'Ages 18–60 (Urban Transit & Logistics Workforce)',
    sharePct: 22,
    dailyVolume: '752,000 entries/day',
    inputModality: 'GPS Geofenced Route Push & Traffic Nowcast UI',
    keyParameters: [
      { key: 'road_waterlog_depth', label: 'Underpass Waterlogging Height', unit: 'cm' },
      { key: 'horizontal_visibility', label: 'Smog/Fog Visual Range', unit: 'Meters' },
      { key: 'transit_delay_risk', label: 'Metro / Rail Disruption Index', unit: 'Level 1-5' },
      { key: 'sudden_cloudburst_pop', label: '15-Minute Flash Downpour Prob.', unit: '%' }
    ],
    interMinisterialConsumer: 'Ministry of Road Transport & Highways (MoRTH) / City Traffic Police',
    predictiveModel: 'Dynamic Underpass Pump Activation & Bus Route Geo-Diversions',
    privacyCompliance: 'Ephemeral GPS Hashing — Route Traces Dropped Post-Session'
  },
  {
    id: 'student',
    name: 'Student & Youth',
    nameHi: 'विद्यार्थी और बच्चे',
    targetDemographic: 'Ages 10–18 (School & University Students)',
    sharePct: 11,
    dailyVolume: '376,000 entries/day',
    inputModality: 'Gamified Weather Quiz & Speech Mic Assistant',
    keyParameters: [
      { key: 'school_bus_lightning_risk', label: 'School Bus Transit Lightning Strike Risk', unit: 'km Range' },
      { key: 'playground_comfort_score', label: 'UV / Solar Heat Exhaustion Index', unit: 'Scale 1-10' },
      { key: 'heavy_rain_holiday_prob', label: 'District DM Rain Holiday Probability', unit: '%' },
      { key: 'monsoon_umbrella_alert', label: 'Bag Rain-Cover / Umbrella Check', unit: 'Binary' }
    ],
    interMinisterialConsumer: 'Department of School Education & State Disaster Authorities (SDMA)',
    predictiveModel: 'Automated District Magistrate School Holiday Weather Advisory',
    privacyCompliance: 'COPPA & Child Safety Compliant — Zero Tracking or Profiling'
  },
  {
    id: 'fitness',
    name: 'Fitness & Sports',
    nameHi: 'फिटनेस व खेलकूद',
    targetDemographic: 'Ages 16–50 (Runners, Athletes & Morning Walkers)',
    sharePct: 6,
    dailyVolume: '205,000 entries/day',
    inputModality: 'Smartwatch / Mobile Fit Companion',
    keyParameters: [
      { key: 'optimal_run_window', label: 'Safe Aerobic Running Window', unit: 'Time Slot' },
      { key: 'heat_exhaustion_risk', label: 'Heat Cramp / Dehydration Risk', unit: 'Severity' },
      { key: 'surface_ozone_levels', label: 'Ground-level Ozone (O3)', unit: 'ppb' },
      { key: 'sweat_electrolyte_loss', label: 'Projected Fluid Loss', unit: 'ml/hr' }
    ],
    interMinisterialConsumer: 'Ministry of Youth Affairs & Sports / Public Health',
    predictiveModel: 'Outdoor Marathon & Sports Tournament Heat Wave Postponement',
    privacyCompliance: 'Pseudonymous Device UUID with Daily Key Rotation'
  },
  {
    id: 'coastal',
    name: 'Coastal & Fisherfolk',
    nameHi: 'तटीय व मछुआरे',
    targetDemographic: 'Ages 20–65 (Marine Fisherfolk & Coastal Residents)',
    sharePct: 5,
    dailyVolume: '171,000 entries/day',
    inputModality: 'High-Decibel Siren Alert & Coastal Community Radio',
    keyParameters: [
      { key: 'incois_wave_swell', label: 'Significant Wave Height (SWH)', unit: 'Meters' },
      { key: 'squall_wind_speed', label: 'Surface Gust Speed (Beaufort Scale)', unit: 'Knots' },
      { key: 'high_tide_surge_time', label: 'Astronomical Spring Tide Peak', unit: 'IST Time' },
      { key: 'port_danger_signal', label: 'IMD Coastal Port Signal (1–11)', unit: 'Signal #' }
    ],
    interMinisterialConsumer: 'Ministry of Fisheries / INCOIS / Indian Coast Guard',
    predictiveModel: 'Harbour Fishing Ban Enforcement & Offshore Rescue Vector Dispatch',
    privacyCompliance: 'Vessel ID Masked — Aggregated at Landing Centre Level'
  },
  {
    id: 'traveler',
    name: 'Traveler & Tourist',
    nameHi: 'यात्री व पर्यटक',
    targetDemographic: 'All Ages (Domestic Tourists & Interstate Travelers)',
    sharePct: 2,
    dailyVolume: '68,000 entries/day',
    inputModality: 'Destination Search & Highway Weather Radar',
    keyParameters: [
      { key: 'landslide_hazard_zone', label: 'Himalayan Slope Instability Risk', unit: 'High/Med/Low' },
      { key: 'airport_fog_delay_risk', label: 'CAT-III Fog Flight Grounding Prob.', unit: '%' },
      { key: 'road_snow_clearance', label: 'Pass Open/Closed Status (Rohtang/Zojila)', unit: 'Status' },
      { key: 'packing_clothing_index', label: 'Thermal Insulation Required (Clo)', unit: 'Clo Units' }
    ],
    interMinisterialConsumer: 'Ministry of Tourism / Border Roads Organisation (BRO) / AAI',
    predictiveModel: 'Interstate Highway Closure Advisory & Tourist Evacuation Planning',
    privacyCompliance: 'Ephemeral Destination Queries (Discarded within 1 hour)'
  },
  {
    id: 'event',
    name: 'Event & Family',
    nameHi: 'समारोह व पारिवारिक आयोजन',
    targetDemographic: 'All Ages (Wedding Organizers, Cultural Committees)',
    sharePct: 1,
    dailyVolume: '35,000 entries/day',
    inputModality: 'Pin-Point 1km Micro-Nowcasting & Event Risk Matrix',
    keyParameters: [
      { key: 'outdoor_rain_prob_hourly', label: 'Open-Air Catering Rain Risk (6PM-11PM)', unit: '%' },
      { key: 'tent_shear_wind_gust', label: 'Canopy Wind Tolerance Threshold', unit: 'km/h' },
      { key: 'guest_thermal_comfort', label: 'Universal Humidex Discomfort Score', unit: 'Score /10' },
      { key: 'mosquito_nuisance_index', label: 'Post-Rain Vector Swarm Risk', unit: 'Risk Level' }
    ],
    interMinisterialConsumer: 'Municipal Corporations / Fire & Safety Departments',
    predictiveModel: 'Temporary Pandal Structural Integrity & Fire Safety Approvals',
    privacyCompliance: 'Location Snapped to Revenue Ward Center (No Specific Household Data)'
  }
];

export const ACTUAL_PERSONA_ENTRIES = [
  {
    entryId: 'TR-2026-FARM-0912',
    timestamp: '10:48 AM IST (2 mins ago)',
    personaId: 'farmer',
    personaName: 'Kisan / Farmer',
    district: 'Amravati, Vidarbha',
    state: 'Maharashtra',
    userAge: '48 Yrs',
    inputChannel: 'Vernacular Voice (मराठी/हिंदी)',
    citizenQuery: 'क्या आज शाम कपास में पिंक बॉलवर्म कीटनाशक का छिड़काव सुरक्षित रहेगा? बारिश होगी क्या?',
    telemetryData: {
      soilMoisture: '41% (Deficit)',
      rainfallProb: '68% (Heavy Thunderstorm at 16:30 IST)',
      pesticideWashoffRisk: 'CRITICAL (Do Not Spray)',
      daminiDistance: '14.2 km (Approaching East)'
    },
    groundTruthReport: 'नागरिक सत्यापन: खेत में बादल घने हो रहे हैं, हवा की गति 28 किमी/घंटा बढ़ी।',
    predictiveTrigger: 'FCI Crop Buffer Alert: Vidarbha Cotton Pest Surge Triggered. Advised state agriculture department to pause pesticide subsidy release until rain event passes.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#EA580C' // Orange
  },
  {
    entryId: 'TR-2026-FARM-0911',
    timestamp: '10:42 AM IST (8 mins ago)',
    personaId: 'farmer',
    personaName: 'Kisan / Farmer',
    district: 'Ludhiana',
    state: 'Punjab',
    userAge: '52 Yrs',
    inputChannel: 'Voice Mic Assistant (पंजाबी/हिंदी)',
    citizenQuery: 'धान की रोपाई के लिए ट्यूबवेल कब चलाएं? क्या बिजली और बारिश का संयोग मिलेगा?',
    telemetryData: {
      soilMoisture: '68% (Optimal)',
      rainfallProb: '25% (Scattered Drizzle)',
      pesticideWashoffRisk: 'Low',
      daminiDistance: 'None within 40 km'
    },
    groundTruthReport: 'नागरिक सत्यापन: हल्की धूप खिली है, मिट्टी में पर्याप्त नमी है।',
    predictiveTrigger: 'PSPCL Power Grid Demand: Shifted agriculture feeder power roster from 14:00 to 22:00 to shave off peak residential cooling surge.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#10B981' // Green
  },
  {
    entryId: 'TR-2026-FARM-0910',
    timestamp: '10:35 AM IST (15 mins ago)',
    personaId: 'farmer',
    personaName: 'Kisan / Farmer',
    district: 'Barabanki',
    state: 'Uttar Pradesh',
    userAge: '41 Yrs',
    inputChannel: 'One-Tap Meghdoot Chip',
    citizenQuery: 'मक्का और उड़द की फसल में 8 दिनों से बारिश नहीं हुई, सूखा तनाव कब तक रहेगा?',
    telemetryData: {
      soilMoisture: '28% (Severe Dry Spell)',
      rainfallProb: '15% (Dry Westerly Winds)',
      pesticideWashoffRisk: 'None',
      daminiDistance: 'None within 50 km'
    },
    groundTruthReport: 'नागरिक सत्यापन: पत्तियां मुड़ रही हैं, नहर का पानी अभी तक नहीं पहुंचा।',
    predictiveTrigger: 'Ministry of Agriculture Alert: Eastern UP Dry Spell Window. FCI advised to prepare contingent irrigation diesel subsidy release.',
    status: 'ALERT_DISPATCHED',
    threatColor: '#F59E0B' // Yellow
  },
  {
    entryId: 'TR-2026-SEN-0482',
    timestamp: '10:39 AM IST (11 mins ago)',
    personaId: 'senior_health',
    personaName: 'Senior Citizen & Health',
    district: 'Civil Lines, North Delhi',
    state: 'Delhi-NCR',
    userAge: '71 Yrs',
    inputChannel: 'Large Font Voice Assistant (A+ Senior Mode)',
    citizenQuery: 'मेरी छाती में जकड़न हो रही है, क्या आज सुबह पार्क में टहलना सुरक्षित है? AQI कितना है?',
    telemetryData: {
      aqiPM25: '242 µg/m³ (Severe Inversion)',
      tempFeelsLike: '38°C',
      humidity: '74%',
      ozone: '48 ppb'
    },
    groundTruthReport: 'नागरिक सत्यापन: बाहर धुंध और आंखों में हल्की जलन महसूस हो रही है।',
    predictiveTrigger: 'ICMR / MohFW Emergency Alert: AIIMS & Hindu Rao Hospital ER nebulizer buffer activated. Senior citizen alert broadcast via 14567 helpline.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#DC2626' // Red
  },
  {
    entryId: 'TR-2026-SEN-0481',
    timestamp: '10:28 AM IST (22 mins ago)',
    personaId: 'senior_health',
    personaName: 'Senior Citizen & Health',
    district: 'Gomti Nagar, Lucknow',
    state: 'Uttar Pradesh',
    userAge: '68 Yrs',
    inputChannel: 'Voice Mic Assistant',
    citizenQuery: 'ह्यूमिडिटी बहुत ज्यादा है और घुटनों में तेज दर्द है, क्या दोपहर में बाहर जा सकते हैं?',
    telemetryData: {
      aqiPM25: '128 µg/m³ (Moderate)',
      tempFeelsLike: '41°C (Heat Stroke Caution)',
      humidity: '84%',
      wetBulbTemp: '29.8°C'
    },
    groundTruthReport: 'नागरिक सत्यापन: भारी उमस, बिना पंखे या कूलर के रहना मुश्किल।',
    predictiveTrigger: 'State Health Mission: Advisory dispatched for geriatric hydration. Primary health centres (PHCs) stocked with oral rehydration salts (ORS).',
    status: 'VERIFIED_INGESTED',
    threatColor: '#EA580C' // Orange
  },
  {
    entryId: 'TR-2026-COM-0721',
    timestamp: '10:45 AM IST (5 mins ago)',
    personaId: 'commuter',
    personaName: 'Daily Commuter & Office',
    district: 'Andheri Subway, Mumbai Suburb',
    state: 'Maharashtra',
    userAge: '32 Yrs',
    inputChannel: 'GPS Geofenced Route Query',
    citizenQuery: 'अंधेरी सबवे खुला है या पानी भर गया? क्या वेस्टर्न एक्सप्रेस हाईवे से जाना बेहतर है?',
    telemetryData: {
      waterloggingSensor: '22 cm (Subway Inundated)',
      rainfallRate: '34 mm/hr (Heavy Shower)',
      highTideLevel: '4.1 m (Spring Tide at 13:45)',
      trafficDelay: '+45 mins delay'
    },
    groundTruthReport: 'नागरिक सत्यापन: सबवे में 1 फीट पानी जमा हो गया है, 2 कारें बंद पड़ी हैं।',
    predictiveTrigger: 'BMC Disaster Management / Mumbai Traffic Police: Automated diversion to SV Road flyover triggered. Drainage dewatering pumps activated.',
    status: 'ALERT_DISPATCHED',
    threatColor: '#DC2626' // Red
  },
  {
    entryId: 'TR-2026-COM-0720',
    timestamp: '10:31 AM IST (19 mins ago)',
    personaId: 'commuter',
    personaName: 'Daily Commuter & Office',
    district: 'Tara Devi (NH-5), Shimla',
    state: 'Himachal Pradesh',
    userAge: '29 Yrs',
    inputChannel: 'Highway Weather Radar Card',
    citizenQuery: 'कालका-शिमला हाईवे पर कोहरा कितना गहरा है? क्या गाड़ी ले जाना सुरक्षित है?',
    telemetryData: {
      horizontalVisibility: '950 meters (Dense Mist/Fog)',
      roadSlipperyIndex: 'Medium (Mist Condensation)',
      temp: '16°C',
      landslideProbability: 'Low (No heavy cloudburst)'
    },
    groundTruthReport: 'नागरिक सत्यापन: तारादेवी के पास फॉग लैंप जलाकर 30 किमी/घंटा की रफ्तार से गाड़ियां चल रही हैं।',
    predictiveTrigger: 'HP Traffic Police Highway Advisory: Electronic VMS boards updated with "Fog Alert: Drive under 40 km/h, keep headlights on low beam".',
    status: 'VERIFIED_INGESTED',
    threatColor: '#F59E0B' // Yellow
  },
  {
    entryId: 'TR-2026-STU-0319',
    timestamp: '10:40 AM IST (10 mins ago)',
    personaId: 'student',
    personaName: 'Student & Youth',
    district: 'Hazratganj, Lucknow',
    state: 'Uttar Pradesh',
    userAge: '14 Yrs (Class 9th)',
    inputChannel: 'Speech Mic Assistant (हिंदी)',
    citizenQuery: 'क्या दोपहर 2 बजे स्कूल की छुट्टी के समय बारिश होगी? छाता ले जाना पड़ेगा?',
    telemetryData: {
      rainfallProb: '75% (Squall at 13:45 IST)',
      daminiDistance: '18.4 km (Thundercloud Moving East)',
      uvIndex: '4 (Moderate)',
      windGust: '38 km/h'
    },
    groundTruthReport: 'नागरिक सत्यापन: स्कूल के मैदान में तेज हवाएं चलना शुरू हो गई हैं।',
    predictiveTrigger: 'District School Education Advisory: Notified 42 city CBSE/ICSE schools to hold indoor dispersal and delay outdoor sports till squall passes.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#EA580C' // Orange
  },
  {
    entryId: 'TR-2026-STU-0318',
    timestamp: '10:20 AM IST (30 mins ago)',
    personaId: 'student',
    personaName: 'Student & Youth',
    district: 'Rohini, North-West Delhi',
    state: 'Delhi-NCR',
    userAge: '12 Yrs (Class 7th)',
    inputChannel: 'One-Tap Weather Prompt Chip',
    citizenQuery: 'आज गेम्स पीरियड में फुटबॉल खेल सकते हैं क्या? बहुत धूप है क्या?',
    telemetryData: {
      temp: '35°C',
      heatIndex: '39°C (Caution Tier)',
      uvIndex: '8 (High UV Burn)',
      hydrationNeed: '500 ml water required'
    },
    groundTruthReport: 'नागरिक सत्यापन: मैदान में बहुत तेज धूप है और गर्म हवा लग रही है।',
    predictiveTrigger: 'School Sports Safety Protocol: Advised hydration break every 20 minutes and cap outdoor drills at 25 minutes maximum.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#F59E0B' // Yellow
  },
  {
    entryId: 'TR-2026-COA-0185',
    timestamp: '10:44 AM IST (6 mins ago)',
    personaId: 'coastal',
    personaName: 'Coastal & Fisherfolk',
    district: 'Ratnagiri Port',
    state: 'Maharashtra',
    userAge: '44 Yrs',
    inputChannel: 'Marine Safety Audio Siren Broadcast',
    citizenQuery: 'क्या आज शाम 12 नॉटिकल मील गहरे समुद्र में मछली पकड़ने नाव ले जा सकते हैं?',
    telemetryData: {
      waveHeight: '3.9 meters (Rough Sea Swell)',
      surfaceWind: '26 Knots (Squally Gale)',
      tidePeak: 'Astronomical Spring High Tide (4.3m at 14:15)',
      incoisFlag: 'RED FLAG (High Hazard)'
    },
    groundTruthReport: 'नागरिक सत्यापन: बंदरगाह की जेटी पर पानी की ऊंची लहरें टकरा रही हैं, कोई भी नौका नहीं निकल रही।',
    predictiveTrigger: 'INCOIS & Fisheries Dept Coastal Warning: Local Cautionary Signal LC-III hoisted at Ratnagiri & Mirya Bunder. Coast Guard hovercraft on stand-by.',
    status: 'ALERT_DISPATCHED',
    threatColor: '#DC2626' // Red
  },
  {
    entryId: 'TR-2026-COA-0184',
    timestamp: '10:15 AM IST (35 mins ago)',
    personaId: 'coastal',
    personaName: 'Coastal & Fisherfolk',
    district: 'Versova Koliwada, Mumbai',
    state: 'Maharashtra',
    userAge: '56 Yrs',
    inputChannel: 'Vernacular Audio Assistant (मराठी)',
    citizenQuery: 'दुपारच्या भरतीची वेळ काय आहे? किनाऱ्यावरील बोटी सुरक्षित बांधल्या आहेत का?',
    telemetryData: {
      waveHeight: '3.4 meters',
      surfaceWind: '22 Knots',
      tidePeak: '4.2m Spring High Tide at 13:50 IST',
      incoisFlag: 'ORANGE FLAG'
    },
    groundTruthReport: 'नागरिक सत्यापन: किनाऱ्यावरील दुकानांमध्ये भरतीचे पाणी शिरायला सुरुवात झाली आहे।',
    predictiveTrigger: 'BMC Disaster Control: Evacuated 60 fishing shanties along Versova beach front to relief chowki.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#EA580C' // Orange
  },
  {
    entryId: 'TR-2026-FIT-0142',
    timestamp: '07:15 AM IST (3.5 hrs ago)',
    personaId: 'fitness',
    personaName: 'Fitness & Sports',
    district: 'Lodhi Gardens, Central Delhi',
    state: 'Delhi-NCR',
    userAge: '34 Yrs',
    inputChannel: 'Smartwatch Companion Query',
    citizenQuery: 'सुबह 10 किलोमीटर दौड़ने के लिए AQI और ओजोन का स्तर कैसा रहेगा?',
    telemetryData: {
      aqiPM25: '165 µg/m³ (Unhealthy for sensitive)',
      temp: '27°C',
      humidity: '72%',
      optimalRunWindow: '06:00 AM - 07:45 AM ONLY'
    },
    groundTruthReport: 'नागरिक सत्यापन: हल्की उमस, सुबह 7 बजे के बाद सांस फूलने जैसा अहसास।',
    predictiveTrigger: 'Delhi Half Marathon Advisory: Sent hydration and pace moderation push notification to 18,400 registered running club members.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#F59E0B' // Yellow
  },
  {
    entryId: 'TR-2026-TRV-0089',
    timestamp: '10:22 AM IST (28 mins ago)',
    personaId: 'traveler',
    personaName: 'Traveler & Tourist',
    district: 'The Mall Road, Shimla',
    state: 'Himachal Pradesh',
    userAge: '36 Yrs',
    inputChannel: 'Tourist Destination Card',
    citizenQuery: 'जाखू रोपवे चल रहा है या हवा तेज है? क्या आज कुफरी जाना सुरक्षित है?',
    telemetryData: {
      temp: '17°C',
      windSpeed: '16 km/h (Safe for Ropeway)',
      popRain: '45% (Intermittent Light Showers)',
      roadStatus: 'Kufri Route Clear'
    },
    groundTruthReport: 'नागरिक सत्यापन: मौसम बहुत सुहावना है, हल्की बूंदाबांदी शुरू हुई है, रोपवे सामान्य चालू है।',
    predictiveTrigger: 'Himachal Tourism Telemetry: Weekend occupancy surge forecast +18% across hotel clusters.',
    status: 'VERIFIED_INGESTED',
    threatColor: '#10B981' // Green
  },
  {
    entryId: 'TR-2026-EVT-0045',
    timestamp: '10:34 AM IST (16 mins ago)',
    personaId: 'event',
    personaName: 'Event & Family',
    district: 'Chattarpur Enclave, South Delhi',
    state: 'Delhi-NCR',
    userAge: '42 Yrs',
    inputChannel: 'Event Rain Probability Matrix',
    citizenQuery: 'शाम 7:00 बजे से खुले लॉन में 400 मेहमानों का शादी समारोह है, क्या वाटरप्रूफ टेंट लगाना जरूरी है?',
    telemetryData: {
      eveningRainProb: '65% (Isolated Convective Downpour 19:30-21:00)',
      windGustPotential: '44 km/h',
      outdoorComfortScore: '5.2/10 (High Humidex)',
      tentWaterproofingAdvised: 'MANDATORY'
    },
    groundTruthReport: 'नागरिक सत्यापन: दक्षिण दिल्ली में घने कपासी बादल (Cumulonimbus) बन रहे हैं।',
    predictiveTrigger: 'Delhi Fire Service & Municipal Pandal Division: Advisory issued for wind-tie anchors on temporary marquees exceeding 300 sq meters.',
    status: 'ALERT_DISPATCHED',
    threatColor: '#EA580C' // Orange
  }
];
