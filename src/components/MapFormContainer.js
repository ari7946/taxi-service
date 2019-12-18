import React from 'react';
import TaxiForm from './TaxiForm';
import Map from './Map';
import MapHeader from './MapHeader.js';
import { Container, Badge, Row, Col } from 'reactstrap';

function reducer(state, action) {
  if (action.type === 'locationsFound') {
    return {
      ...state,
      points: action.points,
      startAddress: action.startAddress,
      endAddress: action.endAddress,
    } 
  } else if (action.type === 'locationsCleared') {
    console.log('action', action)
    return { 
      ...state,
      points: action.points,
      startAddress: action.startAddress,
      endAddress: action.endAddress,
    } 
  } else if (action.type === 'routeChanged') {
    //convert meters to miles
    let distance = (action.distance * 0.000621371192).toFixed(1);
    //price set at 2.95 per mile
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
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  )

  return (
    <Container>
      <Row>
        <Col sm="8">
          <MapHeader points={state.points} />
          <Map dispatch={dispatch} />
        </Col>

        <Col sm="4">
          {state.startAddress && (
            <h5 className="lead"><Badge className="mt-2" color="dark">Starting Point: </Badge> {state.startAddress}</h5>
          )}
          {state.endAddress && (
            <h5 className="lead"><Badge className="mt-0" color="danger">Destination: </Badge> {state.endAddress}</h5>
          )}

          {(state.points[0] && state.points[1]) && (
            <>
              <h5><Badge color="info">Distance: </Badge> <em>{state.distance} miles</em></h5>
              <h5><Badge color="success">Price: </Badge> ${state.price}</h5>
            </>   
          )}
          <TaxiForm distance={state.distance} price={state.price} />
        </Col>

      </Row>
    </Container>
  )
} 

export default MapFormContainer;