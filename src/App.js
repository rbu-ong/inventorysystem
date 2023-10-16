import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./login";
import "./App.scss";
import AuthContext from "./store/auth-context";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./dashboard";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(0);

  const onLogin = (email, password) => {
    localStorage.setItem("isLoggedIn", 1);
    setLoggedIn(1);
  };

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(0);
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setLoggedIn(1);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      {!isLoggedIn ? (
        <Login onLogin={onLogin} />
      ) : (
        <Dashboard setLoggedIn={setLoggedIn} onLogout={onLogout} />
      )}
    </AuthContext.Provider>
  );
}

export default App;
