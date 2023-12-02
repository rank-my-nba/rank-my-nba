import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Ranking from './Ranking';
import SavedRanking from './SavedRanking';
import { UserRanking } from 'lib/types';
import Basketball from './Basketball';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [previousRankings, setPreviousRankings] = useState<UserRanking[] | null>(null);
  const [display, setDisplay] = useState([]);

  // FIRES WHEN USER SELECTS SPECIFIC PREV RANKING
  const handleClick = (rankingName: string) => {
    for (let i = 0; i < previousRankings.length; i++) {
      if (previousRankings[i].name === rankingName) {
        setDisplay([
          <Ranking
            key={rankingName + i}
            name={rankingName}
            info={JSON.parse(previousRankings[i].SAVED_RANKING)}
          />
        ]);
        break;
      }
    }
  };

  // INITIAL DATA FETCHING WHEN USER IS IN DASHBOARD PAGE-
  useEffect(() => {
    // RETRIEVES STORED RANKING DATA
    const handleGetData = async () => {
      const res = await fetch('/api/data/prisma');
      const data = await res.json();
      setPreviousRankings(data.SAVED_RANKINGS);
    };

    const handleGetAllData = async () => {
      const res = await fetch('/api/data/prisma/get-all');
      const data = await res.json();
      setDisplay([<Ranking name={''} info={data} />]);
    };

    handleGetAllData();
    handleGetData();
  }, []);

  // CREATES JSX FOR USER CLICKED RANKING
  const displayRankings = previousRankings?.map((elem) => {
    return <Ranking key={elem.id} name={elem.name} info={JSON.parse(elem.SAVED_RANKING)} />;
  });

  // CREATES JSX FOR SIDE BAR WITH ALL RANKINGS OPTION
  const prevRankType = previousRankings?.map((elem) => {
    return <SavedRanking key={elem.name} handleClick={handleClick} elem={elem} />;
  });

  // DISPLAY JSX
  return (
    <div className="h-screen text-neutral-400">
      <div className="h-full grid grid-cols-5 grid-rows-6 gap-4 p-10">
        <div className="col-span-1 row-span-1 border border-neutral-800 bg-neutral-900 rounded-lg">
          <div className="flex flex-col gap-3 h-full">
            <Link to="/">
              <h1 className="border-b flex items-center gap-1 text-neutral-300 px-4 py-3 tracking-wide text-sm">
                <Basketball />
                <p className="tracking-tighter text-xl font-bold">Rank My NBA</p>
              </h1>
            </Link>
            <div className="flex gap-3 p-3">
              <Input
                className="focus-visible:ring-1 h-8 text-xs"
                type="text"
                placeholder="Search for player"
              />
              <Button className="rounded-3xl h-[1.95rem] text-neutral-300" type="submit">
                Find
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-4 row-span-6 border border-neutral-800 bg-neutral-900 rounded-lg">
          <h1 className="p-3">Dashboard</h1>
          <div className="relative max-h-[90%] overflow-y-auto scrollbar-hide">{display}</div>
        </div>
        <div className="row-span-5 border border-neutral-800 bg-neutral-900 rounded-lg">
          <div className="flex items-center justify-between border-b border-neutral-700">
            <h1 className="py-5 pl-4 text-sm tracking-wide">Saved Rankings</h1>
            <p className="pr-5 select-none cursor-pointer hover:text-rose-500/80 text-sm text-rose-500">
              + New
            </p>
          </div>
          <div className="flex flex-col pt-4">{prevRankType}</div>
        </div>
      </div>
    </div>
  );
}
