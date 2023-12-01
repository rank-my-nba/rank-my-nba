const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const conString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString: conString });

const rankingQuery = async (arrayOfParams) => {
  const client = await pool.connect();
  const arg1 = arrayOfParams[0];
  const arg2 = arrayOfParams[1];
  let res = await client.query(
    'SELECT "PLAYER", "' + arg1 + '", "' + arg2 + '" FROM "public"."PlayerStats"'
  );
  client.release();
  return res;
};
const rankingController = {};

rankingController.createRanking = (req, res, next) => {
  const body = req.body;
  const rankingPromise = new Promise((resolveThis) => {
    resolveThis(rankingQuery(body));
  });
  rankingPromise.then((result) => {
    res.locals.rows = result.rows;
    return next();
  });
};

module.exports = rankingController;
