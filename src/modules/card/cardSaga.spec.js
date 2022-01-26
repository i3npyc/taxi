import { recordSaga } from '../recordSaga';
import { CardSaga } from './cardSaga';
import { card } from './actions';

jest.mock('../../api/card', () => ({ serverLogin: jest.fn(() => true) }));

describe('cardSaga', () => {
  describe('#CARD', () => {
    it('send card data', async () => {
      const dispatched = await recordSaga(
        CardSaga,
        card('testNumber', 'testExpiryDate', 'name', 'cvc', 'token')
      );
      expect(dispatched).toEqual([
        {
          type: 'LOG_IN',
          payload: true,
          type: 'FETHING'
        },
        {
          payload: false,
          type: 'FETHING'
        }
      ]);
    });
  });
});
