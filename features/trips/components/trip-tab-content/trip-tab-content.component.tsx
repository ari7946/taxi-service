import React from 'react';

import TabPane from '../trip-tab-pane/trip-tab-pane.component';
import { TabState, Trip } from '../../types/trips.types';

import {
  selectAllTrips,
  selectConfirmedTrips,
  selectCompletedTrips,
  selectArchivedTrips,
} from '../../redux/trips.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as Styled from './trip-tab-content.styles';

interface OwnProps {
  activeTab: TabState;
}

interface ReduxProps {
  allTrips: Trip[];
  confirmedTrips: Trip[];
  completedTrips: Trip[];
  archivedTrips: Trip[];
}

const TripTabContent = ({
  activeTab,
  allTrips,
  confirmedTrips,
  completedTrips,
  archivedTrips,
}: OwnProps & ReduxProps) => {
  return (
    <Styled.TabContentWrapper>
      {activeTab === 'all' && <TabPane trips={allTrips} activeTab={activeTab} />}

      {activeTab === 'confirmed' && <TabPane trips={confirmedTrips} activeTab={activeTab} />}

      {activeTab === 'completed' && <TabPane trips={completedTrips} activeTab={activeTab} />}

      {activeTab === 'archived' && <TabPane trips={archivedTrips} activeTab={activeTab} />}
    </Styled.TabContentWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  allTrips: selectAllTrips,
  confirmedTrips: selectConfirmedTrips,
  completedTrips: selectCompletedTrips,
  archivedTrips: selectArchivedTrips,
});

export default connect(mapStateToProps)(TripTabContent);
