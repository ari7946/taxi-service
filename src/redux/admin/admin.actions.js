import AdminActionTypes from './admin.types';

export const getTrips = async () => {
  return dispatch => {
    dispatch({ type: AdminActionTypes.SUBMIT, loadingType: 'getTrips' })
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      dispatch({ type: AdminActionTypes.GET_TRIPS, trips: result.data })
    } catch (error) {
      dispatch({ type: AdminActionTypes.ERROR, error })
    }
  }
}

export const updateTrips = async (status, id) => {
  return dispatch => {
    dispatch({ type: AdminActionTypes.SUBMIT, loadingType: status, tripId: id })
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        { status },
        authHeaders
      );
      dispatch({ type: AdminActionTypes.UPDATE_TRIP, trip: result.data })
    } catch (error) {
      dispatch({ type: AdminActionTypes.ERROR, error })
    }
  }
}

export const removeTrip = async (id) => {
  return dispatch => {
    dispatch({ type: AdminActionTypes.SUBMIT, loadingType: 'removeTrip', tripId: id})
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
        authHeaders
      );
      dispatch({ type: AdminActionTypes.DELETE_TRIP, trip: result.data.removedTrip })
    } catch (error) {
      dispatch({ type: AdminActionTypes.ERROR, error })
    }
  }
}