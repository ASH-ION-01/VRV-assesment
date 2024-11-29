const User = require('../models/user');

// Get All Users (Admin Only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude passwords for security
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User by ID (Admin or Self)
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.id !== id && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const user = await User.findById(id, '-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User Role (Admin Only)
exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!['Admin', 'Moderator', 'User'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: `User role updated to ${role}`, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User (Admin Only)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
