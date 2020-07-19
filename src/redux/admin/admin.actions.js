import AdminActionTypes from './admin.types';
import axios from 'axios';
const authHeaders = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export const getTrips = () => {
  return async dispatch => {
    dispatch({ type: AdminActionTypes.SUBMIT, loadingType: 'getTrips' })
    try {
      const result = await axios.get(`${process.env.REACT_APP_TRIPS}/api/trips`, authHeaders);
      dispatch({ type: AdminActionTypes.GET_TRIPS, trips: result.data })
    } catch (error) {
      dispatch({ type: AdminActionTypes.ERROR, error })
    }
  }
}

// export const updateTrips = (status, id) => {
//   return async dispatch => {
//     dispatch({ type: AdminActionTypes.SUBMIT, loadingType: status, tripId: id })
//     try {
//       const result = await axios.put(
//         `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
//         { status },
//         authHeaders
//       );
//       dispatch({ type: AdminActionTypes.UPDATE_TRIP, trip: result.data })
//     } catch (error) {
//       dispatch({ type: AdminActionTypes.ERROR, error })
//     }
//   }
// }

// export const removeTrip = (id) => {
//   return async dispatch => {
//     dispatch({ type: AdminActionTypes.SUBMIT, loadingType: 'removeTrip', tripId: id})
//     try {
//       const result = await axios.delete(
//         `${process.env.REACT_APP_TRIPS}/api/trips/${id}`,
//         authHeaders
//       );
//       dispatch({ type: AdminActionTypes.DELETE_TRIP, trip: result.data.removedTrip })
//     } catch (error) {
//       dispatch({ type: AdminActionTypes.ERROR, error })
//     }
//   }
// }