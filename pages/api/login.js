export default function handler(req, res) {
  // Kita ambil key dari Body (kalau via Aplikasi/POST) ATAU dari URL (kalau via Chrome/GET)
  const key = req.body.key || req.query.key;

  // Cek Key
  if (key !== 'GHOST-VIP-KEY') {
    return res.status(401).json({ 
      status: 'failed', 
      message: 'Key salah. Jika buka di browser, gunakan format URL: /api/login?key=GHOST-VIP-KEY' 
    });
  }

  // Output JSON murni statis
  const responseJson = {
    "access": "∞",
    "credit": "30",
    "device": "null",
    "devices": {
      "037e73973a3b9e17": {
        "last_login": "23-06-2026 16:48",
        "name": "CPH2467",
        "registered_at": "23-06-2026 16:48"
      },
      "05e16c88de678041": {
        "last_login": "23-06-2026 17:22",
        "name": "V2039",
        "registered_at": "23-06-2026 17:22"
      },
      "14ccd0f38e99d0d1": {
        "last_login": "23-06-2026 17:18",
        "name": "CPH2423",
        "registered_at": "23-06-2026 17:18"
      },
      "15c786e42807ed0a": {
        "last_login": "23-06-2026 17:17",
        "name": "25028PC03G",
        "registered_at": "23-06-2026 16:37"
      }
    },
    "rgtime": "23-06-2026 13:49",
    "status": "active",
    "username": "GHOST",
    "validity": "24-06-2026 13:49"
  };

  return res.status(200).json(responseJson);
}
