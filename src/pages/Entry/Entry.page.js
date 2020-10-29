import React from "react";
import { LoginForm } from "../../components/login/Login.comp";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
export const Entry = () => {
  return (
    <div className="entry-page bg-info">
      <Jumbotron>
        <LoginForm />
      </Jumbotron>
    </div>
  );
};
