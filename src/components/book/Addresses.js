import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';

function Addresses(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;

  return (
    <div>
      <ListGroup flush>
      {startAddress && (
          <ListGroupItem>
            <ListGroupItemHeading><Badge color="dark">Starting Point</Badge></ListGroupItemHeading>
          <ListGroupItemText>
            <span className="monospaced">{startAddress}</span>
          </ListGroupItemText>
        </ListGroupItem>
      )}

      {endAddress && (
          <ListGroupItem>
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