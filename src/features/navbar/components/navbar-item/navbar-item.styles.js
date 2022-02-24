import styled, { css } from 'styled-components';

export const NavItemWrapper = styled.li`
  margin: 0.5rem;
  font-size: 1.2rem;
  padding-top: 0.7rem;
  cursor: pointer;
  margin: 1rem 2.5rem;
  display: block;
  font-weight: bold;

  a,
  .dropdown__first-item,
  .dropdown__first-item a {
    color: lightblue !important;

    ${({ isDesktop }) =>
      !isDesktop &&
      css`
        color: blue;
      `}
  }

  .active {
    color: white !important;
    ${({ isDesktop }) =>
      !isDesktop &&
      css`
        color: darkgray !important;
        font-weight: bold;
      `}
  }

  .dropdown__list {
    position: absolute;
    .list-item {
      display: block;
      margin-left: 2rem;
      margin-top: 0.8rem;

      ${({ isDesktop }) =>
        isDesktop &&
        css`
          position: relative;
        `}
    }
  }
`;
