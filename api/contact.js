// In-memory messages array (note: Vercel functions are stateless so this resets on container restart)
let messages = [];

export default async function handler(req, res) {
  // CORS configuration if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (name && email && message) {
      messages.push({
        id: messages.length + 1,
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });
      return res.status(200).json({ success: true });
    }
    return res.status(400).json({ error: 'Missing fields' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
