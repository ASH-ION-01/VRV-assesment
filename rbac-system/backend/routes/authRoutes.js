const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register); // Public
router.post('/login', login);       // Public

module.exports = router;
