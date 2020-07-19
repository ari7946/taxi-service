import AdminActionTypes from './admin.types';

const INITIAL_STATE = {
  trips: [],
  loadingType: '',
  error: '',
  loadingTripId: null,
}

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case AdminActionTypes.SUBMIT:
      return {
        ...state,
        loadingType: action.loadingType,
        loadingTripId: action.tripId,
      }
    case AdminActionTypes.GET_TRIPS:

      return {
        ...state,
        loadingType: '',
        trips: action.trips.reverse(),
      }
    case AdminActionTypes.UPDATE_TRIP:
      const updatedTrip = action.trip;
      const updatedTrips = state.trips.map(trip => {
        if (trip.id === updatedTrip.id) {
          return updatedTrip;
        }
        return trip
      })

      return {
        ...state,
        loadingType: '',
        loadingTripId: -1,
        trips: updatedTrips,
      }
    case AdminActionTypes.DELETE_TRIP:
      const filteredTrips = state.trips.filter(trip => trip.id !== action.trip.id)
      return {
        ...state,
        loadingType: '',
        trips: filteredTrips,
        loadingTripId: -1,
      }
    case AdminActionTypes.ERROR:
      return {
        ...state,
        loadingType: '',
        error: action.error,
      }
    default: return state;
  }
}

export default adminReducer;