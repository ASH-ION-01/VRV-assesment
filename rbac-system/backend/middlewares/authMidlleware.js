const jwt = require('jsonwebtoken');

// Protect Routes
exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized access' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded token to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
