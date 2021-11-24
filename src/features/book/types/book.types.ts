import { TripsActionTypes } from "../../trips/types/trips.types";

export const BookActionTypes = {
  LOCATIONS_FOUND: 'LOCATIONS_FOUND',
  LOCATIONS_CLEARED: 'LOCATIONS_CLEARED',
  ROUTE_CHANGED: 'ROUTE_CHANGED',
  INPUT: 'BOOK_INPUT',
  SUCCESS: 'BOOK_SUCCESS',
  ERROR: 'BOOk_ERROR',
  SUBMIT: 'BOOK_SUBMIT',
}

export interface ObjectLiteral {
  [key: string]: any;
}

export interface Trip {
  date: string
  distance: number
  email: string
  endAddress: string
  id: number
  name: string
  passengers: number
  phone: number | string
  price: number
  startAddress: string
  username: string | null
  vehicle: string

  // optional
  comments?: string | null
  direction?: string | null
}

// Book Actions
export interface SetInput {
  type: typeof BookActionTypes.INPUT,
  payload: { name: string, value: string }
}

interface locationsFound {
  type: typeof BookActionTypes.LOCATIONS_FOUND,
  payload: { startAddress: string, endAddress: string }
}

interface locationsCleared {
  type: typeof BookActionTypes.LOCATIONS_CLEARED,
  payload: { startAddress: string, endAddress: string }
}

interface routeChanged {
  type: typeof BookActionTypes.ROUTE_CHANGED,
  payload: { distance: number }
}

interface submitError {
  type: typeof BookActionTypes.ERROR,
  payload: { errorMessage: string }
}

interface submitSuccess {
  type: typeof BookActionTypes.SUCCESS
}

interface submit {
  type: typeof BookActionTypes.SUBMIT,
  payload: { 
    formFields: { [key: string]: any } 
  }
}
