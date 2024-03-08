require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//methodOverride added
const methodOverride = require('method-override');




// removed route (moved to routes.js)
// (logic moved to postController.js)

const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views'); //directory where the view templates are located

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// redirect to /feed
app.get('/', (req, res) => {
  res.redirect('/feed');
});


// use routes from config
const routes = require('./config/routes');
app.use(routes);

// Post model is in Feed.js file
// Routes are moved to routes.js, actions/logic for each route is moved too postController.js

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

