import { call, put, takeEvery } from 'redux-saga/effects';

import { ServiceApi } from '../../service/api';
import { GET_ADDRES_LIST, GET_ROUTE, setAddresList, setRoute } from './actions';

export function* mapSaga() {
  try {
    const { data } = yield call(ServiceApi.getAddresses);
    yield put(setAddresList(data?.addresses));
  } catch(error) {
    console.error(error.message)
  }
}

export function* mapWatcher() {
  yield takeEvery(GET_ADDRES_LIST, mapSaga);
}

export function* routeSaga(action) {
  try {
    const { address1, address2 } = action.payload;
    const { data } = yield call(
      ServiceApi.getRoute,
      address1?.label,
      address2?.label
    );
    yield put(setRoute(data));
  } catch(error) {
    console.error(error.message)
  }
}

export function* routeWatchet() {
  yield takeEvery(GET_ROUTE, routeSaga);
}
