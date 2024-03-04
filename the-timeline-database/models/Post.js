const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true, minlength: 25 },
  content: { type: String, required: true, minlength: 25 }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post; // Make sure this line is present