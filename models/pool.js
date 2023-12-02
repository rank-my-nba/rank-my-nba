const dotenv = require('dotenv');
const { Pool } = require('pg');
dotenv.config();

const databaseConfig = { connectionString: process.env.DATABASE_URL };
const pool = new Pool(databaseConfig);

module.exports = pool;
