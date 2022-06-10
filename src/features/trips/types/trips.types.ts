export const TripsActionTypes = {
  SUBMIT: 'SUBMIT',
  GET_TRIPS: 'GET_TRIPS',
  UPDATE_TRIP: 'UPDATE_TRIP',
  DELETE_TRIP: 'DELETE_TRIP',
  ERROR: 'ERROR',
};

export interface ObjectLiteral {
  [key: string]: any;
}

export type TripStatus = 'pending' | 'confirm' | 'complete' | 'delete' | 'archive' | '';

// each trip loads when user or admin requests a status change.
// 'getTrips' handles loading state for initial request to get ALL trips
export type TripLoadingStatus = TripStatus | 'getTrips';

export interface Trip {
  date: string;
  distance: number;
  email: string;
  endAddress: string;
  id: number;
  name: string;
  passengers: number;
  phone: number | string;
  price: number;
  startAddress: string;
  status: TripStatus;
  username: string;
  vehicle: string;

  // optional
  comments?: string | null;
  created_at?: string | number;
  direction?: string | null;
  time?: string | number;
}

export type TabState = 'all' | 'confirmed' | 'completed' | 'archived';

// Trip Actions
interface SubmitAction {
  type: typeof TripsActionTypes.SUBMIT;
  payload: {
    loadingType: string;
    loadingTripId?: number;
  };
}

interface GetTripsAction {
  type: typeof TripsActionTypes.GET_TRIPS;
  payload: { trips: Trip[] };
}

interface UpdateTripsAction {
  type: typeof TripsActionTypes.UPDATE_TRIP;
  payload: { trip: Trip };
}

interface DeleteTripsAction {
  type: typeof TripsActionTypes.DELETE_TRIP;
  payload: { trip: Trip };
}

interface ErrorAction {
  type: typeof TripsActionTypes.ERROR;
  payload: { error: string };
}

export type Action =
  | SubmitAction
  | GetTripsAction
  | UpdateTripsAction
  | DeleteTripsAction
  | ErrorAction;
