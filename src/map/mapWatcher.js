import { call, put, takeEvery } from 'redux-saga/effects';
import { ServiceApi } from '../service/api';
import { GET_ADDRES_LIST, GET_ROUTE, setAddresList, setRoute } from './actions';

export function* mapSaga() {
  const { data } = yield call(ServiceApi.getAddresses);
  yield put(setAddresList(data?.addresses));
}

export function* mapWatcher() {
  yield takeEvery(GET_ADDRES_LIST, mapSaga);
}

export function* routeSaga(action) {
  const { address1, address2 } = action.payload;
  const { data } = yield call(
    ServiceApi.getRoute,
    address1?.label,
    address2?.label
  );
  yield put(setRoute(data));
}

export function* routeWatchet() {
  yield takeEvery(GET_ROUTE, routeSaga);
}
