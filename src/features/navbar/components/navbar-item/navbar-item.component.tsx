import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './navbar-item.styles';
import { useMobileMenuOpen } from '../../hooks/useMobileMenuOpen';

// eslint-disable-next-line react/display-name
export default function NavbarItem({ path, children, isDropdown, isDesktop, items }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuOpen();

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  return (
    <Styled.NavItemWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      {isDropdown ? (
        <div className="dropdown">
          <div
            className="dropdown__first-item"
            style={{ textDecoration: 'none' }}
            onClick={() => toggleDropdownMenu()}>
            {children}
            <span>
              <FontAwesomeIcon
                className="icon"
                icon={isDropdownOpen ? faChevronUp : faChevronDown}
              />
            </span>
          </div>

          {isDropdownOpen && (
            <div className="dropdown__list">
              {items.map(({ name, dropdownPath = null, handleClick = null }) => (
                <NavLink
                  key={name}
                  to={dropdownPath}
                  className="list-item"
                  style={{ textDecoration: 'none' }}
                  onClick={handleClick}>
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
