import React from 'react';

import { DefaultRootState, useDispatch, useSelector } from 'react-redux';

import { deleteTrip, updateTrip } from '../../redux/trips.actions';

import { selectLoadingTrip } from '../../redux/trips.selectors';
import { selectAuthRole } from '../../../auth/redux/auth.selectors';
import { TripStatus as TripStatusType } from '../../types/trips.types';

import { Spinner, Button } from '../../../_global/components';

import * as Styled from './trip-status.styles';

interface TripStatusProps {
  tripId: number;
  tripStatus: TripStatusType;
}

const TripStatus = function ({ tripId, tripStatus }: TripStatusProps) {
  const authRole = useSelector(selectAuthRole);
  const dispatch = useDispatch();

  // handleLoadingTrip useSelector passes in the state obj using a HOF (returns a function).
  // The returned function maintains closure over state.
  // When the returned function is invoked, it ultimatly resolves to a boolean
  // after checking if the loading status matches the id of the trip.
  const handleLoadingTrip = useSelector(
    (state: DefaultRootState) =>
      (tripId: number, tripStatus: TripStatusType): boolean =>
        selectLoadingTrip(tripId, tripStatus)(state)
  );

  // dispatch actions
  const handleUpdateTrip = (status: TripStatusType, tripId: number) => {
    dispatch(updateTrip(status, tripId));
  };
  const handleDeleteTrip = (status: TripStatusType, tripId: number) => {
    dispatch(deleteTrip(status, tripId));
  };

  return (
    <>
      {authRole === 'admin' ? (
        <Styled.ButtonGroup>
          <Button
            className={`
              ${tripStatus === 'confirm' ? 'bg-green-light' : ''}
            `}
            handleClick={() => handleUpdateTrip('confirm', tripId)}
          >
            {handleLoadingTrip(tripId, 'confirm') && <Spinner />}
            Confirm
          </Button>

          <Button
            className={`
              ${tripStatus === 'complete' ? 'bg-green-dark text-grey-light-2' : ''}
            `}
            handleClick={() => handleUpdateTrip('complete', tripId)}
          >
            {handleLoadingTrip(tripId, 'complete') && <Spinner />}
            Complete
          </Button>

          <Button
            className={`
              ${tripStatus === 'archive' ? 'bg-yellow' : ''}
            `}
            handleClick={() => handleUpdateTrip('archive', tripId)}
          >
            {handleLoadingTrip(tripId, 'archive') && <Spinner />}
            Archive
          </Button>

          <Button handleClick={() => handleDeleteTrip('delete', tripId)}>
            {handleLoadingTrip(tripId, 'delete') && <Spinner />}
            Delete
          </Button>
        </Styled.ButtonGroup>
      ) : (
        <p className="trip-status-heading">
          Status: <span className="lead">{tripStatus}</span>
        </p>
      )}
    </>
  );
};

export default TripStatus;
