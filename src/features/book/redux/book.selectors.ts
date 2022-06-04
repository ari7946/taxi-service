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

export const selectStatus = createSelector(
  selectBook,
  book => book.status
)

export const selectName = createSelector(
  selectBook,
  book => book.name
)

export const selectEmail = createSelector(
  selectBook,
  book => book.email
)

export const selectComments = createSelector(
  selectBook,
  book => book.comments
)

export const selectPhone = createSelector(
  selectBook,
  book => book.phone
)

export const selectPassengers = createSelector(
  selectBook,
  book => book.passengers
)

export const selectLoading = createSelector(
  selectBook,
  book => book.loading
)

export const selectSubmitted = createSelector(
  selectBook,
  book => book.submitted
)

export const selectValid = createSelector(
  selectBook,
  book => book.valid
)

export const selectInvalidFields = createSelector(
  selectBook,
  book => book.invalidFields
)

export const selectDate = createSelector(
  selectBook,
  book => book.date
)

export const selectTime = createSelector(
  selectBook,
  book => book.time
)

export const selectAlertSuccess = createSelector(
  selectBook,
  book => book.alertSuccess
)

export const selectStartAddressAndEndAddressAreValid = createSelector(
  selectBook,
  book => !!book.startAddress && !!book.endAddress
)

export const selectTaxiFare = createSelector(
  [selectBook, selectStartAddressAndEndAddressAreValid, selectVehicle],
  (book, validAddresses, vehicle) => {
    return validAddresses && !!vehicle ? (Number(book.price) - book.dropFee).toFixed(2) : '0.00 '
  }
)

export const selectValidDropFee = createSelector(
  [selectBook, selectStartAddressAndEndAddressAreValid],
  (book, validAddresses) => {
    return validAddresses ? book.dropFee : 0
  }
)

export const selectValidEstimate = createSelector(
  [selectBook, selectStartAddressAndEndAddressAreValid, selectVehicle],
  (book, validAddresses, vehicle) => {
    return validAddresses && !!vehicle ? book.price : '0.00 '
  }
)

export const selectIndicatorSection = createSelector(
  [selectStartAddressAndEndAddressAreValid, selectVehicle],
  (validAddresses, vehicle) => {
    if (!validAddresses) {
      return 'map'
    }
    if (validAddresses && !vehicle) {
      return 'vehicle'
    }
    if (validAddresses && vehicle ) {
      return 'form'
    }

    return 'map';
  }
)

export const selectAreAddressesAndVehicleValid = createSelector(
  [selectStartAddressAndEndAddressAreValid, selectVehicle],
  (startAddressAndEndAddressAreValid, vehicle) => 
    !!startAddressAndEndAddressAreValid && !!vehicle
)

