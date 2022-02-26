import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './navbar-close-button.styles';

export default function NavbarCloseButton({ toggleMobileMenu, isMobileMenuOpen, isDesktop }) {
  return (
    <Styled.CloseButton
      onClick={toggleMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      isDesktop={isDesktop}>
      <FontAwesomeIcon
        className="fa-brand"
        size="sm"
        icon={isMobileMenuOpen ? faWindowClose : faBars}
      />
    </Styled.CloseButton>
  );
}
