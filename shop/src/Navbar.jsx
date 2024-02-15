import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import SunLogo from './sun-logo.png'
import { NavLink } from 'react-router-dom';
import './App.css'
import logo from './107.jpg'
import { useState, useEffect } from 'react';


function NavbarMain() {

  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (

    
    <Navbar expand="lg" className={scroll? "bg-light fs-5" :"bg-dark fs-4"} sticky='top' variant={scroll? "light":"dark"}>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="" className='nav-link logo-navbar abc' />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/products" className='nav-link'>Products</NavLink>
            <NavLink to="/contacts" className='nav-link'>Contact</NavLink>
            <NavLink to="/about" className='nav-link'>About Us</NavLink>
          </Nav>
        </Navbar.Collapse>
        {/* {scroll? <h1 style={{color:'white'}}>TRUEE</h1>:'false'} */}
      </Container>
    </Navbar>
  );
}

export default NavbarMain;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import SunLogo from './sun-logo.png';

// function NavbarMain() {
//   return (
//     <Navbar expand="lg" className="bg-dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">
//           <img src={SunLogo} alt="" className="logo-navbar" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <NavLink to="/" exact className="nav-link fs-4">
//               Home
//             </NavLink>
//             <NavLink to="/products" className="nav-link fs-4">
//               Products
//             </NavLink>
//             <NavLink to="/contacts" className="nav-link fs-4">
//               Contact
//             </NavLink>
//             <NavLink to="/about" className="nav-link fs-4">
//               About Us
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarMain;
