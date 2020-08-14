import BookActionTypes from './book.types';
// import { selectStartAddress, selectEndAddress, selectDistance, selectVehicle, 
//   selectPrice, selectStatus, selectName, selectEmail, selectComments, 
//   selectPhone, selectPassengers, selectDirection, selectLoading, selectSubmitted, 
//   selectValid, selectInvalidFields, selectDate, selectTime, selectAlertSuccess,
// } from './book.selectors';
import { selectBook } from './book.selectors';
import axios from 'axios';

export const setInput = ({ name, value }) => {
  return { type: BookActionTypes.INPUT, name, value }
}

export const locationsFound = ({ startAddress, endAddress }) => {
  return { type: BookActionTypes.LOCATIONS_FOUND, startAddress, endAddress };
}

export const locationsCleared = ({ startAddress, endAddress }) => {
  return { type: BookActionTypes.LOCATIONS_CLEARED, startAddress, endAddress }
}

export const routeChanged = ({ distance }) => {
  return { type: BookActionTypes.ROUTE_CHANGED, distance };
}

export const submitError = ({ errorMessage }) => {
  return { type: BookActionTypes.ERROR, errorMessage };
}

// export const submitForm = () => {
//   return { type: BookActionTypes.SUBMIT };
// }

export const submitSuccess = () => {
  return { type: BookActionTypes.SUCCESS };
}

export const submitForm = () => {
  return (dispatch, getState) => {
    dispatch({ type: BookActionTypes.SUBMIT })
    const { 
      startAddress,
      endAddress, 
      distance, 
      vehicle, 
      price, 
      status, 
      name, 
      email, 
      comments, 
      phone, 
      passengers, 
      direction, 
      submitted, 
      valid, 
      date,
      time,
    } = selectBook(getState());

    const processForm = async () => {
      const username = localStorage.getItem('username') || '';
      const formFields = { name, comments, phone, email, date, time };
      const body = { 
        distance, startAddress, endAddress, price, passengers, direction, vehicle, status, username, 
        ...formFields 
      }
      console.log("body1", body);
      try {
        console.log("body2", body);
        const response = await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, body);
        // submitSuccess();
        if (response) dispatch({ type: BookActionTypes.SUCCESS });
      } catch (error) {
        // submitError({ errorMessage: error });
        dispatch({ type: BookActionTypes.ERROR, errorMessage: error })
      }
    }

    if (submitted && valid) {
      processForm();
      return;
    } else if (submitted && !valid) {
      dispatch({ type: BookActionTypes.ERROR, errorMessage: 'One or more fields are invalid' })
      return;
    } else {
      dispatch({ type: BookActionTypes.ERROR, errorMessage: 'Something went wronge' })
    }
  }
}
  