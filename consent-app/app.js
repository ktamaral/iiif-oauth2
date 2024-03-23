const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define the path to the certificate and key
const certOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
};

app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Create HTTPS server
https.createServer(certOptions, app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
