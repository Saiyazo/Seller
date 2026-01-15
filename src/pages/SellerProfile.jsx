import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { getAuth } from "../services/Auth";
import { useNavigate } from "react-router-dom";

export default function SellerProfile() {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <Container className="bg-white p-0" style={{ minHeight: "100vh" }}>

      <Button
        variant="link"
        className="text-primary fw-bold mt-3 ms-3"
        onClick={() => navigate("/seller/dashboard")}
        style={{ textDecoration: "none" }}
      >
        ← BACK
      </Button>

      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img
          src="https://t4.ftcdn.net/jpg/02/13/50/63/240_F_213506390_ky1IPtZpVdkvfcwiJHwAOOGQhReRPls0.jpg"
          alt="cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="text-center mt-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsKatrbgPOenvfgQpXWe1yhjV5EvGxLVhDg&s"
          alt="Profile"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid white",
            marginTop: "-60px",
          }}
        />
        <h5 className="fw-bold mt-2">
          {auth?.name || "Seller User"}
        </h5>
      </div>

      <Card className="border-0 mt-4">
        <ListGroup variant="flush">
          <ListGroup.Item action>แก้ไขข้อมูลส่วนตัว</ListGroup.Item>
          <ListGroup.Item action>เปลี่ยนรหัสผ่าน</ListGroup.Item>
          <ListGroup.Item action>ข้อมูลบัญชีธนาคาร</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}