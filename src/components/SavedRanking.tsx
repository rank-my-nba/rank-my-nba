import React from 'react';
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
import { UserRanking } from 'lib/types';

export default function SavedRanking({
  handleClick,
  elem
}: {
  handleClick: (rankingName: string) => void;
  elem: UserRanking;
}) {
  return (
    <div
      key={elem.name}
      className="pl-4 py-2 active:bg-neutral-950 cursor-pointer hover:bg-neutral-950/60 text-sm flex items-center gap-2 text-neutral-300"
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
}
