const TripsReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
        allTripsLoading: true,
      }
    case 'getTrips':
      return {
        ...state,
        allTripsLoading: false,
        trips: action.trips,
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
        loading: false,
        trips: updatedTrips,
      }
    case 'deleteTrip':
      const filteredTrips = state.trips.filter(trip => trip.id !== action.trip.id)
      return {
        ...state,
        loading: false,
        trips: filteredTrips,
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default: return state;
  }
}

const initialState = {
  trips: [],
  allTripsLoading: false,
  error: '',
}

export { TripsReducer, initialState };

