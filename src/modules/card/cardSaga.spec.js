import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call } from 'redux-saga/effects';
import { sendCard } from '../../api/card';
import { cardSaga } from './cardSaga';

describe('cardSaga', () => {
  const action = {
    payload: {
      number: '0000 0000 0000 0000',
      expiryDate: '12/4',
      name: 'TESTNAME',
      cvc: '321'
    }
  };

  const generate = cloneableGenerator(cardSaga)(action);

  it('send data card', () => {
    const generateClone = generate.clone();

    expect(generateClone.next().value).toEqual(
      call(sendCard, {
        number: action.payload.number,
        expiryDate: action.payload.expiryDate,
        name: action.payload.name,
        cvc: action.payload.cvc,
        token: localStorage.getItem('access_token')
      })
    );
  });
});
