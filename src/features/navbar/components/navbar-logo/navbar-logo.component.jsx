import React from 'react'

import logo2 from '../../assets/cyc-brand.png';
import * as Styled from './navbar-logo.styles.js';

export default function NavbarLogo() {
  return (
    <Styled.LogoWrapper>
      <img src={logo2} alt="Coastal Yellow Cabs Logo" className="logo" />
    </Styled.LogoWrapper>
  )
}


