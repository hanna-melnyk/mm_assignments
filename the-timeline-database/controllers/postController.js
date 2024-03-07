// controllers/postController.js
const Post = require('../models/Post'); //moved from app.js


//to serve the main html page [moved from app.js]
exports.getIndex = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.sendFile(__dirname + '/public/index.html'); // Adjust this path as needed for EJS views
  } catch (error) {
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

