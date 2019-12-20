import React from 'react';
import TaxiForm from './TaxiForm';

import Loading from './Loading';
import MapHeader from './MapHeader';
import FormHeader from './FormHeader';
import { Container, Row, Col } from 'reactstrap';
const Map = React.lazy(() => import('./Map'));


function reducer(state, action) {
  switch(action.type) {
    case 'locationsFound':
      return {
        ...state,
        points: action.points,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
      }
    case 'locationsCleared':
      return {
        ...state,
        points: action.points,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
      }
    case 'routeChanged':
      //convert meters to miles
      let distance = (action.distance * 0.000621371192).toFixed(1);
      //price set at 2.95 dollars per mile
      let price = (distance * 2.95).toFixed(2);
      return {
        ...state,
        distance,
        price,
        direction: 'oneWay',
      }
    case 'input':
      if (action.name === 'direction') {
        return {
          ...state,
          [action.name]: action.value,
          price: action.value === 'oneWay'
            ? state.price / 2
            : state.price * 2,
        }
      }
      return {
        ...state,
        [action.name]: action.value,
      } 
    case 'loading':
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: false,
      }
    case 'success':
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: false,
      }
    case 'error':
      return {
        ...state,
        error: true,
        loading: false,
        errorMessage: action.errorMessage,
      }
    case 'validate':
      const { name, phone, email, passengers, direction, comments, startAddress, endAddress } = state;
      const fields = { name, phone, email, passengers, direction, comments, startAddress, endAddress };
      const invalidFields = [];

      for (const property in fields) {
        if (!fields[property]) {
          invalidFields.push(property)
        }
      } 
      // console.log('fields', invalidFields);
      return {
        ...state,
        error: true,
        invalidFields,
      }
      break;
    // case 'submit':      
    //   return {
    //     ...state,
    //     loading: true,
    //     errorMessage: false,
    //     error: false,
    //   }
  }
  return state;
}

const initialState = {
  distance: "",
  points: [null, null],
  startAddress: '',
  endAddress: '',
  price: null,
  name: null,
  comments: null,
  phone: null,
  passengers: 1,
  direction: 'oneWay',
  loading: false,
  error: false,
  errorMessage: null,
  invalidFields: [],
}

function MapFormContainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container>
      <Row>
        <Col sm="8">
          <MapHeader points={state.points} />
          <React.Suspense fallback={<Loading />} >
            <Map dispatch={dispatch} />
          </React.Suspense >
        </Col>

        <Col sm="4">
          <FormHeader 
            startAddress={state.startAddress} 
            endAddress={state.endAddress}
            points={state.points}
            distance={state.distance}
            price={state.price}
          />
          <TaxiForm 
            dispatch={dispatch} 
            name={state.name}
            comments={state.comments}
            phone={state.phone}
            email={state.email}
            passengers={state.passengers}
            direction={state.direction}
            success={state.sucess}
            error={state.error}
            errorMessage={state.errorMessage}
            loading={state.loading}
            invalidFields={state.invalidFields}
          />
        </Col>
      </Row>
    </Container>
  )
} 

export default MapFormContainer;