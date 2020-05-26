////////// Implementation guided by this resource https://usehooks.com/useAuth/
import React, { useEffect, useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import { useAuth } from '../../auth/use-auth';
import { TripsReducer, initialState} from './TripsReducer';
const tripsContext = createContext();

export function ProvideTripsApi({ children }) {
  const api = useProvideTripsApi();
  return <tripsContext.Provider value={api}>{children}</tripsContext.Provider>;
}

export function useTripsApi() {
  return useContext(tripsContext);
};

const useProvideTripsApi = () => {
  const [state, dispatch] = useReducer(TripsReducer, initialState);
  const { authHeaders } = useAuth();

  const getTrips = async () => {
    dispatch({ type: 'submit', loadingType: 'getTrips' })
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      dispatch({ type: 'getTrips', trips: result.data })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const updateTrips = async (status, id) => {
    dispatch({ type: 'submit', loadingType: status, tripId: id })
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({ type: 'updateTrip', trip: result.data })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  const removeTrip = async (id) => {
    dispatch({ type: 'submit', loadingType: 'removeTrip', tripId: id})
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      dispatch({ type: 'deleteTrip', trip: result.data.removedTrip })
    } catch (error) {
      dispatch({ type: 'error', error })
    }
  }

  useEffect(() => {
    getTrips();
  }, [])

  return {
    getTrips,
    updateTrips,
    removeTrip,
    state,
  }
}