import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = function () {
  const [activeLink, setActiveLink] = useState("home");
  const [navToggle, setNavToggle] = useState(false);

  const updateActiveLink = function (value) {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={navToggle ? "nav-menu-toggler active" : "nav-menu-toggler"}
          onClick={() => setNavToggle(!navToggle)}
        >
          <span className="nav-menu-bar nav-menu-bar-1"></span>
          <span className="nav-menu-bar nav-menu-bar-2"></span>
          <span className="nav-menu-bar nav-menu-bar-3"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("services")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
