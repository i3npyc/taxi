import { call, put, takeEvery } from 'redux-saga/effects';

import { ServiceApi } from '../../service/api';

import { registration } from './action';
import { logIn } from '../auth/actions';

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const form = { email, password, name, surname };
  const { data } = yield call(ServiceApi.createAccount, form);
  if(data?.success) {
    localStorage.setItem('access_token', data?.token)
    yield put(logIn());
  }
}

export function* registrationWatcher() {
  yield takeEvery(registration.toString(), registrationSaga);
}
