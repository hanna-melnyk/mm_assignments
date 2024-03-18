// middleware/apiAuthenticate.js
// For more sophisticated requests than those handled with "authenticate.js"
const jwt = require('jsonwebtoken');

const apiAuthenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract the token

  if (!token) {
    return res.status(401).json({ isAuthenticated: false });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // User is authenticated
    next();
  } catch (error) {
    return res.status(401).json({ isAuthenticated: false });
  }
};

module.exports = apiAuthenticate;
