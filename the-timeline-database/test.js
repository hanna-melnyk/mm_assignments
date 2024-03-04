const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Assuming you've defined your Post model as previously discussed
const Post = require('./models/Post'); // Adjust the path as necessary

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const savePost = async () => {
  const newPost = new Post({
    username: "exampleUser2",
    title: "This is a sufficiently long title2",
    content: "This is an example post content. It should be long enough to meet the minimum length requirement for content as well.2"
  });


  try {
    const savedPost = await newPost.save();
    console.log('Post saved successfully:', savedPost);
    mongoose.disconnect(); // Optionally disconnect after operations are complete
  } catch (error) {
    console.error('Error saving post:', error);
  }
};

savePost();
