import React from 'react';
import { Badge, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';

function Addresses(props) {
  const { startAddress, endAddress } = props.state;

  return (
    <div>
      <ListGroup flush>
      {startAddress && (
          <ListGroupItem className="book-address">
            <ListGroupItemHeading><Badge color="dark">Starting Point</Badge></ListGroupItemHeading>
          <ListGroupItemText>
            <span className="monospaced">{startAddress}</span>
          </ListGroupItemText>
        </ListGroupItem>
      )}

      {endAddress && (
          <ListGroupItem className="book-address">
            <ListGroupItemHeading><Badge color="danger">Destination</Badge></ListGroupItemHeading>
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