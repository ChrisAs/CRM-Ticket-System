import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

export const AddTicketForm = ({
  frmDataError,
  frmDt,
  handleOnSubmit,
  handleOnChange,
}) => {
  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmDt.subject}
              minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {!frmDataError.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmDt.date}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            value={frmDt.details}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" block variant="info">
          Login
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  frmDt: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
