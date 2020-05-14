import React, { useState } from 'react';
import { ListGroup, ListGroupItem, ButtonGroup, Button, Popover, PopoverBody  } from 'reactstrap';

const Trip = (props) => {
  const { trip, dispatch } = props;
  //TODO fix total bug 
  const total = (Number(trip.price) + 10).toFixed(2);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <ListGroupItem className="bg-grey-light-2 mb-3">
      <p><span className="trip-list-heading">name:</span> {trip.name}</p>
      <p><span className="trip-list-heading">phone:</span> {trip.phone}</p>
      <p><span className="trip-list-heading">email:</span> {trip.email}</p>
      <p><span className="trip-list-heading">start address:</span> {trip.startAddress}</p>
      <p><span className="trip-list-heading">destination:</span> {trip.endAddress}</p>

      <ButtonGroup color="light">
        <Button
          className={`
            ${trip.status === 'confirm' ? 'bg-green-light text-green-dark' : null}
          `}
          onClick={() => props.updateTrips('confirm', trip.id)}
        >
          Confirm
        </Button>
        <Button 
          className={`
            ${trip.status === 'complete' ? 'bg-green-dark' : null}
          `}
          onClick={() => props.updateTrips('complete', trip.id)}
        >
          Complete 
        </Button>
        <Button onClick={() => props.removeTrip(trip.id)}>Delete</Button>
      </ButtonGroup>

      <Button
        className="ml-3"
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

export default Trip;