import React from 'react';
import { Col, Row  } from 'reactstrap';
import './book.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectStartAddress, selectEndAddress } from '../../redux/book/book.selectors';

const Addresses = ({ 
  startAddress, endAddress
}) => {
  return (
    <div className="mt-3">
      {startAddress && (
        <div className="book-address">
            <h3 className="address-heading-starting">Starting Point</h3>
          <p>
            {startAddress}
          </p>
        </div>
      )}

      {endAddress && (
        <div className="book-address">
          <h3 className='address-heading-destination'>Destination</h3>
          <p>
            {endAddress}
          </p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
})

export default connect(mapStateToProps)(Addresses);