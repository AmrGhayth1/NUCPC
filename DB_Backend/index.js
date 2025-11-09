require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const authRoutes = require('./icpcbackend/routes/auth');
const {submitRoutes} = require('./icpcbackend/routes/submit');
const problemRoutes = require('./icpcbackend/routes/problems');
const contestsRoutes = require('./icpcbackend/routes/contests');



app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes); // Signup and login
app.use('/api/submit', submitRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/contests', contestsRoutes);


app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on http://localhost:3000');
});
