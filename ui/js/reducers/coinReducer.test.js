/* global
    describe
    it
    expect
 */

import * as types from 'js/actions/actionTypes';
import initialState from './initialState';
import coinReducer from 'js/reducers/coinReducer';

describe('coinReducer tests', () => {

    it('Returns array of objects with GET_COINS_SUCCESS', () => {
        let expected = {
            btc: "stuff",
            eth: "other_stuff"
        };
        let result = coinReducer(null, { 
            type: types.GET_COINS_SUCCESS, 
            payload: { 
                data: {
                    coins: {
                        btc: "stuff",
                        eth: "other_stuff"    
                    }
                    
                }
            }});
        expect(result).toEqual(expected);
    });

    it('returns state if no action match', () => {
        let expected = initialState.coins;
        let result = coinReducer(undefined, { type: "nope!"});

        expect(expected).toEqual(result);
    })
});