const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Post model is defined in './models/Post'
const Feed = require('./models/Feed'); // Adjust the path as necessary

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const saveFeed = async () => {
  const newFeed = new Feed({
    username: "exampleUser23",
    title: "This is a sufficiently long title23",
    content: "1This is an example post content. It should be long enough to meet the minimum length requirement for content as well.2"
  });


  try {
    const savedFeed = await newFeed.save();
    console.log('Post saved successfully:', savedFeed);
    mongoose.disconnect(); // Optionally disconnect after operations are complete
  } catch (error) {
    console.error('Error saving post:', error);
  }
};

saveFeed();
