import React from "react";
import { Table } from "react-bootstrap";
export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Open Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length &&
          tickets.map((row) => (
            <tr>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
