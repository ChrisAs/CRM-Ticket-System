import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login.comp";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  switch (name) {
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
    default:
      break;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Fill up all the forms!");
    }
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm
          handleOnChange={handleOnChange}
          email={email}
          password={password}
        />
      </Jumbotron>
    </div>
  );
};
