import React from 'react';
import { TabContent } from 'reactstrap';
import AdminTabPane from './trip-tab-pane.component';
import './trips.styles.css';

import { selectAllTrips, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../redux/trips/trips.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const AdminTabContent = ({ 
  activeTab, allTrips, confirmedTrips, completedTrips, archivedTrips
}) => {
  return (
    <TabContent activeTab={activeTab}>
      <AdminTabPane 
        tabId={'viewAll'}
        trips={allTrips}
        tripStatus={'trips'}
      />

      <AdminTabPane 
        tabId={'viewConfirmed'}
        trips={confirmedTrips}
        tripStatus={'confirmed'}
      />

      <AdminTabPane 
        tabId={'viewCompleted'}
        trips={completedTrips}
        tripStatus={'completed'}
      />

      <AdminTabPane 
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

export default connect(mapStateToProps)(AdminTabContent);