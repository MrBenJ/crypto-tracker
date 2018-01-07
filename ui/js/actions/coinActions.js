import * as types from './actionTypes';

export function getCoins(force = false, currentCoinData = {}) {
    return {
        type: types.GET_COINS,
        payload: {
            force,
            currentCoinData
        }
    };
}
