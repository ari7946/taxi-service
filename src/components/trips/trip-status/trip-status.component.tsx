import React from 'react';
import { ButtonGroup, Button, Spinner } from 'reactstrap';
import '../trips.styles.css';
import { connect, useDispatch, useSelector } from 'react-redux';

import { deleteTrip, updateTrip } from '../../../redux/trips/trips.actions';

import { selectLoadingTrip } from '../../../redux/trips/trips.selectors';
import { selectAuthRole } from '../../../redux/auth/auth.selectors';

//! should probably move this to different file :/
const SpinnerComponent = () => <Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
  className="mr-2"
/>

type TripStatus = 'confirm' | 'complete' | 'archive' | 'delete';

// props passed not from redux
interface TripStatusProps {
  tripId: number,
  tripStatus: TripStatus,
}

const TripStatus = ({ 
  tripId,
  tripStatus, 
} : TripStatusProps ) => {
  // auth useSelector hook
  const authRole = useSelector(selectAuthRole);
  // dispatch hook
  const dispatch = useDispatch();

  // handleLoadingTrip useSelector passes in the state obj using a HOF (returns a function).
  // The returned function maintains closure over state.
  // When the returned function is invoked, it ultimatly resolves to a boolean
  // after checking if the loading status matches the id of the trip.
  const handleLoadingTrip = useSelector(state => {
    return (tripId: number, tripStatus: TripStatus): boolean => {
      return selectLoadingTrip(tripId, tripStatus)(state)
    }
  })

  // dispatch actions
  const handleUpdateTrip = (status: TripStatus, tripId: number) => {
    dispatch(updateTrip(status, tripId));
  }
  const handleDeleteTrip = (status: TripStatus, tripId: number) => {
    dispatch(deleteTrip(status, tripId));
  }
  
  return (
    <React.Fragment>
      {authRole === 'admin' ? (
        <ButtonGroup color="light">
          <Button
            className={`
              ${tripStatus === 'confirm' ? 'bg-green-light text-green-dark' : ''}
            `}
            onClick={() => handleUpdateTrip('confirm', tripId)}
          >
            {handleLoadingTrip(tripId, 'confirm') && <SpinnerComponent />}
            Confirm
          </Button>

          <Button 
            className={`
              ${tripStatus === 'complete' ? 'bg-green-dark' : ''}
            `}
            onClick={() => handleUpdateTrip('complete', tripId)}
          >
            {handleLoadingTrip(tripId, 'complete') && <SpinnerComponent />}
            Complete 
          </Button>

          <Button
            className={`
              ${tripStatus === 'archive' ? 'bg-yellow text-dark' : ''}
            `}
            onClick={() => handleUpdateTrip('archive', tripId)}
          >
            {handleLoadingTrip(tripId, 'archive') && <SpinnerComponent />}
            Archive
          </Button>

          <Button 
            onClick={() => handleDeleteTrip('delete', tripId)}
          >
            {handleLoadingTrip(tripId, 'delete') && <SpinnerComponent /> }
            Delete
          </Button>
        </ButtonGroup>
      ) : (
        <p className="trip-status-heading">Status: <span className="lead">{tripStatus}</span></p>
      )}
    </React.Fragment>
  )
}

// const mapDispatchToProps = dispatch => ({
//   deleteTrip: (status: string, tripId: number) => dispatch(deleteTrip(status, tripId)),
//   updateTrip: (status: string, tripId: number) => dispatch(updateTrip(status, tripId)),
// })

// const mapStateToProps = (state) => ({
//   authRole: selectAuthRole(state),
//   loadingTrip: (loadingType: string, loadingTripId: number) => 
//     selectLoadingTrip(loadingTripId, loadingType)(state),
// })

export default TripStatus;