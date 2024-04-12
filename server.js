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

app.get('/api/blockinfo', async (req, res) => {
  try {
    const blockNumber = req.query.blocknum;

    console.log(`Fetching block information for block number ${blockNumber}`);

    const response = await axios.get(`https://api.vechainstats.com/v2/block/info?blocknum=${blockNumber}&VCS_API_KEY=${apiKey}`);

    console.log('Block information fetched successfully');
    console.log('Response data:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching block information:', error);
    res.status(500).json({ error: 'Error fetching block information' });
  }
});

const server = https.createServer(options, app);

server.listen(port, host, () => {
  console.log(`Server running at https://${host}:${port}/`);
});
