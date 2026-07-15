export default async function handler(req, res) {
  // CORS configuration if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-User-ID, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const userId = req.headers['x-user-id'];
    const authHeader = req.headers['authorization'];

    const AUTHORIZED_USER_ID = 'victor_admin_99';
    const AUTHORIZED_TOKEN = 'Bearer secure_access_token_2026';

    // 1. Check if required headers are present
    if (!userId || !authHeader) {
      return res.status(401).json({ error: 'Authorization header and User ID are required.' });
    }

    // 2. Validate User ID to prevent impersonation
    if (userId !== AUTHORIZED_USER_ID) {
      return res.status(403).json({ error: 'Access Denied: Invalid User ID. User impersonation blocked.' });
    }

    // 3. Validate Token
    if (authHeader !== AUTHORIZED_TOKEN) {
      return res.status(403).json({ error: 'Access Denied: Invalid Authorization Token.' });
    }

    // Mock list of contact messages (Vercel functions are stateless)
    const sampleMessages = [
      {
        id: 1,
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Love your creative portfolio! Let's collaborate on a design system.",
        timestamp: new Date().toISOString()
      }
    ];

    return res.status(200).json({ success: true, count: sampleMessages.length, data: sampleMessages });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
