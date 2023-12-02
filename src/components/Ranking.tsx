import React from 'react';

import Row from './Row';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';
import { SavedRanking } from 'lib/types';

const Ranking: React.FC<{ info: SavedRanking; name: string }> = ({ info, name }) => {
  const idk = info.map((elem: any) => {
    return <Row rowInfo={elem} />;
  });

  const tableHead = info[0].map((header: string) => {
    return <TableHead key={header}>{header}</TableHead>;
  });

  const tableRow = info.slice(1).map((player, index) => {
    const tableCell = player.map((cell, index) => {
      return <TableCell key={`${cell} + ${index}`}>{cell}</TableCell>;
    });
    return <TableRow key={`${player} + ${index}`}>{tableCell}</TableRow>;
  });

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>{tableHead}</TableRow>
        </TableHeader>
        <TableBody>{tableRow}</TableBody>
      </Table>
    </div>
  );
};

export default Ranking;
