const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { updateProfileValidation, changePasswordValidation, validate } = require('../middleware/validate');
const {
  getAllUsers,
  getProfile,
  updateProfile,
  changePassword,
  activateUser,
  deactivateUser
} = require('../controllers/userController');

// User routes (authenticated users)
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfileValidation, validate, updateProfile);
router.put('/change-password', protect, changePasswordValidation, validate, changePassword);

// Admin routes
router.get('/', protect, authorize('admin'), getAllUsers);
router.put('/:id/activate', protect, authorize('admin'), activateUser);
router.put('/:id/deactivate', protect, authorize('admin'), deactivateUser);

module.exports = router;