import React from "react";
import { Table } from "react-bootstrap";
export const TicketTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Open Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14</td>
          <td>ssl Issue</td>
          <td>client response</td>
          <td>2020-31-10</td>
        </tr>
      </tbody>
    </Table>
  );
};
