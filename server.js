//modules from other files
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 80;
//
//
//middleware
const app = express();
app.use(express.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './build')));

//use router module
// app.use('/', router);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

//listen at PORT
console.log('Listening on port ' + PORT + ' for requests');
app.listen(PORT);
