import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";

const ticket = ticket[0];
export const Ticket = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="subject">Subject is:{ticket.subject}</div>
            <div className="date">Subject is:{ticket.addedAt}</div>
            <div className="status">Subject is:{ticket.status}</div>
          </Col>
          <Col>
            <Button variant="outline-info">Close Ticket</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
