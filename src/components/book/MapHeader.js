import React from 'react';
import { Badge } from 'reactstrap';

function MapHeader(props) {
  const { startAddress, endAddress } = props.state;
  const startHeading = <span className="address-heading-starting">Starting Point</span>;
  const destinationHeading = <span className="address-heading-destination">Destination</span>;

  return (
    <div className='mb-3'>
      {!startAddress && !endAddress && (
        <h4 className="mb-0 text-white map-heading">Please Select {startHeading} and {destinationHeading}</h4>
      )}

      {!startAddress && endAddress && (
        <h4 className="mb-0 text-white map-heading">Please Select {startHeading}</h4>
      )} 

      {startAddress && !endAddress && (
        <h4 className="mb-0 text-white map-heading">Please Select {destinationHeading}</h4>
      )}

      {startAddress && endAddress && (
        <h4 className="mb-9 text-white map-heading">Please submit the form to book a taxi</h4>
      )} 
    </div>
  )
}

export default MapHeader;