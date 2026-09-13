// server/routes/offlineRoutes.js
import express from 'express';
import { offlineDispatchLogs, currentAlertLevel } from '../data/store.js';

export const offlineRouter = express.Router();

// GET /api/offline/logs
offlineRouter.get('/logs', (req, res) => {
  res.json({
    success: true,
    totalDispatches: offlineDispatchLogs.length,
    logs: offlineDispatchLogs
  });
});

// POST /api/offline/dispatch-siren - Trigger Gram Panchayat Siren & Strobe
offlineRouter.post('/dispatch-siren', (req, res) => {
  const { clusterName, decibels, radiusKm } = req.body;

  const dispatchEvent = {
    id: `DISP-${Math.floor(1000 + Math.random() * 9000)}`,
    type: 'siren_beacon',
    cluster: clusterName || 'Vidarbha Agrarian Belt (14 Gram Panchayats)',
    threatLevel: currentAlertLevel,
    status: 'ACTIVE_STROBE',
    decibels: decibels || 120,
    radiusKm: radiusKm || 12,
    beaconsActivated: Math.floor(8 + Math.random() * 12),
    timestamp: new Date().toISOString(),
    signalType: 'GSM/LoRaWAN Encrypted Packet'
  };

  offlineDispatchLogs.unshift(dispatchEvent);

  res.json({
    success: true,
    message: `Gram Panchayat Siren Tower activated at ${dispatchEvent.decibels}dB with rotating ${currentAlertLevel.toUpperCase()} strobe beacon.`,
    event: dispatchEvent
  });
});

// POST /api/offline/ivr-simulate - Simulate 1800-MAUSAM Toll-Free Dial-in
offlineRouter.post('/ivr-simulate', (req, res) => {
  const { dialect, featurePhoneInput } = req.body;

  const spokenMessages = {
    hi: 'मौसम सेवा में आपका स्वागत है। आपके क्षेत्र में आज हल्की बारिश और 34 डिग्री तापमान है। किसान भाइयों के लिए सलाह: शाम को कीटनाशक न छिड़कें।',
    en: 'Welcome to MausamSeva Toll-Free Hotline. Current temperature 34 degrees celsius with scattered clouds. Farmers advisory: Postpone pesticide spray till evening.',
    mr: 'हवामान सेवेत आपले स्वागत आहे. विदर्भ क्षेत्रात आज वादळी पावसाची शक्यता आहे.',
    bn: 'আবহাওয়া সেবায় স্বাগতম। আজ বিকেলে ভারী বৃষ্টির সম্ভাবনা রয়েছে।'
  };

  const selectedDialect = dialect || 'hi';
  const spokenText = spokenMessages[selectedDialect] || spokenMessages['hi'];

  res.json({
    success: true,
    ivrSessionId: `IVR-${Date.now().toString().slice(-6)}`,
    tollFreeNumber: '1800-180-1717 / 1800-MAUSAM',
    callerDialect: selectedDialect,
    featurePhoneInput: featurePhoneInput || '1 (Kisan Advice)',
    audioStreamUrl: '/audio/mock_ivr_bulletin.mp3',
    spokenText,
    timestamp: new Date().toISOString()
  });
});

// POST /api/offline/cap-broadcast - NDMA Common Alerting Protocol Flash SMS
offlineRouter.post('/cap-broadcast', (req, res) => {
  const { district, severity } = req.body;

  const capXml = `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>MOES-IMD-CAP-${Date.now()}</identifier>
  <sender>officer.met@imd.gov.in</sender>
  <sent>${new Date().toISOString()}</sent>
  <status>Actual</status>
  <msgType>Alert</msgType>
  <scope>Public</scope>
  <info>
    <category>Met</category>
    <event>Severe Convective Thunderstorm</event>
    <urgency>Immediate</urgency>
    <severity>${severity || 'Severe'}</severity>
    <area>
      <areaDesc>${district || 'All Districts'}</areaDesc>
    </area>
  </info>
</alert>`;

  res.setHeader('Content-Type', 'application/xml');
  res.send(capXml);
});
