import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Spinner, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Trip from './admin-trip.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './admin.styles.css';

import { getTrips } from '../../redux/trips/trips.actions';
import { selectAllTrips, selectLoadingType, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../redux/trips/trips.selectors';

const TripList = ({ 
  getTrips, trips, loadingType, confirmedTrips, completedTrips, archivedTrips 
}) => {
  const [activeTab, setActiveTab] = useState('viewAll');

  useEffect(() => {
    getTrips();
  }, [getTrips])
  
  return (
    <Container fluid>
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

      <TabContent activeTab={activeTab}>
        <TabPane tabId="viewAll">
          {loadingType === 'getTrips'
            ? <Spinner color="light" />
            : trips.length > 0 ? (
              <ListGroup>
                {trips.map(trip =>
                  <Trip key={trip.id} trip={trip}
                  />
                )}
              </ListGroup>
            ) : (
              trips.length === 0 && <h4 className="text-green-light">There are no trips pending.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewConfirmed">
            {confirmedTrips.length ? (
              <ListGroup>
                {confirmedTrips.map(trip =>
                  <Trip key={trip.id} trip={trip} />
                )}
              </ListGroup>    
            ) : (
              <h4 className="text-green-light">There are no confirmed trips.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewCompleted">
            {completedTrips.length ? (
              <ListGroup>
                {completedTrips.map(trip =>
                  <Trip key={trip.id} trip={trip} />
                )}
              </ListGroup>    
            ) : (
              <h4 className="text-green-light">There are no completed trips.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewArchived">
            {archivedTrips.length ? (
              <ListGroup>
                {archivedTrips.map(trip =>
                  <Trip key={trip.id} trip={trip} />
                )}
              </ListGroup>     
            ) : (
              <h4 className="text-green-light">There's no archived trips.</h4>
            )
          }
        </TabPane>
      </TabContent> 
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
})

const mapStateToProps = createStructuredSelector({
  trips: selectAllTrips,
  loadingType: selectLoadingType,
  confirmedTrips: selectConfirmedTrips,
  completedTrips: selectCompletedTrips,
  archivedTrips: selectArchivedTrips,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripList);