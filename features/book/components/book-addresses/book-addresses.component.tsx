import React from 'react';

import { useSelector } from 'react-redux';
import { selectStartAddress, selectEndAddress } from '../../redux/book.selectors';

import { BookAddressContainer } from './book-addresses.styles';

const BookAddresses = function () {
  const startAddress: string = useSelector(selectStartAddress);
  const endAddress: string = useSelector(selectEndAddress);

  return (
    <BookAddressContainer>
      {startAddress && (
        <div className="book-address" data-testid="addresses-starting-point">
          <h3 className="address-heading-starting">Starting Point</h3>
          <p>{startAddress}</p>
        </div>
      )}

      {endAddress && (
        <div className="book-address" data-testid="addresses-destination">
          <h3 className="address-heading-destination">Destination</h3>
          <p>{endAddress}</p>
        </div>
      )}
    </BookAddressContainer>
  );
};

export default BookAddresses;
