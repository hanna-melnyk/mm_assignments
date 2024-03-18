const Post = require('../models/Post');
const Comment = require('../models/Comment');


// to serve the /posts path (it queries MongoDB database)
// Retrieve all posts
exports.getPosts = async (req, res) => {
  try {
    // Find all posts in the database
    const posts = await Post.find().sort({ createdAt: -1 });
    // Respond with all posts and a 200 status code
    res.status(200).json(posts);
  } catch (error) {
    // Handle any errors during the retrieval of posts
    res.status(500).send(error.message);
  }
};

// Retrieve a single post by ID
exports.getPostById = async (req, res) => {
  try {
    // Find a post by its ID, provided as a URL parameter
    const post = await Post.findById(req.params.id);
    // Check if the post was found
    if (!post) {
      return res.status(404).send('Post not found');
    }
    // Respond with the found post and a 200 status code
    res.status(200).json(post);
  } catch (error) {
    // Handle any errors during the retrieval of the post
    res.status(500).send(error.message);
  }
};

// Create a new post
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

// Update an existing post
exports.updatePost = async (req, res) => {
  try {
    // Update the post identified by ID with new data from the request body
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // Check if the post was found and updated
    if (!updatedPost) {
      return res.status(404).send('Post not found');
    }
    // Respond with the updated post and a 200 status code
    res.status(200).json(updatedPost);
  } catch (error) {
    // Handle any errors during the update of the post
    res.status(500).send(error.message);
  }
};


// Delete an existing post
exports.deletePost = async (req, res) => {
  try {
    // Delete the post identified by ID
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    // Check if the post was found and deleted
    if (!deletedPost) {
      return res.status(404).send('Post not found');
    }
    // Respond with a 204 status code, indicating that the action was successful but there is no content to return
    res.status(204).send();
  } catch (error) {
    // Handle any errors during the deletion of the post
    res.status(500).send(error.message);
  }
};
