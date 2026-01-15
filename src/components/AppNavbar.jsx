import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../services/Auth";

export default function AppNavbar() {
  const navigate = useNavigate();
  const auth = getAuth();

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm border-bottom"
      style={{
        height: "70px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
        style={{ padding: 0 }}
      >
        <div
          role="button"
          onClick={() => navigate("/seller/dashboard")}
          className="d-flex align-items-center"
          style={{ gap: "10px", cursor: "pointer" }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1259033829314920469/1442804479744413696/data_.png?ex=6928be21&is=69276ca1&hm=8517b8c6b75b77db63799e7781dfc0821c3f905ee232515b9185f5f30f27bf27&"
            alt="Logo"
            style={{
              height: "70px",     
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        <Button
          style={{
            backgroundColor: "#0056ff",
            borderRadius: "20px",
            padding: "6px 20px",
            fontWeight: "600",
            border: "none",
            fontSize: "14px",
          }}
        >
          แชต
        </Button>
      </Container>
    </Navbar>
  );
}
