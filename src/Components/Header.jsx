import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleTeamsClick = () => {
    navigate("/sports");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleFixtureClick = () => {
    navigate("/fixtures");
  };
  const handleTableClick = () => {
    navigate("/table");
  };
  const handleNewsClick = () => {
    navigate("/news");
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="headText">
            Sports Hub
          </Navbar.Brand>
          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleHomeClick} className="menu-list">
                Home
              </Nav.Link>
              <Nav.Link onClick={handleTeamsClick} className="menu-list">
                Sports
              </Nav.Link>
              <Nav.Link onClick={handleFixtureClick} className="menu-list">
                Fixtures
              </Nav.Link>
              <Nav.Link onClick={handleTableClick} className="menu-list">
                Table
              </Nav.Link>
              <Nav.Link onClick={handleNewsClick} className="menu-list">
                News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
