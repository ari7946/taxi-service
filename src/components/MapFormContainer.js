import React from 'react';
import TaxiForm from './TaxiForm';
import Map from './Map';
import MapHeader from './MapHeader.js';
import FormHeader from './FormHeader';
import { Container, Row, Col } from 'reactstrap';

function reducer(state, action) {
  if (action.type === 'locationsFound' || action.type === 'locationsCleared') {
    return {
      ...state,
      points: action.points,
      startAddress: action.startAddress,
      endAddress: action.endAddress,
    } 
  } else if (action.type === 'routeChanged') {
    //convert meters to miles
    let distance = (action.distance * 0.000621371192).toFixed(1);
    //price set at 2.95 dollars per mile
    let price = (distance * 2.95).toFixed(2);
    return {
      ...state,
      distance,
      price,
    }
  } else {
    throw new Error(`This action type isn't supported`)
  }
}

const initialState = {
  distance: "",
  points: [null, null],
  startAddress: '',
  endAddress: '',
  price: null,
}

function MapFormContainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Container>
      <Row>
        <Col sm="8">
          <MapHeader points={state.points} />
          <Map dispatch={dispatch} />
        </Col>

        <Col sm="4">
          <FormHeader 
            startAddress={state.startAddress} 
            endAddress={state.endAddress}
            points={state.points}
            distance={state.distance}
            price={state.price}
          />
          <TaxiForm dispatch={dispatch} />
        </Col>
      </Row>
    </Container>
  )
} 

export default MapFormContainer;