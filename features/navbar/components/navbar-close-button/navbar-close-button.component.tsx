import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import * as Styled from './navbar-close-button.styles';
import { useMobileMenuOpen } from '../../hooks/useMobileMenuOpen';

interface NavbarCloseButtonProps {
  isDesktop: boolean;
}

export default function NavbarCloseButton({ isDesktop }: NavbarCloseButtonProps) {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuOpen();
  return (
    <Styled.CloseButton
      onClick={toggleMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      isDesktop={isDesktop}
    >
      <FontAwesomeIcon
        className="fa-brand"
        size="sm"
        icon={isMobileMenuOpen ? faWindowClose : faBars}
      />
    </Styled.CloseButton>
  );
}
