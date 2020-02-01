import React from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';
import VehicleType from './VehicleType';

function MapHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
  const { dispatch } = props.dispatch;
  const total = (Number(price) + dropFee).toFixed(2);
  const discount = (total * 0.20).toFixed(2);
  const discountTotal = (total - discount).toFixed(2);

  return (
    <div className='mb-3'>
      {!points[0] && !points[1] ? (
        <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
      ) : (
          !points[0] ? (
            <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge></h4>
          ) : (
              !points[1] ? (
                <h4 className="mb-0">Please Select <Badge color="danger">Destination</Badge></h4>
              ) : (
                  <div>
                    {/* <h4 className="estimate mb-2"><Badge color="info">Estimate:</Badge> 
                      ${direction === 'oneWay' ? total : discountTotal}
                    </h4> */}

                    {/* <VehicleType {...props} /> */}

                    {/* <ButtonGroup className='mobile-header'>
                        <Button href="tel:5554280940" color='warning'>Tab to Call</Button>
                      <Button color='warning ml-3'>Reserve Taxi Online</Button>
                    </ButtonGroup>
                    </div>  */}

                     <div>
                       <h4><Badge color="success">Thank you</Badge> Please submit the form to book a taxi<br /> or give us a call / text
                       929-123-0000
                       </h4>
                     </div> 
                  </div>
                )
          )
        )
      }
    </div>
  )
}

export default MapHeader;