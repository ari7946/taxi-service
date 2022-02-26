import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useIsDesktop from '../../hooks/useIsDesktop';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';
import NavbarCloseButton from '../navbar-close-button/navbar-close-button.component';

import * as Styled from './navbar-wrapper.styles';

export default function NavbarDefault() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Styled.NavbarWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      <NavLink to="/">
        <NavbarLogo />
      </NavLink>

      <NavbarCloseButton
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        isDesktop={isDesktop}
      />

      <Styled.NavList isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
        <NavbarItem path="/book" isDesktop={isDesktop} toggleMobileMenu={toggleMobileMenu}>
          Book
        </NavbarItem>

        <NavbarItem path="/about" isDesktop={isDesktop} toggleMobileMenu={toggleMobileMenu}>
          About
        </NavbarItem>

        <NavbarItem path="/register" isDesktop={isDesktop} toggleMobileMenu={toggleMobileMenu}>
          Register
        </NavbarItem>

        <NavbarItem
          path="/login"
          isMobileMenuOpen={isMobileMenuOpen}
          isDropdown
          isDropdownOpen={isDropdownOpen}
          toggleDropdownMenu={toggleDropdownMenu}
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
