import BookActionTypes from './book.types';
import axios from 'axios';

export const setInput = ({ name, value }) => {
  dispatch({ type: BookActionTypes.INPUT, name, value })
}

export const locationsFound = ({ points, startAddress, endAddress }) => {
  dispatch({ type: BookActionTypes.LOCATIONS_FOUND, points, startAddress, endAddress });
}

export const locationsCleared = ({ points, startAddress, endAddress }) => {
  dispatch({ type: BookActionTypes.LOCATIONS_CLEARED, points, startAddress, endAddress })
}

export const routeChanged = ({ distance }) => {
  dispatch({ type: BookActionTypes.ROUTE_CHANGED, distance });
}