import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Badge, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/Auth";

export default function MyListings({ propData }) {
    const [tab, setTab] = useState("draft");
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const draftListings = [
        {
            id: 1,
            title: "หมู่บ้านข้าวทาวน์โฮม",
            price: "2,500 / ด.",
            location: "บ้านบาง xxx",
            area: "20 ตร.วา 30 ตร.ม.",
            beds: 1,
            baths: 2,
            time: "ร่างเมื่อ 10 นาทีที่แล้ว",
            type: "ทาวน์โฮม",
            image:
                "https://www.baan-d.com/wp-content/uploads/2017/01/type-2-floor-1024x575.jpg"
        }
    ];

    const publishedListings = propData?.title
        ? [
              {
                  id: 1,
                  title: propData.title,
                  price: propData.salePrice,
                  location: propData.location,
                  area: propData.usableArea
                      ? `${propData.usableArea} ตร.ม.`
                      : "-",
                  floor: propData.floor,
                  beds: propData.bedrooms,
                  baths: propData.bathrooms,
                  status: "เผยแพร่แล้ว",
                  time: "เผยแพร่เมื่อ 1 นาทีที่แล้ว",
                  type: Array.isArray(propData.propertyType)
                      ? propData.propertyType.join(", ")
                      : propData.propertyType,
                  image:
                      propData.images && propData.images[0]
                          ? URL.createObjectURL(propData.images[0])
                          : "https://via.placeholder.com/400x225?text=No+Image",
              },
          ]
        : [];

    const listings = tab === "draft" ? draftListings : publishedListings;

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col md={2} className="border-end" style={{ minHeight: "100vh" }}>
                    <div className="text-center mt-3">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsKatrbgPOenvfgQpXWe1yhjV5EvGxLVhDg&s"
                            alt="profile"
                            className="rounded-circle"
                            style={{ width: "70px", height: "70px", objectFit: "cover" }}
                        />
                        <h5 className="fw-bold mt-2">Somsak</h5>
                    </div>

                    <ListGroup variant="flush" className="mt-4">
                        <ListGroup.Item action onClick={() => navigate("/seller/dashboard")}>
                            แดชบอร์ดของคุณ
                        </ListGroup.Item>

                        <ListGroup.Item action active onClick={() => navigate("/seller/listings")}>
                            ประกาศของฉัน
                        </ListGroup.Item>

                        <ListGroup.Item action onClick={() => navigate("/seller/profile")}>
                            โปรไฟล์
                        </ListGroup.Item>
                    </ListGroup>

                    <div className="mt-4 text-center">
                        <Button variant="outline-danger" onClick={handleLogout}>
                            ออกจากระบบ
                        </Button>
                    </div>
                </Col>

                <Col md={10} className="px-4">
                    <h3 className="fw-bold mb-3">ประกาศของคุณ</h3>

                    <div className="p-2 rounded" style={{ background: "#E8EEFF" }}>
                        <span className="text-primary fw-semibold">
                            !!! ประกาศแบบร่างมีอายุ 30 วันหลังจากวันสร้าง
                        </span>
                    </div>

                    <Row className="mt-3 mb-3">
                        <Col xs="auto">
                            <Button
                                variant={tab === "published" ? "primary" : "light"}
                                className="px-4 fw-semibold"
                                onClick={() => setTab("published")}
                            >
                                เผยแพร่แล้ว
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button
                                variant={tab === "draft" ? "primary" : "light"}
                                className="px-4 fw-semibold"
                                onClick={() => setTab("draft")}
                            >
                                แบบร่าง
                            </Button>
                        </Col>
                    </Row>

                    {listings.length === 0 ? (
                        <p className="text-muted">ยังไม่มีประกาศ</p>
                    ) : (
                        listings.map((item) => (
                            <Card key={item.id} className="p-3 mb-4 shadow-sm">
                                <Row>
                                    <Col md={4}>
                                        <div
                                            style={{
                                                width: "100%",
                                                aspectRatio: "16/9",
                                                overflow: "hidden",
                                                borderRadius: "10px",
                                                background: "#F5F5F5"
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </div>
                                    </Col>

                                    <Col md={8}>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <Badge bg="primary" className="me-2">{item.type}</Badge>
                                                {tab === "published"
                                                    ? <Badge bg="success">{item.status}</Badge>
                                                    : <Badge bg="secondary">แบบร่าง</Badge>}
                                            </div>

                                            <span className="fw-semibold text-primary">{item.time}</span>
                                        </div>

                                        <h5 className="fw-bold mt-2">{item.title}</h5>
                                        <div className="text-muted mb-1">📍 {item.location}</div>

                                        <div className="fw-bold text-primary fs-5">{item.price}</div>

                                        <div className="text-muted">
                                            {item.area} • {item.beds} ห้องนอน • {item.baths} ห้องน้ำ
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        ))
                    )}

                    <div className="text-center mt-4">
                        <Button variant="primary" className="px-4 py-2 fw-semibold" onClick={() => {navigate("/step-one")}}>
                            + เพิ่มประกาศ
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
