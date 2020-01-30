import React from 'react';
import { Badge } from 'reactstrap';

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
                    <h4 className="mb-0"><Badge color="info">Estimate:</Badge> 
                      ${direction === 'oneWay' ? total : discountTotal}
                    </h4>
                    <p>714-432-1222</p>
                  </>
                )
            )
          )
        }
    </div>
  )
}

export default MapHeader;