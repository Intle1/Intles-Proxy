const dns = require('dns');
const express = require('express');
const path = require('path');

// Set custom DNS servers
dns.setServers(['8.8.8.8', '1.0.0.1']);

const app = express();

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Using DNS servers: ${dns.getServers().join(', ')}`);
});
