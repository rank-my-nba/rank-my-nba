const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);

function rankingQuery(arrayOfParams) {
  client.connect(function () {
    const arg1 = arrayOfParams[0];
    const arg2 = arrayOfParams[1];
    client.query(
      'SELECT "PLAYER", "' + arg1 + '", "' + arg2 + '" FROM "public"."PlayerStats" LIMIT 5',
      function (err, result) {
        if (err) {
          return console.error('error running query', err);
        }
        // console.log(result.rows);
        return result.rows;
        // client.end();
      }
    );
  });
}

module.exports = rankingQuery;
