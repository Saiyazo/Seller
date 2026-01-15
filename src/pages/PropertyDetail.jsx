import React from "react";
import { useNavigate } from "react-router-dom";
import AppFooter from "../components/AppFooter";

const PropertyDetail = () => {
  const navigate = useNavigate();

  const mainImage =
    "https://www.thereal-property.com/upload/own_26/post_list/6620f9ac61c6a_admin_50495.jpeg";

  const img2 =
    "https://bcdn.propertyhub.in.th/pictures/202503/20250319/2apfTHGGsjxw3FHDeqHu/be7210af.jpg";
  const img3 =
    "https://img.hipcdn.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiI4ZWMyODA3MC1kMDE0LTRmZjUtODU4OS1lODU5YzA3MDZiNzcvOGVjMjgwNzAtZDAxNC00ZmY1LTg1ODktZTg1OWMwNzA2Yjc3X2ZiOGFmNDkzLWI5NTEtNGYwYS1hNDY0LTA1ZTBiODIyNmU5NS5qcGciLCJicmFuZCI6ImhpcGZsYXQiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjMzMCwiZml0IjoiY292ZXIifX19";

  return (
    <>
      <div className="container mt-3 mb-5" style={{ maxWidth: "1120px" }}>

        <button
          className="btn btn-link fw-bold text-decoration-none mb-3"
          onClick={() => navigate(-1)}
        >
          ← BACK
        </button>

        <div className="row g-3">
          <div className="col-md-8">
            <img
              src={mainImage}
              alt="property"
              className="w-100 rounded"
              style={{
                height: "350px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <img
              src={img2}
              alt=""
              className="w-100 rounded"
              style={{ height: "170px", objectFit: "cover", borderRadius: "12px" }}
            />
            <img
              src={img3}
              alt=""
              className="w-100 rounded"
              style={{ height: "170px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>

        <div className="row mt-4 align-items-start">
          <div className="col-md-8">
            <h4 className="fw-bold">ไลฟ์ แอด รัชดา - สุทธิสาร</h4>

            <div className="d-flex flex-wrap gap-2 mt-2">
              <span className="badge rounded-pill bg-light text-dark">
                <i className="bi bi-building me-1"></i> Condo
              </span>
              <span className="badge rounded-pill bg-light text-dark">
                <i className="bi bi-door-closed me-1"></i> 1 ห้องนอน
              </span>
              <span className="badge rounded-pill bg-light text-dark">
                <i className="bi bi-droplet me-1"></i> 1 ห้องน้ำ
              </span>
              <span className="badge rounded-pill bg-light text-dark">
                <i className="bi bi-fullscreen me-1"></i> 62.03 ตร.ม.
              </span>
            </div>
          </div>

          <div className="col-md-4 text-end">
            <h4 className="fw-bold text-primary">฿ 3,750,000</h4>

            <div
              className="p-2 d-inline-flex align-items-center mt-2"
              style={{
                borderRadius: "30px",
                border: "1px solid #e5e5e5",
                paddingRight: "12px",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsKatrbgPOenvfgQpXWe1yhjV5EvGxLVhDg&s"
                alt="agent"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="ms-2 text-start">
                <div className="fw-bold" style={{ fontSize: "14px" }}>
                  Ms.Srisamorn Sornsamer
                </div>
                <div className="text-primary" style={{ fontSize: "12px" }}>
                  ✔ Verified Agent ⭐ 4.7
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">สถานที่ใกล้เคียงอื่น ๆ</h5>

            <div className="d-flex flex-column gap-2">
              <div><i className="bi bi-train-front me-2 text-primary"></i> MRT ลาดพร้าว — 0.5 กม.</div>
              <div><i className="bi bi-train-front me-2 text-primary"></i> MRT รัชดาภิเษก — 0.6 กม.</div>
              <div><i className="bi bi-train-front me-2 text-warning"></i> MRT ลาดพร้าว (สีเหลือง) — 0.6 กม.</div>
              <div><i className="bi bi-signpost-2 me-2 text-secondary"></i> MRT ภาวนา — 0.8 กม.</div>
              <div><i className="bi bi-shop me-2 text-secondary"></i> ยูเนี่ยน มอลล์ — 1.7 กม.</div>
              <div><i className="bi bi-geo-alt me-2 text-secondary"></i> เทสโก้ โลตัส ลาดพร้าว — 2.0 กม.</div>
            </div>
          </div>

          <div className="col-md-6">
            <h5 className="fw-bold mb-3">รายละเอียด</h5>
            <div className="text-secondary">
              - อาคาร A <br />
              - พื้นที่ 62.03 ตร.ม. <br />
              - ชั้น 4 <br />
              - 2 ห้องนอน , 2 ห้องน้ำ <br />
              ราคา 3.95 ล้าน!! * (ค่าโอน 50/50) <br />
              📍 ละออบาย / น้อมบุญ <br /><br />
              ✨ Ratchada property "ดูแลทุกการซื้อขาย โดยทีมงานมืออาชีพ เพื่อบ้านที่คุณวางใจ" <br />
              ✨ บ้านที่นี้ มีขนาดกว้างเข้าใจ บริการซื้อขาย นับได้ทุกดีลอสังหาฯ <br />
              ❤️ เพราะเราไม่ได้มองแค่เป็น "บ้านหลังหนึ่ง" แต่เรามองเห็น "จุดเริ่มต้นของชีวิตใหม่" <br /><br />
              เดินทางสะดวกสบาย ใกล้ชิด 4 สถานีรถไฟฟ้า <br />
              มีสถานที่ตั้งโครงการที่อยู่ที่ ลาดพร้าว 36 แขวงจันทร์เกษม เขตจตุจักร กรุงเทพมหานคร 10900 <br /><br />
              จำนวนอาคารในโครงการมีทั้งหมด 2 อาคาร มีด้วยกันอายุ 16 ชั้น มีจำนวนห้องพักอาศัยรวม 276 ยูนิต สร้างเสร็จปี 2010
            </div>
          </div>
        </div>

        <div className="text-center mt-4 mb-5">
          <button
            className="btn"
            style={{
              backgroundColor: "#003CFF",
              color: "white",
              padding: "10px 20px",
              width: "100%",
              maxWidth: "420px",
              borderRadius: "10px",
            }}
          >
            <i className="bi bi-geo-alt-fill me-2"></i>
            ดูแผนที่
          </button>
        </div>
      </div>

    </>
  );
};

export default PropertyDetail;
