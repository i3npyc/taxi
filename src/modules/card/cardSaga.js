import { call, put, takeEvery } from 'redux-saga/effects';

import { sendCard } from '../../api/card';
import { setFething } from '../auth/actions';
import { card, payment, setError } from './actions';

export function* cardSaga(action) {
  try {
    yield put(setFething(true));
    const { number, expiryDate, name, cvc } = action.payload;
    const cardData = {
      number,
      expiryDate,
      name,
      cvc,
      token: localStorage.getItem('access_token')
    };
    const { data } = yield call(sendCard, cardData);
    yield put(setFething(false));
    if (data?.success) {
      yield put(payment());
    } else {
      yield put(setError(data?.error));
    }
  } catch (e) {
    yield put(setFething(false));
    console.error(e.message);
  }
}

export function* cardWatcher() {
  yield takeEvery(card.toString(), cardSaga);
}
