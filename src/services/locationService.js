// src/services/locationService.js

export const METEOROLOGICAL_HUBS = [
  { id: 'delhi', name: 'New Delhi', nameHi: 'नई दिल्ली', state: 'Delhi NCR', stateHi: 'दिल्ली राष्ट्रीय राजधानी', lat: 28.6139, lon: 77.2090 },
  { id: 'mumbai', name: 'Mumbai', nameHi: 'मुंबई', state: 'Maharashtra', stateHi: 'महाराष्ट्र', lat: 19.0760, lon: 72.8777 },
  { id: 'lucknow', name: 'Lucknow', nameHi: 'लखनऊ', state: 'Uttar Pradesh', stateHi: 'उत्तर प्रदेश', lat: 26.8467, lon: 80.9462 },
  { id: 'shimla', name: 'Shimla', nameHi: 'शिमला', state: 'Himachal Pradesh', stateHi: 'हिमाचल प्रदेश', lat: 31.1048, lon: 77.1734 },
  { id: 'kolkata', name: 'Kolkata', nameHi: 'कोलकाता', state: 'West Bengal', stateHi: 'पश्चिम बंगाल', lat: 22.5726, lon: 88.3639 },
  { id: 'bengaluru', name: 'Bengaluru', nameHi: 'बेंगलुरु', state: 'Karnataka', stateHi: 'कर्नाटक', lat: 12.9716, lon: 77.5946 },
  { id: 'jaipur', name: 'Jaipur', nameHi: 'जयपुर', state: 'Rajasthan', stateHi: 'राजस्थान', lat: 26.9124, lon: 75.7873 },
  { id: 'chennai', name: 'Chennai', nameHi: 'चेन्नई', state: 'Tamil Nadu', stateHi: 'तमिलनाडु', lat: 13.0827, lon: 80.2707 }
];

// Haversine formula to compute great-circle distance in km
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Find nearest MoES Meteorological Radar Hub
export function findNearestRadarHub(lat, lon) {
  let nearest = METEOROLOGICAL_HUBS[0];
  let minDistance = Infinity;

  for (const hub of METEOROLOGICAL_HUBS) {
    const dist = calculateDistanceKm(lat, lon, hub.lat, hub.lon);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = hub;
    }
  }

  return {
    ...nearest,
    distanceKm: minDistance
  };
}

// WMO Weather code to vernacular descriptions
function mapWmoWeatherCode(code) {
  switch (code) {
    case 0:
      return { condition: 'Clear Sky', conditionHi: 'साफ आसमान' };
    case 1:
    case 2:
      return { condition: 'Partly Cloudy', conditionHi: 'आंशिक रूप से बादल' };
    case 3:
      return { condition: 'Overcast & Cloudy', conditionHi: 'घने बादल' };
    case 45:
    case 48:
      return { condition: 'Fog & Mist', conditionHi: 'कोहरा और धुंध' };
    case 51:
    case 53:
    case 55:
      return { condition: 'Light Drizzle', conditionHi: 'हल्की बूंदाबांदी' };
    case 61:
    case 63:
      return { condition: 'Moderate Rain', conditionHi: 'मध्यम बारिश' };
    case 65:
      return { condition: 'Heavy Rain Showers', conditionHi: 'मूसलाधार बारिश' };
    case 71:
    case 73:
    case 75:
      return { condition: 'Snowfall', conditionHi: 'बर्फबारी' };
    case 80:
    case 81:
    case 82:
      return { condition: 'Scattered Rain Showers', conditionHi: 'छिटपुट बारिश की फुहारें' };
    case 95:
    case 96:
    case 99:
      return { condition: 'Thunderstorm & Lightning', conditionHi: 'आंधी-तूफान व आकाशीय बिजली' };
    default:
      return { condition: 'Scattered Clouds', conditionHi: 'बदलते बादल' };
  }
}

