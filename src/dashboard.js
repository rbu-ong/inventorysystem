import React from "react";
import { Button } from "react-bootstrap";

import Menu from "./components/menu";

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <Menu />
      <Button
        onClick={() => {
          localStorage.setItem("isLoggedIn", 0);
          props.setLoggedIn(0);
        }}
      >
        Logout
      </Button>
    </React.Fragment>
  );
}
