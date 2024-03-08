// controllers/postController.js
const Post = require('../models/Feed'); //moved from app.js
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
    res.status(201).send(`
      <p>Post saved successfully</p>
      <a href="/feed" style="display: inline-block; padding: 8px 16px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Go to Main Page</a>
    `);
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

    res.status(201).redirect('/feed'); // indicates success and then redirects

  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).send('Error saving comment');
  }
};



//new methods----------------------------------------------------------------------------------------------------------
exports.viewArticle = async (req, res) => {
  try {
    const article = await Post.findById(req.params.id).populate('comments');
    if (!article) return res.status(404).send('Article not found');
    res.render('articles/show', { article }); // articles/show.ejs view
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).send('Error displaying article');
  }
};

exports.updateArticle = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content
    });
    res.redirect('/feed'); // Redirect to the homepage after successful update
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).send('Failed to update article');
  }
};


// editArticle
exports.editArticleForm = async (req, res) => {
  try {
    const article = await Post.findById(req.params.id);
    if (!article) {
      return res.status(404).send('Article not found');
    }
    res.render('articles/edit', { article }); // Assuming you have an edit.ejs view in the views/articles directory
  } catch (error) {
    console.error('Error fetching article for edit:', error);
    res.status(500).send('Failed to load edit form');
  }
};

// exports.deleteArticle = async (req, res) => {
//   try {
//     await Article.findByIdAndDelete(req.params.id);
//     res.redirect('/'); // Redirect to the homepage or another appropriate route
//   } catch (error) {
//     console.error('Failed to delete article:', error);
//     res.status(500).send('Error deleting article');
//   }
// };


exports.deleteArticle = async (req, res) => {
  try {
    const article = await Post.findById(req.params.id);
    if (!article) {
      console.error('Article not found with ID:', req.params.id);
      return res.status(404).send('Article not found');
    }

    await Post.findByIdAndDelete(req.params.id);
    console.log('Article deleted:', req.params.id);
    res.redirect('/feed');
  } catch (error) {
    console.error('Failed to delete article:', error);
    res.status(500).send('Error deleting article');
  }
};
