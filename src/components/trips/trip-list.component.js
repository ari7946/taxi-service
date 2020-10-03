import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import AdminNav from './trip-nav.component';
import AdminTabContent from './trip-tab-content.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './trips.styles.css';

import { getTrips } from '../../redux/trips/trips.actions';
import { selectAllTrips, selectLoadingType } from '../../redux/trips/trips.selectors';

const TripList = ({ getTrips, loadingType }) => {
  const [activeTab, setActiveTab] = useState('viewAll');

  useEffect(() => {
    getTrips();
  }, [])
  console.log('hello')
  return (
    <Container fluid>

      {loadingType === 'getTrips' ? (
        <Spinner size="lg" className="text-grey-light-2" />
      ) : (
        <>
          <AdminNav 
            setActiveTab={setActiveTab} 
            activeTab={activeTab}  
          />

          <AdminTabContent 
            activeTab={activeTab} 
          />
        </>
      )}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
})

const mapStateToProps = createStructuredSelector({
  trips: selectAllTrips,
  loadingType: selectLoadingType,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripList);