import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 2rem;
  /* ${({ isMobileMenuOpen, isDesktop }) =>
    isMobileMenuOpen &&
    !isDesktop &&
    css`
      flex-direction: column;
    `} */
`;

export const NavList = styled.ul`
  ${({ isDesktop }) =>
    isDesktop &&
    css`
      display: flex;
    `}

  ${({ isMobileMenuOpen, isDesktop }) =>
    !isMobileMenuOpen &&
    !isDesktop &&
    css`
      display: none;
    `}

  ${({ isMobileMenuOpen, isDesktop }) =>
    isMobileMenuOpen &&
    !isDesktop &&
    css`
      display: flex;
      width: 60%;
      margin-top: 1rem;
      border-radius: 3%;
      flex-direction: column;
      justify-content: center;
      height: 55vh;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

export const CloseButton = styled.button`
  color: gray;
  z-index: 102;
  position: absolute;
  border: none;
  border-radius: 10%;
  background-color: var(--color-gray-dark-2);
  right: 7%;
  font-size: 2rem;
  width: 3rem;
  margin-top: 0.5rem;

  .fa-brand {
    color: var(--color-yellow);
  }

  ${({ isMobileMenuOpen, isDesktop }) =>
    isDesktop
      ? css`
          display: none;
        `
      : isMobileMenuOpen &&
        !isDesktop &&
        css`
          .fa-brand {
            color: var(--color-flat-orange);
          }
          z-index: 102;
          display: block;
          position: absolute;
          border: none;
          font-size: 2rem;
          width: 3rem;
        `}
`;
