import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Alesha</NavbarBrand>
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
              <Link NavLink to="Contact">Contact</Link>
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
