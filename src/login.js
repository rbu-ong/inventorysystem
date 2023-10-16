import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";

export default function Login(props) {
  const loginSubmitForm = (e) => {
    e.preventDefault();

    props.onLogin("22", "22");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Form
        style={{
          backgroundColor: "#fff",
          borderRadius: "2em",
          padding: "6vh 13vh",
        }}
        onSubmit={loginSubmitForm}
      >
        <Form.Group
          controlId="formBasicEmail"
          style={{
            marginBottom: "0.5em",
          }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          style={{
            marginTop: "15px",
            width: "16vh",
          }}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}
