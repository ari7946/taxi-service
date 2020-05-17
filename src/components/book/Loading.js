import React, { Fragment } from 'react';
import { Spinner } from 'reactstrap';

function Loading() {
  return (
    <Fragment>
      <Spinner animation="border" variant="light" color="light" size="lg" />
      <p className="text-white">loading map...</p>
    </Fragment>
  )
}

export default Loading;
