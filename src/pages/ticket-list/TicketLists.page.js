import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, PageBreadcrumb } from "react-bootstrap";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
export const TicketLists = () => {
  const [str, setStr] = useState("");
  useEffect(() => {}, [str]);

  const handleOnChange = (e) => {
    setStr(e.target.value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add new Ticket</Button>
        </Col>
        <Col className="text-right">Search Form</Col>
        <SearchForm handleOnChange={handleOnChange} str={str} />
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
