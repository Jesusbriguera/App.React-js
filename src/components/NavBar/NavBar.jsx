import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import {FaCandyCane} from 'react-icons/fa'

function BasicExample() {
  return (
    <Navbar style={{ marginLeft: "20px" }} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" >
          <i><FaCandyCane style={{fontSize:"40px"}}/></i>
        </Navbar.Brand>
        <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
          <i>CandyShop</i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ marginLeft: "10%", marginTop: "3px" }}
          >
            <Nav.Link
              href="/categoria/novedades"
              style={{ marginLeft: "15px" }}
            >
              Novedades
            </Nav.Link>
            <Nav.Link href="/categoria/ofertas" style={{ marginLeft: "15px" }}>
              Ofertas
            </Nav.Link>
            <Nav.Link
              href="/categoria/mas vendidos"
              style={{ whiteSpace: "nowrap", marginLeft: "15px" }}
            >
              Mas Vendidos
            </Nav.Link>
            <Nav.Link
              href="/cart"
              style={{
                marginLeft: "20%",
                marginTop: "-10px",
                marginBottom: "-10px",
                fontSize: "20px",
                whiteSpace: "nowrap",
              }}
            >
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
