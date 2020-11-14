import React from 'react';
import { Col, Row  } from 'reactstrap';
import './book-addresses.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectStartAddress, selectEndAddress } from '../../../redux/book/book.selectors';

const Addresses = ({ 
  startAddress, endAddress
}) => {
  return (
    <div className="mt-3">
      {!startAddress && !endAddress && (
        <div className="text-grey-light-2 mt-4 instructions">
          <p className="text-yellow">(Optional) Register or Login to track your trips</p>
          <ol>
            <li className="my-3">Provide a starting point and a destination</li>
            <li className="my-3">Select SEDAN or VAN</li>
            <li className="">Fill out the form to book a taxi</li>
          </ol>
        </div>
      )}

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