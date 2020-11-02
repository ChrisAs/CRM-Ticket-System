import React from "react";
import { Button, Container, Row, Col, PageBreadcrumb } from "react-bootstrap";
export const TicketLists = () => {
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
      </Row>
    </Container>
  );
};
