import React from 'react';
import { Badge } from 'reactstrap';

function MapHeader(props) {
  const { startAddress, endAddress } = props.state;

  return (
    <div className='mb-3'>
      {!startAddress && !endAddress && (
        <h4 className="mb-0 text-white">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
      )}

      {!startAddress && endAddress && (
        <h4 className="mb-0 text-white">Please Select <Badge color="dark">Starting Point</Badge></h4>
      )} 

      {startAddress && !endAddress && (
        <h4 className="mb-0 text-white">Please Select <Badge color="danger">Destination</Badge></h4>
      )}

      {startAddress && endAddress && (
        <h4 className='mb-9 text-white'><Badge color="success">Thank you</Badge> Please submit the form to book a taxi</h4>
      )} 
    </div>
  )
}

export default MapHeader;