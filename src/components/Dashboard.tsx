import React from 'react';
import RankingHistory from './RankingHistory';
import CurrentRanking from './CurrentRanking';
import { useState } from 'react';

export default function Dashboard() {
  const [ranking, setRanking] = useState(true);

  const handleCreateClick = () => {
    setRanking(true);
  };

  const handleHistoryClick = () => {
    setRanking(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center space-x-4">
        <div onClick={handleCreateClick}>Create Your Own Ranking</div>
        <div onClick={handleHistoryClick}>View Past Ranking</div>
      </div>
      {ranking ? <CurrentRanking /> : <RankingHistory />}
    </div>
  );
}
