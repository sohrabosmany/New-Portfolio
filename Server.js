// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the Vite app's build directory
app.use(express.static(join(__dirname, 'dist')));

// API routes would go here
// For example:
// app.get('/api/data', (req, res) => {
//   res.json({ message: 'API endpoint example' });
// });

// For any request that doesn't match one above, send back the React index.html file
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});