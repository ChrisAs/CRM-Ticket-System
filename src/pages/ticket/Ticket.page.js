import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const Ticket = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page={Ticket} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
