const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { signupValidation, loginValidation, validate } = require('../middleware/validate');
const {
  signup,
  login,
  getCurrentUser,
  logout
} = require('../controllers/authController');

// Public routes
router.post('/signup', signupValidation, validate, signup);
router.post('/login', loginValidation, validate, login);

// Protected routes
router.get('/me', protect, getCurrentUser);
router.post('/logout', protect, logout);

module.exports = router;