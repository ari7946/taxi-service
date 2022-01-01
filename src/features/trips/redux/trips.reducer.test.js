import  { TripsActionTypes } from '../types/trips.types';
import tripsReducer from './trips.reducer';

const initialState = {
  trips: [],
  loadingType: '',
  error: '',
  loadingTripId: null,
}

describe.skip('tripsReducer', () => {
  it('should return initial state', () => {
    expect(tripsReducer(undefined, {})).toEqual(initialState);
  })

  it('should set loading trip id to correct id', () => {
    expect(tripsReducer(initialState, {type: TripsActionTypes.SUBMIT, tripId: 2, loadingType: 'confirm'})
      .loadingTripId
    ).toBe(2)
  })

  it('should get all trips in ascending order', () => {
    const mockTrips = [{
      id: 1,
      status: 'pending'
    }, {
      id: 2,
      status: 'confirm'
    }]
    expect(tripsReducer(initialState, {type: TripsActionTypes.GET_TRIPS, trips: mockTrips})
      .trips
    ).toEqual(mockTrips.reverse())
  })

  it('should delete trip with id of 1', () => {
    const mockTrips = [{
      id: 1,
      status: 'pending'
    }, {
      id: 2,
      status: 'confirm'
    }]
    const mockState = {
      trips: mockTrips,
      loadingType: '',
      error: '',
      loadingTripId: null,
    }
    const deletedTrip = {
      id: 1,
      status: 'pending'
    }
    const remainingTrips = [{
      id: 2,
      status: 'confirm'
    }]

    expect(tripsReducer(mockState, { type: TripsActionTypes.DELETE_TRIP, trip: deletedTrip })
      .trips
    ).toEqual(remainingTrips)
  })

  it('should update trip of id 2 status to archive', () => {
    const mockTrips = [{
      id: 1,
      status: 'pending'
    }, {
      id: 2,
      status: 'confirm'
    }]
    const mockState = {
      trips: mockTrips,
      loadingType: '',
      error: '',
      loadingTripId: null,
    }
    const mockTripWithUpdatedStatus = {
      id: 2,
      status: 'archive'
    }

    expect(tripsReducer(
      mockState, 
      { 
        type: TripsActionTypes.UPDATE_TRIP, 
        trip: mockTripWithUpdatedStatus
      }
    )
      .trips[1]
      .status
    ).toEqual('archive')

  })
})