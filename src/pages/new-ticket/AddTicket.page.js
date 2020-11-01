import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
export const AddTicket = () => {
  const [frmData, setfrmData] = useState(initialFrmDt);
  const initialFrmDt = {
    subject: "",
    issueDate: "",
    details: "",
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setfrmData({
      ...initialFrmDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.prevemtDefault();
    console.log("Form submit request received");
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            frmDt={frmData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
