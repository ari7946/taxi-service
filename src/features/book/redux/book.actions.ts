import { BookActionTypes } from '../types/book.types';
import { selectBook } from './book.selectors';
import { selectCurrentUser } from '../../auth/redux/auth.selectors';
import axios from 'axios';
import { Dispatch } from 'react';
import {
  SetInput,
  LocationsFound,
  LocationsCleared,
  RouteChanged,
  Submit,
  SubmitError,
  SubmitSuccess,
  BookTripRequestBody,
} from '../types/book.types';

export const setInput = ({ name, value }): SetInput => {
  return {
    type: BookActionTypes.INPUT,
    payload: { name, value },
  };
};

export const locationsFound = ({ startAddress, endAddress }): LocationsFound => {
  return {
    type: BookActionTypes.LOCATIONS_FOUND,
    payload: { startAddress, endAddress },
  };
};

export const locationsCleared = ({ startAddress, endAddress }): LocationsCleared => {
  return {
    type: BookActionTypes.LOCATIONS_CLEARED,
    payload: { startAddress, endAddress },
  };
};

export const routeChanged = ({ distance }): RouteChanged => {
  return {
    type: BookActionTypes.ROUTE_CHANGED,
    payload: { distance },
  };
};

export const submitForm = (formFields) => {
  return (dispatch: Dispatch<Submit | SubmitError | SubmitSuccess>, getState) => {
    dispatch({
      type: BookActionTypes.SUBMIT,
      payload: formFields,
    });

    const username = selectCurrentUser(getState());
    const {
      startAddress,
      endAddress,
      distance,
      vehicle,
      price,
      status,
      passengers,
      direction,
      submitted,
      valid,
    } = selectBook(getState());

    const processForm = async () => {
      const bookTripRequestBody: BookTripRequestBody = {
        distance,
        startAddress,
        endAddress,
        price,
        passengers,
        direction,
        vehicle,
        status,
        username,
        ...formFields,
      };
      try {
        await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, bookTripRequestBody);
        dispatch({ type: BookActionTypes.SUCCESS });
      } catch (error) {
        dispatch({
          type: BookActionTypes.ERROR,
          payload: { errorMessage: error },
        });
      }
    };

    if (submitted && valid) {
      processForm();
    } else if (submitted && !valid) {
      dispatch({
        type: BookActionTypes.ERROR,
        payload: { errorMessage: 'One or more fields are invalid' },
      });
    } else {
      dispatch({
        type: BookActionTypes.ERROR,
        payload: { errorMessage: 'Something went wrong' },
      });
    }
  };
};
