import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, distance } = props.state;

  return (
    <React.Fragment>
      <Row>
        <Col>
          {startAddress && (
            <p className="text-monospace"><Badge className="mt-3" color="dark">Starting Point: </Badge> {startAddress}</p>
          )}
        </Col>
        <Col>
          {endAddress && (
            <p className="text-monospace"><Badge className="mt-3" color="danger">Destination: </Badge> {endAddress}</p>
          )}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FormHeader;