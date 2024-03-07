// config/routes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const miscController = require('../controllers/miscController'); // Import the misc controller

router.get('/', postController.getIndex);
router.post('/submit', postController.submitPost); // moved from [app.js]; in routes: router.post('/submit', postController.submitPost); in postController: exports.submitPost
router.get('/posts', postController.getPosts);
router.get('/favicon.ico', miscController.getFavicon); // add route for favicon.ico

module.exports = router;
