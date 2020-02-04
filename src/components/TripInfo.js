import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody, ListGroup, ListGroupItem } from 'reactstrap';

const TripInfoButton = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const {
    // map
    distance,
    startAddress,
    endAddress,
    // fields
    price,
    name,
    comments,
    phone,
    email,
    date,
    time,
    vehicle,
    dropFee,
  } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button id="Popover1" type="button">
        View Trip Details
      </Button>

      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Trip Details</PopoverHeader>
        <PopoverBody>
          <ListGroup>
            <ListGroupItem>Starting Point: {startAddress} </ListGroupItem>
            <ListGroupItem>Destination: {endAddress} </ListGroupItem>
            <ListGroupItem>Distance: {distance} miles</ListGroupItem>
            <ListGroupItem>Rate: {vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</ListGroupItem>
            <ListGroupItem>Estimate: ${total}</ListGroupItem>
            <ListGroupItem>Vehicle: {vehicle}</ListGroupItem>
            <ListGroupItem>passengers: {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default TripInfoButton;