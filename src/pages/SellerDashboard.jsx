import React from "react";
import { Container, Row, Col, Card, ListGroup, Button, Table, ProgressBar, Badge } from "react-bootstrap";
import { getAuth, logout } from "../services/Auth";
import { useNavigate } from "react-router-dom";

export default function SellerDashboard() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container fluid className="bg-light" style={{ minHeight: "100vh" }}>
      <Row>
        <Col md={2} className="bg-white p-3 shadow-sm" style={{ minHeight: "100vh" }}>
          <div className="text-center mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsKatrbgPOenvfgQpXWe1yhjV5EvGxLVhDg&s"
              alt="Profile"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #eee",
                marginBottom: "8px"
              }}
            />
            <h5>{auth?.name}</h5>
          </div>

          <ListGroup variant="flush">
            <ListGroup.Item action active>แดชบอร์ดของคุณ </ListGroup.Item>
            <ListGroup.Item action onClick={() => navigate("/seller/listings")}>
              ประกาศของฉัน
            </ListGroup.Item>

            <ListGroup.Item action onClick={() => navigate("/seller/profile")}>
              โปรไฟล์
            </ListGroup.Item>
          </ListGroup>

          <Button
            variant="danger"
            className="mt-4 w-100"
            onClick={handleLogout}
          >
            ออกจากระบบ
          </Button>
        </Col>

        <Col md={10}>
          <Row className="p-3">
            <Col md={3} className="text-end">
              <Button variant="link" className="me-3">
                <i className="bi bi-bell"></i>
              </Button>
              <Button variant="link">
                <i className="bi bi-gear"></i>
              </Button>
            </Col>
          </Row>

          <Card className="shadow-sm p-4 mx-3">
            <h3 className="fw-bold">แดชบอร์ดของคุณ</h3>
            <p className="text-primary fw-bold">มาเริ่มสร้างประกาศแรกของคุณกัน!</p>

            <div className="p-3 border rounded mb-4">
              <h5 className="fw-bold">เริ่มต้นกับ Asset Manager!</h5>
              <ListGroup variant="flush">
                <ListGroup.Item><input type="checkbox" checked readOnly /> สมัครสมาชิกและยืนยันอีเมล</ListGroup.Item>
                <ListGroup.Item><input type="checkbox" /> สร้างประกาศแรกของคุณ</ListGroup.Item>
                <ListGroup.Item><input type="checkbox" /> เติมข้อมูลโปรไฟล์ของคุณ</ListGroup.Item>
                <ListGroup.Item><input type="checkbox" /> ตอบกลับรีวิวแรกของคุณ</ListGroup.Item>
              </ListGroup>
            </div>

            <Row className="g-3">
              <Col md={3}>
                <Card className="rounded-4 shadow-sm border-primary">
                  <Card.Body>
                    <h6 className="text-primary">ประกาศของคุณที่กำลังใช้งานอยู่</h6>
                    <h3 className="fw-bold text-center">12</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card className="rounded-4 shadow-sm">
                  <Card.Body>
                    <h6>จำนวนการเข้าชมรวมทั้งหมด</h6>
                    <h3 className="fw-bold text-center text-success">5,428</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card className="rounded-4 shadow-sm">
                  <Card.Body>
                    <h6>รีวิวใหม่</h6>
                    <h3 className="fw-bold text-center text-warning">3</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3} className="text-center">
                <Button
                  className="w-100 btn-lg"
                  style={{ backgroundColor: "#0056ff" }}
                  onClick={() => navigate("/step-one")} 
                >
                  + ประกาศขาย
                </Button>
                <Button
                  className="w-100 btn-lg mt-3"
                  style={{ backgroundColor: "#0056ff" }}
                  onClick={() => navigate("/ads-one")}   
                >
                  + ลงโฆษณา
                </Button>
              </Col>
            </Row>
          </Card>

          <Card className="shadow-sm p-4 mx-3 mt-4">
            <h5 className="fw-bold">รายการ</h5>

            <Table hover>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>ภาพ</th>
                  <th>ชื่อประกาศ</th>
                  <th>รหัสประกาศ</th>
                  <th>ประเภท</th>
                  <th>จังหวัด</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/property/1")}
                >
                  <td>1</td>
                  <td>
                    <img
                      src="https://www.thereal-property.com/upload/own_26/post_list/6620f9ac61c6a_admin_50495.jpeg"
                      alt=""
                      className="rounded"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  </td>
                  <td style={{ color: "#0d6efd", textDecoration: "underline" }}>
                    ไลฟ์แอด รัชดา-สุทธิสาร
                  </td>
                  <td>71LST-000154</td>
                  <td>ขาย</td>
                  <td>กรุงเทพฯ</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>
                    <img
                      src="https://rightinvites.com/wp-content/uploads/%E0%B9%84%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%94%E0%B8%88%E0%B9%8C-%E0%B9%84%E0%B8%9E%E0%B8%A3%E0%B9%8C%E0%B8%A1-%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%99%E0%B8%B8%E0%B8%8A-bedroom.jpg"
                      alt=""
                      className="rounded"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  </td>
                  <td>ไนท์บริดจ์ ไพรด์ อ่อนนุช</td>
                  <td>71LST-000220</td>
                  <td>เช่า</td>
                  <td>กรุงเทพฯ</td>
                </tr>
              </tbody>

            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
