import React from 'react';
import { Spinner } from 'reactstrap';

function Loading() {
  return (
    <>
      <Spinner animation="grow" variant="warning" />
      <p class="small">loading map</p>
    </>

  )
}

export default Loading;
