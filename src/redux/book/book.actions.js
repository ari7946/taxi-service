import BookActionTypes from './book.types';
import axios from 'axios';

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