const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const messages = [];

// Helper to parse JSON body from incoming POST requests
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        resolve({});
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0];

  // API Route: Contact submission (Public POST)
  if (url === '/api/contact' && req.method === 'POST') {
    const data = await parseJsonBody(req);
    if (data.name && data.email && data.message) {
      messages.push({
        id: messages.length + 1,
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date().toISOString()
      });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing fields' }));
    }
    return;
  }

  // API Route: Secured messages retrieval (GET)
  if (url === '/api/messages' && req.method === 'GET') {
    const userId = req.headers['x-user-id'];
    const authHeader = req.headers['authorization'];

    const AUTHORIZED_USER_ID = 'victor_admin_99';
    const AUTHORIZED_TOKEN = 'Bearer secure_access_token_2026';

    // 1. Check if required headers are present
    if (!userId || !authHeader) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Authorization header and User ID are required.' }));
      return;
    }

    // 2. Validate User ID to prevent impersonation
    if (userId !== AUTHORIZED_USER_ID) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Access Denied: Invalid User ID. User impersonation blocked.' }));
      return;
    }

    // 3. Validate Token
    if (authHeader !== AUTHORIZED_TOKEN) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Access Denied: Invalid Authorization Token.' }));
      return;
    }

    // Validation passed - process request and return messages safely
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, count: messages.length, data: messages }));
    return;
  }

  // Serve static files:
  let safeUrl = decodeURIComponent(url);
  let filePath = path.join(__dirname, safeUrl === '/' ? 'index.html' : safeUrl);
  
  // Ensure requested file is inside this directory to prevent path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 Forbidden</h1>');
    return;
  }

  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error: ${error.code}</h1>`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`Victor Gbayesola Portfolio Server Live!`);
  console.log(`Access the portfolio at: http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C in this terminal window to stop.`);
  console.log(`==================================================`);
});
