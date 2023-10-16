import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./login";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(0);

  const onLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", 1);
    setLoggedIn(1);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setLoggedIn(1);
    }
  }, []);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={onLogin} />
      ) : (
        <Dashboard setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
