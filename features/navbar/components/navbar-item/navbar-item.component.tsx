import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './navbar-item.styles';
import { useMobileMenuOpen } from '../../hooks/useMobileMenuOpen';

type Items = {
  name: string;
  dropdownPath: string;
  handleClick?: () => void;
};

interface NavbarItemProps {
  path: string;
  children: any;
  isDropdown?: boolean;
  isDesktop?: boolean;
  items?: Items[];
}

// eslint-disable-next-line react/display-name
export default function NavbarItem({
  path,
  children,
  isDropdown,
  isDesktop,
  items,
}: NavbarItemProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuOpen();

  const toggleDropdownMenu = () => setDropdownOpen(!isDropdownOpen);

  return (
    <Styled.NavItemWrapper isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop}>
      {isDropdown ? (
        <div className="dropdown">
          <div className="dropdown__first-item" onClick={() => toggleDropdownMenu()}>
            {children}
            {/* <div>
              <FontAwesomeIcon
                className="icon"
                size={'sm'}
                icon={isDropdownOpen ? faChevronUp : faChevronDown}
              />
            </div> */}
          </div>

          {isDropdownOpen && (
            <div className="dropdown__list">
              {items?.map(({ name, dropdownPath, handleClick }) => (
                <Link
                  key={name}
                  href={dropdownPath}
                  className="list-item"
                  style={{ textDecoration: 'none' }}
                  onClick={handleClick}
                  passHref>
                  <a onClick={handleClick}>{name}</a>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link href={path} style={{ textDecoration: 'none' }} onClick={() => toggleMobileMenu()}>
          {children}
        </Link>
      )}
    </Styled.NavItemWrapper>
  );
}
