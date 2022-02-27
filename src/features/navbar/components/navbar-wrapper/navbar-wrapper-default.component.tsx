import React from 'react';

import useIsDesktop from '../../hooks/useIsDesktop';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';
import NavbarCloseButton from '../navbar-close-button/navbar-close-button.component';

import { useMobileMenuOpen } from '../../hooks/useMobileMenuOpen';

import * as Styled from './navbar-wrapper.styles';

export default function NavbarDefault() {
  const { isMobileMenuOpen } = useMobileMenuOpen();
  const isDesktop = useIsDesktop();

  return (
    <Styled.NavbarWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      <NavbarLogo />

      <NavbarCloseButton isDesktop={isDesktop} />

      <Styled.NavList isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
        <NavbarItem path="/book" isDesktop={isDesktop}>
          Book
        </NavbarItem>

        <NavbarItem path="/about" isDesktop={isDesktop}>
          About
        </NavbarItem>

        <NavbarItem path="/register" isDesktop={isDesktop}>
          Register
        </NavbarItem>

        <NavbarItem
          isDropdown
          isDesktop={isDesktop}
          items={[
            { name: 'User', dropdownPath: 'login' },
            { name: 'Admin', dropdownPath: 'admin' },
          ]}>
          Login
        </NavbarItem>
      </Styled.NavList>
    </Styled.NavbarWrapper>
  );
}
