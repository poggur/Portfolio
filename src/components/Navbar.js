import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#0A2E36', display: 'flex', justifyContent: 'center'}}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Link to="/" style={{textDecoration: 'none'}}>
            <h2 style={{color: '#14CC60'}}>Jack Regan</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Programming" id="collasible-nav-dropdown" className='NavDrop'>
              <NavDropdown.Item><Link className='NavbarLink' to="/py">Python</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='NavbarLink' to="/c">C</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='NavbarLink' to="/hc">HTML / CSS</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Content Areas" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link className='NavbarLink' to="/ca1">CA1-4</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='NavbarLink' to="/ca2">CA5-8</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link className='NavbarLink' to="/UIUX">UI/UX</Link></NavDropdown.Item>
            </NavDropdown>
            <Link className='NavbarLink' to="/placement">Industry Placement</Link>
            <Link className='NavbarLink' to="/event">Events</Link>
            <Link className='NavbarLink' to="/blog">Blog</Link>
            <Link className='NavbarLink' to="/masterclass">Masterclasses</Link>
            <Link className='NavbarLink' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;