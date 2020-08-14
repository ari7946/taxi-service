import React, { Suspense } from 'react';
import TaxiForm from './book-form.component';
import Loading from './book-loading.component';
import MapHeader from './book-map-header.component';
import Addresses from './book-addresses.component';
import Estimate from './book-estimate.component';
import './book.styles.css';
import { Container, Row, Col, ListGroup } from 'reactstrap';
const Map = React.lazy(() => import('./book-map.component'));

const MapFormContainer = () => {

  return (
    <Container fluid>
      <MapHeader />
      <Row>
        <Col md='6'>
          <Suspense fallback={<Loading />} >
            <Map />
          </Suspense>
          <Estimate />
        </Col>

        <Col md='6'>
          <ListGroup flush>
            <Addresses />
            <TaxiForm />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
} 

export default MapFormContainer;