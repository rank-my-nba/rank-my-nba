const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const fs = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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

// app.get('/api/nba', (req, res) => {
//   const filePath = path.resolve(__dirname, '../stats.json');
//   fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.status(200).json(JSON.parse(data));
//     }
//   });
// });

app.get('/api/data/prisma', async (req, res) => {
  const users = await prisma.users.findUnique({
    where: { id: 1 },
    include: {
      SAVED_RANKINGS: true
    }
  });
  console.log('users', users);
  res.status(200).send(users);
});

app.get('/api/prisma', async (req, res) => {
  const mockData1 = [
    ['Rank', 'Name', 'PPG', 'APG'],
    [1, 'LeBron James', 25.0, 7.8],
    [2, 'Stephen Curry', 30.1, 6.5],
    [3, 'Kevin Durant', 27.0, 5.9],
    [4, 'Giannis Antetokounmpo', 28.1, 5.9],
    [5, 'Luka Dončić', 27.7, 8.6],
    [6, 'Kawhi Leonard', 26.9, 5.0],
    [7, 'Anthony Davis', 24.0, 3.3],
    [8, 'Joel Embiid', 28.5, 3.5],
    [9, 'Damian Lillard', 28.8, 7.5],
    [10, 'Jayson Tatum', 24.3, 4.2],
    [11, 'Kyrie Irving', 26.9, 6.0],
    [12, 'James Harden', 25.2, 10.9],
    [13, 'Devin Booker', 25.6, 4.3],
    [14, 'Jimmy Butler', 21.5, 6.9],
    [15, 'Karl-Anthony Towns', 24.8, 4.5],
    [16, 'Trae Young', 25.3, 9.4],
    [17, 'Chris Paul', 16.4, 8.9],
    [18, 'Zion Williamson', 27.0, 3.7],
    [19, 'Rudy Gobert', 14.3, 1.3],
    [20, 'Brandon Ingram', 23.8, 4.9]
  ];

  const mockData2 = [
    ['Rank', 'Name', 'PPG', 'APG', 'BPG'],
    [1, 'Paul George', 23.3, 5.2, 0.5],
    [2, 'Khris Middleton', 20.4, 5.4, 0.3],
    [3, 'Russell Westbrook', 21.9, 8.7, 0.2],
    [4, 'Donovan Mitchell', 26.4, 5.2, 0.4],
    [5, 'CJ McCollum', 23.1, 4.7, 0.6],
    [6, 'Ben Simmons', 14.3, 7.2, 0.8],
    [7, 'DeAaron Fox', 25.2, 7.2, 0.3],
    [8, 'Jrue Holiday', 17.7, 4.5, 0.5],
    [9, 'John Wall', 19.0, 6.9, 0.7],
    [10, 'Deandre Ayton', 16.2, 1.9, 1.1],
    [11, 'Jamal Murray', 21.2, 4.8, 0.2],
    [12, 'Kristaps Porziņģis', 20.1, 1.6, 2.0],
    [13, 'Jaren Jackson Jr.', 17.4, 1.4, 1.7],
    [14, 'Gordon Hayward', 18.8, 4.1, 0.4],
    [15, 'LaMelo Ball', 15.7, 6.1, 0.5],
    [16, 'DeMar DeRozan', 21.6, 6.9, 0.3],
    [17, 'Collin Sexton', 24.3, 4.4, 0.1],
    [18, 'Mikal Bridges', 13.5, 3.5, 0.9],
    [19, 'Christian Wood', 20.9, 1.3, 1.5],
    [20, 'DAngelo Russell', 19.3, 5.3, 0.2]
  ];

  const savedRanking = await prisma.savedRankings.create({
    data: {
      name: 'Test',
      userId: 1,
      SAVED_RANKING: JSON.stringify(mockData1)
    }
  });

  res.status(200).send(savedRanking);
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
