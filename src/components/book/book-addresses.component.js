import React from 'react';
import { Col, Row  } from 'reactstrap';
import './book.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectStartAddress, selectEndAddress } from '../../redux/book/book.selectors';
{/* <p className="h2 lead text-white">
          Please use the map above to provide a starting point and a destination.<br />
          <br />
          You may choose the type of cab you require and the estimate will change accordingly.
          <br /><br />
          After receiving an estimate, you may fill out and submit the form to book a taxi. 
          If prefered, give us a call at any time and we'll be happy to assist you.
        </p> */}

const Addresses = ({ 
  startAddress, endAddress
}) => {
  return (
    <div className="mt-3">
      {!startAddress && !endAddress && (
        <div className="text-grey-light-2 mt-4 instructions">
          <ol>
            <li className="my-3">Provide a starting point and a destination</li>
            <li className="my-3">Choose the type of taxi you require</li>
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