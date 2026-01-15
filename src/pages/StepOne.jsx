import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StepOne = ({ setActiveStep,setpropData }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    type: "",
    propertyType: [],
    location: "",
  });

  useEffect(() => {
    setActiveStep(1); 
  },[setActiveStep])

 const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  const handleChangeProperty = (value) => {
    setFormData((prev) => {
      const alreadySelected = prev.propertyType.includes(value);
      const newPropertyType = alreadySelected
        ? prev.propertyType.filter((v) => v !== value)
        : [...prev.propertyType, value];
      console.log("Property Type changed to: ", newPropertyType); 
      return { ...prev, propertyType: newPropertyType };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { role, type, propertyType, location } = formData;
    if (!role || !type || propertyType.length === 0 || !location) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }
    setpropData({...formData});
    setActiveStep(2);
    navigate("/step-two");
  };

  return (<div className="m-auto" style={{width:"50%"}}>
    <Container className="py-">
      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">
              <i className="bi bi-person"></i> สถานะผู้ประกาศ{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Row className="g-2 mt-1">
              {["เจ้าของ (Owner)", "นายหน้า (Agent)"].map((label, idx) => (
                <Col xs={12} md={6} key={idx}>
                  <Button
                    variant={
                      formData.role === label ? "primary" : "outline-secondary"
                    }
                    className="w-100 rounded-pill"
                    onClick={() => handleChange("role", label)}
                  >
                    {label}
                  </Button>
                </Col>
              ))}
            </Row>
          </Form.Group>


          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">
              <i className="bi bi-tag"></i> ประเภทประกาศ{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Row className="g-2 mt-1">
              {["ขาย", "เช่า", "ขายและเช่า", "เซ้ง", "ขายดาวน์"].map(
                (label, idx) => (
                  <Col xs={12} md={4} key={idx}>
                    <Button
                      variant={
                        formData.type === label
                          ? "primary"
                          : "outline-secondary"
                      }
                      className="w-100 rounded-pill"
                      onClick={() => handleChange("type", label)}
                    >
                      {label}
                    </Button>
                  </Col>
                )
              )}
            </Row>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">
              ประเภทอสังหาฯ <span className="text-danger">*</span>
            </Form.Label>
            <p className="text-secondary">ที่อยู่อาศัย</p>
            <Row className="g-2">
              {[
                "คอนโด",
                "อพาร์ทเมนต์",
                "บ้านเดี่ยว",
                "บ้านแฝด",
                "ทาวน์โฮม",
                "ที่ดิน",
              ].map((label, idx) => (
                <Col xs={12} md={4} key={idx}>
                  <Button
                    variant={
                      formData.propertyType.includes(label)
                        ? "primary"
                        : "outline-secondary"
                    }
                    className="w-100 rounded-pill"
                    onClick={() => handleChangeProperty(label)}
                  >
                    {label}
                  </Button>
                </Col>
              ))}
            </Row>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold"></Form.Label>
            <p className="text-secondary">เชิงพาณิชย์</p>
            <Row className="g-2">
              {["Co-working space", "ร้านค้า/ตลาด", "โชว์รูม", "สำนักงาน"].map(
                (label, idx) => (
                  <Col xs={12} md={4} key={idx}>
                    <Button
                      variant={
                        formData.propertyType.includes(label)
                          ? "primary"
                          : "outline-secondary"
                      }
                      className="w-100 rounded-pill"
                      onClick={() => handleChangeProperty(label)}
                    >
                      {label}
                    </Button>
                  </Col>
                )
              )}
            </Row>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">
              <i className="bi bi-geo-alt"></i> ทำเล{" "}
              <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            >
              <option value="">เลือกทำเล</option>
              <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
              <option value="เชียงใหม่">เชียงใหม่</option>
              <option value="ภูเก็ต">ภูเก็ต</option>
            </Form.Select>
          </Form.Group>

          <div className="text-end">
            <Button type="submit" variant="primary" className="px-4" style={{width:"130px"}}>
              ถัดไป
            </Button>
          </div>
        </Form>
      </Card>
    </Container></div>
  );
};

export default StepOne;
