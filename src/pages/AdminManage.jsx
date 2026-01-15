import React from "react";
import { Container, Card } from "react-bootstrap";
import { getAuth } from "../services/Auth";

export default function AdminManage() {
  const auth = getAuth();
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2>หน้าจัดการระบบ (Admin) 🛠️</h2>
        <p className="text-muted">สวัสดี, {auth?.name}</p>
      </Card>
    </Container>
  );
}
