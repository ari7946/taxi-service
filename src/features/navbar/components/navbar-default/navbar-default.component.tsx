import React, { useState, useEffect } from 'react';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';

import * as Styled from './navbar-default.styles';

export default function NavBarDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    updateMedia();
    return () => window.removeEventListener('resize', updateMedia);
  });

  const checkOpen = () => {
    if (isDesktop) {
      return true;
    } else if (isMobileMenuOpen) {
      return true;
    } else if (!isMobileMenuOpen) {
      return false;
    }
  };
  // console.log('status', status);
  // console.log('isDesktop', isDesktop)

  return (
    <Styled.NavbarWrapper isMobileMenuOpen={checkOpen}>
      <NavbarLogo />

      <Styled.CloseButton onClick={toggleMobileMenu} isMobileMenuOpen={checkOpen}>
        {checkOpen() ? 'X' : 'Menu'}
      </Styled.CloseButton>

      <Styled.NavList isMobileMenuOpen={isMobileMenuOpen}>
        <NavbarItem path="/book" setIsOpen={setIsOpen} isMobileMenuOpen={checkOpen}>
          Book
        </NavbarItem>

        <NavbarItem path="/about" setIsOpen={setIsOpen} isMobileMenuOpen={isMobileMenuOpen}>
          About
        </NavbarItem>

        <NavbarItem path="/register" setIsOpen={setIsOpen} isMobileMenuOpen={isMobileMenuOpen}>
          Register
        </NavbarItem>

        <NavbarItem
          path="/login"
          isMobileMenuOpen={isMobileMenuOpen}
          setIsOpen={setIsOpen}
          isDropdown
          isOpen={isOpen}
          toggle={toggle}
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
