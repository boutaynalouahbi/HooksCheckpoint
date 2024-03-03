import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/style.css'


function NavApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top  ">
      <Container className='px-lg-5 py-2'>
        <Navbar.Brand href="#home" className='fs-3 fw-bolder'>CinemaConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='fs-5'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavApp;