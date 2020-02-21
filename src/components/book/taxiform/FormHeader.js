import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;

  return (
    <div>
      <ListGroup flush>
      {startAddress && (
        // <p className="text-monospace"><Badge className="mt-3" color="dark">Starting Point: </Badge> {startAddress}</p>
          <ListGroupItem>
            <ListGroupItemHeading><Badge color="dark">Starting Point</Badge></ListGroupItemHeading>
          <ListGroupItemText>
            <span className="monospaced">{startAddress}</span>
          </ListGroupItemText>
        </ListGroupItem>

        {/* <p className="text-monospace"><Badge className="mt-3" color="danger">Destination: </Badge> {endAddress}</p> */}
          <ListGroupItem className='bg-dark'>
            <ListGroupItemHeading><Badge color="danger">Destination</Badge></ListGroupItemHeading>
            <ListGroupItemText className='text-white'>
              {endAddress ? endAddress : <br />}
            </ListGroupItemText>
          </ListGroupItem>
      )}
      </ListGroup>
    </div>
  )
}

export default FormHeader;