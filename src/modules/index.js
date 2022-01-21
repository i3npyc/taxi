import { combineReducers } from 'redux';
import auth from './auth/reducer';
import card from './card/reducer';
import map from './map/reducer';
import registration from './registration/reducer';

export const rootReducer = combineReducers({
  auth,
  card,
  map,
  registration
});
