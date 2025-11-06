const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const emojiDict = {
  happy: '😊',
  sad: '😢',
  coffee: '☕',
  cat: '🐱',
  dog: '🐶',
  fire: '🔥'
};

app.post('/api/translate', (req, res) => {
  // your code here
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
