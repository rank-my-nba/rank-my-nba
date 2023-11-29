export type DataType = {
  resource: string;
  parameters: {
    LeagueID: string;
    PerMode: string;
    StatCategory: string;
    Season: string;
    Scope: string;
    ActiveFlag: string;
  };
  resultSet: {
    name: string;
    headers: [
      'PLAYER_ID',
      'RANK',
      'PLAYER',
      'TEAM_ID',
      'TEAM',
      'GP',
      'MIN',
      'FGM',
      'FGA',
      'FG_PCT',
      'FG3M',
      'FG3A',
      'FG3_PCT',
      'FTM',
      'FTA',
      'FT_PCT',
      'OREB',
      'DREB',
      'REB',
      'AST',
      'STL',
      'BLK',
      'TOV',
      'PF',
      'PTS',
      'EFF',
      'AST_TOV',
      'STL_TOV'
    ];
    rowSet: PlayerData[];
  };
};

export type PlayerData = [
  number, // ID
  number, // Some numeric property
  string, // Player name
  number, // Team ID
  string, // Team abbreviation
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number, // Some numeric property
  number // Some numeric property
];

export type Headers = {
  RANK: number;
  PLAYER: string;
  TEAM: string;
  GP: number;
  MIN: number;
  FGM: number;
  FGA: number;
  FG_PCT: number;
  FG3M: number;
  FG3A: number;
  FG3_PCT: number;
  FTM: number;
  FTA: number;
  FT_PCT: number;
  OREB: number;
  DREB: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  TOV: number;
  PF: number;
  PTS: number;
  EFF: number;
  AST_TOV: number;
  STL_TOV: number;
};
