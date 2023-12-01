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

const Ranking: React.FC<{ info: any; name: any }> = ({ info, name }) => {
  console.log('info', info);
  const idk = info.map((elem: any) => {
    return <Row rowInfo={elem} />;
  });

  const tableHead = info[0].map((elem: any) => {
    return <TableHead>{elem}</TableHead>;
  });

  const tableRow = info.slice(1).map((elem: any) => {
    const tableCell = elem.map((cell: any) => {
      return <TableCell>{cell}</TableCell>;
    });
    return <TableRow>{tableCell}</TableRow>;
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
