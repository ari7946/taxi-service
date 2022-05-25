import React from 'react'
import { NavLink } from 'react-router-dom';

import logo2 from '../../assets/cyc-brand.png';
import * as Styled from './navbar-logo.styles';

export default function NavbarLogo() {
  return (
    <Styled.LogoWrapper>
      <NavLink to='/'>
        <img src={logo2} alt="Coastal Yellow Cabs Logo" className="logo" />
      </NavLink>
    </Styled.LogoWrapper>
  )
}


