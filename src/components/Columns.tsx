import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { Headers } from 'lib/types';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Headers>[] = [
  {
    accessorKey: 'PLAYER',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Player
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'TEAM',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Team
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'PTS',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Points
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'REB',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Rebounds
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'AST',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Assists
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'STL',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          Steals
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'FGM',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          FGM
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'FGA',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          FGA
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  },
  {
    accessorKey: 'FG_PCT',
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer select-none hover:text-white"
          onClick={() => column.toggleSorting()}>
          FG%
          {column.getIsSorted() === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </div>
      );
    }
  }
];
