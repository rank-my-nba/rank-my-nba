import React from 'react';
import { Separator } from './ui/separator';
import Basketball from './Basketball';

export default function PageNotFound() {
  return (
    <div className="flex h-full items-center justify-center bg-neutral-950">
      <div className="flex items-center gap-2 h-7">
        <h1 className="text-xl font-bold">404</h1>
        <Separator className="bg-neutral-600" orientation="vertical" />
        <p>This is not the page you are looking for</p>
        <Basketball animate={'animate-bounce'} />
      </div>
    </div>
  );
}
