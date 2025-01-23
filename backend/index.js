const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Backend is healthy' });
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});