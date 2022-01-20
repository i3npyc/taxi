export const CARD = 'CARD';
export const PAYMENT = 'PAYMENT';
export const SETCARD = 'SETCARD';
export const NOTPAYMENT = 'NOTPAYMENT';

export const card = (number, expiryDate, name, cvc) => ({
  type: CARD,
  payload: { number, expiryDate, name, cvc }
});
export const payment = () => ({ type: PAYMENT });
export const setCard = () => ({ type: SETCARD });
export const notpayment = () => ({ type: NOTPAYMENT });
