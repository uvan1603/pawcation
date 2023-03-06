import React  from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BookingPage from "./Bookingpage";
import Contact from "./Contact";
import Download from "./Download";
import Home from "./Home";
import Pricing from "./Pricing";
import RegisterForm from "./RegisterForm";
import SignIn from "./SignIn";

export default function NavbarComp() {
  return (
    <Router>
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
                <Nav.Link id="nav-item" as={Link} to={"/Contact"}>
                  Contact
                </Nav.Link>
                <Nav.Link id="nav-item" as={Link} to={"/Pricing"}>
                  Pricing
                </Nav.Link>
                <Nav.Link id="nav-item" as={Link} to={"/Download"}>
                  Download
                </Nav.Link>
                <Nav.Link id="nav-item" as={Link} to={"/Register"}>
                  Register
                </Nav.Link>
                <Nav.Link id="nav-item" as={Link} to={"/Signin"}>
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Download" element={<Download />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Register" element={<RegisterForm />}></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          <Route path="/Bookingpage" element={<BookingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
