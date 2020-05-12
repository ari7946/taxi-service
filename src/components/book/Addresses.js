import React from 'react';
import { Badge, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';

function Addresses(props) {
  const { startAddress, endAddress } = props.state;

  return (
    <div>
      <ListGroup flush>
      {startAddress && (
          <ListGroupItem className="book-address">
            <ListGroupItemHeading className="address-heading-starting">Starting Point</ListGroupItemHeading>
          <ListGroupItemText>
            <span className="monospaced">{startAddress}</span>
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

export default Addresses;