import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import VehicleType from './VehicleType';

const Estimate = (props) => {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);
  
  return (
    <div>
      <ListGroupItem>
        <ListGroupItemHeading><Badge color="info">Estimate</Badge></ListGroupItemHeading>
        <VehicleType {...props} />
        <ListGroupItemText>
          <div className="text-center mx-auto my-2 w-50">
            {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
            <p className='ml-4 mb-0'>Taxi Fare: ${price}</p>
            <p className="mb-0"><span className="mr-3 lead">+</span>Drop Fee: ${dropFee}.00</p>
            {direction === 'oneWay'
              ? <p className='ml-3 price pt-2'>Total: ${total}</p>
              : (
                <>
                  <p className='ml-3 price pt-2 mb-0'>Subtotal: ${total}</p>
                  <p className='ml-3 pt-0 mb-0'><span className="mr-3 lead">-</span>Discount: ${discount}</p>
                  <p className='ml-3 price pt-2'>Total: ${discountTotal}</p>
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