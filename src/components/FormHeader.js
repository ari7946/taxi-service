import React from 'react';
import { Badge, Row, Col, ListGroupItem, ListGroup, ListGroupItemText, ListGroupItemHeading  } from 'reactstrap';

function FormHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  return (
    <div>
      <ListGroup flush>
        {/* <p className="text-monospace"><Badge className="mt-3" color="dark">Starting Point: </Badge> {startAddress}</p> */}
        <ListGroupItem className='bg-dark'>
          <ListGroupItemHeading><Badge color="light">Starting Point</Badge></ListGroupItemHeading>
          <ListGroupItemText className='text-white'>
            {startAddress ? startAddress : <br />}
          </ListGroupItemText>
        </ListGroupItem>

        {/* <p className="text-monospace"><Badge className="mt-3" color="danger">Destination: </Badge> {endAddress}</p> */}
          <ListGroupItem className='bg-dark'>
            <ListGroupItemHeading><Badge color="danger">Destination</Badge></ListGroupItemHeading>
            <ListGroupItemText className='text-white'>
              {endAddress ? endAddress : <br />}
            </ListGroupItemText>
          </ListGroupItem>

      {(points[0] && points[1]) && (
        // <>
        //   <p className="text-monospace"><Badge className="mt-3" color="info">Estimate: </Badge></p>
          // <div className="text-center mx-auto my-4 w-75">
          //   {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
          //   <p className='ml-4 mb-0 text-monospace'>Taxi Fare: ${price}</p>
          //   <p className="text-monospace mb-0"><span className="mr-3 lead">+</span>Drop Fee: ${dropFee}.00</p>
          //   {direction === 'oneWay' 
          //     ? <p className='ml-3 text-monospace price pt-2'>Total: ${total}</p>
          //     : (
          //       <>
          //         <p className='ml-3 text-monospace price pt-2 mb-0'>Subtotal: ${total}</p>
          //         <p className='ml-3 text-monospace pt-0 mb-0'><span className="mr-3 lead">-</span>Discount: ${discount}</p>
          //         <p className='ml-3 text-monospace price pt-2'>Total: ${discountTotal}</p>
          //       </>
          //     )
          //   }
          // </div>
        // </>
          <ListGroupItem className='bg-dark'>
            <ListGroupItemHeading><Badge color="info">Estimate</Badge></ListGroupItemHeading>
            <ListGroupItemText className='text-white'>
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
      )}
        <hr />
      </ListGroup>
    </div>
  )
}

export default FormHeader;