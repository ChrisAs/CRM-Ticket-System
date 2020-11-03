import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column ms="2">
            Search{" "}
          </Form.Label>
          <Col ms="10">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search ..."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
