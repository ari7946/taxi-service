const BookReducer = (state, action) => {
  switch (action.type) {
    case 'locationsFound':
      return {
        ...state,
        points: action.points,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
        alertSuccess: false,
      }
    case 'locationsCleared':
      return {
        ...state,
        points: action.points,
        startAddress: action.startAddress,
        endAddress: action.endAddress,
        alertSuccess: false,
      }
    case 'routeChanged':
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
    case 'input':
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
    case 'success':
      return {
        ...state,
        loading: false,
        submitted: false,
        errorMessage: '',
        invalidFields: [],
        valid: true,
        alertSuccess: true,
      }
    case 'error':
      return {
        ...state,
        error: true,
        loading: false,
        submitted: false,
        errorMessage: action.errorMessage,
        alertSuccess: false,
      }
    case 'submit':
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
      }
  }
  return state;
}

const initialState = {
  // map
  distance: "",
  points: [null, null],
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
  status: 'pending',
}

export { BookReducer, initialState};

