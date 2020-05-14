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
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
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
      <NavbarToggler className="text-green-light" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem className='py-3'>
            <Link className="px-5 mr-3 py-3 text-yellow lead" to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </NavItem>

          <NavItem className='py-3'>
            <Link className="px-5 mx-2 py-3 text-yellow lead" to="/book" style={{ textDecoration: 'none' }}>Book</Link>
          </NavItem>

          <NavItem className='py-3'>
            <Link className="px-5 mx-2 py-3 text-yellow lead" to="/about" style={{ textDecoration: 'none' }}>About</Link>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <div className="pt-2">
                <span className="px-5 ml-2 py-3 text-green-light lead">Admin</span>
              </div>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link className="text-green-dark py-3" to="admin/trips" style={{ textDecoration: 'none' }}>
                  <NavItem>Trips</NavItem>
                </Link>
              </DropdownItem>
              <DropdownItem 
                className="text-orange py-3"
                onClick={() => {
                  logout();
                  history.replace('/');
                }}
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;