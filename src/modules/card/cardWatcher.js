import { call, put, takeEvery } from 'redux-saga/effects';
import { ServiceApi } from '../../service/api';
import { card, payment } from './actions';

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
    yield put(payment())
  }
}

export function* cardWatcher() {
  yield takeEvery(card.toString(), cardSaga);
}
