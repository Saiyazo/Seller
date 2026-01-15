import React from "react";
import { Container, Card } from "react-bootstrap";
import { getAuth } from "../services/Auth";

export default function BuyerHome() {
  const auth = getAuth();
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-sm">
        <h2>หน้าผู้ซื้อ 🛒</h2>
        <p className="text-muted">ยินดีต้อนรับ, {auth?.name}</p>
      </Card>
    </Container>
  );
}
