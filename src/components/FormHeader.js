import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const total = Number(price) + dropFee;
  return (
    <div>
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
            <p className="text-monospace mb-0"><span className="mr-3 lead">+</span>Drop Fee: ${dropFee}.00</p>
            {direction === 'oneWay' 
              ? <p className='ml-3 text-monospace price pt-2'>Total: ${total}</p>
              : (
                <>
                  <p className='ml-3 text-monospace price pt-2'>Total: ${total}</p>
                </>
              )
            }
          </div>
      )}
    </div>
  )
}

export default FormHeader;