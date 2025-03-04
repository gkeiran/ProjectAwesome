
const express = require('express');
const app = express();

// GET route to retrieve all users
app.get('/users', (req, res) => {
  // Query database and return list of users
});

// POST route to create a new user
app.post('/user', (req, res) => {
  // Validate request body data
  // Create new user in database
  // Return response with status code 201 and location of new resource
});

// PUT route to update an existing user
app.put('/user/:id', (req, res) => {
  // Query database for user by id
  // Update user information
  // Return response with status code 200
});

// DELETE route to delete a user
app.delete('/user/:id', (req, res) => {
  // Query database for user by id
  // Delete user from database
  // Return response with status code 204
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});