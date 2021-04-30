import React from 'react';
import { ButtonGroup, Button, Spinner } from 'reactstrap';
import '../trips.styles.css';
import { connect } from 'react-redux';
import { deleteTrip, updateTrip } from '../../../redux/trips/trips.actions';

import { selectLoadingTrip } from '../../../redux/trips/trips.selectors';
import { selectAuthRole } from '../../../redux/auth/auth.selectors';

type TripStatus = 'confirm' | 'complete' | 'archive' | 'delete';

// props passed not from redux
interface OwnProps {
  tripId: number,
  tripStatus: TripStatus,
}

interface ReduxProps {
  updateTrip: (status: TripStatus, tripId: number) => any,
  loadingTrip: (status: TripStatus, tripId: number) => any,
  deleteTrip: (status: 'delete', tripId: number) => any,
  authRole: string
}

const TripStatus = ({ 
  tripId,
  tripStatus, 
  updateTrip, 
  deleteTrip, 
  loadingTrip, 
  authRole 
} : OwnProps & ReduxProps ) => {

  const spinner = <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
    className="mr-2"
  />
  return (
    <React.Fragment>
      {authRole === 'admin' ? (
        <ButtonGroup color="light">
          <Button
            className={`
              ${tripStatus === 'confirm' ? 'bg-green-light text-green-dark' : ''}
            `}
            onClick={() => updateTrip('confirm', tripId)}
          >
            {loadingTrip('confirm', tripId) && spinner}
            Confirm
          </Button>

          <Button 
            className={`
              ${tripStatus === 'complete' ? 'bg-green-dark' : ''}
            `}
            onClick={() => updateTrip('complete', tripId)}
          >
            {loadingTrip('complete', tripId) && spinner}
            Complete 
          </Button>

          <Button
            className={`
              ${tripStatus === 'archive' ? 'bg-yellow text-dark' : ''}
            `}
            onClick={() => updateTrip('archive', tripId)}
          >
            {loadingTrip('archive', tripId) && spinner}
            Archive
          </Button>

          <Button 
            onClick={() => deleteTrip('delete', tripId)}
          >
            {loadingTrip('delete', tripId) && spinner}
            Delete
          </Button>
        </ButtonGroup>
      ) : (
        <p className="trip-status-heading">Status: <span className="lead">{tripStatus}</span></p>
      )}
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTrip: (status: string, tripId: number) => dispatch(deleteTrip(status, tripId)),
  updateTrip: (status: string, tripId: number) => dispatch(updateTrip(status, tripId)),
})

const mapStateToProps = (state) => ({
  authRole: selectAuthRole(state),
  loadingTrip: (loadingType: string, loadingTripId: number) => 
    selectLoadingTrip(loadingTripId, loadingType)(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripStatus);