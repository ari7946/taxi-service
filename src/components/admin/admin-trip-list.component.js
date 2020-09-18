import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import AdminNav from './admin-nav.component';
import AdminTabContent from './admin-tab-content.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './admin.styles.css';

import { getTrips } from '../../redux/trips/trips.actions';
import { selectAllTrips, selectLoadingType, selectConfirmedTrips, selectCompletedTrips, selectArchivedTrips } from '../../redux/trips/trips.selectors';

const TripList = ({ getTrips }) => {
  const [activeTab, setActiveTab] = useState('viewAll');

  useEffect(() => {
    getTrips();
  }, [getTrips])
  
  return (
    <Container fluid>
      <AdminNav 
        setActiveTab={setActiveTab} 
        activeTab={activeTab}  
      />

      <AdminTabContent 
        activeTab={activeTab} 
      />
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