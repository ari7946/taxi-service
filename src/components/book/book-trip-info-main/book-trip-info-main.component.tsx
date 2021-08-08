import React, { useState } from 'react';
// @ts-ignore
import { Col, Row, Button, Collapse  } from 'reactstrap';
import './book-trip-info-main.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectVehicle, selectPassengers, selectValidEstimate, selectDistance, selectDirection, selectStartAddressAndEndAddressAreValid } from '../../../redux/book/book.selectors';

import { BookTripInfoMainContainer } from './book-trip-info-main.styles'

const TripInfoMain = ({ 
  vehicle, passengers, estimate, distance, direction, startAddressAndEndAddressAreValid
}: { 
  vehicle: string, 
  passengers:number, 
  estimate:number, 
  distance:number, 
  direction:string, 
  startAddressAndEndAddressAreValid:boolean
}): React.ReactElement => {
  const [collapse, setCollapse] = useState(true);

  const toggle = () => setCollapse(!collapse);

  return (
    <React.Fragment>
      {startAddressAndEndAddressAreValid && (
        <BookTripInfoMainContainer>
          <button 
            className="trip-info-button" 
            onClick={toggle} 
            style={{ marginBottom: '1rem' }}
          >
            <FontAwesomeIcon 
              className="mr-4 trip-info-main-chevron" 
              icon={collapse ? faChevronUp : faChevronDown} 
            />
            <span>{collapse ? '   HIDE ' : 'SHOW '}TRIP DETAILS</span>
          </button>

          {collapse && ( 
            <div className="trip-info-container">
              <div className='trip-info-container__first'>
                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Distance</h3>
                  <p className="trip-info-item-value">{distance} miles</p>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Rate</h3>
                  <p className="trip-info-item-value">{vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</p>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Vehicle</h3>
                  <p className="trip-info-item-value">{vehicle}</p>
                </div>
              </div>

              <div className="trip-info-container__second">
                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Direction</h3>
                  <p className="trip-info-item-value">{direction === 'oneWay' ? 'One Way' : 'Two Way'}</p>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Passengers</h3>
                  <p className="trip-info-item-value">{passengers} Passengers</p>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Estimate</h3>
                  <p className="trip-info-item-value">$ {estimate}</p>
                </div>
              </div>
            </div>
          )}

        </BookTripInfoMainContainer>
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