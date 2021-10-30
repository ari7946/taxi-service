import { TripsActionTypes, Action, TripLoadingStatus, TripStatus, ObjectLiteral, Trip } from '../types/trips.types';
 
interface TripState {
  trips: Trip[],
  loadingType: string,
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
        loadingType: action.payload.loadingType,
        loadingTripId: action.payload.loadingTripId,
      }
    case TripsActionTypes.GET_TRIPS:
      return {
        ...state,
        loadingType: '',
        trips: action.payload.trips.reverse(),
      }
    case TripsActionTypes.UPDATE_TRIP:
      const updatedTrip = action.payload.trip;
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
      const filteredTrips = state.trips.filter(trip => trip.id !== action.payload.trip.id)
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
        error: action.payload.error,
      }
    default: return state;
  }
}

export default tripsReducer;