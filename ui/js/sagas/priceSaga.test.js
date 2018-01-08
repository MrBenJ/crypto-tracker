/* global
    describe
    it
    expect
 */
import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';
import rootPriceSaga, { getPriceSaga, watchGetPrice } from './priceSaga';

describe('priceSaga tests', () => {

    describe('getPriceSaga', () => {
        it('Handles success', () => {
            let gen = getPriceSaga({ payload: { name: 'eth'}});
            expect(gen.next().value).toEqual(
                call(axios.get, 'https://coinbin.org/eth')
            );

            expect(gen.next('response here').value).toEqual(
                put({ type: types.GET_PRICE_SUCCESS, payload: 'response here'})
            );
        });

        it('handles failure', () => {
            let gen = getPriceSaga({ payload: { name: 'eth'}});
            expect(gen.next().value).toEqual(
                call(axios.get, 'https://coinbin.org/eth')
            );

            expect(gen.throw('error happen halp').value).toEqual(
                put(({ type: types.GET_PRICE_FAILURE, error: 'error happen halp'}))
            );
        });
    });

    describe('watchGetPrice', () => {
        it('Returns a takeEvery effect', () => {
            let gen = watchGetPrice();
            expect(gen.next().value).toEqual(
                takeEvery(types.GET_PRICE, getPriceSaga)
            );
        });
    });

    describe('rootPriceSaga', () => {
        it('Returns an all effect', () => {
            let gen = rootPriceSaga();

            expect(gen.next().value).toEqual(
                all([watchGetPrice()])
            );
        });
    });
});
