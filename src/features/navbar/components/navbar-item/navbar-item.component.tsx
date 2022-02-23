import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from './navbar-item.styles';

// eslint-disable-next-line react/display-name
export default function NavbarItem({
  path,
  children,
  setIsOpen,
  isDropdown,
  items,
  isOpen,
  toggle,
  isMobileMenuOpen,
}) {
  return (
    <Styled.NavItemWrapper isMobileMenuOpen={isMobileMenuOpen}>
      {isDropdown ? (
        <div className="dropdown">
          <div
            className="dropdown__first-item"
            style={{ textDecoration: 'none' }}
            onClick={() => toggle()}>
            {children}
          </div>

          {isOpen && (
            <div className="dropdown_list">
              {items.map(({ name, dropdownPath }) => (
                <NavLink
                  key={name}
                  exact
                  to={dropdownPath}
                  className="list-item"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsOpen(false)}>
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <NavLink to={path} style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
          {children}
        </NavLink>
      )}
    </Styled.NavItemWrapper>
  );
}
