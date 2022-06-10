import styled from 'styled-components';
import { TabState } from '../../types/trips.types';

export const TripNavWrapper = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  position: block;
  cursor: pointer;
  margin-top: 1.5rem;

  @media (min-width: 450px) {
    font-size: 1.2rem;
  }
`;

export const NavLink = styled.a<{ isTabActive: TabState }>`
  position: inline-block;
  padding-inline: 0.8rem;
  padding-block: 0.7rem;
  z-index: 5;
  border-top: ${({ isTabActive }) => (isTabActive ? '2px solid white' : 'none')};
  border-left: ${({ isTabActive }) => (isTabActive ? '2px solid white' : 'none')};
  border-right: ${({ isTabActive }) => (isTabActive ? '2px solid white' : 'none')};

  @media (min-width: 600px) {
    padding-inline: 1.5rem;
  }
`;
