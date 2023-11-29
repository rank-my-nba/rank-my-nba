const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const fs = require('fs');

const app = express();

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

// const { NBA_API_KEY, NBA_API_URL } = process.env;
// app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

// set up to pull from DB instead of json file

app.get('/api/nba', (req, res) => {
  const filePath = path.resolve(__dirname, '../stats.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

app.get('/api/nba/pts', async (req, res) => {
  const filePath = path.resolve(__dirname, '../stats.json');
  const response = await fetch(
    'https://stats.nba.com/stats/leagueleaders?LeagueID=00&PerMode=Totals&Scope=S&Season=2022-23&SeasonType=Regular Season&StatCategory=PTS&ActiveFlag=0'
  );
  const data = await response.json();

  fs.writeFile(filePath, JSON.stringify(data), 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data saved to file successfully');
      res.status(200).send('Data saved to file successfully');
    }
  });
});

// need catch all route and global error handler

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
