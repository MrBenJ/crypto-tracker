import * as types from './actionTypes';
import * as coinActions from './coinActions';

describe('coinActions tests', () => {

    describe('GET_COINS', () => {
        it('runs with default args if nothing is passed in', () => {
            const result = coinActions.getCoins();
            const expected = {
                type: types.GET_COINS,
                payload: {
                    force: false,
                    currentCoinData: {}
                }
            };
            expect(result).toEqual(expected);
        });

        it('runs with force and currentCoinData passed in', () => {
            const result = coinActions.getCoins(true, { btc: "awesome"});
            const expected = {
                type: types.GET_COINS,
                payload: {
                    force: true,
                    currentCoinData: { btc: "awesome"}
                }
            };
            expect(result).toEqual(expected);
        });
    });
});