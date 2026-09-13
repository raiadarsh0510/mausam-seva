// server/index.js
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { weatherRouter } from './routes/weatherRoutes.js';
import { telemetryRouter } from './routes/telemetryRoutes.js';
import { moesRouter } from './routes/moesRoutes.js';
import { offlineRouter } from './routes/offlineRoutes.js';
import { voiceRouter } from './routes/voiceRoutes.js';
import { cache } from './data/store.js';

const app = express();
const PORT = process.env.PORT || 5000;

// High-efficiency middleware
app.use(cors({ origin: '*' }));
app.use(compression()); // Gzip/Brotli payload compression (>80% size savings)
app.use(express.json({ limit: '10mb' }));

// Request performance timing header
app.use((req, res, next) => {
  const start = performance.now();
  const originalEnd = res.end;
  res.end = function (...args) {
    if (!res.headersSent) {
      const duration = (performance.now() - start).toFixed(2);
      res.setHeader('X-Response-Time-Ms', duration);
    }
    return originalEnd.apply(this, args);
  };
  next();
});

// Health check & Efficiency telemetry endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'MausamSeva Government Decision Support Backend',
    version: '2.0.0',
    uptimeSeconds: Math.floor(process.uptime()),
    cacheMetrics: {
      hitRatio: `${(cache.getHitRatio() * 100).toFixed(1)}%`,
      cachedKeysCount: cache.cache.size
    },
    standards: {
      privacy: 'DPDP Act 2023 (500m Spatial Centroid)',
      languages: '22 Scheduled Languages of India',
      threatTiers: '5-Color Broadcast System'
    },
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/weather', weatherRouter);
app.use('/api/telemetry', telemetryRouter);
app.use('/api/moes', moesRouter);
app.use('/api/offline', offlineRouter);
app.use('/api/voice', voiceRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err);
  res.status(500).json({ success: false, error: 'Internal Server Error', details: err.message });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`🚀 MausamSeva Government Backend Server Running`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`⚡ Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});
