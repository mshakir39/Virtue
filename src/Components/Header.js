import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../mystyles.css";

const Header = () => {
  return (
    <div>
      <Navbar
        class="navbar sticky ml-auto"
        expand="lg"
        style={{ width: "initial" }}
        sticky="top"
      >
        <Navbar.Brand href="#home" id="navname">
          Virtue
        </Navbar.Brand>
        <Navbar.Toggle
          inverse
          collapseOnSelect
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav
            id="nav"
            className=" justify-content-end mr-auto  ml-auto"
            style={{ width: "100%" }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h className="tab-name">Home</h>
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h>Services</h>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h>About us</h>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h>Contact</h>
            </Link>
            <Link
              to="/donate"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h>Donate</h>
            </Link>
            <Link
              to="/needy"
              style={{ textDecoration: "none", color: "white" }}
              className="linkname"
            >
              <h>Im Needy</h>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
