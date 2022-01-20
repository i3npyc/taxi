import { SET_ADDRES_LIST, SET_ROUTE } from './actions';

const initialState = {
  addresses: [],
  coordinates: []
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRES_LIST:
      return { ...state, addresses: action.payload };
    case SET_ROUTE:
      return { ...state, coordinates: action.payload };
    default:
      return state;
  }
};
