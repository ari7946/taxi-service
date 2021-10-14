export const TripsActionTypes = {
  SUBMIT: 'SUBMIT',
  GET_TRIPS: 'GET_TRIPS',
  UPDATE_TRIP: 'UPDATE_TRIP',
  DELETE_TRIP: 'DELETE_TRIP',
  ERROR: 'ERROR',
}

export interface ObjectLiteral {
  [key: string]: any;
}

export type TripStatus = 'confirm' | 'complete' | 'delete' | 'archive' | 'getTrips' | '';

interface SubmitAction {
  type: typeof TripsActionTypes.SUBMIT,
  payload: {
    loadingType: string
    loadingTripId?: number
  }
}

interface GetTripsAction {
  type: typeof TripsActionTypes.GET_TRIPS,
  payload: { trips: ObjectLiteral[] }
}

interface UpdateTripsAction {
  type: typeof TripsActionTypes.UPDATE_TRIP,
  payload: { trip: ObjectLiteral }
}

interface DeleteTripsAction {
  type: typeof TripsActionTypes.DELETE_TRIP,
  payload: { trip: ObjectLiteral }
}

interface ErrorAction {
  type: typeof TripsActionTypes.ERROR,
  payload: { error: string }
}

export type Action = SubmitAction | GetTripsAction | UpdateTripsAction | DeleteTripsAction | ErrorAction

