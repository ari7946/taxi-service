import React, { useState } from 'react';
// @ts-ignore
import { Col, Row, Button, Collapse  } from 'reactstrap';
import './book-trip-info-main.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi, faChevronDown, faChevronUp, faBars } from '@fortawesome/free-solid-svg-icons'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectVehicle, selectPassengers, selectValidEstimate, selectDistance, selectDirection, selectStartAddressAndEndAddressAreValid } from '../../../redux/book/book.selectors';

const TripInfoMain = ({ 
  vehicle, passengers, estimate, distance, direction, startAddressAndEndAddressAreValid
}: { vehicle: string, passengers:number, estimate:number, distance:number, direction:string, startAddressAndEndAddressAreValid:boolean}): React.ReactElement => {
    const [collapse, setCollapse] = useState(true);

    const [status, setStatus] = useState('Closed');

    const onEntering = () => setStatus('Opening...');

    const onEntered = () => setStatus('Opened');

    const onExiting = () => setStatus('Closing...');

    const onExited = () => setStatus('Closed');

    const toggle = () => setCollapse(!collapse);

  return (
    <React.Fragment>
      {startAddressAndEndAddressAreValid && (
        <div className="pt-3 trip-info-main-container my-5">
          <Button 
            className="w-100 bg-yellow text-dark mb-3" 
            onClick={toggle} style={{ marginBottom: '1rem' }}
          >
            <FontAwesomeIcon className="mr-4 trip-info-main-chevron" icon={collapse ? faChevronUp : faChevronDown} />
            <span>
              <span>{collapse ? '   HIDE ' : 'SHOW '}</span>TRIP DETAILS
            </span>
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
                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Distance</h3>
                  <p>{distance} miles</p>
                </div>

                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Rate</h3>
                  <p>{vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</p>
                </div>

                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Vehicle</h3>
                  <p>{vehicle}</p>
                </div>
              </Col>

              <Col xs="6">
                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Direction</h3>
                  <p>{direction === 'oneWay' ? 'One Way' : 'Two Way'}</p>
                </div>

                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Passengers</h3>
                  <p>{passengers} Passengers</p>
                </div>

                <div className="trip-info-main">
                  <h3 className="trip-info-main-heading">Estimate</h3>
                  <p>$ {estimate}</p>
                </div>
              </Col>
            </Row>
          </Collapse>
        </div>
      )}
    </React.Fragment>
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