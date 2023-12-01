const pg = require('pg');
const dotenv = require('dotenv');
dotenv();

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();

module.exports = client;
