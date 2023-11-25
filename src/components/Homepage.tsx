import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="h-screen w-full text-foreground flex items-center justify-center">
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
