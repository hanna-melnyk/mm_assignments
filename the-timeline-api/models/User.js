// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing

// Define the User schema with username, email, and password fields
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Unique username
  email: { type: String, required: true, unique: true }, // Unique email
  password: { type: String, required: true }, // Password, which will be hashed
}, { timestamps: true }); // Enable automatic creation of createdAt and updatedAt fields

// Pre-save middleware to hash the password before saving if it's been modified
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) { // Check if password is modified
    this.password = await bcrypt.hash(this.password, 8); // Hash password
  }
  next(); // Proceed to the next middleware or save the document
});


module.exports = mongoose.model('User', userSchema); // Export the User model
