import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function AppFooter() {
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const handleShowPrivacy = () => setShowPrivacy(true);

    return (
        <>
            <style>{`
                .text-blue-theme { color: #003CFF !important; }
                .btn-blue-theme { background-color: #003CFF !important; color: white; border: none; font-weight: 500; }
                .btn-blue-theme:hover { background-color: #002ab3 !important; }

                body { font-family: 'Prompt', sans-serif; background-color: #f0f2f5; min-height: 100vh; }

                .text-theme { color: #212529 !important; }
                .bg-theme { background-color: #212529 !important; color: white; }

                .btn-theme { background-color: #212529; color: white; border: none; font-weight: 500; }
                .btn-theme:hover { background-color: #333; color: white; }

                .footer-link { text-decoration: none; color: #6c757d; font-weight: 500; font-size: 0.95rem; transition: 0.2s; }
                .footer-link:hover { color: #003CFF; }

                .contact-pill {
                    background-color: transparent;
                    border: none;
                    padding: 0;
                    font-size: 0.9rem;
                    color: #6c757d;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }
                .contact-pill i { color: #003CFF !important; }

                .modal-title { font-weight: 600; font-size: 1.25rem; }

                .text-danger-custom { color: #dc3545; font-size: 0.9em; font-weight: 500; }
            `}</style>

            <footer className="bg-light border-top py-4 mt-auto">
                <div className="container text-center">

                    <div className="d-flex justify-content-center flex-wrap gap-4 mb-3">
                        <Link to="/" className="footer-link">หน้าหลัก</Link>

                        <a href="#" className="footer-link"
                            onClick={(e) => { e.preventDefault(); setShowAbout(true); }}>
                            เกี่ยวกับเรา
                        </a>

                        <a href="#" className="footer-link"
                            onClick={(e) => { e.preventDefault(); setShowContact(true); }}>
                            ติดต่อเรา
                        </a>

                        <a href="#" className="footer-link"
                            onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>
                            นโยบายความเป็นส่วนตัว
                        </a>
                    </div>

                    <div className="mb-3 text-secondary small">
                        <i className="bi bi-geo-alt-fill text-blue-theme fs-6 me-1"></i>
                        <span>เลขที่ 123 อาคาร A ชั้น 9 ถนนพระราม 10 แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพมหานคร 10120</span>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <div className="contact-pill">
                            <i className="bi bi-telephone-fill"></i> 02-999-1234
                        </div>
                        <div className="contact-pill">
                            <i className="bi bi-telephone-fill"></i> (Sales) 02-999-4321
                        </div>
                        <div className="contact-pill">
                            <i className="bi bi-envelope-fill"></i> contact@likeban.com
                        </div>
                    </div>

                    <p className="mt-3 mb-0 text-muted small">&copy; 2025 Likeban. All rights reserved.</p>
                </div>
            </footer>

            <Modal show={showAbout} onHide={() => setShowAbout(false)} size="lg" centered>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="text-blue-theme fw-bold">เกี่ยวกับเรา</Modal.Title>
                </Modal.Header>

                <Modal.Body className="pt-0">
                    <img src="https://placehold.co/800x360/003CFF/ffffff?text=Likeban+About+Us"
                        className="w-100 rounded mb-3"
                        alt="Likeban About Us Banner" />

                    <h4 className="text-blue-theme">Likeban: เพื่อนคู่คิดเรื่องบ้าน</h4>

                    <p className="text-muted">
                        เราคือแพลตฟอร์มสื่อกลางที่มุ่งมั่นพัฒนาระบบการซื้อ-ขายและเช่าอสังหาริมทรัพย์ให้เป็นเรื่องง่าย สะดวก และปลอดภัยสำหรับทุกคน โดยเชื่อมโยงผู้ซื้อ ผู้เช่า และผู้ขายเข้าด้วยกันอย่างมีประสิทธิภาพ
                    </p>

                    <div className="row text-center mt-4 border-top pt-3">
                        <div className="col-4">
                            <i className="bi bi-search display-6 text-blue-theme mb-2 d-block"></i>
                            <h6 className="fw-bold text-blue-theme">ค้นหาง่าย ตรงใจ</h6>
                            <small className="text-muted">ระบบกรองข้อมูลละเอียด ค้นหาด่วน</small>
                        </div>
                        <div className="col-4">
                            <i className="bi bi-list-check display-6 text-blue-theme mb-2 d-block"></i>
                            <h6 className="fw-bold text-blue-theme">จัดการประกาศง่าย</h6>
                            <small className="text-muted">สำหรับผู้ขายและนายหน้า</small>
                        </div>
                        <div className="col-4">
                            <i className="bi bi-shield-check display-6 text-blue-theme mb-2 d-block"></i>
                            <h6 className="fw-bold text-blue-theme">ปลอดภัย โปร่งใส</h6>
                            <small className="text-muted">ข้อมูลตรวจสอบได้</small>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showContact} onHide={() => setShowContact(false)} size="lg" centered>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="text-blue-theme fw-bold">ติดต่อเรา</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="row g-4">
                        <div className="col-md-5">

                            <h4 className="text-blue-theme">บริษัท ไลค์บ้าน จำกัด</h4>
                            <p className="text-muted small">Likeban Co., Ltd.</p>
                            <hr />

                            <div className="mb-3">
                                <strong className="text-blue-theme d-block mb-1">
                                    <i className="bi bi-geo-alt-fill"></i> ที่อยู่สำนักงาน
                                </strong>
                                <span className="small text-secondary">
                                    เลขที่ 123 อาคาร A ชั้น 9 ถนนพระราม 10<br />
                                    แขวงทุ่งมหาเมฆ เขตสาทร<br />
                                    กรุงเทพมหานคร 10120
                                </span>
                            </div>

                            <div className="mb-3">
                                <strong className="text-blue-theme d-block mb-1">
                                    <i className="bi bi-clock-fill"></i> เวลาทำการ
                                </strong>
                                <span className="small text-secondary">จันทร์ - ศุกร์ : 09.00 - 18.00 น.</span>
                            </div>

                            <div>
                                <strong className="text-blue-theme d-block mb-1">
                                    <i className="bi bi-envelope-fill"></i> ช่องทางออนไลน์
                                </strong>
                                <span className="small text-secondary">
                                    Email: contact@likeban.com<br />Line Official: @likeban
                                </span>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <h5>ส่งข้อความถึงเรา</h5>

                            <ContactForm handleClose={setShowContact} handleShowPrivacy={handleShowPrivacy} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showPrivacy} onHide={() => setShowPrivacy(false)} size="lg" scrollable>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title className="text-blue-theme fw-bold">นโยบายความเป็นส่วนตัว</Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-secondary lh-lg">

                    <span className="d-block mb-3 small text-muted">แก้ไขล่าสุด: 24 พฤศจิกายน 2568</span>

                    <p>บริษัท ไลค์บ้าน จำกัด ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของท่าน เพื่อให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) เราจึงจัดทำนโยบายฉบับนี้ขึ้นเพื่อแจ้งให้ท่านทราบถึงรายละเอียดการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลของท่าน</p>

                    <h6 className="text-blue-theme fw-bold mt-4">1. ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม</h6>
                    <p>เราเก็บรวบรวมข้อมูลเท่าที่จำเป็นต่อการให้บริการซื้อ-ขาย-เช่าอสังหาริมทรัพย์ และการบริหารจัดการบัญชีผู้ใช้ ได้แก่:</p>
                    <ul>
                        <li><strong>ข้อมูลระบุตัวตน:</strong> ชื่อ, นามสกุล, รูปภาพโปรไฟล์</li>
                        <li><strong>ข้อมูลการติดต่อ:</strong> เบอร์โทรศัพท์, อีเมล, ID Line, ที่อยู่</li>
                        <li><strong className="text-blue-theme">ข้อมูลการลงประกาศ:</strong> รายละเอียดทรัพย์สิน, รูปภาพโฉนด (เพื่อการตรวจสอบสิทธิ์), พิกัดที่ตั้ง</li>
                        <li><strong>ข้อมูลทางเทคนิค:</strong> IP Address, ข้อมูลการใช้งานเว็บไซต์ (Log Files), คุกกี้ (Cookies)</li>
                    </ul>

                    <h6 className="text-blue-theme fw-bold mt-4">2. วัตถุประสงค์การเก็บรวบรวมและใช้ข้อมูล</h6>
                    <p>เราใช้ข้อมูลของท่านเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                    <ul>
                        <li>เพื่อยืนยันตัวตนในการสมัครสมาชิก (User Authentication) และรักษาความปลอดภัยของบัญชี</li>
                        <li>เพื่อให้ผู้ซื้อ/ผู้เช่า สามารถติดต่อสื่อสารกับผู้ลงประกาศได้โดยตรง</li>
                        <li>เพื่อตรวจสอบความถูกต้องของประกาศและป้องกันการฉ้อโกง</li>
                        <li>เพื่อดำเนินการจัดการเรื่องร้องเรียนและการรีวิวผู้ใช้งาน</li>
                        <li>เพื่อดำเนินการชำระค่าบริการพื้นที่โฆษณา (Banner) (ถ้ามี)</li>
                        <li>เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพของเว็บไซต์ให้ตอบสนองความต้องการของผู้ใช้</li>
                    </ul>

                    <h6 className="text-blue-theme fw-bold mt-4">3. การเปิดเผยข้อมูลส่วนบุคคล</h6>
                    <p>เราจะไม่เปิดเผยข้อมูลของท่านแก่บุคคลภายนอก เว้นแต่ในกรณีดังต่อไปนี้:</p>
                    <ul>
                        <li>เปิดเผยข้อมูลการติดต่อ (เบอร์โทร, Line) บนหน้าประกาศอสังหาฯ ตามความประสงค์ของท่านเพื่อให้ผู้สนใจติดต่อได้</li>
                        <li>เป็นการปฏิบัติตามกฎหมาย หรือตามคำสั่งของหน่วยงานรัฐที่มีอำนาจ</li>
                    </ul>

                    <h6 className="text-blue-theme fw-bold mt-4">4. สิทธิของเจ้าของข้อมูลส่วนบุคคล</h6>
                    <p>ท่านมีสิทธิตามกฎหมายในการดำเนินการดังนี้:</p>
                    <ul>
                        <li>ขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของท่าน</li>
                        <li>ขอแก้ไขข้อมูลให้ถูกต้อง เป็นปัจจุบัน</li>
                        <li>ขอให้ลบ หรือทำลายข้อมูล (เมื่อหมดความจำเป็นหรือท่านถอนความยินยอม)</li>
                        <li>ขอระงับการใช้ข้อมูล หรือคัดค้านการประมวลผลข้อมูล</li>
                    </ul>

                    <h6 className="text-blue-theme fw-bold mt-4">5. นโยบายคุกกี้ (Cookies)</h6>
                    <p>เว็บไซต์ของเราใช้คุกกี้เพื่อจดจำการตั้งค่าและการเข้าสู่ระบบของท่าน ท่านสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้ได้ แต่อาจส่งผลให้การใช้งานบางฟีเจอร์ของเว็บไซต์ไม่สมบูรณ์</p>

                    <h6 className="text-blue-theme fw-bold mt-4">6. ช่องทางการติดต่อ</h6>
                    <p>หากท่านมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว หรือต้องการใช้สิทธิเกี่ยวกับข้อมูลของท่าน สามารถติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ได้ที่:</p>
                    <div className="bg-light p-3 rounded">
                        <strong className="text-blue-theme">บริษัท ไลค์บ้าน จำกัด</strong>
                        <p className='small mb-0'>อีเมล: dpo@likeban.com<br />โทรศัพท์: 02-999-1234</p>
                    </div>
                    <br />

                </Modal.Body>
            </Modal>
        </>
    );
}

