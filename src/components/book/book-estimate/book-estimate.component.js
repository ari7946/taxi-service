import React from 'react';
// import './book-estimate.styles.css';

import { createStructuredSelector } from 'reselect';
import { selectPrice, selectDropFee, selectDirection, selectTaxiFare, selectValidDropFee, selectValidEstimate } from '../../../redux/book/book.selectors';

import { connect } from 'react-redux';

import { EstimateContainer } from './book-estimate.styles'

const Estimate = ({ price, direction, taxiFare, estimate, dropFee }) => {
  // const taxiFare = startAddressAndEndAddressAreValid ? (Number(price) - dropFee).toFixed(2) : 0;
  // const discount = (total * 0.20).toFixed(2);
  // const discountTotal = (total - discount).toFixed(2);
  
  return (
    <EstimateContainer className="">
        {/* //TODO Implement as a future feature */}
        {/* <ul className="pt-3">
          <li>Distance: {distance} miles</li>
          <li>Rate: {vehicle === 'sedan' ? "$2.95 per mile" : '$3.95 per mile'}</li>
          <li>Vehicle: {vehicle}</li>
          <li>passengers: {vehicle === 'sedan' ? '1 - 4' : '1 - 7'}</li>
        </ul> */}

      <div className="estimate-info">
        {/* <p><Badge color="info">Distance: </Badge><br />{distance} mi</p> */}
        <p className="fare">Taxi Fare: ${taxiFare}</p>
        <p className="drop-fee">
          <span className="plus-sign">
            +
          </span>
          Drop Fee: ${dropFee}
        </p>
        {direction === 'oneWay'
          ? <h2 className='price'>Estimate: ${estimate}</h2>
          : null
          //TODO Implement TwoWay as a potential future feature
          // : (
          //   <>
          //     <p className='ml-3 price pt-2 mb-0'>Subtotal: ${total}</p>
          //     <p className='ml-3 pt-0 mb-0'><span className="mr-3 lead">-</span>Discount: ${discount}</p>
          //     <h2 className='ml-3 price pt-2 lead'><Badge color="info">Estimate: ${discountTotal}</Badge></h2>
          //   </>
          // )
        }
      </div>
    </EstimateContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  price: selectPrice,
  dropFee: selectDropFee,
  direction: selectDirection,
  taxiFare: selectTaxiFare,
  estimate: selectValidEstimate,
  dropFee: selectValidDropFee,
})

export default connect(mapStateToProps)(Estimate);