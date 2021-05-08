import TripsActionTypes from './trips.types';
import axios from 'axios';
import { selectAuthHeaders } from '../auth/auth.selectors';

export const getTrips = () => {
  return async (dispatch, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({ type: TripsActionTypes.SUBMIT, loadingType: 'getTrips' })
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      dispatch({ type: TripsActionTypes.GET_TRIPS, trips: result.data })
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, error })
    }
  }
}

export const updateTrip = (status: string, id: number) => {
  return async (dispatch, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({ type: TripsActionTypes.SUBMIT, loadingType: status, tripId: id })
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({ type: TripsActionTypes.UPDATE_TRIP, trip: result.data })
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, error })
    }
  }
}

export const deleteTrip = (status: string, id: number) => {
  return async (dispatch, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({ type: TripsActionTypes.SUBMIT, loadingType: status, tripId: id})
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      dispatch({ type: TripsActionTypes.DELETE_TRIP, trip: result.data.removedTrip })
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, error })
    }
  }
}