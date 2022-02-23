import styled, { css } from 'styled-components';

export const NavItemWrapper = styled.li`
  margin: 0.5rem;
  font-size: 1.3rem;
  cursor: pointer;
  margin: 1rem 2.5rem;
  display: block;
  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      z-index: 3;
      margin-left: 2.5rem;
    `}

  .dropdown {
    display: flex;
    flex-direction: column;
    a {
      display: block;
    }
  }

  .dropdown_list {
    position: absolute;
    margin-top: 2rem;
    color: white;

    a {
      display: block;
      margin: 0.7rem 2rem;
    }
  }

  .dropdown__first-item,
  a {
    color: white;
    ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen &&
      css`
        color: black;
      `}
  }
`;
