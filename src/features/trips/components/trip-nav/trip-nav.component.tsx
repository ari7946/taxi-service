import React from 'react';
import './trip-nav.styles.ts';
import { TabState } from '../../types/trips.types';

import * as Styled from './trip-nav.styles';

interface TripNavProps {
  activeTab: string;
  setActiveTab: (activeTab: TabState) => void;
}

const TripNav = ({ activeTab, setActiveTab }: TripNavProps) => {
  return (
    <Styled.TripNavWrapper>
      <Styled.NavList>
        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'viewAll'}
            className={`
            ${activeTab === 'viewAll' ? 'active' : 'text-light'}
          `}
            onClick={() => setActiveTab('viewAll')}>
            All
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'viewConfirmed'}
            className={`
            ${activeTab === 'viewConfirmed' ? 'active' : 'text-light'}
          `}
            onClick={() => setActiveTab('viewConfirmed')}>
            Confirmed
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'viewCompleted'}
            className={`
            ${activeTab === 'viewCompleted' ? 'active' : 'text-light'}
          `}
            onClick={() => setActiveTab('viewCompleted')}>
            Completed
          </Styled.NavLink>
        </Styled.NavItem>

        <Styled.NavItem>
          <Styled.NavLink
            isTabActive={activeTab === 'viewArchived'}
            className={`
            ${activeTab === 'viewArchived' ? 'active' : 'text-light'}
          `}
            onClick={() => setActiveTab('viewArchived')}>
            Archived
          </Styled.NavLink>
        </Styled.NavItem>
      </Styled.NavList>
    </Styled.TripNavWrapper>
  );
};

export default TripNav;
