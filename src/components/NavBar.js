import { useReducer } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { isAuthenticated, logOut } from "../services/authServices";
import "./NavBar.css";

const NavBar = () => {
  const user = isAuthenticated();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>RumMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link href="/">Home</Nav.Link>
            {user.role === "ADMIN" && (
              <>
                <Nav.Link href="/countries">Countries</Nav.Link>
                <Nav.Link href="/addRum">Add Rum</Nav.Link>
                <Nav.Link href="/addCountry">Add Country</Nav.Link>
                <Nav.Link href="/favoritesView">Favorites</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="links">
            {user ? (
              <>
                <a style={{ color: "white", margin: "8px" }}>
                  Welcome, {user.name}
                </a>
                <button onClick={logOut} className="btn btn-outline-dark">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
