import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';
import Estimate from './Estimate';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  return (
    <div>
      <ListGroup flush>
      {startAddress && (
        // <p className="text-monospace"><Badge className="mt-3" color="dark">Starting Point: </Badge> {startAddress}</p>
          <ListGroupItem>
            <ListGroupItemHeading><Badge color="dark">Starting Point</Badge></ListGroupItemHeading>
          <ListGroupItemText>
            {startAddress}
          </ListGroupItemText>
        </ListGroupItem>
      )}

      {endAddress && (
        // <p className="text-monospace"><Badge className="mt-3" color="danger">Destination: </Badge> {endAddress}</p>
          <ListGroupItem>
            <ListGroupItemHeading><Badge color="danger">Destination</Badge></ListGroupItemHeading>
            <ListGroupItemText>
              {endAddress}
            </ListGroupItemText>
          </ListGroupItem>
      )}

        {(points[0] && points[1]) && (
          <Estimate {...props}/>
        )}

      </ListGroup>
    </div>
  )
}

export default FormHeader;