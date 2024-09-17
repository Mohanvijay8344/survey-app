const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);  // Register new user
router.post('/login', login);        // Login user and return JWT

module.exports = router;
