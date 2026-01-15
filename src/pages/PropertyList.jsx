import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import properties from "../data/properties";
import { useNavigate } from "react-router-dom";

export default function PropertyList() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <h3 className="fw-bold mb-3">รายการอสังหาฯทั้งหมด 🏠</h3>

      <Row>
        {properties.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={item.image} />

              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>

                <Badge bg="primary" className="me-1">
                  {item.type}
                </Badge>
                <Badge bg={item.listingType === "ขาย" ? "success" : "warning"}>
                  {item.listingType}
                </Badge>

                <p className="mt-2 text-danger fw-bold">
                  ฿ {item.price.toLocaleString()}
                </p>
                <p className="text-muted small">
                  {item.district}, {item.province}
                </p>

                <Button
                  variant="outline-primary"
                  size="sm"
                  className="w-100 mt-2"
                  onClick={() => navigate(`/property/${item.id}`)}
                >
                  ดูรายละเอียด
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
