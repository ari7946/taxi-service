import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Button, Popover, PopoverBody } from 'reactstrap';
import AdminTripStatusGroup from './admin-trip-status-group.component';
import './admin.styles.css';

const Trip = ({ trip }) => {

  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <ListGroupItem className="bg-grey-light-2 mb-3 trip-item">
      <p className="trip-list-info text-green-dark"><span className="trip-list-heading text-dark">name:</span> {trip.name}</p>
      <p className="trip-list-info text-green-dark"><span className="trip-list-heading text-dark">phone:</span> {trip.phone}</p>
      <p className="trip-list-info text-green-dark"><span className="trip-list-heading text-dark">email:</span> {trip.email}</p>
      <p className="trip-list-info text-green-dark"><span className="trip-list-heading text-dark">start address:</span> {trip.startAddress}</p>
      <p className="trip-list-info text-green-dark"><span className="trip-list-heading text-dark">destination:</span> {trip.endAddress}</p>

      <AdminTripStatusGroup trip={trip} />

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
            <ListGroupItem><span className="">Estimate: </span>${trip.price}</ListGroupItem>
            <ListGroupItem><span className="">Distance: </span> {trip.distance} miles</ListGroupItem>
            <ListGroupItem><span className="">Rate: </span> {trip.vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</ListGroupItem>
            <ListGroupItem><span className="">Vehicle: </span>{trip.vehicle}</ListGroupItem>
            <ListGroupItem><span className="">passengers: </span>{trip.vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </Popover>
    </ListGroupItem>
  )
}

export default Trip;