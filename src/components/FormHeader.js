import React from 'react';
import { Badge } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, distance } = props.state;

  return (
    <React.Fragment>
      {startAddress && (
        <h5 className="lead"><Badge className="mt-2" color="dark">Starting Point: </Badge> {startAddress}</h5>
      )}

      {endAddress && (
        <h5 className="lead"><Badge className="mt-0" color="danger">Destination: </Badge> {endAddress}</h5>
      )}

      {(points[0] && points[1]) && (
        <>
          <h5><Badge color="info">Distance: </Badge> <em>{distance} miles</em></h5>
          <h5><Badge color="warning">Taxi Fare: </Badge> ${price}</h5>
          <h5><Badge color="warning">Drop Fee: </Badge> $10.00</h5>
          <h5><Badge color="success">Total: </Badge>${Number(price) + 10}</h5>
        </>
      )}
    </React.Fragment>
  )
}

export default FormHeader;