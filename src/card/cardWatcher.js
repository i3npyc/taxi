import { call, takeEvery } from 'redux-saga/effects';
import { ServiceApi } from '../service/api';
import { CARD } from './actions';

export function* cardSaga(action) {
  const { number, expiryDate, name, cvc } = action.payload;
  const card = {
    number,
    expiryDate,
    name,
    cvc,
    token: localStorage.getItem('access_token')
  };
  const { data } = yield call(ServiceApi.card, card);
  if (data?.success) {
    localStorage.setItem('profile', card);
  }
}

export function* cardWatcher() {
  yield takeEvery(CARD, cardSaga);
}
