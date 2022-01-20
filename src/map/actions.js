export const SET_ADDRES_LIST = 'SET_ADDRES_LIST';
export const GET_ADDRES_LIST = 'GET_ADDRES_LIST';
export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

export const getAddresList = () => ({ type: GET_ADDRES_LIST });
export const setAddresList = payload => ({ type: SET_ADDRES_LIST, payload });
export const getRoute = payload => ({ type: GET_ROUTE, payload });
export const setRoute = payload => ({ type: SET_ROUTE, payload });
