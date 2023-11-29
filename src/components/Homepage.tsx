import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { columns } from './Columns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { DataTable } from './data-table';
import { DataType } from 'lib/types';
import { formatPlayerData } from 'lib/utils';

type ErrorResponse = {
  error: string;
};

export default function Homepage() {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/nba');
        if (!res.ok) {
          const errorData: ErrorResponse = await res.json();
          console.error('Error fetching data:', errorData.error);
        } else {
          const data: DataType = await res.json();
          setData(data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const formattedPlayerData = formatPlayerData(data?.resultSet.rowSet);

  return (
    <div className="flex flex-col p-10 items-center justify-center">
      <h1 role='test'>2022-23 NBA Stats</h1>
      {/* <div className="mt-5">
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </div> */}
      <div className="container h-screen w-full text-foreground gap-4 justify-center">
        {formattedPlayerData && (
          <DataTable columns={columns} data={formattedPlayerData}></DataTable>
        )}
      </div>
    </div>
  );
}