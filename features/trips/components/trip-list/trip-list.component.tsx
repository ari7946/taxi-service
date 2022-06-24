import React, { useState, useEffect } from 'react';

import { Spinner } from '../../../_global/components';
import TripNav from '../trip-nav/trip-nav.component';
import TripTabContent from '../trip-tab-content/trip-tab-content.component';

import { useSelector, useDispatch } from 'react-redux';
import { getTrips } from '../../redux/trips.actions';
import { selectLoadingType } from '../../redux/trips.selectors';
import { selectAuthRole } from '../../../auth/redux/auth.selectors';

import { TabState, TripLoadingStatus } from '../../types/trips.types';
import { AuthRole } from '@features/auth/types/auth.types';

import * as Styled from './trip-list.styles';

const TripList = () => {
  const [activeTab, setActiveTab] = useState<TabState>('all');
  const loadingType = useSelector<TripLoadingStatus>(selectLoadingType);
  const authRole = useSelector<AuthRole>(selectAuthRole);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrips());
  }, [authRole]);

  return (
    <Styled.TripListContainer>
      {loadingType === 'getTrips' ? (
        <Spinner />
      ) : (
        <>
          <TripNav setActiveTab={setActiveTab} activeTab={activeTab} />
          <TripTabContent activeTab={activeTab} />
        </>
      )}
    </Styled.TripListContainer>
  );
};

export default TripList;
