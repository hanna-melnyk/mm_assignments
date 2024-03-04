
// import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// initialize express
const app = express();


// configure dotenv to load the environment variables
require('dotenv').config();


// configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Construct the connection string with the password from .env
const dbPassword = encodeURIComponent(process.env.DB_PASSWORD);
const connectionString = `mongodb+srv://hannamelnk:${dbPassword}@cluster0.7s2mp2v.mongodb.net/?retryWrites=true&w=majority`;


//connect to mongoDB
mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


//define models
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 25 },
  content: { type: String, required: true, minlength: 25 },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

//set up routes to handle endpoints

//to get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//to create a new post
app.post('/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//start the server: make the app listen to a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

