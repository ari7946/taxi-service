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
  return useContext(tripsContext);
}


const useProvideBookApi = () => {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const { authHeaders } = useAuth();

  

  return {

  }
}