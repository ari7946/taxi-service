import React, { useState} from 'react';
import {TabContent, TabPane, Spinner, ListGroup } from 'reactstrap';
import Trip from './admin-trip.component';
import './admin.styles.css';

import { selectAllTrips, selectLoadingType, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../redux/trips/trips.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const AdminTabContent = ({ 
  activeTab, trips, loadingType, confirmedTrips, completedTrips, archivedTrips
}) => {
  return (
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
  )
}

const mapStateToProps = createStructuredSelector({
  trips: selectAllTrips,
  loadingType: selectLoadingType,
  confirmedTrips: selectConfirmedTrips,
  completedTrips: selectCompletedTrips,
  archivedTrips: selectArchivedTrips,
});

export default connect(mapStateToProps)(AdminTabContent);