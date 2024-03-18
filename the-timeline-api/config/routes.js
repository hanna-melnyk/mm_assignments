// config/routes.js
const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');
const commentController = require('../controllers/apiCommentController');
const postController = require('../controllers/apiPostController');
const authController = require('../controllers/authController');


const authenticate = require('../middleware/authenticate');
const apiAuthenticate = require('../middleware/apiAuthenticate');

const miscController = require('../controllers/miscController'); // Import the misc controller


// Define a route for the authentication status [API endpoint]
router.get('/auth/status', apiAuthenticate, (req, res) => {
  // If the middleware passed, it means the token is valid
  res.json({ isAuthenticated: true });
});

// Define a route for checking authentication status
router.get('/auth/status', authController.checkAuthStatus);



//routes for views
// posts view
router.get('/', viewController.getIndex);
router.get('/posts', postController.getPosts);
router.get('/login', viewController.getLoginPage);
router.get('/register', viewController.getRegisterPage);

// routes for submitting data
// post
router.post('/submit', authenticate, postController.submitPost);
//post comment
router.post('/posts/:postId/comments', commentController.createComment);

// Route for user registration.ejs
router.post('/register', authController.register);

// Route for user login.ejs
router.post('/login', authController.login);



// other routes:
router.get('/favicon.ico', miscController.getFavicon); // add route for favicon.ico

module.exports = router;
