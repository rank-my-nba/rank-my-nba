import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PlayerData } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPlayerData(playerData: PlayerData[]) {
  const results = playerData?.map((player: PlayerData) => ({
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
