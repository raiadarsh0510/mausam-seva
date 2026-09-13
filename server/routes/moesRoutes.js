// server/routes/moesRoutes.js
import express from 'express';
import { currentAlertLevel, setAlertLevel, interMinisterialActions } from '../data/store.js';

export const moesRouter = express.Router();

// GET /api/moes/alert-level
moesRouter.get('/alert-level', (req, res) => {
  res.json({
    success: true,
    activeAlertLevel: currentAlertLevel,
    timestamp: new Date().toISOString(),
    source: 'MoES National Meteorological Decision Support System'
  });
});

// POST /api/moes/alert-level - Broadcast threat level change
moesRouter.post('/alert-level', (req, res) => {
  const { level, authorizedOfficerId } = req.body;
  const validLevels = ['green', 'yellow', 'orange', 'red', 'purple'];

  if (!validLevels.includes(level)) {
    return res.status(400).json({ success: false, error: `Invalid level. Must be one of: ${validLevels.join(', ')}` });
  }

  setAlertLevel(level);

  res.json({
    success: true,
    broadcastedLevel: level,
    officer: authorizedOfficerId || 'MOES-IND-8841',
    message: `Threat level updated to ${level.toUpperCase()} and synchronized across citizen devices & beacon sirens.`,
    timestamp: new Date().toISOString()
  });
});

// GET /api/moes/inter-ministerial
moesRouter.get('/inter-ministerial', (req, res) => {
  res.json({
    success: true,
    actionsCount: interMinisterialActions.length,
    actions: interMinisterialActions
  });
});

// POST /api/moes/dispatch-ministerial
moesRouter.post('/dispatch-ministerial', (req, res) => {
  const { ministry, action, reason } = req.body;
  const newAction = {
    ministry: ministry || 'Disaster Relief / NDMA',
    action: action || 'Emergency contingency mobilized',
    trigger: reason || 'MoES Warning Escalation',
    status: 'DISPATCHED',
    timestamp: new Date().toISOString()
  };
  interMinisterialActions.unshift(newAction);

  res.json({ success: true, dispatched: newAction });
});