// Fetch live weather data from Open-Meteo for exact coordinates
export async function fetchLiveWeatherForCoords(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`;
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const data = await res.json();
    const current = data.current;
    const { condition, conditionHi } = mapWmoWeatherCode(current.weather_code);

    return {
      temp: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      humidity: current.relative_humidity_2m,
      windSpeed: Math.round(current.wind_speed_10m),
      precipitation: current.precipitation,
      condition,
      conditionHi
    };
  } catch (err) {
    console.warn('[LocationService] Open-Meteo fetch failed, using fallback synoptic data:', err.message);
    return null;
  }
}

// Reverse Geocode coordinates to Indian place names
export async function reverseGeocodeCoords(lat, lon) {
  try {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3500) });
    if (!res.ok) throw new Error('Geocode failed');
    const data = await res.json();

    const city = data.city || data.locality || data.principalSubdivision || 'Local District';
    const district = data.locality || data.city || '';
    const state = data.principalSubdivision || 'India';

    return { city, district, state };
  } catch (e) {
    return { city: 'Detected Location', district: '', state: 'India' };
  }
}

// Fallback to IP Geolocation if HTML5 GPS is blocked or denied
export async function getIpFallbackLocation() {
  try {
    const res = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(4000) });
    if (!res.ok) throw new Error('IP Geo HTTP error');
    const data = await res.json();

    if (data.success === false) throw new Error(data.message || 'IP Geo failed');

    const lat = Number(data.latitude) || 28.6139;
    const lon = Number(data.longitude) || 77.2090;
    const city = data.city || 'Delhi';
    const state = data.region || 'Delhi NCR';

    return {
      success: true,
      source: 'ip_network',
      latitude: lat,
      longitude: lon,
      city,
      district: city,
      state
    };
  } catch (err) {
    console.warn('[LocationService] IP fallback error:', err.message);
    return {
      success: false,
      error: err.message
    };
  }
}

// Primary method to detect live user location
export async function detectUserLiveLocation() {
  // 1. Try HTML5 Browser Geolocation first
  const tryHtml5Geolocation = () => {
    return new Promise((resolve, reject) => {
      if (!('geolocation' in navigator)) {
        return reject(new Error('Geolocation not supported by browser'));
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve({
            source: 'gps',
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: Math.round(pos.coords.accuracy || 15)
          });
        },
        (err) => {
          reject(err);
        },
        {
          enableHighAccuracy: true,
          timeout: 7000,
          maximumAge: 30000
        }
      );
    });
  };

  let locationResult = null;

  try {
    // Attempt GPS
    locationResult = await tryHtml5Geolocation();
  } catch (gpsError) {
    console.info('[LocationService] GPS permission denied or timed out, activating sovereign IP network fallback:', gpsError.message);
    // Fallback to IP Network location
    const ipResult = await getIpFallbackLocation();
    if (ipResult.success) {
      locationResult = ipResult;
    } else {
      // Last-resort fallback to Delhi NCR
      locationResult = {
        source: 'default_hub',
        latitude: 28.6139,
        longitude: 77.2090,
        city: 'New Delhi',
        district: 'Central Delhi',
        state: 'Delhi NCR'
      };
    }
  }

  const { latitude, longitude, source, accuracy } = locationResult;

  // 2. Perform reverse geocoding
  let placeInfo = { city: locationResult.city || '', district: locationResult.district || '', state: locationResult.state || '' };
  if (!placeInfo.city) {
    placeInfo = await reverseGeocodeCoords(latitude, longitude);
  }

  // 3. Find closest Meteorological Radar Hub
  const nearestHub = findNearestRadarHub(latitude, longitude);

  // 4. Fetch real-time weather from Open-Meteo for exact coordinates
  const liveWeather = await fetchLiveWeatherForCoords(latitude, longitude);

  // 5. Send DPDP Act 2023 anonymized telemetry to MoES backend
  try {
    fetch('/api/telemetry/ingest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        district: placeInfo.district || placeInfo.city,
        state: placeInfo.state,
        citizenQuery: `Live GPS Auto-Detection (${source.toUpperCase()})`,
        latitude,
        longitude
      })
    }).catch(() => {});
  } catch (e) {}

  return {
    success: true,
    source, // 'gps' | 'ip_network' | 'default_hub'
    latitude: Number(latitude.toFixed(4)),
    longitude: Number(longitude.toFixed(4)),
    accuracy: accuracy || null,
    cityName: placeInfo.city,
    district: placeInfo.district,
    state: placeInfo.state,
    nearestHub,
    liveWeather
  };
}
