// controllers/postController.js
const Post = require('../models/Post'); //moved from app.js
const Comment = require('../models/Comment');


//to serve the main html page [moved from app.js]
exports.getIndex = async (req, res) => {
  try {
    // fetch all posts and populate the 'comments' field
    const posts = await Post.find().populate('comments').sort({ createdAt: -1 });

    // render the view and send the posts populated with comments
    res.render('pages/index', { posts });
  } catch (error) {
    console.error('Error fetching posts with comments:', error);
    res.status(500).send(error.message);
  }
};

exports.submitPost = async (req, res) => {
  const { username, title, content } = req.body;

  if (!username || !title || !content) {
    return res.status(400).send('All fields are required.');
  }

  const post = new Post({ username, title, content });

  try {
    await post.save();
    res.status(201).send('Post saved successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};


// to serve the /posts path (it queries MongoDB database)
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
    //res.posts;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.postComment = async (req, res) => {


  try {
    // Create a new comment
    const comment = new Comment({
      username: req.body.username,
      content: req.body.content
    });
    const savedComment = await comment.save();

    // Find the associated post and attach the comment's ID
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).send('Post not found.');
    }

    post.comments.push(savedComment._id);
    await post.save();

    res.status(201).redirect('/'); // indicates success and then redirects

  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).send('Error saving comment');
  }
};

