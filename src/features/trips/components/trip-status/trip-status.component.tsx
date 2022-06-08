import React from 'react';
import { Spinner } from 'reactstrap';

import Button from '../../../_global/components/button/button.component';

import { DefaultRootState, useDispatch, useSelector } from 'react-redux';

import { deleteTrip, updateTrip } from '../../redux/trips.actions';

import { selectLoadingTrip } from '../../redux/trips.selectors';
import { selectAuthRole } from '../../../auth/redux/auth.selectors';
import { TripStatus as TripStatusType } from '../../types/trips.types';

import * as Styled from './trip-status.styles';

//! should probably move this to different file :/
const SpinnerComponent = function () {
  return (
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2"
    />
  );
};

//! Important note: This component has been refactored to redux hooks for trial

// props passed not from redux
interface TripStatusProps {
  tripId: number;
  tripStatus: TripStatusType;
}

const TripStatus = function ({ tripId, tripStatus }: TripStatusProps) {
  // auth useSelector hook
  const authRole = useSelector(selectAuthRole);
  // dispatch hook
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
            handleClick={() => handleUpdateTrip('confirm', tripId)}>
            {handleLoadingTrip(tripId, 'confirm') && <SpinnerComponent />}
            Confirm
          </Button>

          <Button
            className={`
              ${tripStatus === 'complete' ? 'bg-green-dark text-grey-light-2' : ''}
            `}
            handleClick={() => handleUpdateTrip('complete', tripId)}>
            {handleLoadingTrip(tripId, 'complete') && <SpinnerComponent />}
            Complete
          </Button>

          <Button
            className={`
              ${tripStatus === 'archive' ? 'bg-yellow' : ''}
            `}
            handleClick={() => handleUpdateTrip('archive', tripId)}>
            {handleLoadingTrip(tripId, 'archive') && <SpinnerComponent />}
            Archive
          </Button>

          <Button handleClick={() => handleDeleteTrip('delete', tripId)}>
            {handleLoadingTrip(tripId, 'delete') && <SpinnerComponent />}
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
