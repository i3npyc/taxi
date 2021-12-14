import { combineReducers } from 'redux';
import { authReducer as auth } from '../auth/reducer';
import { paymentReducer as payment } from '../card/reducer';
import { mapReducer as map } from '../map/reducer';

export const rootReducer = combineReducers({
  auth,
  payment,
  map
});
