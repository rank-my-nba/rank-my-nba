import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/nba');
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full text-foreground flex items-center justify-center">
      {JSON.stringify(data)}
    </div>
  );
}
