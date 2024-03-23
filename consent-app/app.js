const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define the path to the certificate and key
const certPath = '/usr/local/share/ca-certificates/consent-app';
const certOptions = {
  key: fs.readFileSync(path.join(certPath, 'key.pem')),
  cert: fs.readFileSync(path.join(certPath, 'cert.pem'))
};

app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});

// Create HTTPS server
https.createServer(certOptions, app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
