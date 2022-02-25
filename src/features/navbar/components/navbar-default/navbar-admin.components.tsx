import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { logout } from '../../../auth/redux/auth.actions';
import { useDispatch } from 'react-redux';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';

import * as Styled from './navbar-default.styles';

export default function NavbarAdmin() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => dispatch(logout());

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

        <NavbarItem
          path="/admin"
          isMobileMenuOpen={isMobileMenuOpen}
          isDropdown
          isDropdownOpen={isDropdownOpen}
          toggleDropdownMenu={toggleDropdownMenu}
          onClick={() => logout()}
          items={[
            {
              name: 'Trips',
              dropdownPath: 'trips',
              handleClick: null,
            },
            {
              name: 'Logout',
              dropdownPath: '/',
              handleClick: handleLogout,
            },
          ]}>
          Admin
        </NavbarItem>
      </Styled.NavList>
    </Styled.NavbarWrapper>
  );
}
