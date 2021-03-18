import BookActionTypes from './book.types';

const INITIAL_STATE = {
  // map
  distance: 0,
  startAddress: '',
  endAddress: '',
  // fields
  name: '',
  comments: '',
  phone: '',
  passengers: 1,
  email: '',
  direction: 'oneWay',
  date: '',
  time: '',
  dropFee: 10,
  vehicle: 'sedan',
  alertSuccess: false,
  // other
  price: 0,
  loading: false,
  error: false,
  errorMessage: '',
  invalidFields: [],
  valid: false,
  status: 'pending',
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
      let distance = (action.distance * 0.000621371192).toFixed(1);
      //price set at 2.95 dollars per mile
      let price = (distance * 2.95).toFixed(2);
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

      if (action.name === 'direction') {
        return {
          ...state,
          alertSuccess: false,
          [action.name]: action.value,
          price: action.value === 'oneWay'
            ? state.price / 2
            : state.price * 2,
          dropFee: action.value === 'oneWay' ? 10 : 20,
          invalidFields: [],
        }
      } else if (action.name === 'vehicle') {
        return {
          ...state,
          alertSuccess: false,
          [action.name]: action.value,
          passengers: action.value === "sedan"
            ? '1-4'
            : '1-7',

          // if the startAddress AND/OR endAddress is cleared/not defined, set the price
          // to zero because a distance between both defined points is needed to calculate the price.
          // Otherwise, if both startAddress and endAddress are provided, 
          // calculate the price based on the total distance (between startAddress & endAddress) and rate according to type of vehicle (sedan or van).
          price: (!state.startAddress || !state.endAddress) 
            ? 0 
            : action.value === 'sedan' 
              ? (Number((state.distance * 2.95).toFixed(2)) + state.dropFee).toFixed(2)
              : (Number((state.distance * 3.95).toFixed(2)) + state.dropFee).toFixed(2),
          invalidFields: [],
        }
      }
      return {
        ...state,
        alertSuccess: false,
        [action.name]: action.value,
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
        // map
        distance: 0,
        startAddress: '',
        endAddress: '',
        // fields
        name: '',
        comments: '',
        phone: '',
        passengers: 1,
        email: '',
        direction: 'oneWay',
        date: '',
        time: '',
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
      const { name, phone, email, passengers, direction, startAddress, endAddress, date, time } = state;
      const fields = { name, phone, email, passengers, direction, startAddress, endAddress, date, time };
      const invalidFields = [];

      // Format fields for grammar
      const formatField = field => {
        if (field == "endAddress")
          field = "Destination";
        else if (field === 'startAddress')
          field = "Starting Point";
        return field.charAt(0).toUpperCase() + field.slice(1);
      }

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