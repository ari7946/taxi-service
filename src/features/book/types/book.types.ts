
export const BookActionTypes = {
  LOCATIONS_FOUND: 'LOCATIONS_FOUND',
  LOCATIONS_CLEARED: 'LOCATIONS_CLEARED',
  ROUTE_CHANGED: 'ROUTE_CHANGED',
  INPUT: 'BOOK_INPUT',
  SUCCESS: 'BOOK_SUCCESS',
  ERROR: 'BOOk_ERROR',
  SUBMIT: 'BOOK_SUBMIT',
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

export interface LocationsFound {
  type: typeof BookActionTypes.LOCATIONS_FOUND,
  payload: { startAddress: string, endAddress: string }
}

export interface LocationsCleared {
  type: typeof BookActionTypes.LOCATIONS_CLEARED,
  payload: { startAddress: string, endAddress: string }
}

export interface RouteChanged {
  type: typeof BookActionTypes.ROUTE_CHANGED,
  payload: { distance: number }
}

export interface SubmitError {
  type: typeof BookActionTypes.ERROR,
  payload: { errorMessage: string }
}

export interface SubmitSuccess {
  type: typeof BookActionTypes.SUCCESS
}

export interface Submit {
  type: typeof BookActionTypes.SUBMIT,
  payload: { 
    formFields: { [key: string]: any } 
  }
}
