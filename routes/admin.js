const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).send('Forbidden');
  }
  next();
});

router.get('/dashboard', (req, res) => {
  res.sendFile('dashboard_admin.html', { root: './public' });
});

module.exports = router;