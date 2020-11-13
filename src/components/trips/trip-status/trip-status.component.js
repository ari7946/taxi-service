import React from 'react';
import { ButtonGroup, Button, Spinner } from 'reactstrap';
import '../trips.styles.css';
import { connect } from 'react-redux';
import { useAuth } from '../../../auth/use-auth';
import { deleteTrip, updateTrip } from '../../../redux/trips/trips.actions';

import { selectLoadingTrip } from '../../../redux/trips/trips.selectors';

const TripStatus = ({ trip, updateTrip, deleteTrip, loadingTrip }) => {
  const { auth } = useAuth();

  const spinner = <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
    className="mr-2"
  />

  return (
    <>
      {auth === 'admin' ? (
        <ButtonGroup color="light">
          <Button
            className={`
              ${trip.status === 'confirm' ? 'bg-green-light text-green-dark' : ''}
            `}
            onClick={() => updateTrip('confirm', trip.id)}
          >
            {loadingTrip('confirm') && spinner}
            Confirm
          </Button>

          <Button 
            className={`
              ${trip.status === 'complete' ? 'bg-green-dark' : ''}
            `}
            onClick={() => updateTrip('complete', trip.id)}
          >
            {loadingTrip('complete') && spinner}
            Complete 
          </Button>

          <Button
            className={`
              ${trip.status === 'archive' ? 'bg-yellow text-dark' : ''}
            `}
            onClick={() => updateTrip('archive', trip.id)}
          >
            {loadingTrip('archive') && spinner}
            Archive
          </Button>

          <Button 
            onClick={() => deleteTrip('delete', trip.id)}
          >
            {loadingTrip('delete') && spinner}
            Delete
          </Button>
        </ButtonGroup>
      ) : (
        <p className="trip-status-heading">Status: <span className="lead">{trip.status}</span></p>
      )}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTrip: (status, tripId) => dispatch(deleteTrip(status, tripId)),
  updateTrip: (status, tripId) => dispatch(updateTrip(status, tripId)),
})

const mapStateToProps = (state, ownProps) => ({
  loadingTrip: (loadingType) => selectLoadingTrip(ownProps.trip.id, loadingType)(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(TripStatus);