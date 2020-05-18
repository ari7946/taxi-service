import React from 'react';
import { Badge, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';
import VehicleType from './VehicleType';

const Estimate = (props) => {
  const { price, dropFee, direction } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  // const discount = (total * 0.20).toFixed(2);
  // const discountTotal = (total - discount).toFixed(2);
  
  return (
    <div>
      <ListGroupItem className="estimate mt-3 pt-3">
        <VehicleType {...props} />

        {/* //TODO Implement as a future feature */}
        {/* <ul className="pt-3">
          <li>Distance: {distance} miles</li>
          <li>Rate: {vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</li>
          <li>Vehicle: {vehicle}</li>
          <li>passengers: {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</li>
        </ul> */}

        <ListGroupItemText>
          <div className="text-center mx-auto my-2 w-75">
            {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
            <p className='mb-0'>Taxi Fare: ${price}</p>
            <p className="mb-0"><span className="mr-3 lead">+</span>Drop Fee: ${dropFee}.00</p>
            {direction === 'oneWay'
              ? <h2 className='price border-top border-light pt-2 w-100'>Estimate: ${total}</h2>
              : null
              //TODO Implement TwoWay as a potential future feature
              // : (
              //   <>
              //     <p className='ml-3 price pt-2 mb-0'>Subtotal: ${total}</p>
              //     <p className='ml-3 pt-0 mb-0'><span className="mr-3 lead">-</span>Discount: ${discount}</p>
              //     <h2 className='ml-3 price pt-2 lead'><Badge color="info">Estimate: ${discountTotal}</Badge></h2>
              //   </>
              // )
            }
          </div>
        </ListGroupItemText>
      </ListGroupItem>
    </div>
  )
}

export default Estimate;