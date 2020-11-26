import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import TripNav from '../trip-nav/trip-nav.component';
import TripTabContent from '../trip-tab-content/trip-tab-content.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import '../trips.styles.css';
import { useAuth } from '../../../auth/use-auth';

import { getTrips } from '../../../redux/trips/trips.actions';
import { selectAllTrips, selectLoadingType } from '../../../redux/trips/trips.selectors';

const TripList = ({ getTrips, loadingType, trips }) => {
  const [activeTab, setActiveTab] = useState('viewAll');
  const { auth } = useAuth();

  useEffect(() => {
    getTrips();
  }, [auth])

  return (
    <Container fluid>
      {loadingType === 'getTrips' ? (
        <Spinner size="lg" className="text-grey-light-2" />
      ) : (
        <>
          <TripNav 
            setActiveTab={setActiveTab} 
            activeTab={activeTab}  
          />

          <TripTabContent 
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