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