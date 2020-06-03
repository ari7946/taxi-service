import React, { useEffect, useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import { BookReducer, initialState } from './BookReducer';
const bookContext = createContext();

export function ProvideBookApi({ children }) {
  const api = useProvideBookApi();
  return <bookContext.Provider value={api}>{ children }</bookContext.Provider>
}

export function useBookApi() {
  return useContext(bookContext);
}

const useProvideBookApi = () => {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const { distance, startAddress, endAddress, price, name, comments, phone, passengers, email, direction, date, time, vehicle, status, submitted, valid } = state;

  useEffect(() => {
    if (submitted && valid) {
      _processForm()
    } else if (state.submitted && !state.valid) {
      dispatch({ type: 'error', errorMessage: 'One or more fields are invalid' })
    }
  }, [submitted, valid])

  const _processForm = async () => {
    const body = { distance, startAddress, endAddress, price, name, comments, phone, passengers, email, direction, date, time, vehicle, status }
    try {
      const res = await axios.post(`${process.env.REACT_APP_TRIPS}/api/trips`, body)
      if (res) {
        dispatch({ type: 'success' })
      }
    } catch (error) {
      dispatch({ type: 'error', errorMessage: error });
    }
  }

  const submitForm = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    dispatch({ type: 'submit' })
  }

  const setInput = ({ type, name, value }) => {
    dispatch({ type, name, value })
  }

  const locationsFound = ({ type, points, startAddress, endAddress }) => {
    dispatch({ type, points, startAddress, endAddress });
  }

  const locationsCleared = ({ type, points, startAddress, endAddress }) => {
    dispatch({ type, points, startAddress, endAddress })
  }

  const routeChanged = ({ type, distance }) => {
    dispatch({ type, distance });
  }

  return {
    submitForm,
    locationsFound,
    locationsCleared,
    routeChanged,
    setInput,
    state,
  }
}