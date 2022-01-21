import { takeEvery, call, put } from 'redux-saga/effects';

import { ServiceApi } from '../../service/api';
import { authenticate, logIn, setError, setFething } from './actions';

export function* authenticateSaga(action) {
  try {
    yield put(setFething(true));
    const { email, password } = action.payload;
    const form = { email, password };
    const { data } = yield call(ServiceApi.auth, form);
    yield put(setFething(false));
    if (data?.success) {
      localStorage.setItem('access_token', data?.token);
      yield put(logIn());
    } else {
      yield put(setError(data.error));
    }
  } catch (error) {
    yield put(setFething(false));
    console.error(error);
  }
}

export function* authWatcher() {
  yield takeEvery(authenticate.toString(), authenticateSaga);
}
