import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Alesha R</NavbarBrand>
        <NavbarText> hi</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Technologies">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Blogs">Blogs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
