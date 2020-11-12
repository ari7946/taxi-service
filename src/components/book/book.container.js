import React, { Suspense } from 'react';
import TaxiForm from './book-form/book-form.component';
import Loading from './book-loading/book-loading.component';
import MapHeader from './book-map-header.component';
import Addresses from './book-addresses/book-addresses.component';
import Estimate from './book-estimate/book-estimate.component';
import VehicleType from './book-vehicle-type.component';
import TripInfoMain from './book-trip-info-main.component';
import './book.styles.css';
import { Container, Row, Col, ListGroup } from 'reactstrap';
const Map = React.lazy(() => import('./book-map/book-map.component'));

const MapFormContainer = () => {

  return (
    <Container fluid>
      <MapHeader />
      <Row>
        <Col md='6'>
          <Suspense fallback={<Loading />} >
            <Map />
          </Suspense>
          <Addresses />
          <TripInfoMain />
        </Col>

        <Col md='6'>
          <ListGroup flush>
            <VehicleType />
            <Estimate />
            <TaxiForm />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
} 

export default MapFormContainer;