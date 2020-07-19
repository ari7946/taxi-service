import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import adminReducer from './admin/admin.reducer';


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// }

const rootReducer =  combineReducers({
  admin: adminReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;