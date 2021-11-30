import React from 'react'
import logo2 from '../assets/cyc-brand.png';
import {
  NavbarBrand,
} from 'reactstrap';

const NavbarBrandContainer = () => {
  return (
    <NavbarBrand className="text-grey-light-2 navbar-brand">
      <img src={logo2} alt="Coastal Yellow Cabs Logo" className="logo" />
      {/* <span className="logo-title">Coastal Yellow Cabs</span> */}
    </NavbarBrand>
  )
}

export default NavbarBrandContainer;