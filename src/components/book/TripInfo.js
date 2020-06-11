import React, { useState } from 'react';
import { Button, Popover, PopoverBody, ListGroup, ListGroupItem } from 'reactstrap';
import { useBookApi } from './BookApi';

const TripInfoButton = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const { state } = useBookApi();
  const {  
    // map
    distance,
    startAddress,
    endAddress,
    // fields
    price,
    vehicle,
    dropFee
  } = state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button className="trip-info-button px-4 bg-grey-light-2 text-dark" id="Popover1" type="button">
        Trip Details
      </Button>

      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverBody className="bg-grey-light-2 font-monospaced">
          <ListGroup>
            <ListGroupItem><span className="font-weight-bold">Starting Point: </span>{startAddress} </ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Destination: </span> {endAddress} </ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Distance: </span> {distance} miles</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Rate: </span> {vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Vehicle: </span>{vehicle}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">passengers: </span>{vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</ListGroupItem>
            <ListGroupItem><span className="font-weight-bold">Estimate: </span>${total}</ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default TripInfoButton;