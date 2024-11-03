// server.js
import express from 'express';

const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/test', (req, res) => {
  res.send('Hello, test!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
