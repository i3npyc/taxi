export const CARD = 'CARD';

export const card = (number, expiryDate, name, cvc) => ({
  type: CARD,
  payload: { number, expiryDate, name, cvc }
});
