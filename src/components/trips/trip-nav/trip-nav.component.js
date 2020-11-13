import React, { useState} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './trip-nav.styles.css';

const TripNav = ({ activeTab, setActiveTab }) => {

  return (
    <Nav className='mb-2 nav-tabs' tabs color="light">
      <NavItem>
        <NavLink
          className={`
            ${activeTab === 'viewAll' ? 'active' : 'text-light'}
          `}
          onClick={() => setActiveTab('viewAll')}
        >
          All
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          className={`
            ${activeTab === 'viewConfirmed' ? 'active' : 'text-light'}
          `}
          onClick={() => setActiveTab('viewConfirmed')}
        >
          Confirmed
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          className={`
            ${activeTab === 'viewCompleted' ? 'active' : 'text-light'}
          `}
          onClick={() => setActiveTab('viewCompleted')}
        >
          Completed
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          className={`
            ${activeTab === 'viewArchived' ? 'active' : 'text-light'}
          `}
          onClick={() => setActiveTab('viewArchived')}
        >
          Archived
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default TripNav;

