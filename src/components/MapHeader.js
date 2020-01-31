import React from 'react';
import { Badge, Button } from 'reactstrap';

function MapHeader(props) {
  const { startAddress, endAddress, points, price, dropFee, direction } = props.state;
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
                  <>
                    <div>
                      <h4 className="mb-0 estimate"><Badge color="info">Estimate:</Badge> 
                        ${direction === 'oneWay' ? total : discountTotal}
                      </h4>
                      <h2>Call to reserve taxi: 714-432-1222</h2>
                      <Button color='warning'>Reserve Taxi Online</Button>
                    </div>
                  </>
                )
            )
          )
        }
    </div>
  )
}

export default MapHeader;