export const BookActionTypes = {
  LOCATIONS_FOUND: 'LOCATIONS_FOUND',
  LOCATIONS_CLEARED: 'LOCATIONS_CLEARED',
  ROUTE_CHANGED: 'ROUTE_CHANGED',
  INPUT: 'BOOK_INPUT',
  SUCCESS: 'BOOK_SUCCESS',
  ERROR: 'BOOk_ERROR',
  SUBMIT: 'BOOK_SUBMIT',
};

// required fields from book form.
export interface FormFields {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  comments?: string;
}

// Extends book form fields.
// Fields that a user is required to select and/or input
export interface UserRequiredFields extends FormFields {
  startAddress: string;
  endAddress: string;
}

// Extends UserRequiredFields.
// This are fields that are required to make post request to server: computed AND user selected
export interface BookTripRequestBody extends UserRequiredFields {
  distance: number;
  price: number;
  passengers: string;
  vehicle: string;
  status: string;
  username?: string;
  direction?: string | null;
}

// Book Actions
export interface SetInput {
  type: typeof BookActionTypes.INPUT;
  payload: { name: string; value: string };
}

export interface LocationsFound {
  type: typeof BookActionTypes.LOCATIONS_FOUND;
  payload: { startAddress: string; endAddress: string };
}

export interface LocationsCleared {
  type: typeof BookActionTypes.LOCATIONS_CLEARED;
  payload: { startAddress: string; endAddress: string };
}

export interface RouteChanged {
  type: typeof BookActionTypes.ROUTE_CHANGED;
  payload: { distance: number };
}

export interface SubmitError {
  type: typeof BookActionTypes.ERROR;
  payload: { errorMessage: string };
}

export interface SubmitSuccess {
  type: typeof BookActionTypes.SUCCESS;
}

export interface Submit {
  type: typeof BookActionTypes.SUBMIT;
  payload: {
    formFields: FormFields;
  };
}
