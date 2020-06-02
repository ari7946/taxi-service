import React, { useEffect, useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';
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
  //const { authHeaders } = useAuth();

  const setInput = (type, name, value) => {
    dispatch({ type, name, value })
  }

  const locationsFound = ({ type, points, startAddress, endAddress }) => {
    dispatch({ type, points, startAddress, endAddress });
  }

  const locationsCleared = ({ type, points, startAddress, endAddress }) => {
    dispatch({ type, points, startAddress, endAddress })
  }

  const routeChanged = ({ type, distance }) => {
    dispatch({ type, distance});
  }

  return {
    locationsFound,
    locationsCleared,
    routeChanged,
    setInput,
    state,
  }
}