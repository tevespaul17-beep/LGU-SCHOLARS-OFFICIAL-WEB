const express = require('express');
const router = express.Router();

// middleware to check scholar role
router.use((req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'scholar') {
    return res.status(403).send('Forbidden');
  }
  next();
});

router.get('/dashboard', (req, res) => {
  res.sendFile('dashboard_scholar.html', { root: './public' });
});

module.exports = router;