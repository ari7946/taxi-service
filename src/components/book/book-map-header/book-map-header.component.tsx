import React from 'react';
import { connect } from 'react-redux';
// import './book-map-header.styles.css';

import { createStructuredSelector } from 'reselect';
import { selectStartAddress, selectEndAddress } from '../../../redux/book/book.selectors';

import { MapHeaderContainer } from './book-map-header.styles'

function MapHeader({ 
  startAddress, 
  endAddress 
}: {
  startAddress: string,
  endAddress: string
}): React.ReactElement {
  const startHeading = <span className="address-heading-starting">Starting Point</span>;
  const destinationHeading = <span className="address-heading-destination">Destination</span>;

  return (
    <MapHeaderContainer>
      {!startAddress && !endAddress && (
        <h4 className="map-heading">Please Select {startHeading} and {destinationHeading}</h4>
      )}

      {!startAddress && endAddress && (
        <h4 className="map-heading">Please Select {startHeading}</h4>
      )} 

      {startAddress && !endAddress && (
        <h4 className="map-heading">Please Select {destinationHeading}</h4>
      )}

      {startAddress && endAddress && (
        <h4 className="map-heading">Please submit the form to book a taxi</h4>
      )} 
    </MapHeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
})

export default connect(mapStateToProps)(MapHeader);