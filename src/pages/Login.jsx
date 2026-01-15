import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { loginMock, saveAuth } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";   

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await loginMock(email.trim(), password);
      saveAuth(user);

      if (user.role === "buyer") navigate("/buyer/home");
      else if (user.role === "seller") navigate("/seller/dashboard");
      else navigate("/admin/manage");

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <Container style={{ maxWidth: "450px" }}>
        <div className="login-card">

          <h3 className="login-title">LOGIN</h3>

          {error && (
            <Alert variant="danger" className="py-2">
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label className="login-label">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="login-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="login-label">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="login-input"
              />
            </Form.Group>

            <Row className="mb-4 align-items-center login-options">
              <Col xs={6}>
                <Form.Check type="checkbox" label="Remember Me" />
              </Col>
              <Col xs={6} className="text-end">
                Forgot Password?
              </Col>
            </Row>

            <Button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "กำลังเข้าสู่ระบบ..." : "Login"}
            </Button>

            <div className="register-text">
              Don’t have an Account?{" "}
              <span
                className="register-link"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}
