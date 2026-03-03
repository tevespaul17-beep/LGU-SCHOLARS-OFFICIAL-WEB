const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models/db');
const router = express.Router();

// serve login page
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// login post
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    // create session
    req.session.user = { id: user.id, email: user.email, role: user.role };
    if (user.role === 'admin') {
      return res.json({ redirect: '/admin/dashboard' });
    }
    res.json({ redirect: '/scholar/dashboard' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// register page
router.get('/register', (req, res) => {
  res.sendFile('register.html', { root: './public' });
});

router.post('/register', async (req, res) => {
  const { email, firstName, lastName, school, schoolYear, address, password, role } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    await db.execute(
      'INSERT INTO users (email, first_name, last_name, school, school_year, address, password, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [email, firstName, lastName, school, schoolYear, address, hash, role]
    );
    res.json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// forgot password page
router.get('/forgot', (req, res) => {
  res.sendFile('forgot.html', { root: './public' });
});

// endpoints for OTP etc would be created later

module.exports = router;