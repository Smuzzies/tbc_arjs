require('dotenv').config();

const express = require('express');
const axios = require('axios');
const fs = require('fs');
const https = require('https');
const app = express();
const port = 8888;
const host = '0.0.0.0';

const apiKey = process.env.API_KEY;

const options = {
  key: fs.readFileSync(process.env.KEY_PATH),
  cert: fs.readFileSync(process.env.CERT_PATH)
};

app.use(express.static('public'));

app.get('/api/data', async (req, res) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const url = `https://api.vechainstats.com/v2/block/stats?date=${currentDate}&expanded=true&VCS_API_KEY=${process.env.API_KEY}`;

  try {
    const apiResponse = await axios.get(url);
    res.json(apiResponse.data);
  } catch (error) {
    console.error('Failed to fetch API data:', error);
    res.status(500).json({ error: 'Failed to fetch API data' });
  }
});


const server = https.createServer(options, app);

server.listen(port, host, () => {
  console.log(`Server running at https://${host}:${port}/`);
});
