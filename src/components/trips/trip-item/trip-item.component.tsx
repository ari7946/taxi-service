import React from 'react';
import { ListGroupItem, Col, Row } from 'reactstrap';
import TripStatusButtonGroup from '../trip-status/trip-status.component';
import '../trips.styles.css';

interface ObjectLiteral {
  [key: string]: any;
}

const TripItem = ({ trip } : { trip: ObjectLiteral }) => {
  return (
    <ListGroupItem className="bg-grey-light-2 mb-3 trip-item">
      <Row>
        <Col md="6">
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">name:</span> {trip.name}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">phone:</span> {trip.phone}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">email:</span> {trip.email}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">vehicle:</span> {trip.vehicle}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">distance:</span> {trip.distance} miles</div>
          <div className="trip-list-info text-green-dark my-1"><span className="trip-list-heading text-dark">start address:</span> {trip.startAddress}</div>
        </Col>

        <Col md="6">
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">date:</span> {trip.date}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">time:</span> {trip.time}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">estimate:</span> ${trip.price}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">requested-at:</span> {trip.created_at}</div>
          <div className="trip-list-info text-green-dark mb-1"><span className="trip-list-heading text-dark">direction:</span> {trip.direction === 'oneWay' ? 'one way' : 'two way'}</div>
          <div className="trip-list-info text-green-dark mb-2"><span className="trip-list-heading text-dark">destination:</span> {trip.endAddress}</div>
        </Col>
      </Row>

      <TripStatusButtonGroup 
        tripId={trip.id}
        tripStatus={trip.status}
      />
    </ListGroupItem>
  )
}

export default TripItem;