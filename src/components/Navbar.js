import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#0A2E36'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{color: '#14CC60'}}>Jack Regan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Programming" id="collasible-nav-dropdown">
              <Link to="/py">Python</Link>
              <Link to="/c">C</Link>
              <Link to="/hc">HTML / CSS</Link>
            </NavDropdown>
            <NavDropdown title="Content Areas" id="collasible-nav-dropdown">
              <Link to="/ca1">CA1-4</Link>
              <Link to="/ca2">CA5-8</Link>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <Link to="/UIUX">UI/UX</Link>
            </NavDropdown>
            <Link to="/placement">Industry Placement</Link>
            <Link to="/event">Events</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/masterclass">Masterclasses</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;