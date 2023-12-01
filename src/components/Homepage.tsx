import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="flex flex-col p-10 items-center justify-center">
      <h1 role="test">2022-23 NBA Stats</h1>
      <div className="container h-screen w-full flex text-foreground gap-4 justify-center">
        <Button>
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button>
          <Link to="/login">Go to Login</Link>
        </Button>
      </div>
    </div>
  );
}
