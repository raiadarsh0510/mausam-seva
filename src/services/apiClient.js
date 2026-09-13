// src/services/apiClient.js
/**
 * Resilient API Client for MausamSeva
 * Connects to the Express backend (/api) with automatic fallback
 * to embedded synoptic datasets for static hosting environments (GitHub Pages).
 */

import { CITIES_DATA, WEATHER_ALERT_LEVELS, MOES_ANALYTICS_DATA } from '../data/mockWeatherData';

const API_BASE = '/api';

export const apiClient = {
  // Check backend health
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(1500) });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { status: 'STANDALONE_CLIENT', efficiency: '93.35%', mode: 'PWA Edge Cached' };
  },

  // Get weather data for a city
  async getWeather(cityId) {
    try {
      const res = await fetch(`${API_BASE}/weather/${cityId}`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        const data = await res.json();
        return data.data;
      }
    } catch {
      // Fallback to local memory cache
    }
    return CITIES_DATA[cityId] || CITIES_DATA['delhi'];
  },

  // Get active 5-color threat level
  async getAlertLevel() {
    try {
      const res = await fetch(`${API_BASE}/moes/alert-level`, { signal: AbortSignal.timeout(1500) });
      if (res.ok) {
        const data = await res.json();
        return data.activeAlertLevel;
      }
    } catch {
      // Fallback
    }
    return 'orange';
  },

  // Broadcast threat level update (MoES Official)
  async updateAlertLevel(level, officerId = 'MOES-IND-8841') {
    try {
      const res = await fetch(`${API_BASE}/moes/alert-level`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, authorizedOfficerId: officerId })
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { success: true, broadcastedLevel: level, mode: 'local_sync' };
  },

  // Ingest citizen query telemetry (DPDP compliant)
  async ingestTelemetry(payload) {
    try {
      const res = await fetch(`${API_BASE}/telemetry/ingest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { success: true, mode: 'client_anonymized' };
  },

  // Dispatch Gram Panchayat siren & strobe
  async dispatchSiren(clusterName, decibels = 120) {
    try {
      const res = await fetch(`${API_BASE}/offline/dispatch-siren`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clusterName, decibels })
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback simulation
    }
    return {
      success: true,
      message: `Gram Panchayat Siren Tower activated at ${decibels}dB with rotating strobe beacon.`,
      event: {
        id: `DISP-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'siren_beacon',
        cluster: clusterName,
        decibels,
        beaconsActivated: 12,
        timestamp: new Date().toISOString()
      }
    };
  },

  // Simulate 1800-MAUSAM IVR feature phone call
  async simulateIVR(dialect = 'hi', featurePhoneInput = '1') {
    try {
      const res = await fetch(`${API_BASE}/offline/ivr-simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dialect, featurePhoneInput })
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return {
      success: true,
      ivrSessionId: `IVR-${Date.now().toString().slice(-6)}`,
      tollFreeNumber: '1800-180-1717 / 1800-MAUSAM',
      callerDialect: dialect,
      featurePhoneInput,
      spokenText: 'मौसम सेवा में आपका स्वागत है। आपके क्षेत्र में आज हल्की बारिश और 34 डिग्री तापमान है। किसान भाइयों के लिए सलाह: शाम को कीटनाशक न छिड़कें।'
    };
  }
};
