import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import "./navbarStyle.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../auth/use-auth';
import { useHistory } from 'react-router-dom';

const NavbarComponent = (props) => {
  const { logout, auth } = useAuth();
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container mb-5 mt-3" expand="md">
      <NavbarBrand href="/" className="mr-auto text-grey-light-2">
        <FontAwesomeIcon className="mr-2 fa-lg" icon={faTaxi} />
        Coastal Yellow Cabs
      </NavbarBrand>
      <NavbarToggler className="text-green-light" onClick={toggle} >
        Menu
        <FontAwesomeIcon className="ml-2" icon={ isOpen ? faChevronUp : faChevronDown }/>
      </NavbarToggler >
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>

          <NavItem className='py-3'>
            <Link 
              className="px-5 mx-2 py-3 text-green-light lead" 
              to="/book" style={{ textDecoration: 'none' }} 
              onClick={() => setIsOpen(false)}>Book</Link>
          </NavItem>

          <NavItem className='py-3'>
            <Link 
              className="px-5 mx-2 py-3 text-green-light lead" 
              to="/about" 
              style={{ textDecoration: 'none' }}
              onClick={() => setIsOpen(false)} >About</Link>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <div className="pt-2">
                <span className="px-5 ml-1 py-1 text-green-light lead">Admin</span>
              </div>
            </DropdownToggle>

            <DropdownMenu right>
              <DropdownItem>
                <Link to="admin/trips" style={{ textDecoration: 'none' }}>
                  <NavItem className="text-flat-blue py-2" onClick={() => setIsOpen(false)}>Trips</NavItem>
                </Link>
              </DropdownItem>

              {!auth && (
                <DropdownItem>
                  <Link to="admin/" style={{ textDecoration: 'none' }}>
                    <NavItem className="text-flat-blue py-2" onClick={() => setIsOpen(false)}>Login</NavItem>
                  </Link>
                </DropdownItem>
              )}

              {auth && (
                <DropdownItem
                  className="text-orange py-1 mt-2"
                  onClick={() => {
                    logout();
                    history.replace('/');
                  }}
                >
                  Logout
                </DropdownItem>
              )}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;