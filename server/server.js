const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();

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
      `https://api.sportradar.us/nba/trial/v8/en/seasons/2022/REG/leaders.json?api_key=2s3pjdfykafdp3ztfqbka7bh`
    );
    const data = await response.json();
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
});

// need catch all route and global error handler

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
