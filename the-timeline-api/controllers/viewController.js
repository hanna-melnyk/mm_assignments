// controllers/viewController.js
//Client-side logic
const Post = require('../models/Post'); //moved from app.js
const Comment = require('../models/Comment');


//to serve the main html page [moved from app.js]
//get and render the homepage with all posts
exports.getIndex = async (req, res) => {
  try {
    // fetch all posts and populate the 'comments' field
    const posts = await Post.find().populate('comments').sort({ createdAt: -1 });

    //Before this - determine if the user is logged in (a function that checks the presence and validity of a token)
    const isAuthenticated = req.user ? true : false;


    // render the view and send the posts populated with comments
    res.render('pages/index', { posts });
  } catch (error) {
    console.error('Error fetching posts with comments:', error);
    res.status(500).send(error.message);
  }
};

//to serve the particular post page
//get and render the post detail page
exports.getPostDetail = async (req, res) => {
  try {
    // Fetch the specific post by ID and populate comments
    const post = await Post.findById(req.params.id).populate('comments');
    if (!post) {
      // If the post is not found, log an error message
      return res.status(404).send('Post not found');
    }
    // Render the postDetail template with the fetched post
    res.render('postDetail', { post });
  } catch (error) {
    // Log the error and log an error message

    console.error('Error fetching post detail:', error);
    res.status(500).send('Error fetching post detail');
  }
};


// to serve the login and register pages
exports.getLoginPage = (req, res) => {
  res.render('pages/login');
};
exports.getRegisterPage = (req, res) => {
  res.render('pages/register');
};




//
//
// exports.postComment = async (req, res) => {
//
//
//   try {
//     // Create a new comment
//     const comment = new Comment({
//       username: req.body.username,
//       content: req.body.content
//     });
//     const savedComment = await comment.save();
//
//     // Find the associated post and attach the comment's ID
//     const post = await Post.findById(req.params.postId);
//     if (!post) {
//       return res.status(404).send('Post not found.');
//     }
//
//     post.comments.push(savedComment._id);
//     await post.save();
//
//     res.status(201).redirect('/'); // indicates success and then redirects
//
//   } catch (error) {
//     console.error('Error saving comment:', error);
//     res.status(500).send('Error saving comment');
//   }
// };

