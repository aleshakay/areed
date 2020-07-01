import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navBarRow" color="light" light expand="md">
        <NavbarBrand href="/">Alesha</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" myNavbar>
            <NavItem>
              <Link className="pageLink" NavLink to="About">About</Link>
            </NavItem>
            <NavItem>
              <Link className="pageLink" NavLink to="Porfolio">Porfolio</Link>
            </NavItem>
            <NavItem>
              <Link className="pageLink" NavLink to="Technologies">Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="pageLink" NavLink to="Contact">Contact</Link>
            </NavItem>
            <NavItem>
              <Link className="pageLink" NavLink to="Blog">Blog</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
