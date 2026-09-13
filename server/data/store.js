// server/data/store.js
/**
 * In-Memory High-Performance Data Store with Cache & LRU Eviction
 * Houses synoptic weather data, telemetry streams, crowdsource karma,
 * MoES 5-color threat broadcast states, and offline alert logs.
 */

// LRU Cache Implementation for sub-millisecond response
class FastCache {
  constructor(maxSize = 500, ttlMs = 300000) { // 5 minutes TTL
    this.maxSize = maxSize;
    this.ttlMs = ttlMs;
    this.cache = new Map();
    this.hits = 0;
    this.misses = 0;
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) {
      this.misses++;
      return null;
    }
    if (Date.now() > item.expires) {
      this.cache.delete(key);
      this.misses++;
      return null;
    }
    this.hits++;
    // Refresh access order
    this.cache.delete(key);
    this.cache.set(key, item);
    return item.value;
  }

  set(key, value, ttl = this.ttlMs) {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, { value, expires: Date.now() + ttl });
  }

  getHitRatio() {
    const total = this.hits + this.misses;
    return total === 0 ? 1 : (this.hits / total);
  }

  clear() {
    this.cache.clear();
    this.hits = 0;
    this.misses = 0;
  }
}

export const cache = new FastCache();

// Active 5-color threat level state (Managed by MoES)
export let currentAlertLevel = 'orange';

export function setAlertLevel(level) {
  currentAlertLevel = level;
}

// Crowdsource Ground-Truth verification records
export const crowdsourceRecords = [
  { id: 'CR-101', cityId: 'delhi', isRaining: true, intensity: 'moderate', timestamp: new Date(Date.now() - 3600000).toISOString(), karmaAwarded: 10 },
  { id: 'CR-102', cityId: 'mumbai', isRaining: true, intensity: 'heavy', timestamp: new Date(Date.now() - 1800000).toISOString(), karmaAwarded: 10 },
  { id: 'CR-103', cityId: 'shimla', isRaining: false, intensity: 'none', timestamp: new Date(Date.now() - 900000).toISOString(), karmaAwarded: 10 }
];

// Offline Dispatch Logs (Gram Panchayat sirens, IVR, Cell Broadcasts)
export const offlineDispatchLogs = [
  {
    id: 'DISP-9001',
    type: 'siren_beacon',
    cluster: 'Vidarbha Agrarian Belt (14 Gram Panchayats)',
    threatLevel: 'orange',
    status: 'ACTIVE_STROBE',
    decibels: 120,
    beaconsActivated: 14,
    timestamp: new Date(Date.now() - 7200000).toISOString()
  },
  {
    id: 'DISP-9002',
    type: 'ivr_toll_free',
    callerNumberHash: 'SHA256:7a9f...c42e',
    dialect: 'Bhojpuri / Hindi',
    bulletinDelivered: 'Saawan thunderstorm advice delivered to 48,200 feature phone callers',
    durationSec: 42,
    timestamp: new Date(Date.now() - 3600000).toISOString()
  }
];

// Active Inter-Ministerial Policy Actions
export const interMinisterialActions = [
  { ministry: 'FCI (Food Corp)', action: 'Grain buffer relocation to elevated storage yards', trigger: 'Soil moisture >75%', status: 'DISPATCHED' },
  { ministry: 'CEA (Power Grid)', action: 'Northern regional corridor load shedding standby', trigger: 'CDD surge +4,800 MW', status: 'SYNCHRONIZED' },
  { ministry: 'ICMR (Health)', action: 'Respiratory nebulizers & ORS advance mobilization', trigger: 'AQI inversion & heatwave', status: 'ACTIVE' },
  { ministry: 'MoRTH (Highways)', action: 'NH-5 landslide early warning diversion advisory', trigger: 'Himalayan slope instability', status: 'DISPATCHED' },
  { ministry: 'INCOIS (Marine)', action: 'Port Cautionary Signal III hoisted along Konkan', trigger: 'Swell waves >3.8m', status: 'ENFORCED' }
];
