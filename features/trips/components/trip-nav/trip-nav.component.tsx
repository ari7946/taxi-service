import React from 'react';
import './trip-nav.styles.ts';
import { TabState } from '../../types/trips.types';

import * as Styled from './trip-nav.styles';

interface TripNavProps {
  activeTab: TabState;
  setActiveTab: (activeTab: TabState) => void;
}

const TripNav = ({ activeTab, setActiveTab }: TripNavProps) => {
  return (
    <Styled.TripNavWrapper>
      <Styled.NavList>
        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'all'}
            className={`
            ${activeTab === 'all' ? 'text-yellow' : 'text-light'}
          `}
            onClick={() => setActiveTab('all')}>
            All
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'confirmed'}
            className={`
            ${activeTab === 'confirmed' ? 'text-green-light' : 'text-light'}
          `}
            onClick={() => setActiveTab('confirmed')}>
            Confirmed
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'completed'}
            className={`
            ${activeTab === 'completed' ? 'text-green-dark' : 'text-light'}
          `}
            onClick={() => setActiveTab('completed')}>
            Completed
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'archived'}
            className={`
            ${activeTab === 'archived' ? 'text-yellow' : 'text-light'}
          `}
            onClick={() => setActiveTab('archived')}>
            Archived
          </Styled.NavLink>
        </Styled.NavItem>
      </Styled.NavList>
    </Styled.TripNavWrapper>
  );
};

export default TripNav;
