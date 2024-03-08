// config/routes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const miscController = require('../controllers/miscController'); // Import the misc controller


// post
router.get('/feed', postController.getIndex); // changed path from '/' to '/feed'
router.post('/submit', postController.submitPost); // moved from [app.js]; in routes: router.post('/submit', postController.submitPost); in postController: exports.submitPost
router.get('/posts', postController.getPosts);
//post comment
router.post('/posts/:postId/comments', postController.postComment);

// other routes:
router.get('/favicon.ico', miscController.getFavicon); // add route for favicon.ico


// new routes:
router.get('/articles/:id', postController.viewArticle);
router.get('/articles/:id/edit', postController.editArticleForm);

router.put('/articles/:id', postController.updateArticle);

router.delete('/articles/:id', postController.deleteArticle);



module.exports = router;
