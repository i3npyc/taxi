import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { setAddresList, setRoute } from './actions';

const addresses = handleActions(
  {
    [setAddresList]: (_state, action) => action.payload
  },
  []
);

const coordinates = handleActions(
  {
    [setRoute]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  addresses,
  coordinates
});
