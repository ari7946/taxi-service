import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import TripNav from '../trip-nav/trip-nav.component';
import TripTabContent from '../trip-tab-content/trip-tab-content.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getTrips } from '../../redux/trips.actions';
import { selectLoadingType } from '../../redux/trips.selectors';
import { selectAuthRole } from '../../../auth/redux/auth.selectors';

import { TabState, TripLoadingStatus } from '../../types/trips.types';


const TripList = ({ 
  getTrips, 
  loadingType, 
  authRole 
} : {
  getTrips: () => any,
  loadingType: TripLoadingStatus,
  authRole: string
}) => {
  const [activeTab, setActiveTab] = useState<TabState>('viewAll');

  useEffect(() => {
    getTrips();
  }, [authRole])

  return (
    <Container fluid>
      {loadingType === 'getTrips' ? (
        <Spinner size="lg" className="text-grey-light-2" />
      ) : (
        <div className="container-fluid">
          <TripNav 
            setActiveTab={setActiveTab} 
            activeTab={activeTab}  
          />

          <TripTabContent 
            activeTab={activeTab} 
          />
        </div>
      )}
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  getTrips: () => dispatch(getTrips())
})

const mapStateToProps = createStructuredSelector({
  authRole: selectAuthRole,
  loadingType: selectLoadingType,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripList);