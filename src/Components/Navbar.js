import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/style.css'
import { NavLink } from 'react-router-dom';


function NavApp() {
  function NavLinkStyle({isActive}) {
    return{
        fontWeight:isActive ?'bold':'normal'
        ,
        textDecoration:isActive ?'none':'underline'
        ,
        color:'black'
    } 
}
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top  ">
      <Container className='px-lg-5 py-2'>
        <Navbar.Brand href="#home" className='fs-3 fw-bolder'>CinemaConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='fs-5'>
            <NavLink to={'/'} style={NavLinkStyle} className='me-3'>Home</NavLink>
            <NavLink to={'/about'} style={NavLinkStyle}  className='me-3'>About</NavLink>
            <NavLink to={'/contact'} style={NavLinkStyle}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavApp;