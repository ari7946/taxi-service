import TripsActionTypes from './trips.types';
import tripsReducer from './trips.reducer';
// const TripsActionTypes = {
//   SUBMIT: 'SUBMIT',
//   GET_TRIPS: 'GET_TRIPS',
//   UPDATE_TRIP: 'UPDATE_TRIP',
//   DELETE_TRIP: 'DELETE_TRIP',
//   ERROR: 'ERROR',
// }
const initialState = {
  trips: [],
  loadingType: '',
  error: '',
  loadingTripId: null,
}

describe('tripsReducer', () => {
  it('should return initial state', () => {
    expect(tripsReducer(undefined, {})).toEqual(initialState);
  })

  it('should set loading trip id to correct id', () => {
    expect(tripsReducer(initialState, {type: TripsActionTypes.SUBMIT, tripId: 2, loadingType: 'confirm'})
      .loadingTripId
    ).toBe(2)
  })
})