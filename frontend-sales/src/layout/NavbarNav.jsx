import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";


const NavbarNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { user, logout } = useAuth0();
  
  const cerrarSesion = () => {
    logout({ returnTo: window.location.origin });
    localStorage.setItem('token', null);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Gestión de ventas
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>            

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <Ruta usuario={user}/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  
                </DropdownItem>
                <DropdownItem>
                  
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => cerrarSesion()}>
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

const Ruta = ({ usuario }) => {
  console.log('usuario', usuario);
  return (
    <div>
        {usuario ? (
      <>
        <img 
          src={usuario.picture} 
          className="rounded-circle" 
          height="30cm" 
          weight="30cm" 
          alt="foto de perfil"
        />
        {usuario.name}
      </>
      ) : (
        <>
        </>
      )}

    </div>
    );
  };

export default NavbarNav;