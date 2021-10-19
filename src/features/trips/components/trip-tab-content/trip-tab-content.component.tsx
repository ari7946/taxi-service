import React from 'react';
import { TabContent } from 'reactstrap';
import TabPane from '../trip-tab-pane/trip-tab-pane.component';
import { TabState, Trip } from '../../types/trips.types'

import { selectAllTrips, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../redux/trips.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


interface OwnProps {
  activeTab: TabState,
}

interface ReduxProps {
  allTrips: Trip[],
  confirmedTrips: Trip[],
  completedTrips: Trip[],
  archivedTrips: Trip[]
}

const TripTabContent = ({ 
  activeTab, 
  allTrips, 
  confirmedTrips, 
  completedTrips, 
  archivedTrips
} : OwnProps & ReduxProps ) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane 
        tabId={'viewAll'}
        trips={allTrips}
        tripStatus={''}
      />

      <TabPane 
        tabId={'viewConfirmed'}
        trips={confirmedTrips}
        tripStatus={'confirm'}
      />

      <TabPane 
        tabId={'viewCompleted'}
        trips={completedTrips}
        tripStatus={'complete'}
      />

      <TabPane 
        tabId={'viewArchived'}
        trips={archivedTrips}
        tripStatus={'archive'}
      />
    </TabContent> 
  )
}

const mapStateToProps = createStructuredSelector({
  allTrips: selectAllTrips,
  confirmedTrips: selectConfirmedTrips,
  completedTrips: selectCompletedTrips,
  archivedTrips: selectArchivedTrips,
});

export default connect(mapStateToProps)(TripTabContent);