import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

const StepFour = ({ setActiveStep,setpropData }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSaveDraftModal, setShowSaveDraftModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [formData, setFormData] = useState({
    salePrice: "",
    rentPrice: "",
    acceptCreditCard: false,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.salePrice && !formData.rentPrice) {
      alert("กรุณากรอกราคา");
      return;
    }
     setpropData((prevData) => ({
      ...prevData,
      ...formData, 
    }));

    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = (redirect) => {
    setShowSuccessModal(false);
    setActiveStep(null);
    if (redirect) {
      navigate("/seller/listings");
    }
  };

  useEffect(() => {
    setActiveStep(4); 
  }, [setActiveStep]);

  const handleBack = () => {
    navigate("/step-three");
  };

  const handleSaveDraft = () => {
    setShowSaveDraftModal(true);
  };

  const handleCloseSaveDraftModal = (redirect) => {
    setShowSaveDraftModal(false);
    if (redirect) {
      navigate("/seller/listings"); 
    }
  };

  return (
    <Container className="py-4" style={{ width: "60%" }}>
      <Card className="p-4 shadow-sm border-0">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">ตั้งราคาโปรโมชัน</Form.Label>

            <Form.Label className="d-block">ราคาขาย</Form.Label>
            <Form.Control
              type="number"
              value={formData.salePrice}
              onChange={(e) => handleChange("salePrice", e.target.value)}
              placeholder="กรอกราคาขาย"
            />

            <Form.Label className="d-block mt-3">ราค่าเช่า</Form.Label>
            <Form.Control
              type="number"
              value={formData.rentPrice}
              onChange={(e) => handleChange("rentPrice", e.target.value)}
              placeholder="กรอกราค่าเช่า"
            />
          </Form.Group>

          <Form.Group className="mb-4 d-flex justify-content-between">
            <Form.Label className="fw-bold">รับบัตรเครดิต</Form.Label>
            <Form.Check
              type="switch"
              id="creditCardSwitch"
              label=""
              checked={formData.acceptCreditCard}
              onChange={(e) =>
                handleChange("acceptCreditCard", e.target.checked)
              }
              className="mb-3 fs-4"
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button
              type="button"
              variant="secondary"
              className="px-4"
              onClick={handleBack}
            >
              ย้อนกลับ
            </Button>
            <div className="text-end d-flex gap-1">
              <Button
                variant="outline-primary"
                className="px-4"
                onClick={handleSaveDraft}
                style={{ width: "150px" }}
              >
                บันทึกแบบร่าง
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="px-4"
                style={{ width: "150px" }}
              >
                ประกาศ
              </Button>
            </div>
          </div>
        </Form>
      </Card>

      <Modal
        show={showSaveDraftModal}
        onHide={() => setShowSaveDraftModal(false)}
        centered
      >
        <Modal.Header>
          <Modal.Title className="m-auto fw-bolder">
            บันทึกแบบร่างสำเร็จ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            ประกาศของคุณจะถูกเก็บไว้ในระบบ 30 วัน
          </div>
          <div className="text-center">คุณสามารถกลับมาแก้ไขได้ทุกเมื่อ</div>
          <div className="d-flex justify-content-center gap-1">
            <div>คุณต้องการกลับไปยังหน้า </div>
            <div className="fw-bolder">ประกาศของฉัน </div>
            <div>ไหม ?</div>
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="outline-secondary"
            onClick={() => handleCloseSaveDraftModal(false)}
          >
            ภายหลัง
          </Button>
          <Button
            variant="primary"
            onClick={() => handleCloseSaveDraftModal(true)}
          >
            ดำเนินการต่อ
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header>
          <Modal.Title className="m-auto fw-bolder">ประกาศสำเร็จ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            ประกาศของคุณจะถูกเก็บไว้ในระบบ 30 วัน
          </div>
          <div className="text-center">คุณสามารถกลับมาแก้ไขได้ทุกเมื่อ</div>
          <div className="d-flex justify-content-center gap-1">
            <div>คุณต้องการกลับไปยังหน้า </div>
            <div className="fw-bolder">ประกาศของฉัน </div>
            <div>ไหม ?</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="m-auto">
          <Button
            variant="primary"
            onClick={() => handleCloseSuccessModal(true)}
            style={{ width: "450px" }}
          >
            ตกลง
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default StepFour;