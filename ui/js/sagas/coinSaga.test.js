/* global
    describe
    it
    expect
 */
import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';

import rootCoinSaga, { getCoinsSaga, watchGetCoins } from './coinSaga';

describe('coinSaga tests', () => {

    describe('getCoinsSaga (non-forced initial)', () => {
        let gen = getCoinsSaga({ payload: {
            force: false,
            currentCoinData: {}
        }});

        it('sends the get request', () => {
            expect(gen.next().value).toEqual(call(axios.get, 'https://coinbin.org/coins'))
        });

        it('outputs GET_COINS_SUCCESS with payload response', () => {
            expect(gen.next({ data: "Hello dolly"}).value).toEqual(
                put({ 
                    type: types.GET_COINS_SUCCESS, 
                    payload: { data: "Hello dolly" }
                })
            )
        });

        
    });

    describe('getCoinsSaga (no-op)', () => {
        let gen = getCoinsSaga({ payload: {
            force: false,
            currentCoinData: { btc: {}}
        }});

        it('Yields a no-op action if there is previous data and force = false', () => {
            expect(gen.next().value).toEqual(
                put({ type: types.GET_COINS_NOOP})
            );
            expect(gen.next().value).toBeFalsy();
        });

    });

    describe('getCoinsSaga (error)', () => {
        let gen = getCoinsSaga({ payload: {
            force: false,
            currentCoinData: {}
        }});

        it('sends the get request', () => {
            expect(gen.next().value).toEqual(call(axios.get, 'https://coinbin.org/coins'))
        });
        
        it('handles errors', () => {
            expect(gen.throw("oh no").value).toEqual(
                put({ type: types.GET_COINS_FAILURE, error: "oh no"})
            );
        });
    })

    describe('watchCoinsSaga', () => {
        let gen = watchGetCoins();

        it('Returns a takeEvery effect', () => {
            expect(gen.next().value).toEqual(
                takeEvery(types.GET_COINS, getCoinsSaga)
            );
        });
    })

    describe('rootCoinSaga', () => {
        it('yields all watcher sagas', () => {
            let gen = rootCoinSaga();
            expect(gen.next().value).toEqual(all([watchGetCoins()]));
        });
    });
});
