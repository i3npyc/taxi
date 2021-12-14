export const SET_ADDRES_LIST = 'SET_ADDRES_LIST';
export const GET_ADDRES_LIST = 'GET_ADDRES_LIST';

export const getAddresList = () => ({ type: GET_ADDRES_LIST });
export const setAddresList = payload => ({ type: SET_ADDRES_LIST, payload });
