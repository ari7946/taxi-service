import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './navbar-item.styles';

// eslint-disable-next-line react/display-name
export default function NavbarItem({
  path,
  children,
  isMobileMenuOpen,
  isDropdown,
  isDropdownOpen,
  isDesktop,
  toggleDropdownMenu,
  toggleMobileMenu,
  items,
}) {
  return (
    <Styled.NavItemWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      {isDropdown ? (
        <div className="dropdown">
          <div
            className="dropdown__first-item"
            style={{ textDecoration: 'none' }}
            onClick={() => toggleDropdownMenu()}>
            {children}
          </div>

          {isDropdownOpen && (
            <div className="dropdown__list">
              {items.map(({ name, dropdownPath }) => (
                <NavLink
                  key={name}
                  to={dropdownPath}
                  className="list-item"
                  style={{ textDecoration: 'none' }}
                  // onClick={() => toggleMobileMenu()}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <NavLink to={path} style={{ textDecoration: 'none' }} onClick={() => toggleMobileMenu()}>
          {children}
        </NavLink>
      )}
    </Styled.NavItemWrapper>
  );
}
