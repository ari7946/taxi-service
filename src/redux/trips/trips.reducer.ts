import TripsActionTypes from './trips.types';

interface ObjectLiteral {
  [key: string]: any;
}

interface TripState {
  trips: ObjectLiteral[],
  loadingType: 'confirm' | 'complete' | 'delete' | '',
  error: string,
  loadingTripId: null | number
}

const INITIAL_STATE: TripState = {
  trips: [],
  loadingType: '',
  error: '',
  loadingTripId: null
}

const tripsReducer = (state = INITIAL_STATE, action): TripState => {
  switch (action.type) {

    case TripsActionTypes.SUBMIT:
      return {
        ...state,
        loadingType: action.loadingType,
        loadingTripId: action.tripId,
      }
    case TripsActionTypes.GET_TRIPS:
      return {
        ...state,
        loadingType: '',
        trips: action.trips.reverse(),
      }
    case TripsActionTypes.UPDATE_TRIP:
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
        loadingTripId: null,
        trips: updatedTrips,
      }
    case TripsActionTypes.DELETE_TRIP:
      const filteredTrips = state.trips.filter(trip => trip.id !== action.trip.id)
      return {
        ...state,
        loadingType: '',
        trips: filteredTrips,
        loadingTripId: null,
      }
    case TripsActionTypes.ERROR:
      return {
        ...state,
        loadingType: '',
        error: action.error,
      }
    default: return state;
  }
}

export default tripsReducer;