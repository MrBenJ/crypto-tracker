import * as types from './actionTypes';

export function addCoin(name) {
    return {
        type: types.ADD_COIN,
        payload: {
            name
        }
    };
}

export function removeCoin(name) {
    return {
        type: types.REMOVE_COIN,
        payload: {
            name
        }
    };
}
