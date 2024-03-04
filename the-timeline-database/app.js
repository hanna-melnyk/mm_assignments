require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Middlewares
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Post model is in Post.js file

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', async (req, res) => {
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
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

