import { call, put, takeEvery } from 'redux-saga/effects';

import { sendCard } from '../../api/card';
import { card, payment } from './actions';

export function* cardSaga(action) {
  try {
    const { number, expiryDate, name, cvc } = action.payload;
    const cardData = {
      number,
      expiryDate,
      name,
      cvc,
      token: localStorage.getItem('access_token')
    };
    const { data } = yield call(sendCard, cardData);
    if (data?.success) {
      yield put(payment());
    }
  } catch (e) {
    console.error(e.message);
  }
}

export function* cardWatcher() {
  yield takeEvery(card.toString(), cardSaga);
}
