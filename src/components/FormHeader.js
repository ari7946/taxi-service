import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, distance } = props.state;

  return (
    <React.Fragment>
      {startAddress && (
        <p className="text-monospace"><Badge className="mt-3" color="dark">Starting Point: </Badge> {startAddress}</p>
      )}

      {endAddress && (
        <p className="text-monospace"><Badge className="mt-3" color="danger">Destination: </Badge> {endAddress}</p>
      )}

      {(points[0] && points[1]) && (
          <div className="text-center mx-auto my-4 w-75">
            {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
            <p className='ml-4 mb-0 text-monospace'>Taxi Fare: ${price}</p>
            <p className="text-monospace mb-0"><span className="mr-3 lead">+</span>Drop Fee: $10.00</p>
            <hr classname="text-dark w-50 hr" />
            <p className='ml-3 text-monospace'>Total: ${Number(price) + 10}</p>
          </div>
      )}
    </React.Fragment>
  )
}

export default FormHeader;