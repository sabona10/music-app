const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();

// Connect to the database
require('./config/database');


//router
var playlistsRouter = require("./routes/api/playlists");
var browseRouter = require("./routes/api/browse");

const app = express();

var cors = require('cors');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify a token and assign the user object from JWT
// to a req.user property
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use("/api/playlists", playlistsRouter);
app.use("/api/browse", browseRouter);

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  res.send('cors problem fixed:)');
});
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});