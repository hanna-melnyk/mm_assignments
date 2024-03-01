const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Helper function to read data
function readData() {
  try {
    // Updated to read from data.json
    const data = fs.readFileSync('./data.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Helper function to write data
function writeData(posts) {
  try {
    // Updated to write to data.json
    fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf8');
  } catch (err) {
    console.error(err);
  }
}

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  let posts = readData();
  let postsHtml = posts.map(post => `
        <div>
            <h3>${post.name}</h3>
            <p>${post.message}</p>
            <small>Posted at: ${post.createdAt}</small>
        </div>
    `).join('');

  // Sample HTML response for the form and posts. Update as needed.
  res.send(`
    <html>
      <head><title>Post Message</title></head>
      <body>
        <form action="/post" method="POST">
          <input type="text" name="name" placeholder="Your name" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Post</button>
        </form>
        <div>${postsHtml}</div>
      </body>
    </html>
  `);
});

app.post('/post', (req, res) => {
  const { name, message } = req.body;
  const newPost = {
    name,
    message,
    createdAt: new Date().toLocaleString(), // Changed to ISO string for consistency
  };

  let posts = readData();
  posts.unshift(newPost); // Add the new post at the beginning of the array
  writeData(posts); // Persist the updated posts array

  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
