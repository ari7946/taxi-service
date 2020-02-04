import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import VehicleType from './VehicleType';

const Estimate = (props) => {
  const { startAddress, endAddress, points, price, dropFee, direction, distance, vehicle } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);
  
  return (
    <div>
      <ListGroupItem className="border-0">
        <ListGroupItemHeading><Badge color="info">Estimate</Badge></ListGroupItemHeading>

        <VehicleType {...props} />

        {/* //TODO Implement as a future feature */}
        {/* <ul className="pt-3">
          <li>Distance: {distance} miles</li>
          <li>Rate: {vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</li>
          <li>Vehicle: {vehicle}</li>
          <li>passengers: {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</li>
        </ul> */}

        <ListGroupItemText>
          <div className="text-center mx-auto my-2 w-50">
            {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
            <p className='ml-4 mb-0'>Taxi Fare: ${price}</p>
            <p className="mb-0"><span className="mr-3 lead">+</span>Drop Fee: ${dropFee}.00</p>
            {direction === 'oneWay'
              ? <h2 className='ml-3 price pt-2'>Total: ${total}</h2>
              : (
                <>
                  <p className='ml-3 price pt-2 mb-0'>Subtotal: ${total}</p>
                  <p className='ml-3 pt-0 mb-0'><span className="mr-3 lead">-</span>Discount: ${discount}</p>
                  <h2 className='ml-3 price pt-2 lead'><Badge color="info">Total: ${discountTotal}</Badge></h2>
                </>
              )
            }
          </div>
        </ListGroupItemText>
      </ListGroupItem>
    </div>
  )
}

export default Estimate;