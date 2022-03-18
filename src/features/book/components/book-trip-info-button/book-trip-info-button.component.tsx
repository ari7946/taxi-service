import React, { useState } from 'react';
// @ts-ignore
import { Button, Popover, PopoverBody, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import './book-trip-info-button.styles.css';

import { createStructuredSelector } from 'reselect';
import {
  selectDistance,
  selectStartAddress,
  selectEndAddress,
  selectValidEstimate,
  selectVehicle,
  selectDropFee,
} from '../../redux/book.selectors';

const TripInfoButton = ({
  distance,
  startAddress,
  endAddress,
  estimate,
  vehicle,
}: {
  distance: number;
  startAddress: string;
  endAddress: string;
  estimate: number;
  vehicle: string;
}): React.ReactElement => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  // const total = (Number(price) + dropFee).toFixed(2);
  // const discount = (total * 0.20).toFixed(2);
  // const discountTotal = (total - discount).toFixed(2);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button
        className="trip-info-button px-4 bg-green-light text-dark mt-2"
        id="Popover1"
        type="button">
        TRIP DETAILS
      </Button>

      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <div
          className="text-right py-2 px-3 font-weight-bold bg-light"
          onClick={toggle}
          style={{ cursor: 'pointer' }}>
          X
        </div>
        <PopoverBody className="bg-grey-light-2 font-monospaced">
          <ListGroup>
            <ListGroupItem>
              <span className="font-weight-bold">Starting Point: </span>
              {startAddress}{' '}
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">Destination: </span> {endAddress}{' '}
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">Distance: </span> {distance} miles
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">Rate: </span>{' '}
              {vehicle === 'sedan' ? '$2.95 per mile' : '$3.95 per mile'}
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">Vehicle: </span>
              {vehicle}
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">passengers: </span>
              {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}
            </ListGroupItem>
            <ListGroupItem>
              <span className="font-weight-bold">Estimate: </span>${estimate}
            </ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </Popover>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  distance: selectDistance,
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
  estimate: selectValidEstimate,
  vehicle: selectVehicle,
  dropFee: selectDropFee,
});

export default connect(mapStateToProps)(TripInfoButton);
