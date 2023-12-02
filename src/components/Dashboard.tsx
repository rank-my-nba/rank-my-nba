import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import Basketball from './Basketball';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import RankingHistory from './RankingHistory';
import Ranking from './Ranking';

export default function Dashboard() {
  const [previousRankings, setPreviousRankings] = useState([]);
  const [display, setDisplay] = useState([]);

  // FIRES WHEN USER SELECTS SPECIFIC PREV RANKING
  const handleClick = (rankingName: any) => {
    for (let i = 0; i < previousRankings.length; i++) {
      if (previousRankings[i].name === rankingName) {
        setDisplay([
          <Ranking name={rankingName} info={JSON.parse(previousRankings[i].SAVED_RANKING)} />
        ]);
        break;
      }
    }
  };

  // RETRIEVES STORED RANKING DATA
  const handleGetData = async () => {
    const res = await fetch('/api/data/prisma');
    const data = await res.json();
    setPreviousRankings(data.SAVED_RANKINGS);
  };

  // INITIAL DATA FETCHING WHEN USER IS IN DASHBOARD PAGE-
  useEffect(() => {
    handleGetData();
  }, []);

  // CREATES JSX FOR USER CLICKED RANKING
  const displayRankings = previousRankings.map((elem) => {
    console.log('elem', elem);
    return <Ranking name={elem.name} info={JSON.parse(elem.SAVED_RANKING)} />;
  });

  // CREATES JSX FOR SIDE BAR WITH ALL RANKINGS OPTION
  const prevRankType = previousRankings.map((elem) => {
    console.log('elem', elem);
    return (
      <div
        className="pl-4 py-2 active:bg-neutral-950 hover:bg-neutral-950/60 text-sm flex items-center gap-2 text-neutral-300"
        onClick={() => handleClick(elem.name)}>
        <div className="bg-green-400/70 border p-1 rounded-lg">
          <Basketball color="black" />
        </div>
        <div className="flex w-full items-center justify-between pr-4">
          <p className="select-none">{elem.name}</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center cursor-pointer rounded-md justify-center hover:bg-neutral-800 h-8 w-8 p-0 focus:ring-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neutral-950" align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  });

  // DISPLAY JSX
  return (
    <div className="h-screen text-neutral-400">
      <div className="h-full grid grid-cols-5 grid-rows-6 gap-4 p-10">
        <div className="col-span-1 row-span-1 border border-neutral-800 bg-neutral-900 rounded-lg">
          <div className="flex flex-col gap-3 h-full">
            <h1 className="border-b px-4 py-3 tracking-wide text-sm">Find Player</h1>
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
          <div style={{ maxHeight: '90%', overflowY: 'auto' }}>{display}</div>

          {/* <RankingHistory /> */}
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
