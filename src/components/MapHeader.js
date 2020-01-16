import React from 'react';
import { Badge } from 'reactstrap';

function MapHeader({ points }) {

  return (
    <div className='mb-3'>
      {!points[0] && !points[1] ? (
        <h4 className="mb-0 lead">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
      ) : (
          !points[0] ? (
            <h4 className="mb-0 lead">Please Select <Badge color="dark">Starting Point</Badge></h4>
          ) : (
              !points[1] ? (
                <h4 className="mb-0 lead">Please Select <Badge color="danger">Destination</Badge></h4>
              ) : (
                  <h4 className="mb-0 lead"><Badge color="success">Thank you</Badge> Please fill out the form to book a Taxi</h4>
                )
            )
          )
        }
    </div>
  )
}

export default MapHeader;