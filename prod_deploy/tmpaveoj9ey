const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index', { message: null });
});

// Dynamic route with form submission
app.post('/greet', (req, res) => {
  const name = req.body.name || 'Anonymous';
  res.render('index', { message: `Hello, ${name}!` });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Export for testing
module.exports = app;