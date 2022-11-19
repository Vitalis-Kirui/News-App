const express  = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');

// Defualt route
router.get('', (req, res) => {
    res.send('Hellow from authentication endpoints');
});

// Register endpoint
router.post('/register', userControllers.registerUser);

// Login endpoint
router.post('/login', userControllers.loginUser);

// Get profile endpoint
router.get('/profile', userControllers.userProfile);

// Exporting router
module.exports = router;