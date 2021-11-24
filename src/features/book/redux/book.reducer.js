import BookActionTypes from './book.types';

const INITIAL_STATE = {
  distance: 0,
  startAddress: '',
  endAddress: '',

  passengers: '1-4',
  direction: 'oneWay',
  dropFee: 10,
  vehicle: 'sedan',

  alertSuccess: false,
  direction: 'oneWay',
  price: 0,
  loading: false,
  error: false,
  errorMessage: '',
  invalidFields: [],
  valid: false,
  status: 'pending',
}

const SEDAN_RATE = 2.95;
const VAN_RATE = 3.95;

const AMOUNT_SEDAN_PASSENGERS = '1-4';
const AMOUNT_VAN_PASSENGERS = '1-7';

const convertMetersToMiles = (distance) => {
  return Number(distance * 0.000621371192).toFixed(1);
}

const formatField = (field) => {
  // edge case 1
  if (field == "endAddress") field = "Destination";
  // edge case 2
  else if (field === 'startAddress') field = "Starting Point";
  // returning capitalized field
  return field.charAt(0).toUpperCase() + field.slice(1);
}

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.LOCATIONS_FOUND:
      return {
        ...state,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
        alertSuccess: false,
      }
    case BookActionTypes.LOCATIONS_CLEARED:
      return {
        ...state,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
        // alert is deactivated if startAddress or endAddress is "cleared"; they're both needed to calculate a distance and price
        alertSuccess: false,
        price: 0,
      }
    case BookActionTypes.ROUTE_CHANGED:
      //convert meters to miles
      let distance = convertMetersToMiles(action.distance);
      //price set at 2.95 dollars per mile
      let price = (distance * SEDAN_RATE).toFixed(2);
      return {
        ...state,
        distance,
        price: (Number(price) + state.dropFee).toFixed(2),
        direction: 'oneWay',
        // dropFee is set to 10 (dollars) by default in case a user changes its state prior to defining both startAddress and endAddress
        dropFee: 10,
        // vehicle is set to "sedan" by default in case a user changes its state prior to defining both startAddress and endAddress
        vehicle: 'sedan',
        // alert is deactivated if endAddress is "cleared"; as both startAddress and endAddress are needed to calculate total distance and price
        alertSuccess: false,
      }
    case BookActionTypes.INPUT:
      const { payload } = action;
      
      if (payload.name === 'direction') {
        return {
          ...state,
          alertSuccess: false,
          [payload.name]: payload.value,
          price: payload.value === 'oneWay'
            ? state.price / 2
            : state.price * 2,
          dropFee: payload.value === 'oneWay' ? 10 : 20,
          invalidFields: [],
        }
      } else if (payload.name === 'vehicle') {
        return {
          ...state,
          alertSuccess: false,
          [payload.name]: payload.value,
          passengers: payload.value === "sedan"
            ? AMOUNT_SEDAN_PASSENGERS
            : AMOUNT_VAN_PASSENGERS,

          // if the startAddress AND/OR endAddress is cleared/not defined, set the price
          // to zero because a distance between both defined points is needed to calculate the price.
          // Otherwise, if both startAddress and endAddress are provided, 
          // calculate the price based on the total distance (between startAddress & endAddress) and rate according to type of vehicle (sedan or van).
          price: (!state.startAddress || !state.endAddress) 
            ? 0 
            : payload.value === 'sedan' 
              ? (Number((state.distance * SEDAN_RATE).toFixed(2)) + state.dropFee).toFixed(2)
              : (Number((state.distance * VAN_RATE).toFixed(2)) + state.dropFee).toFixed(2),
          invalidFields: [],
        }
      }
      return {
        ...state,
        alertSuccess: false,
        [payload.name]: action.value,
        invalidFields: [],
      }
    case BookActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        submitted: false,
        errorMessage: '',
        invalidFields: [],
        valid: true,
        alertSuccess: true,
        distance: 0,
        startAddress: '',
        endAddress: '',
        passengers: 1,
        direction: 'oneWay',
        dropFee: 10,
        vehicle: 'sedan',
      }
    case BookActionTypes.ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        submitted: false,
        errorMessage: action.errorMessage,
        alertSuccess: false,
      }
    case BookActionTypes.SUBMIT:
      const { passengers, direction, startAddress, endAddress } = state;
      const { name, email, phone, date, time } = action.payload;
      const fields = { 
        passengers, direction, startAddress, endAddress,
        // form fields
        name, email, phone, date, time
      };
      const invalidFields = [];

      for (const field in fields) {
        if (!fields[field]) {
          // "invalidFields" array is used to prompt a message about the required fields if they're missing.
          // This is also the the reason they are formatted; for grammar consistency
          invalidFields.push(formatField(field));
        }
      }

      return {
        ...state,
        // valid is true if invalidFields is an empty array
        // In other words, valid is true if each required field is a string of 1 or more characters
        valid: invalidFields.length === 0 ? true : false,
        invalidFields,
        errorMessage: '',
        error: false,
        submitted: true,
        loading: true,
      }
    default:
      return state
  }
}

export default bookReducer;