import React from 'react';
// import './book-estimate.styles.css';
import ReactTextTransition, { presets } from 'react-text-transition';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectPrice,
  selectDropFee,
  selectDirection,
  selectTaxiFare,
  selectValidEstimate,
} from '../../redux/book.selectors';

import { EstimateContainer } from './book-estimate.styles';

const Estimate = ({ taxiFare, estimate, dropFee }) => {
  return (
    <EstimateContainer>
      <div className="estimate-info">
        <p className="fare"> Taxi Fare: ${taxiFare}</p>
        <p className="drop-fee">
          <span className="plus-sign">+</span>
          Drop Fee: ${dropFee}.00
        </p>

        <h2 className="price">
          Estimate: $
          {estimate
            .toString()
            .split('')
            .map((letter, i) => (
              <ReactTextTransition
                key={i}
                text={letter}
                style={
                  letter === ' ' && {
                    margin: '0 5px',
                  }
                }
                delay={i * 100}
                springConfig={presets.molasses}
                inline
                noOverflow
              />
            ))}
        </h2>
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
});

export default connect(mapStateToProps)(Estimate);
