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
    <Navbar className="container mb-5 mt-3" expand="md">
      <NavbarBrand href="/" className="mr-auto text-grey-light-2">
        <FontAwesomeIcon className="mr-2 fa-lg" icon={faTaxi} />
        Coastal Yellow Cabs
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem className='py-3'>
            <Link className="px-5 mr-3 py-3 text-yellow lead" to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </NavItem>

          <NavItem className='py-3'>
            <Link className="px-5 mx-2 py-3 text-yellow lead" to="/book" style={{ textDecoration: 'none' }}>Book</Link>
          </NavItem>

          <NavItem className='py-3'>
            <Link className="px-5 ml-3 py-3 text-yellow lead" to="/about" style={{ textDecoration: 'none' }}>About</Link>
          </NavItem>

          {/* <NavItem>
            <NavLink className="px-4 py-3" href="/">
              <Link className="" to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
            </NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;