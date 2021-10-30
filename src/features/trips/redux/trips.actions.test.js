import TripsActionTypes from '../types/trips.types';
import { selectAuthHeaders } from '../../_global/redux/auth/auth.selectors';
import { adminLogin } from '../../_global/redux/auth/auth.actions'

import {
  getTrips,
  updateTrip,
  deleteTrip,
} from './trips.actions.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

// it('get trips', async () => {
//   const store = mockStore();
//   console.log('mockStore', store)
// console.log('getTrips', getTrips())
//   await store.dispatch(getTrips());
//   console.log('result', result);
//   const receivedActions = store.getActions(store.getState);
//   console.log('action', receivedActions);
// })

