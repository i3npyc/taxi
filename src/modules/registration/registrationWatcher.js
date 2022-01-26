import { call, put, takeEvery } from 'redux-saga/effects';

import { registration, setRegistrationError } from './action';
import { logIn, setFething } from '../auth/actions';
import { createAccount } from '../../api/auth';
import { getCardData } from '../../api/card';
import { setCard } from '../card/actions';

export function* registrationSaga(action) {
  try {
    yield put(setFething(true));
    const { email, password, name, surname } = action.payload;
    const form = { email, password, name, surname };
    const { data } = yield call(createAccount, form);
    yield put(setFething(false));
    if (data?.success) {
      localStorage.setItem('access_token', data?.token);
      const dataCard = yield call(getCardData, data?.token);
      yield put(setCard(dataCard?.data));
      yield put(logIn());
    } else {
      yield put(setRegistrationError(data.error));
    }
  } catch (error) {
    yield put(setFething(false));
    console.error(error.message);
  }
}

export function* registrationWatcher() {
  yield takeEvery(registration.toString(), registrationSaga);
}
