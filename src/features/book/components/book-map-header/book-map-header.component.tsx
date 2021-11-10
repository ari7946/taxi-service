import React from 'react';
import { useSelector } from 'react-redux';

import { selectStartAddress, selectEndAddress } from '../../redux/book.selectors';

import { MapHeaderContainer } from './book-map-header.styles'

const MapHeader = () : React.ReactElement => {
  const startAddress: string = useSelector(selectStartAddress);
  const endAddress: string = useSelector(selectEndAddress);

  const startHeading = <span className="address-heading-starting">Starting Point</span>;
  const destinationHeading = <span className="address-heading-destination">Destination</span>;

  return (
    <MapHeaderContainer data-testid='mapheader-container'>
      {!startAddress && !endAddress && (
        <h4 
          data-testid="startAddress-and-endAddress-invalid" 
          className="map-heading">Please Select {startHeading} and {destinationHeading}
        </h4>
      )}

      {!startAddress && endAddress && (
        <h4 
          data-testid="startAddress-invalid" 
          className="map-heading">Please Select {startHeading}
        </h4>
      )} 

      {startAddress && !endAddress && (
        <h4 
          data-testid="endAddress-invalid" 
          className="map-heading">Please Select {destinationHeading}
        </h4>
      )}

      {startAddress && endAddress && (
        <h4 
          data-testid="startAddress-and-endAddress-valid" 
          className="map-heading">Please submit the form to book a taxi
        </h4>
      )} 
    </MapHeaderContainer>
  )
}

export default MapHeader;