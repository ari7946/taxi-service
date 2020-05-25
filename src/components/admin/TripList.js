import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

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
              <h4 className="text-green-light">There's currently no trips pending</h4>
            )
          }
        </TabPane>
        <TabPane tabId="viewConfirmed">
          <div>Confirmed</div>
        </TabPane>
      </TabContent>
    </Container>
  )
}

export default TripList;