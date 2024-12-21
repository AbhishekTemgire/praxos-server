// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port for the server
const port = 3000;

// Fake data to send as a response
const fakeData = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Robert Johnson', age: 25 }
];

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Set up another route to return fake data
app.get('/data', (req, res) => {
  res.json(fakeData);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
