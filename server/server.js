const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

// need catch all route and global error handler

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
