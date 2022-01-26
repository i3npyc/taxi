import { createSelector } from 'reselect';

const getSuccess = state => state?.card.success;
const getCardData = state => state?.card.cardData;

export const selectSuccess = createSelector(getSuccess, success => success);
export const selectCardData = createSelector(getCardData, cardData => cardData);
