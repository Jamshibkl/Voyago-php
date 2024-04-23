import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  function logoutSubmit() {
    localStorage.setItem("login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/login");
  }

  const user = localStorage.getItem("user");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar_section"
      id="nav-bar-section"
    >
      <Container className="nav_container">
        <Navbar.Brand className="logo">VOYAGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-nav">
          <Nav className=" nav_links">
            <Nav.Link as={NavLink} to="/" className="nav-link-with-space">
              Home
            </Nav.Link>
            <NavDropdown
              title="Company"
              id="collapsible-nav-dropdown"
              className="dropdown-btn"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/about-us"
                className="dropdown-items"
              >
                About us
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/how-it-works"
                className="dropdown-items"
              >
                How it Works
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/our-team"
                className="dropdown-items"
              >
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/become-a-driver"
                className="dropdown-items"
              >
                Become a Driver
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/admin-login"
                className="dropdown-items"
              >
                Admin
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/service-status"
                className="dropdown-items"
              >
                Service Status
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/leagal-privacy"
                className="dropdown-items"
              >
                Legal and Privacy
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/book-a-driver"
                className="dropdown-items"
              >
                Book a Driver
              </NavDropdown.Item>
              {/* Dropdown items */}
            </NavDropdown>
            <Nav.Link as={NavLink} to="/safety" className="nav-link-with-space">
              Safety
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link-with-space"
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="nav-logo">
            <NavDropdown
              title={user ? user : "Login"}
              id="user-dropdown"
              className="nav-link-with-space"
            >
              {user ? (
                <>
                  <NavDropdown.Item
                    className="dropdown-items"
                    as={NavLink}
                    to={`/on-the-way/${user}`}
                  >
                    Rides
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-items"
                    onClick={logoutSubmit}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item
                  as={NavLink}
                  to="/login"
                  className="dropdown-items"
                >
                  Login
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
