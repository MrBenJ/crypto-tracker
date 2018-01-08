import * as types from './actionTypes';
import * as trackerActions from './trackerActions';

describe('trackerActions tests', () => {

    it('handles addCoin', () => {
        const result = trackerActions.addCoin('btc');
        const expected = { type: types.ADD_COIN, payload: { name: 'btc'} };

        expect(result).toEqual(expected);
    });

    it('handles removeCoin', () => {
        const result = trackerActions.removeCoin('btc');
        const expected = { type: types.REMOVE_COIN, payload: { name: 'btc'} };

        expect(result).toEqual(expected);
    });
});