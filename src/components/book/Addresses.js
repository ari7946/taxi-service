import React from 'react';
import { ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';
import { connect } from 'react-redux';

const Addresses = ({ startAddress, endAddress }) => {
  console.log('start', startAddress)
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

const mapStateToProps = state => {
  const { startAddress, endAddress } = state.book;
  return { startAddress, endAddress };
}

export default connect(mapStateToProps)(Addresses);