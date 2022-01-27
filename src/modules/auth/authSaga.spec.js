import { authenticateSaga } from './authSaga';
import { call, put } from 'redux-saga/effects';

import { setFething } from './actions';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { auth } from '../../api/auth';

describe('authSaga branching', () => {
  const action = {
    payload: {
      email: 'testemail',
      password: 'testpassword'
    }
  };

  const generate = cloneableGenerator(authenticateSaga)(action);

  it('puts login data if no errors', () => {
    const generateClone = generate.clone();

    expect(generateClone.next(true).value).toEqual(put({
      type: setFething.toString(),
      payload: true
    }))

    expect(generateClone.next().value).toEqual(
      call(auth, {
        email: action.payload.email,
        password: action.payload.password
      })
    );
    expect(generateClone.next(false).value).toEqual(put({
      type: setFething.toString(),
      payload: false
    }))
  });
});
