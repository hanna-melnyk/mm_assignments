const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 25
  }
}, { timestamps: true } // mongoose will handle createdAt and updatedAt fields automatically

  //for the future: add the reference to a User model here
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
);

module.exports = mongoose.model('Comment', commentSchema);

