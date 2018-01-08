import * as types from '../actions/actionTypes';
import initialState from './initialState';
import trackerReducer from './trackerReducer';

describe('trackerReducer tests', () => {
    it('handles ADD_COIN', () => {
        const result = trackerReducer(undefined, {
            type: types.ADD_COIN,
            payload: {
                name: "xmr"
            }
        });
        const expected = ['xmr'];

        expect(result).toEqual(expected);
    });

    it('handles REMOVE_COIN', () => {
        const result = trackerReducer(['xmr', 'btc', 'eth'], {
            type: types.REMOVE_COIN,
            payload: {
                name: "xmr"
            }
        });
        const expected = ['btc', 'eth'];
        expect(result).toEqual(expected); 
    });

    it('returns state for default', () => {
        const result = trackerReducer(undefined, {
            type: 'not happenin dude'
        });
        
        expect(result).toEqual(initialState.tracker);
    });
});