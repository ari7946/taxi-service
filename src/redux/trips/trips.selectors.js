import { createSelector } from 'reselect';

export const selectTripState = state => state.trips;

export const selectAllTrips = createSelector(
  [selectTripState],
  tripState => tripState.trips
)

export const selectLoadingType = createSelector(
  [selectTripState],
  tripState => tripState.loadingType
)

export const selectLoadingTripId = createSelector(
  [selectTripState],
  tripState => tripState.loadingTripId
)

export const selectConfirmedTrips = createSelector(
  [selectAllTrips],
  trips => trips.filter(trip => 
    trip.status === 'confirm'
  )
)

export const selectCompletedTrips = createSelector(
  [selectAllTrips],
  trips => trips.filter(trip => 
    trip.status === 'complete'
  )
)

export const selectArchivedTrips = createSelector(
  [selectAllTrips],
  trips => trips.filter(trip => 
    trip.status === 'archive'
  )
)

export const selectLoadingTrip = (loadingId, loadingType) =>
  createSelector(
    [selectLoadingType, selectLoadingTripId],
    (type, id) => 
      loadingType === type && loadingId === id
  )