function ContactForm({ handleClose, handleShowPrivacy }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <form onSubmit={(e) => { e.preventDefault(); alert("ส่งข้อความเรียบร้อย!"); handleClose(false); }}>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="ชื่อ - นามสกุล" required />
            </div>

            <div className="mb-3">
                <input type="tel" className="form-control" placeholder="เบอร์โทรศัพท์" required />
            </div>

            <div className="mb-3">
                <select className="form-select text-secondary">
                    <option>สอบถามการใช้งานทั่วไป</option>
                    <option>แจ้งปัญหาการใช้งาน / ร้องเรียน</option>
                    <option>สนใจลงโฆษณา (Banner)</option>
                    <option>อื่นๆ</option>
                </select>
            </div>

            <div className="mb-3">
                <textarea className="form-control" rows="3" placeholder="รายละเอียด..." required></textarea>
            </div>

            <div className="mb-3 form-check small">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkConsent"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />

                <label className="form-check-label text-secondary" htmlFor="checkConsent">
                    ข้าพเจ้ายอมรับ{" "}
                    <a href="#" className="text-blue-theme"
                        onClick={(e) => { e.preventDefault(); handleClose(false); handleShowPrivacy(); }}>
                        นโยบายความเป็นส่วนตัว
                    </a>

                    {!isChecked && (
                        <span className="text-danger-custom ms-2">*ต้องยอมรับเงื่อนไข</span>
                    )}
                </label>
            </div>

            <button
                type="submit"
                className="btn btn-blue-theme w-100 py-2"
                disabled={!isChecked}
            >
                ส่งข้อความ
            </button>
        </form>
    );
}
