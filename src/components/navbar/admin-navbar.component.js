import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import "./navbar.styles.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../auth/use-auth';
import { useHistory } from 'react-router-dom';

const AdminNavbar = () => {
  const { logout } = useAuth();
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="mb-5 mt-1" expand="md">
      <NavbarBrand href="/" className="text-grey-light-2 navbar-brand">
        <FontAwesomeIcon className="mr-2 fa-lg fa-brand" icon={faTaxi} />
        <span className="brand-title">Coastal Yellow Cabs</span>
      </NavbarBrand>

      <NavbarToggler className="text-grey-light-2" onClick={toggle} >
        <FontAwesomeIcon className="mr-2" icon={isOpen ? faChevronUp : faChevronDown} />
        MENU
      </NavbarToggler >

      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='py-3'>
            <NavLink
              className="px-5 mx-2 py-3 text-grey-light-2 lead"
              exact
              activeClassName="font-weight-bold"
              to="/book" style={{ textDecoration: 'none' }}
              onClick={() => setIsOpen(false)}>Book</NavLink>
          </NavItem>

          <NavItem className='py-3'>
            <NavLink
              className="px-5 mx-2 py-3 text-grey-light-2 lead"
              exact
              activeClassName="font-weight-bold"
              to="/about"
              style={{ textDecoration: 'none' }}
              onClick={() => setIsOpen(false)} >About</NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <div className="pt-2">
                <span className="px-5 ml-1 py-1 text-grey-light-2 lead">Admin</span>
              </div>
            </DropdownToggle>

            <DropdownMenu right>
              <DropdownItem>
                <NavLink to="admin/trips" style={{ textDecoration: 'none' }}>
                  <NavItem className="text-flat-blue py-2" onClick={() => setIsOpen(false)}>Trips</NavItem>
                </NavLink>
              </DropdownItem>

              {/* <DropdownItem>
                <NavLink to="admin/" style={{ textDecoration: 'none' }}>
                  <NavItem className="text-flat-blue py-2" onClick={() => setIsOpen(false)}>Login</NavItem>
                </NavLink>
              </DropdownItem> */}

              <DropdownItem
                className="text-orange py-1 mt-2"
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

export default AdminNavbar;