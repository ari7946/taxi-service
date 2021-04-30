import React from 'react';
import { TabContent } from 'reactstrap';
import TabPane from '../trip-tab-pane/trip-tab-pane.component';
import '../trips.styles.css';

import { selectAllTrips, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../../redux/trips/trips.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const TripTabContent = ({ 
  activeTab, allTrips, confirmedTrips, completedTrips, archivedTrips
}) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane 
        tabId={'viewAll'}
        trips={allTrips}
        tripStatus={'trips'}
      />

      <TabPane 
        tabId={'viewConfirmed'}
        trips={confirmedTrips}
        tripStatus={'confirmed'}
      />

      <TabPane 
        tabId={'viewCompleted'}
        trips={completedTrips}
        tripStatus={'completed'}
      />

      <TabPane 
        tabId={'viewArchived'}
        trips={archivedTrips}
        tripStatus={'archived'}
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