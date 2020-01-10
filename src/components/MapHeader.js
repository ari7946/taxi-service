import React from 'react';
import { Badge } from 'reactstrap';

function MapHeader({ points }) {

  return (
    <>
      {!points[0] && !points[1] ? (
        <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge> and <Badge color="danger">Destination</Badge></h4>
      ) : (
          !points[0] ? (
            <h4 className="mb-0">Please Select <Badge color="dark">Starting Point</Badge></h4>
          ) : (
              !points[1] ? (
                <h4 className="mb-0">Please Select <Badge color="danger">Destination</Badge></h4>
              ) : (
                  <h4 className="mb-0"><Badge color="success">Thank you!</Badge> Fill out the form below to book a Taxi.</h4>
                )
            )
          )
        }
    </>
  )
}

export default MapHeader;