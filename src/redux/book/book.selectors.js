import { createSelector } from 'reselect';

export const selectBook = state => state.book;

export const selectStartAddress = createSelector(
  selectBook,
  book => book.startAddress
)

export const selectEndAddress = createSelector(
  selectBook,
  book => book.endAddress
)

export const selectPrice = createSelector(
  selectBook,
  book => book.price
)

export const selectDropFee = createSelector(
  selectBook,
  book => book.dropFee
)

export const selectDirection = createSelector(
  selectBook,
  book => book.direction
)

export const selectDistance = createSelector(
  selectBook,
  book => book.distance
)

export const selectVehicle = createSelector(
  selectBook,
  book => book.vehicle
)

