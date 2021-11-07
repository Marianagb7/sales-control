import React, { useState } from 'react';
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

  const { logout } = useAuth0();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Gestión de ventas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>            
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Camila Bejarano
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Mi perfíl
                </DropdownItem>
                <DropdownItem>
                  Configuraciones
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
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

export default NavbarNav;