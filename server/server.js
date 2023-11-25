const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const { NBA_API_KEY, NBA_API_URL } = process.env;
// app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/api/nba', async (req, res) => {
  try {
    const response = await fetch(
      `${NBA_API_URL}en/seasons/2022/REG/leaders.json?api_key=${NBA_API_KEY}`
    );
    const data = await response.json();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

// need catch all route and global error handler

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
