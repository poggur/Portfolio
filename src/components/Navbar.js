import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#0A2E36'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{color: '#14CC60'}}>Jack Regan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Programming" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/#/py">Python</NavDropdown.Item>
              <NavDropdown.Item href="/#/c">C</NavDropdown.Item>
              <NavDropdown.Item href="/#/hc">HTML / CSS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Content Areas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/#/ca1">CA1-4</NavDropdown.Item>
              <NavDropdown.Item href="/#/ca2">CA5-8</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/#/UIUX">UI/UX</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#/placement">Industry Placement</Nav.Link>
            <Nav.Link href="/#/event">Events</Nav.Link>
            <Nav.Link href="/#/blog">Blog</Nav.Link>
            <Nav.Link href="/#/masterclass">Masterclasses</Nav.Link>
            <Nav.Link href="/#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;