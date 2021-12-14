import { SET_ADDRES_LIST } from './actions';

const initialState = {
  addresses: []
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRES_LIST:
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
};
