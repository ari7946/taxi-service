import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';

import * as Styled from './navbar-default.styles';

export default function NavbarDefault() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <Styled.NavbarWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      <NavLink to="/">
        <NavbarLogo />
      </NavLink>

      <Styled.CloseButton
        onClick={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        isDesktop={isDesktop}>
        {isMobileMenuOpen ? 'x' : '+'}
      </Styled.CloseButton>

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
