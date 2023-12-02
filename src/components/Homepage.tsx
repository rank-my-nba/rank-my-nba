import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Homepage() {
  return (
    <div className="flex flex-col p-10 items-center justify-center">
      <h1 role="test">2022-23 NBA Stats</h1>
      <div className="container h-screen w-full flex text-foreground gap-4 justify-center">
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <Link to="/login">
          <Button>Go to Login</Button>
        </Link>
      </div>
    </div>
  );
}
