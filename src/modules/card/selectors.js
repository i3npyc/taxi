import { createSelector } from "reselect";

const getSuccess = state => state?.card.success;

export const selectSuccess = createSelector(getSuccess, success => success);