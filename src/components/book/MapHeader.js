import React from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';
import VehicleType from './VehicleType';

function MapHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const { dispatch } = props.dispatch;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  return (
    <div className='mb-3'>
      {!startAddress && !endAddress && (
        <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
      )}

      {!startAddress && endAddress && (
        <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge></h4>
      )} 

      {startAddress && !endAddress && (
        <h4 className="mb-0">Please Select <Badge color="danger">Destination</Badge></h4>
      )}

      {startAddress && endAddress && (
        <h4><Badge color="success">Thank you</Badge> Please submit the form to book a taxi</h4>
      )} 
    </div>
  )
}

export default MapHeader;