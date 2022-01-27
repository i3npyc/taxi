import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { setFething } from '../auth/actions';
import { createAccount } from '../../api/auth';
import { registrationSaga } from './registrationSaga';

describe('registrationSaga branching', () => {
  const action = {
    payload: {
      email: 'testemail',
      password: 'testpassword',
      name: 'testname',
      surname: 'testsurname'
    }
  };

  const generate = cloneableGenerator(registrationSaga)(action);

  it('puts registration data if no errors', () => {
    const generateClone = generate.clone();

    expect(generateClone.next(true).value).toEqual(
      put({
        type: setFething.toString(),
        payload: true
      })
    );

    expect(generateClone.next().value).toEqual(
      call(createAccount, {
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname
      })
    );
    expect(generateClone.next(false).value).toEqual(
      put({
        type: setFething.toString(),
        payload: false
      })
    );
  });
});
