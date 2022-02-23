import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 2rem 2rem;

  @media and screen (max-width: 800px) {
  }
  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      margin: 1rem;
    `}
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      height: 20rem;
      display: block;
      padding-top: 5rem;
      align-content: start;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      background-color: rgba(250, 250, 250, 0.95);
      z-index: 100;
    `}
`;

export const CloseButton = styled.button`
  display: none;
  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      color: gray;
      z-index: 102;
      display: block;
      position: absolute;
      border: none;
      right: 5%;
      font-size: 3rem;
      width: 5rem;
    `}
`;
