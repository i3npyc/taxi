import { createAction } from 'redux-actions';

export const SET_ADDRES_LIST = 'SET_ADDRES_LIST';
export const GET_ADDRES_LIST = 'GET_ADDRES_LIST';
export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

export const getAddresList = createAction(GET_ADDRES_LIST)
export const setAddresList = createAction(SET_ADDRES_LIST)
export const getRoute = createAction(GET_ROUTE)
export const setRoute = createAction(SET_ROUTE)
