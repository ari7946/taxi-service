import React from 'react';

import { useDispatch } from 'react-redux';
import { logout } from '../../../auth/redux/auth.actions';

import useIsDesktop from '../../hooks/useIsDesktop';

import NavbarItem from '../navbar-item/navbar-item.component';
import NavbarLogo from '../navbar-logo/navbar-logo.component';
import NavbarCloseButton from '../navbar-close-button/navbar-close-button.component';

import { useMobileMenuOpen } from '../../hooks/useMobileMenuOpen';

import * as Styled from './navbar-wrapper.styles';

interface NavbarWrapperProps {
  authRole: 'admin' | 'user' | '';
}

export default function NavbarWrapper({ authRole }: NavbarWrapperProps) {
  const { isMobileMenuOpen } = useMobileMenuOpen();

  const isDesktop = useIsDesktop();

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  // return if user is an admin or an authenticated user
  if (authRole === 'admin' || authRole === 'user') {
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

          <NavbarItem
            isDropdown
            isDesktop={isDesktop}
            items={[
              { name: 'Trips', dropdownPath: 'trips' },
              { name: 'Logout', dropdownPath: '/', handleClick: handleLogout },
            ]}>
            Options
          </NavbarItem>
        </Styled.NavList>
      </Styled.NavbarWrapper>
    );
  }

  // return if user is unauthenticated
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
