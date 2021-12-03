import React, { useState } from 'react';
import './book-trip-info-main.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectVehicle, selectPassengers, selectValidEstimate, selectDistance, selectDirection, selectStartAddressAndEndAddressAreValid } from '../../redux/book.selectors';

import { BookTripInfoMainContainer } from './book-trip-info-main.styles'

interface TripInfoMainProps {
  vehicle: string, 
  passengers: number, 
  estimate: number, 
  distance: number, 
  direction: string, 
  startAddressAndEndAddressAreValid: boolean
}

const TripInfoMain = ({ 
  vehicle, passengers, estimate, distance, direction, startAddressAndEndAddressAreValid
}: TripInfoMainProps ): React.ReactElement => {
  const [collapse, setCollapse] = useState(true);

  const toggle = () => setCollapse(!collapse);

  return (
    <React.Fragment>
      {startAddressAndEndAddressAreValid && (
        <BookTripInfoMainContainer>
          <button 
            className="trip-info-button" 
            onClick={toggle} 
          >
            <FontAwesomeIcon 
              className="fa-chevron"
              icon={collapse ? faChevronUp : faChevronDown} 
            />
            <span>{collapse ? 'HIDE ' : 'SHOW '}TRIP DETAILS</span>
          </button>

          {collapse && ( 
            <div className="trip-info-container" data-testid="trip-info-container">
              <div className='trip-info-container__first'>
                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Distance</h3>
                  <h6 className="trip-info-item-value">{distance} miles</h6>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Rate</h3>
                  <h6 className="trip-info-item-value">{vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</h6>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Vehicle</h3>
                  <h6 className="trip-info-item-value">{vehicle}</h6>
                </div>
              </div>

              <div className="trip-info-container__second">
                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Direction</h3>
                  <h6 className="trip-info-item-value">{direction === 'oneWay' ? 'One Way' : 'Two Way'}</h6>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Passengers</h3>
                  <h6 className="trip-info-item-value">{passengers} Passengers</h6>
                </div>

                <div className="trip-info-item">
                  <h3 className="trip-info-item-heading">Estimate</h3>
                  <h6 className="trip-info-item-value" datatest-id="heading-estimate-val">$ {estimate}</h6>
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