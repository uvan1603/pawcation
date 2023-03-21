import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <div className="title fluid-container ">
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand id="navbar-brand" as={Link} to={"/"}>
            {" "}
            <i class="fa-solid fa-paw"></i> pawcation
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link id="nav-item" as={Link} to={"/register"}>
                Register
              </Nav.Link>
              <Nav.Link id="nav-item" as={Link} to={"/signin"}>
                Sign In
              </Nav.Link>
              <Nav.Link id="nav-item" as={Link} to={"/dashboard"}>
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
