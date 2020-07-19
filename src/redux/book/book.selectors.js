const TripsReducer = (state, action) => {
  switch (action.type) {

    case 'submit':
      return {
        ...state,
        loadingType: action.loadingType,
        loadingTripId: action.tripId,
      }
    case 'getTrips':

      return {
        ...state,
        loadingType: '',
        trips: action.trips.reverse(),
      }
    case 'updateTrip':
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
    case 'deleteTrip':
      const filteredTrips = state.trips.filter(trip => trip.id !== action.trip.id)
      return {
        ...state,
        loadingType: '',
        trips: filteredTrips,
        loadingTripId: -1,
      }
    case 'error':
      return {
        ...state,
        loadingType: '',
        error: action.error,
      }
    default: return state;
  }
}

const initialState = {
  trips: [],
  loadingType: '',
  error: '',
  loadingTripId: null,
}

export { TripsReducer, initialState };