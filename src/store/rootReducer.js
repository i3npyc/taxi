import { combineReducers } from 'redux';

// import { authReducer as auth } from '../modules/auth/reducer';
import { authReducer } from '../modules/auth/reducer'
import { paymentReducer as payment } from '../modules/card/reducer';
import { mapReducer as map } from '../modules/map/reducer';

export const rootReducer = combineReducers({
  authReducer,
  payment,
  map
});
