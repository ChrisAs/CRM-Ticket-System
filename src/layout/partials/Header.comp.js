import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer>
            <Nav.Link to="/dashboard">Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer>
            <Nav.Link to="/tickets">Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer>
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
