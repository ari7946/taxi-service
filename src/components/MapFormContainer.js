import React from 'react';
import TaxiForm from './TaxiForm';
import Loading from './Loading';
import MapHeader from './MapHeader';
import FormHeader from './FormHeader';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
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
        dropFee: 10,
      }
    case 'input':
      if (action.name === 'direction') {
        return {
          ...state,
          [action.name]: action.value,
          price: action.value === 'oneWay'
            ? state.price / 2
            : state.price * 2,
          dropFee: action.value === 'oneWay' ? 10 : 20,
        }
      }
      return {
        ...state,
        [action.name]: action.value,
      } 
    case 'success':
      return {
        ...state,
        loading: false,
        submitted: false,
        errorMessage: '',
        invalidFields: [],
        valid: true,
      }
    case 'error':
      return {
        ...state,
        error: true,
        loading: false,
        submitted: false,
        errorMessage: action.errorMessage,
      }
    case 'submit':
      const { name, phone, email, passengers, direction, comments, startAddress, endAddress, date, time } = state;
      const fields = { name, phone, email, passengers, direction, startAddress, endAddress, date, time };
      const invalidFields = [];

      for (const property in fields) {
        if (!fields[property]) {
          invalidFields.push(property)
        }
      } 
      return {
        ...state,
        valid: invalidFields.length === 0 ? true : false,
        invalidFields,
        errorMessage: '',
        error: false,
        submitted: true,
        loading: true,
      }
  }
  return state;
}

const initialState = {
  // map
  distance: "",
  points: [null, null],
  startAddress: '',
  endAddress: '',
  // fields
  price: null,
  name: null,
  comments: null,
  phone: null,
  passengers: 1,
  email: null,
  direction: 'oneWay',
  date: null,
  time: null,
  dropFee: 10,
  // other
  loading: false,
  error: false,
  errorMessage: '',
  invalidFields: [],
}

function MapFormContainer() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Container>
      <Row>
        <Col sm='8'>
          <MapHeader points={state.points} />
          <React.Suspense fallback={<Loading />} >
            <Map dispatch={dispatch} />
          </React.Suspense >
          <FormHeader state={state} />
        </Col>

        <Col sm='4'>
          <TaxiForm state={state} dispatch={dispatch} />
        </Col>
      </Row>
    </Container>
  )
} 

export default MapFormContainer;