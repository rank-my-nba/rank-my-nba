import React from 'react';
import Ranking from './Ranking';

const RankingHistory = () => {
  const handleClick = async () => {
    const res = await fetch('/api/prisma');
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="flex flex-col h-full w-full items-center">
      <h2>Previous Rankings</h2>
      <Ranking />
      {/* <button onClick={handleClick}>Click me!</button> */}
    </div>
  );
};

export default RankingHistory;
