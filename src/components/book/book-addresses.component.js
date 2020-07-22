import React from 'react';
import { ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';
import './book.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectStartAddress, selectEndAddress } from '../../redux/book/book.selectors';

const Addresses = ({ startAddress, endAddress }) => {
  return (
    <div>
      <ListGroup flush>
        {startAddress && (
            <ListGroupItem className="book-address">
              <ListGroupItemHeading className="address-heading-starting">Starting Point</ListGroupItemHeading>
            <ListGroupItemText>
              {startAddress}
            </ListGroupItemText>
          </ListGroupItem>
        )}

        {endAddress && (
            <ListGroupItem className="book-address">
              <ListGroupItemHeading className='address-heading-destination'>Destination</ListGroupItemHeading>
              <ListGroupItemText>
                {endAddress}
              </ListGroupItemText>
            </ListGroupItem>
        )}
      </ListGroup>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  startAddress: selectStartAddress,
  endAddress: selectEndAddress,
})

export default connect(mapStateToProps)(Addresses);