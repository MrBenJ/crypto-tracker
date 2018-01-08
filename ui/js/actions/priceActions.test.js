import * as types from './actionTypes';
import * as priceActions from './priceActions';

describe('priceActions tests', () => {

    it('handles getPrice', () => {
        const result = priceActions.getPrice('btc');
        const expected = { type: types.GET_PRICE, payload: { name: 'btc'} };

        expect(result).toEqual(expected);
    });
});