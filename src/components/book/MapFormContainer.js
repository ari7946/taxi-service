import React, { Fragment, Suspense } from 'react';
import TaxiForm from './TaxiForm';
import Loading from './Loading';
import MapHeader from './MapHeader';
import Addresses from './Addresses';
import Estimate from './Estimate';
import './bookStyle.css';
import { Container, Row, Col, ListGroup } from 'reactstrap';
const Map = React.lazy(() => import('./Map'));

const MapFormContainer = () => {

  return (
    <Container fluid>
      <MapHeader />
      <Row>
        <Col md='6'>
          <Suspense fallback={<Loading />} >
            <Map />
          </Suspense >
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