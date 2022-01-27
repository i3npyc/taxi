import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { mapSaga } from './mapSaga';
import { getAddresses } from '../../api/map';
import { setAddresList } from './actions';

describe('mapSaga', () => {
  const action = {
    payload: {
      addresess: ['testaddressOne', 'testaddressTwo', 'testaddressThree', 'testaddressFour']
    }
  };
  const generate = cloneableGenerator(mapSaga)(action);

  it('test send addreses', () => {
    const generateClone = generate.clone();

    expect(generateClone.next().value).toEqual(call(getAddresses));

    expect(generateClone.next(action.payload.addresess).value).toEqual(
      put({
        type: setAddresList.toString(),
        payload: action.payload.addresess
      })
    );
  });
});
