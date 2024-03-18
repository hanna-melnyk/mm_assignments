// middleware/authenticate.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  console.log("Authentication middleware called");
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the 'Authorization' header

  if (!token) {
    // Redirect to login page instead of sending 'Access Denied'
    return res.redirect('/login');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Add user info to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Redirect to login page on token verification failure
    return res.redirect('/login');
  }
};

module.exports = authenticate;
