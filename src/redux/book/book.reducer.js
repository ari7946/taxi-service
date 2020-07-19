import BookActionTypes from './book.types';

const INITIAL_STATE = {
  // map
  distance: "",
  startAddress: '',
  endAddress: '',
  // fields
  price: null,
  name: null,
  comments: null,
  phone: null,
  passengers: 1,
  email: null,
  direction: 'oneWay',
  date: null,
  time: null,
  dropFee: 10,
  vehicle: 'sedan',
  alertSuccess: false,
  // other
  loading: false,
  error: false,
  errorMessage: '',
  invalidFields: [],
  valid: false,
  status: 'pending',
  username: '',
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
        alertSuccess: false,
      }
    case BookActionTypes.ROUTE_CHANGED:
      //convert meters to miles
      let distance = (action.distance * 0.000621371192).toFixed(1);
      //price set at 2.95 dollars per mile
      let price = (distance * 2.95).toFixed(2);
      return {
        ...state,
        distance,
        price,
        direction: 'oneWay',
        dropFee: 10,
        vehicle: 'sedan',
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
          dropFee: action.value === 'oneWay' ? 10 : 20
        }
      } else if (action.name === 'vehicle') {
        return {
          ...state,
          alertSuccess: false,
          [action.name]: action.value,
          price: action.value === 'sedan'
            ? (state.distance * 2.95).toFixed(2)
            : (state.distance * 3.95).toFixed(2)
        }
      }
      return {
        ...state,
        alertSuccess: false,
        [action.name]: action.value,
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
      const { name, phone, email, passengers, direction, comments, startAddress, endAddress, date, time } = state;
      const fields = { name, phone, email, passengers, direction, startAddress, endAddress, date, time };
      const invalidFields = [];

      const formatField = field => {
        if (field == "endAddress")
          field = "Destination";
        else if (field === 'startAddress')
          field = "Starting Point";
        return field.charAt(0).toUpperCase() + field.slice(1);
      }

      for (const field in fields) {
        if (!fields[field]) {
          invalidFields.push(formatField(field));
        }
      }

      return {
        ...state,
        // valid is true if invalidFields is an empty array
        // In other words, valid is true if all required fields are valid
        valid: invalidFields.length === 0 ? true : false,
        invalidFields,
        errorMessage: '',
        error: false,
        submitted: true,
        loading: true,
        username: action.username,
      }
  }
  return state;
}

export default bookReducer;