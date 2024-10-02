// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// Sample route for registration
app.post('/register', (req, res) => {
    const userData = req.body;
    console.log('User registration data:', userData);
    // Here you can add logic to save the user data to a database
    res.status(201).json({ message: 'User registered successfully', user: userData });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
