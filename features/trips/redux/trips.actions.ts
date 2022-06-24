import { TripsActionTypes, TripLoadingStatus } from '../types/trips.types';
import axios from 'axios';
import { selectAuthHeaders } from '../../auth/redux/auth.selectors';
import { Dispatch } from 'react';
import { Action } from '../types/trips.types';

export const getTrips = () => {
  return async (dispatch: Dispatch<Action>, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    const GET_TRIPS: TripLoadingStatus = 'getTrips';
    dispatch({
      type: TripsActionTypes.SUBMIT,
      payload: { loadingType: GET_TRIPS },
    });
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_TRIPS}/api/trips`, authHeaders);
      dispatch({
        type: TripsActionTypes.GET_TRIPS,
        payload: {
          trips: result.data,
        },
      });
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, payload: { error } });
    }
  };
};

export const updateTrip = (status: TripLoadingStatus, id: number) => {
  return async (dispatch: Dispatch<Action>, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({
      type: TripsActionTypes.SUBMIT,
      payload: {
        loadingType: status,
        loadingTripId: id,
      },
    });
    try {
      const result = await axios.put(
        `${process.env.NEXT_PUBLIC_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({
        type: TripsActionTypes.UPDATE_TRIP,
        payload: {
          trip: result.data,
        },
      });
    } catch (error) {
      dispatch({
        type: TripsActionTypes.ERROR,
        payload: { error },
      });
    }
  };
};

export const deleteTrip = (status: TripLoadingStatus, id: number) => {
  return async (dispatch: Dispatch<Action>, getState) => {
    const authHeaders = selectAuthHeaders(getState());
    dispatch({
      type: TripsActionTypes.SUBMIT,
      payload: {
        loadingType: status,
        loadingTripId: id,
      },
    });
    try {
      const result = await axios.delete(
        `${process.env.NEXT_PUBLIC_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      dispatch({
        type: TripsActionTypes.DELETE_TRIP,
        payload: {
          trip: result.data.removedTrip,
        },
      });
    } catch (error) {
      dispatch({ type: TripsActionTypes.ERROR, payload: { error } });
    }
  };
};
