const mongoose = require('mongoose');
const Comment = require('./Comment'); // reference to a Comment model

const feedSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true, minlength: 25 },
  content: { type: String, required: true, minlength: 25 },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, { timestamps: true } // mongoose will handle createdAt and updatedAt fields automatically


  //for the future: add the reference to a User model here
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }


);

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed; // export Feed
