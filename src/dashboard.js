import React from "react";

import NavBar from "./components/NavBar";

export default function Dashboard(props) {
  return (
    <React.Fragment>
      <NavBar onLogout={props.onLogout} />
    </React.Fragment>
  );
}
