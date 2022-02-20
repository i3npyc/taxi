import { createAction } from 'redux-actions';

export const CARD = 'CARD';
export const PAYMENT = 'PAYMENT';
export const SETCARD = 'SETCARD';
export const NOTPAYMENT = 'NOTPAYMENT';
export const ERROR_CARD = 'ERROR_CARD';

export const card = createAction(CARD);
export const payment = createAction(PAYMENT);
export const setCard = createAction(SETCARD);
export const notpayment = createAction(NOTPAYMENT);
export const setError = createAction(ERROR_CARD);
