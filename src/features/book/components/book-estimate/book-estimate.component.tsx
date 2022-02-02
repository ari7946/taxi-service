import React from 'react';
// import './book-estimate.styles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectVehicle,
  selectPrice,
  selectDropFee,
  selectDirection,
  selectTaxiFare,
  selectValidEstimate
} from '../../redux/book.selectors';

import { EstimateContainer } from './book-estimate.styles';

const Estimate = ({ taxiFare, estimate, dropFee, vehicle }) => {
  return (
    <EstimateContainer>
      <div className="estimate-info">
        <p className="fare">Taxi Fare: ${vehicle ? taxiFare : '0.00'}</p>
        <p className="drop-fee">
          <span className="plus-sign">+</span>
          Drop Fee: ${dropFee}.00
        </p>

        <h2 className="price">Estimate: ${vehicle ? estimate : '0.00'}</h2>
      </div>
    </EstimateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  price: selectPrice,
  dropFee: selectDropFee,
  direction: selectDirection,
  taxiFare: selectTaxiFare,
  estimate: selectValidEstimate,
  vehicle: selectVehicle
});

export default connect(mapStateToProps)(Estimate);
