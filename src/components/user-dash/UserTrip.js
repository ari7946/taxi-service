import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Button, Popover, PopoverBody, Spinner } from 'reactstrap';

const Trip = (props) => {
  const {name, phone, email, startAddress, endAddress, distance, vehicle, price} = props.trip;
  const trip = { name, phone, email, startAddress, endAddress, distance, vehicle, price };

  //TODO fix total bug 
  const total = (Number(trip.price) + 10).toFixed(2);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <ListGroupItem className="bg-grey-light-2 mb-3 trip-item">
      <p className="trip-list-info"><span className="trip-list-heading">name:</span> {trip.name}</p>
      <p className="trip-list-info"><span className="trip-list-heading">phone:</span> {trip.phone}</p>
      <p className="trip-list-info"><span className="trip-list-heading">email:</span> {trip.email}</p>
      <p className="trip-list-info"><span className="trip-list-heading">start address:</span> {trip.startAddress}</p>
      <p className="trip-list-info"><span className="trip-list-heading">destination:</span> {trip.endAddress}</p>

      <Button
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