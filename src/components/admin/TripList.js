import React, { useState } from 'react';
import { Container, ListGroup, Spinner, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Trip from './Trip';
import { useTripsApi } from './TripsApi';

const TripList = () => {
  const { state } = useTripsApi();
  const [activeTab, setActiveTab] = useState('viewAll');

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
          {state.loadingType === 'getTrips'
            ? <Spinner color="light" />
            : state.trips.length > 0 ? (
              <ListGroup>
                {state.trips.map(trip =>
                  <Trip
                    key={trip.id}
                    trip={trip}
                  />
                )}
              </ListGroup>
            ) : (
              <h4 className="text-green-light">There's currently no trips pending.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewConfirmed">
            {state.trips.length > 0 ? (
              <ListGroup>
                {state.trips.map(trip => {
                  if (trip.status === 'confirm') {
                    return <Trip
                      key={trip.id}
                      trip={trip}
                    />
                  }
                  return null
                })}
              </ListGroup>    
            ) : (
              <h4 className="text-green-light">There's no confirmed trips.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewCompleted">
            {state.trips.length > 0 ? (
              <ListGroup>
                {state.trips.map(trip => {
                  if (trip.status === 'complete') {
                    return <Trip
                      key={trip.id}
                      trip={trip}
                    />
                  }
                  return null
                })}
              </ListGroup>    
            ) : (
              <h4 className="text-green-light">There's no completed trips.</h4>
            )
          }
        </TabPane>

        <TabPane tabId="viewArchived">
            {state.trips.length > 0 ? (
              <ListGroup>
                {state.trips.map(trip => {
                  if (trip.status === 'archive') {
                    return <Trip
                      key={trip.id}
                      trip={trip}
                    />
                  }
                  return null
                })}
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

export default TripList;