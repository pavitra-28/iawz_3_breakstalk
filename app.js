const express = require('express');
const app = express();
const port = 8080;

// Define a route
app.get('/', (req, res) => {
  res.send('This is Pavitra bearing rollno 22BD1A6717');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
