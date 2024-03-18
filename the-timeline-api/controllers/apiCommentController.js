//Create a comment
exports.createComment = async (req, res) => {
  const { postId } = req.params; // Assuming the post ID is passed as a URL parameter
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).send('Username and content are required.');
  }

  try {
    const comment = new Comment({ post: postId, username, content });
    await comment.save();

    // Optionally, add the comment to the post's comments array
    const post = await Post.findById(postId);
    post.comments.push(comment._id);
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get comments for a Post
exports.getComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Update a comment
exports.updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  try {
    const comment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });
    if (!comment) {
      return res.status(404).send('Comment not found.');
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).send('Comment not found.');
    }

    // Optionally, remove the comment from the post's comments array
    await Post.updateOne({ comments: commentId }, { $pull: { comments: commentId } });

    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).send(error.message);
  }
};

