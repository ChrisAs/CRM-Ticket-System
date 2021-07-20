import React, { useState } from "react";

import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import styled from "styled-components";
import { Button } from "@material-ui/core";

/** Login Page blablas more info about what this does */
export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");

  const { formSwitcher, handleOnResetSubmit } = getHandlers(setFrmLoad);

  return (
    <EntryStyles className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {frmLoad === "rest" && (
          <ResetPassword
            // handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            // email={email}
          />
        )}
        <Button variant="contained">Click me!</Button>
      </Jumbotron>
    </EntryStyles>
  );
};

const EntryStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    box-shadow: 0px 0px 15px -5px black;
  }
`;

function getHandlers(setFrmLoad) {
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return { formSwitcher, handleOnResetSubmit };
}
