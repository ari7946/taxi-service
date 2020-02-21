import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container mb-5" expand="md">
      <NavbarBrand href="/" className="mr-auto">
        <FontAwesomeIcon className="mr-2 fa-lg" icon={faTaxi} />
        Coastal Yellow Cabs
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink className="px-4 py-3" href="/">
              <Link className="" to="/" style={{ textDecoration: 'none' }}>Home</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="px-4 py-3" href="/">
              <Link className="" to="/book" style={{ textDecoration: 'none' }}>Book</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="px-4 py-3" href="/">
              <Link className="" to="/about" style={{ textDecoration: 'none' }}>About</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="px-4 py-3" href="/">
              <Link className="" to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;