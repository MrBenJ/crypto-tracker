import * as types from '../actions/actionTypes';
import initialState from './initialState';
import priceReducer from './priceReducer';

describe('priceReducer tests', () => {
    it('handles GET_PRICE_SUCCESS', () => {
        const result = priceReducer(undefined, {
            type: types.GET_PRICE_SUCCESS,
            payload: {
                data: {
                    coin: "xmr"
                }
            }
        });
        const expected = ['xmr'];

        expect(result).toEqual(expected);
    });

    it('handles GET_PRICE_FAILURE', () => {
        const result = priceReducer(['xmr', 'btc', 'eth'], {
            type: types.GET_PRICE_SUCCESS,
            payload: {
                data: {
                    coin: "xmr"
                }
            }
        });
        const expected = ['btc', 'eth'];
        expect(result).toEqual(expected); 
    });

    it('returns state for default', () => {
        const result = priceReducer(undefined, {
            type: 'nope!'
        });
        
        expect(result).toEqual(initialState.prices);
    });

})