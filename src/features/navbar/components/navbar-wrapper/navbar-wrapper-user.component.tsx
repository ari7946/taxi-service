import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import useIsDesktop from '../../hooks/useIsDesktop';

import { useDispatch } from 'react-redux';
import { logout } from '../../../auth/redux/auth.actions';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';
import NavbarCloseButton from '../navbar-close-button/navbar-close-button.component';

import * as Styled from './navbar-wrapper.styles';

export default function NavbarAdmin() {
  // local hooks
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // custom hook
  const isDesktop = useIsDesktop();

  // redux hook
  const dispatch = useDispatch();

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => dispatch(logout());

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

        <NavbarItem
          path="/trips"
          isMobileMenuOpen={isMobileMenuOpen}
          isDropdown
          isDropdownOpen={isDropdownOpen}
          toggleDropdownMenu={toggleDropdownMenu}
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
          Options
        </NavbarItem>
      </Styled.NavList>
    </Styled.NavbarWrapper>
  );
}
