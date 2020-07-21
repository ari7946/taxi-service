import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button, Popover, PopoverBody, Spinner  } from 'reactstrap';
// import { useTripsApi } from './TripsApi';
import { connect } from 'react-redux';
import { removeTrip, updateTrip } from '../../redux/trips/trips.actions';

import { createStructuredSelector } from 'reselect';

import { selectLoadingType, selectLoadingTripId } from '../../redux/trips/trips.selectors';

const Trip = ({ trip, loadingTripId, loadingType, updateTrip, removeTrip }) => {

  //TODO fix total bug 
  const total = (Number(trip.price) + 10).toFixed(2);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const isLoading = (status, id) => {
    return loadingType === status && loadingTripId === id;
  };

  const spinner = <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
    className="mr-2"
  />;

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <ListGroupItem className="bg-grey-light-2 mb-3 trip-item">
      <p className="trip-list-info"><span className="trip-list-heading">name:</span> {trip.name}</p>
      <p className="trip-list-info"><span className="trip-list-heading">phone:</span> {trip.phone}</p>
      <p className="trip-list-info"><span className="trip-list-heading">email:</span> {trip.email}</p>
      <p className="trip-list-info"><span className="trip-list-heading">start address:</span> {trip.startAddress}</p>
      <p className="trip-list-info"><span className="trip-list-heading">destination:</span> {trip.endAddress}</p>

      <ButtonGroup color="light">
        <Button
          className={`
            ${trip.status === 'confirm' ? 'bg-green-light text-green-dark' : ''}
          `}
          onClick={() => updateTrip('confirm', trip.id)}
        >
          {isLoading('confirm', trip.id) && spinner}
          Confirm
        </Button>

        <Button 
          className={`
            ${trip.status === 'complete' ? 'bg-green-dark' : ''}
          `}
          onClick={() => updateTrip('complete', trip.id)}
        >
          {isLoading('complete', trip.id) && spinner}
          Complete 
        </Button>

        <Button
          className={`
            ${trip.status === 'archive' ? 'btn-warning' : ''}
          `}
          onClick={() => updateTrip('archive', trip.id)}
        >
          {isLoading('archive', trip.id) && spinner}
          Archive
        </Button>

        <Button onClick={() => removeTrip(trip.id)}>Delete</Button>
      </ButtonGroup>

      <Button
        className="trip-details"
        color="secondary"
        id={"Popover-" + trip.id}
        type="button"
      >
        Trip Details
      </Button>
      <Popover
        placement='bottom'
        isOpen={popoverOpen}
        target={"Popover-" + trip.id}
        toggle={toggle}
      >
        <PopoverBody>
          <ListGroup>
            <ListGroupItem><span className="font-weight-bold">Estimate: </span>${total}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Distance: </span> {trip.distance} miles</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Rate: </span> {trip.vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Vehicle: </span>{trip.vehicle}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">passengers: </span>{trip.vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </Popover>
    </ListGroupItem>
  )
}

const mapDispatchToProps = dispatch => ({
  removeTrip: (tripId) => dispatch(removeTrip(tripId)),
  updateTrip: (status, tripId) => dispatch(updateTrip(status, tripId)),
})

const mapStateToProps = createStructuredSelector({
  loadingType: selectLoadingType,
  loadingTripId: selectLoadingTripId
})

export default connect(mapStateToProps, mapDispatchToProps)(Trip);