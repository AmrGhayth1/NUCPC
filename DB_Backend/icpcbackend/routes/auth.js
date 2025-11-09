const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const supabase = require('../services/supabase');

// SIGN UP
router.post('/signup', async (req, res) => {
  const { username, email, password, nu_id, name } = req.body;

  if (!username || !email || !password || !nu_id || !name) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase.from('users').insert([
      { username, email, password: hashedPassword, nu_id, name }
    ]);

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// SIGN IN
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('users') 
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const validPass = await bcrypt.compare(password, data.password);
  if (!validPass) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: data.id, email: data.email }, 'secret_key', {
    expiresIn: '1d',
  });

  res.json({ data: data, message: 'Logged in successfully', token });
});

module.exports = router;
