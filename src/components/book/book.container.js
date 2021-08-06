import React, { Suspense } from 'react';
import TaxiForm from './book-form/book-form.component';
import Loading from './book-loading/book-loading.component';
import MapHeader from './book-map-header/book-map-header.component';
import Addresses from './book-addresses/book-addresses.component';
import Estimate from './book-estimate/book-estimate.component';
import VehicleType from './book-vehicle-type/book-vehicle-type.component';
import TripInfoMain from './book-trip-info-main/book-trip-info-main.component';
// import './book.styles.js';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { BookContainer } from './book.styles'
const Map = React.lazy(() => import('./book-map/book-map.component'));

const MapFormContainer = () => {

  return (
    <BookContainer>
      <MapHeader />
      <div className="main-content">
        <div className="aside">
          <Suspense fallback={<Loading />} >
            <Map />
          </Suspense>
          <Addresses />
          <TripInfoMain />
        </div>

        <div className="main">
          <VehicleType />
          <Estimate />
          <TaxiForm />
        </div>
      </div>
    </BookContainer>
  )
} 

export default MapFormContainer;