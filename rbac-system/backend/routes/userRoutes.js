const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

// Admin-only routes
router.get('/', protect, authorize('Admin'), getAllUsers); // Get all users
router.patch('/:id/role', protect, authorize('Admin'), updateUserRole); // Update role
router.delete('/:id', protect, authorize('Admin'), deleteUser); // Delete user

// Admin or self-access routes
router.get('/:id', protect, getUserById); // Get user by ID

module.exports = router;
