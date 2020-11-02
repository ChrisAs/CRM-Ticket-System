import React from "react";
import { Form, Row, Col } from "react-bootstrap";
export const SearchForm = () => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column ms="2">
            Search
          </Form.Label>
          <Col ms="9">
            <Form.Control
              name="searchStr"
              placeholder="Search ..."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
