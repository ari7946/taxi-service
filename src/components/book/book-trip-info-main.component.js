import React, { useState } from 'react';
import { Col, Row, Button, Collapse  } from 'reactstrap';
import './book.styles.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectVehicle, selectPassengers, selectValidEstimate, selectDistance, selectDirection, selectStartAddressAndEndAddressAreValid } from '../../redux/book/book.selectors';

const TripInfoMain = ({ 
  vehicle, passengers, estimate, distance, direction, startAddressAndEndAddressAreValid
}) => {
    const [collapse, setCollapse] = useState(false);

    const [status, setStatus] = useState('Closed');

    const onEntering = () => setStatus('Opening...');

    const onEntered = () => setStatus('Opened');

    const onExiting = () => setStatus('Closing...');

    const onExited = () => setStatus('Closed');

    const toggle = () => setCollapse(!collapse);

  return (
    <>
      {startAddressAndEndAddressAreValid && (
        <div className="pt-3">
          <Button 
            className="w-100 bg-yellow text-dark" 
            onClick={toggle} style={{ marginBottom: '1rem' }}
          >
            View
          </Button>
          
          <Collapse
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}
          >
            <Row>
              <Col xs="6">
                <div className="book-address">
                  <h3 className="address-heading-other">Distance</h3>
                  <p>{distance} miles</p>
                </div>

                <div className="book-address">
                  <h3 className="address-heading-other">Rate</h3>
                  <p>{vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</p>
                </div>

                <div className="book-address">
                  <h3 className="address-heading-other">Vehicle</h3>
                  <p>{vehicle}</p>
                </div>
              </Col>

              <Col xs="6">
                <div className="book-address">
                  <h3 className="address-heading-other">Direction</h3>
                  <p>{direction === 'oneWay' ? 'One Way' : 'Two Way'}</p>
                </div>

                <div className="book-address">
                  <h3 className="address-heading-other">Passengers</h3>
                  <p>{passengers} Passengers</p>
                </div>

                <div className="book-address">
                  <h3 className="address-heading-other">Estimate</h3>
                  <p>$ {estimate}</p>
                </div>
              </Col>
            </Row>
          </Collapse>
        </div>
      )}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  vehicle: selectVehicle,
  passengers: selectPassengers,
  estimate: selectValidEstimate,
  distance: selectDistance,
  direction: selectDirection,
  startAddressAndEndAddressAreValid: selectStartAddressAndEndAddressAreValid,
})

export default connect(mapStateToProps)(TripInfoMain);