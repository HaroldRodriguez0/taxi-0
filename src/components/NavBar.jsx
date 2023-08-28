

import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import NavLink from 'react-bootstrap/esm/NavLink';

export const NavBar = () => {

  const {language, setLanguage, refService, refOurCar, refSitie, refContact } = useContext(LanguageContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const scrollRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth'});
    handleClose();
  }

  return (
    <Navbar expand='md' bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand> 
          <Image  
            className='navbar-bg-logo p-1 ps-2 rounded'
            width="220"
            height="45"
            src="../icons/logo.png"
            alt="logo" rounded />
       </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} onClick={handleShow} />
        <Navbar.Offcanvas 
          show={show} restoreFocus={false}
          onHide={handleClose}
          bg="dark" data-bs-theme="dark"
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$md`}
          placement="end"
        >
          <Offcanvas.Header closeButton onClick={handleClose}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              
               <Image  
                 className='navbar-bg-logo p-1 ps-2 rounded'
                 width="auto"
                 height="45"
                 src="../icons/logo.png"
                 alt="logo" rounded />
             
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 fs-4">
              <NavLink onClick={() => scrollRef(refService) } >{language ?'Service' :'Servicios'}</NavLink>
              <NavLink onClick={() => scrollRef(refOurCar) } >{language ?'Our Cars' :'Vehículos'}</NavLink>
              <NavLink onClick={() => scrollRef(refSitie) } >{language ?'Sitie' :'Sitios'}</NavLink>
              <NavLink onClick={() => scrollRef(refContact) } >{language ?'Contact' :'Contacto'}</NavLink>
              <a onClick={() => setLanguage( !language )} className='icon-lenguaje' >
                <img className='img-fluid' src={language ?'../icons/estados-unidos.png' :'../icons/espana.png'} alt="" />
              </a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
