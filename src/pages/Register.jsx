import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        phone: "",
        prefix: "",
        firstname: "",
        lastname: "",
        citizenId: "",
        laserCode: "",
        role: "seller",
        company: "",
        brokerId: "",
        birthday: "",
        password: "",
        repassword: "",
        accept: false,
    });

    const [idCardImage, setIdCardImage] = useState(null);
    const [error, setError] = useState("");

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.repassword) {
            setError("รหัสผ่านไม่ตรงกัน");
            return;
        }

        if (!form.accept) {
            setError("กรุณายอมรับเงื่อนไขก่อนสมัครสมาชิก");
            return;
        }

        alert("สมัครสมาชิกสำเร็จ (Mock)");
        navigate("/");
    };

    return (
        <div className="login-page">
            <Container style={{ maxWidth: "480px" }}>
                <div className="login-card">

                    <h3 className="login-title">Professional Agent Portal</h3>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>

                        <h6 className="text-white mt-3">ข้อมูลพื้นฐาน</h6>

                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className="login-input mb-3"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />

                        <Form.Control
                            type="text"
                            placeholder="เบอร์มือถือ"
                            className="login-input mb-3"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />

                        <h6 className="text-white mt-3">ข้อมูลส่วนตัว</h6>

                        <Form.Select
                            className="login-input mb-3"
                            value={form.prefix}
                            onChange={(e) => handleChange("prefix", e.target.value)}
                        >
                            <option value="">คำนำหน้า</option>
                            <option value="นาย">นาย</option>
                            <option value="นาง">นาง</option>
                            <option value="นางสาว">นางสาว</option>
                        </Form.Select>

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="ชื่อ"
                            value={form.firstname}
                            onChange={(e) => handleChange("firstname", e.target.value)}
                        />

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="นามสกุล"
                            value={form.lastname}
                            onChange={(e) => handleChange("lastname", e.target.value)}
                        />

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="เลขบัตรประชาชน"
                            value={form.citizenId}
                            onChange={(e) => handleChange("citizenId", e.target.value)}
                        />

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="เลขหลังบัตร"
                            value={form.laserCode}
                            onChange={(e) => handleChange("laserCode", e.target.value)}
                        />

                        <h6 className="text-white mt-3">Role Selection</h6>

                        <Row className="mb-3">
                            <Col>
                                <Button
                                    variant={form.role === "seller" ? "primary" : "light"}
                                    className="w-100"
                                    onClick={() => handleChange("role", "seller")}
                                >
                                    I am a Seller / Agent
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    variant={form.role === "buyer" ? "primary" : "light"}
                                    className="w-100"
                                    onClick={() => handleChange("role", "buyer")}
                                >
                                    I am a Buyer / Renter
                                </Button>
                            </Col>
                        </Row>

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="Company Name"
                            value={form.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                        />

                        <Form.Control
                            className="login-input mb-3"
                            placeholder="Broker License Number"
                            value={form.brokerId}
                            onChange={(e) => handleChange("brokerId", e.target.value)}
                        />

                        <Form.Control
                            type="date"
                            className="login-input mb-3"
                            value={form.birthday}
                            onChange={(e) => handleChange("birthday", e.target.value)}
                        />

                        <Form.Control
                            type="password"
                            className="login-input mb-3"
                            placeholder="รหัสผ่าน"
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                        />

                        <Form.Control
                            type="password"
                            className="login-input mb-3"
                            placeholder="ยืนยันรหัสผ่าน"
                            value={form.repassword}
                            onChange={(e) => handleChange("repassword", e.target.value)}
                        />

                        <h6 className="text-white mt-3">ภาพบัตรประชาชน</h6>

                        <div
                            className="p-3 mb-4 d-flex flex-column justify-content-center align-items-center"
                            style={{
                                height: "160px",
                                background: "rgba(255,255,255,0.2)",
                                borderRadius: "12px",
                                cursor: "pointer",
                            }}
                        >
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setIdCardImage(e.target.files[0])}
                            />
                        </div>

                        <Form.Check
                            className="mb-3 text-white"
                            type="checkbox"
                            label="ฉันยอมรับเงื่อนไขและนโยบายข้อมูลส่วนบุคคล"
                            checked={form.accept}
                            onChange={(e) => handleChange("accept", e.target.checked)}
                        />

                        <Button type="submit" className="login-btn w-100">
                            Sign Up
                        </Button>

                        <div className="register-text mt-3">
                            Already have an Account?
                            <span className="register-link" onClick={() => navigate("/")}>
                                {" "}
                                Sign In
                            </span>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
}
