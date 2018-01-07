import * as types from './actionTypes';

export function getPrice(name) {
    return {
        type: types.GET_PRICE,
        payload: {
            name
        }
    };
}