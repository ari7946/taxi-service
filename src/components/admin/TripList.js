import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import { Container, ListGroup, Spinner } from 'reactstrap';
import Trip from './Trip';
import { useTripsApi } from './TripsApi';

const TripList = (props) => {
  const { state } = useTripsApi();
  const [activeTab, setActiveTab] = useState('viewAll');

  return (
    <Container fluid>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={`
              ${activeTab === 'viewAll' && 'active'}
            `}
            onClick={() => setActiveTab('viewAll')}
          >
            All
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={`
              ${activeTab === 'viewConfirmed' && 'active'}
            `}
            onClick={() => setActiveTab('viewConfirmed')}
          >
            Confirmed
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={`
              ${activeTab === 'viewComplete' && 'active'}
            `}
            onClick={() => setActiveTab('viewCompleted')}
          >
            Completed
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={`
              ${activeTab === 'viewArchived' && 'active'}
            `}
            onClick={() => setActiveTab('viewArchived')}
          >
            Archived
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="viewAll">
          {state.loading 
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