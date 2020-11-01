import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { shortText } from "../../utils/validation";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
export const AddTicket = () => {
  const [frmData, setfrmData] = useState(initialFrmDt);
  const [frmDataError, setfrmDataError] = useState(initialFrmError);
  useEffect(() => {}, [frmData, frmDataError]);
  const initialFrmDt = {
    subject: "",
    issueDate: "",
    details: "",
  };
  const initialFrmError = {
    subject: false,
    issueDate: false,
    details: false,
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setfrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.prevemtDefault();

    const isSubjectVaild = await shortText(frmData.subject);
    const isValid = await shortText(frmData.subject);
    !isValid &&
      setfrmDataError({
        ...initialFrmError,
        subject: !isSubjectVaild,
      });

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
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
