import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tripsReducer from '../../trips/redux/trips.reducer';
import bookReducer from '../../book/redux/book.reducer';
import authReducer from '../../auth/redux/auth.reducer';

// auth state will persist in localstorage
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  trips: tripsReducer,
  book: bookReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
