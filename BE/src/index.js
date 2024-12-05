import express from 'express';
import { handler } from '../dist/server/entry.mjs';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('dist/client/'));
app.use(handler);

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
