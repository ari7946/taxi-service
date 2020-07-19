import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import tripsReducer from './admin/admin.reducer';


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// }

const rootReducer =  combineReducers({
  trips: tripsReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;