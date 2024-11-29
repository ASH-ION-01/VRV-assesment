const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config(); // Load environment variables
connectDB();     // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/users', userRoutes); // Protected routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
