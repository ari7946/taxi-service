import React from 'react';
import { ButtonGroup, Button, Spinner } from 'reactstrap';
import './admin.styles.css';
import { connect } from 'react-redux';
import { deleteTrip, updateTrip } from '../../redux/trips/trips.actions';

import { selectLoadingType, selectLoadingTripId, selectLoadingTrip } from '../../redux/trips/trips.selectors';

const AdminTripStatusGroup = ({ trip, updateTrip, deleteTrip, isLoading }) => {

  const spinner = <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
    className="mr-2"
  />

  return (
    <ButtonGroup color="light">
      <Button
        className={`
          ${trip.status === 'confirm' ? 'bg-green-light text-green-dark' : ''}
        `}
        onClick={() => updateTrip('confirm', trip.id)}
      >
        {isLoading('confirm') && spinner}
        Confirm
      </Button>

      <Button 
        className={`
          ${trip.status === 'complete' ? 'bg-green-dark' : ''}
        `}
        onClick={() => updateTrip('complete', trip.id)}
      >
        {isLoading('complete') && spinner}
        Complete 
      </Button>

      <Button
        className={`
          ${trip.status === 'archive' ? 'bg-yellow text-dark' : ''}
        `}
        onClick={() => updateTrip('archive', trip.id)}
      >
        {isLoading('archive') && spinner}
        Archive
      </Button>

      <Button 
        onClick={() => deleteTrip('delete', trip.id)}
      >
        {isLoading('delete') && spinner}
        Delete
      </Button>
    </ButtonGroup>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTrip: (status, tripId) => dispatch(deleteTrip(status, tripId)),
  updateTrip: (status, tripId) => dispatch(updateTrip(status, tripId)),
})

const mapStateToProps = (state, ownProps) => ({
  isLoading: (loadingType) => selectLoadingTrip(ownProps.trip.id, loadingType)(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminTripStatusGroup);