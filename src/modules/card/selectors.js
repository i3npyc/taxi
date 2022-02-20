import { createSelector } from 'reselect';

const getSuccess = state => state?.card.success;
const getCardData = state => state?.card.cardData;
const getErrorCard = state => state?.card.cardError;

export const selectSuccess = createSelector(getSuccess, success => success);
export const selectCardData = createSelector(getCardData, cardData => cardData);
export const selectErrorCard = createSelector(
  getErrorCard,
  cardError => cardError
);
