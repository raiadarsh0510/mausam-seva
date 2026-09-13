// server/routes/weatherRoutes.js
import express from 'express';
import { cache } from '../data/store.js';

export const weatherRouter = express.Router();

// Mock high-resolution synoptic database (coupled with IMD AWS feeds)
const SYNOPTIC_WEATHER_CACHE = {
  delhi: {
    id: 'delhi', name: 'New Delhi', nameHi: 'नई दिल्ली', state: 'Delhi NCR', temp: 34, feelsLike: 38,
    condition: 'Partly Cloudy', conditionHi: 'आंशिक रूप से बादल', humidity: 62, rainfallChance: 35,
    windSpeed: 14, windDirection: 'ESE', uvIndex: 7, soilMoisture: 42, aqi: { value: 178, status: 'Moderate' },
    daminiLightning: { alertActive: false, distanceKm: 62, strikesCount: 0 }
  },
  mumbai: {
    id: 'mumbai', name: 'Mumbai', nameHi: 'मुंबई', state: 'Maharashtra', temp: 30, feelsLike: 36,
    condition: 'Heavy Rain Showers', conditionHi: 'तेज बारिश की फुहारें', humidity: 88, rainfallChance: 85,
    windSpeed: 26, windDirection: 'WSW', uvIndex: 4, soilMoisture: 78, aqi: { value: 62, status: 'Satisfactory' },
    daminiLightning: { alertActive: true, distanceKm: 14, strikesCount: 19 }
  },
  lucknow: {
    id: 'lucknow', name: 'Lucknow', nameHi: 'लखनऊ', state: 'Uttar Pradesh', temp: 33, feelsLike: 37,
    condition: 'Humid & Scattered Clouds', conditionHi: 'उमस और छिटपुट बादल', humidity: 74, rainfallChance: 40,
    windSpeed: 11, windDirection: 'E', uvIndex: 8, soilMoisture: 58, aqi: { value: 142, status: 'Moderate' },
    daminiLightning: { alertActive: false, distanceKm: 55, strikesCount: 2 }
  },
  shimla: {
    id: 'shimla', name: 'Shimla', nameHi: 'शिमला', state: 'Himachal Pradesh', temp: 18, feelsLike: 17,
    condition: 'Chilly Mist & Fog', conditionHi: 'ठंडी धुंध और कोहरा', humidity: 85, rainfallChance: 60,
    windSpeed: 8, windDirection: 'NNE', uvIndex: 5, soilMoisture: 72, aqi: { value: 34, status: 'Good' },
    daminiLightning: { alertActive: false, distanceKm: 80, strikesCount: 0 }
  },
  kolkata: {
    id: 'kolkata', name: 'Kolkata', nameHi: 'कोलकाता', state: 'West Bengal', temp: 32, feelsLike: 39,
    condition: 'Tropical Humid & Breezy', conditionHi: 'उष्णकटिबंधीय उमस व तेज हवा', humidity: 82, rainfallChance: 65,
    windSpeed: 18, windDirection: 'S', uvIndex: 6, soilMoisture: 74, aqi: { value: 88, status: 'Satisfactory' },
    daminiLightning: { alertActive: true, distanceKm: 22, strikesCount: 8 }
  },
  bengaluru: {
    id: 'bengaluru', name: 'Bengaluru', nameHi: 'बेंगलुरु', state: 'Karnataka', temp: 26, feelsLike: 25,
    condition: 'Pleasant & Mild Breeze', conditionHi: 'सुहावना मौसम व ठंडी बयार', humidity: 68, rainfallChance: 30,
    windSpeed: 16, windDirection: 'WSW', uvIndex: 6, soilMoisture: 52, aqi: { value: 48, status: 'Good' },
    daminiLightning: { alertActive: false, distanceKm: 75, strikesCount: 0 }
  },
  jaipur: {
    id: 'jaipur', name: 'Jaipur', nameHi: 'जयपुर', state: 'Rajasthan', temp: 36, feelsLike: 40,
    condition: 'Sunny & Dry Heat', conditionHi: 'तेज धूप और गर्म मौसम', humidity: 42, rainfallChance: 15,
    windSpeed: 12, windDirection: 'WNW', uvIndex: 9, soilMoisture: 32, aqi: { value: 165, status: 'Poor' },
    daminiLightning: { alertActive: false, distanceKm: 90, strikesCount: 0 }
  },
  chennai: {
    id: 'chennai', name: 'Chennai', nameHi: 'चेन्नई', state: 'Tamil Nadu', temp: 31, feelsLike: 37,
    condition: 'Coastal Breezy & Humid', conditionHi: 'तटीय हवा व समुद्री नमी', humidity: 80, rainfallChance: 55,
    windSpeed: 20, windDirection: 'ENE', uvIndex: 7, soilMoisture: 66, aqi: { value: 58, status: 'Satisfactory' },
    daminiLightning: { alertActive: false, distanceKm: 48, strikesCount: 1 }
  }
};

// GET /api/weather/:cityId
weatherRouter.get('/:cityId', (req, res) => {
  const cityId = req.params.cityId.toLowerCase();
  const cacheKey = `weather:${cityId}`;

  // Check LRU Cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    res.setHeader('X-Cache-Status', 'HIT');
    return res.json({ success: true, source: 'cache', data: cachedData });
  }

  // Fetch from database
  const cityData = SYNOPTIC_WEATHER_CACHE[cityId] || SYNOPTIC_WEATHER_CACHE['delhi'];
  
  // Cache for 5 minutes
  cache.set(cacheKey, cityData);
  res.setHeader('X-Cache-Status', 'MISS');
  res.json({ success: true, source: 'database', data: cityData });
});

// GET /api/weather
weatherRouter.get('/', (req, res) => {
  res.json({
    success: true,
    totalRegions: Object.keys(SYNOPTIC_WEATHER_CACHE).length,
    regions: Object.keys(SYNOPTIC_WEATHER_CACHE),
    data: SYNOPTIC_WEATHER_CACHE
  });
});
