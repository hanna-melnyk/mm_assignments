//controllers/authController.js

// authentication controller with login.ejs and registration functionality
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // For comparing hashed passwords
const jwt = require('jsonwebtoken'); // For generating JWT tokens


//  implement the checkAuthStatus function
// This function will check if there's a user object attached to the request (done by a authentication middleware that verifies a JWT or session)
// and respond with the authentication status.
exports.checkAuthStatus = (req, res) => {
  if (req.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
};

// Handle user registration
exports.register = async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body; // Extract info, including the password confirmation

  // Check if passwords match
  if (password !== passwordConfirm) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const user = await User.create({ username, email, password }); // Create new user if passwords match
    res.status(201).json({ message: "User successfully registered", userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors, e.g., duplicate username or email
  }
};

// Handle user login.ejs
exports.login = async (req, res) => {
  const { username, password } = req.body; // Extract credentials from request body
  try {
    const user = await User.findOne({ username }); // Find user by username
    if (!user || !(await bcrypt.compare(password, user.password))) { // Check password
      return res.status(401).json({ message: "Authentication failed" }); // Unauthorized
    }
    // Use process.env.JWT_SECRET for the JWT signing secret
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate token
    res.status(200).json({ token }); // Send token back to user
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle unexpected errors
  }
};
