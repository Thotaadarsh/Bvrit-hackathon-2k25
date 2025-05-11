const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
let latestData = {}; 
app.use(cors());
app.use(bodyParser.json());
app.post('/api/data', (req, res) => {
  console.log("Received data:", req.body);
  latestData = req.body;
  res.status(200).json({ message: 'Data received successfully' });
});
app.get('/api/latest', (req, res) => {
  res.json(latestData);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
