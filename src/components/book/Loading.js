import React from 'react';
import { Spinner } from 'reactstrap';

function Loading() {
  return (
    <>
      <Spinner animation="border" variant="light" size="lg" />
      <h3 className="text-white">loading map...</h3>
    </>

  )
}

export default Loading;
