import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function formatPlayerData(playerData) {
  const results = playerData?.map((player) => ({
    PLAYER_ID: player[0],
    RANK: player[1],
    PLAYER: player[2],
    TEAM_ID: player[3],
    TEAM: player[4],
    GP: player[5],
    MIN: player[6],
    FGM: player[7],
    FGA: player[8],
    FG_PCT: player[9],
    FG3M: player[10],
    FG3A: player[11],
    FG3_PCT: player[12],
    FTM: player[13],
    FTA: player[14],
    FT_PCT: player[15],
    OREB: player[16],
    DREB: player[17],
    REB: player[18],
    AST: player[19],
    STL: player[20],
    BLK: player[21],
    TOV: player[22],
    PF: player[23],
    PTS: player[24],
    EFF: player[25],
    AST_TOV: player[26],
    STL_TOV: player[27]
  }));

  return results;
}

async function main() {
  const res = await fetch('http://localhost:8080/api/nba');
  const data = await res.json();
  const playerStatsData = formatPlayerData(data.resultSet.rowSet);

  for (const data of playerStatsData) {
    await prisma.playerStats.create({
      data
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
