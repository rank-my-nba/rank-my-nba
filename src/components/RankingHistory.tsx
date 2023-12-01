import React from 'react';
import { useEffect, useState } from 'react';
import Ranking from './Ranking';

const RankingHistory = () => {
  const [previousRankings, setPreviousRankings] = useState([]);

  const handleClick = async () => {
    const data = await fetch('/api/prisma');
    console.log('data', data);
  };

  const handleGetData = async () => {
    const res = await fetch('/api/data/prisma');
    const data = await res.json();
    setPreviousRankings(data.SAVED_RANKINGS);
    // console.log(data);
    // console.log(JSON.parse(data.SAVED_RANKINGS[0].SAVED_RANKING));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const displayRankings = previousRankings.map((elem) => {
    console.log('elem', elem);
    return <Ranking name={elem.name} info={JSON.parse(elem.SAVED_RANKING)} />;
  });

  return (
    <div>
      <h2>Previous Rankings</h2>
      <div className="flex space-x-52">{displayRankings}</div>

      <button onClick={handleClick}>Hello</button>
      <button onClick={handleGetData}>Get Data</button>
    </div>
  );
};

export default RankingHistory;
