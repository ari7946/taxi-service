import BookActionTypes from './book.types';

export const setInput = ({ name, value }) => {
  return { type: BookActionTypes.INPUT, name, value }
}

export const locationsFound = ({ points, startAddress, endAddress }) => {
  return { type: BookActionTypes.LOCATIONS_FOUND, points, startAddress, endAddress };
}

export const locationsCleared = ({ points, startAddress, endAddress }) => {
  return { type: BookActionTypes.LOCATIONS_CLEARED, points, startAddress, endAddress }
}

export const routeChanged = ({ distance }) => {
  return { type: BookActionTypes.ROUTE_CHANGED, distance };
}

export const submitError = ({ errorMessage }) => {
  return { type: BookActionTypes.ERROR, errorMessage };
}

export const submitForm = () => {
  const username = localStorage.getItem('username') || '';
  return { type: BookActionTypes.SUBMIT, username };
}

export const submitSuccess = () => {
  return { type: BookActionTypes.SUCCESS };
}