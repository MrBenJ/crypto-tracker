import axios from 'axios';
import { takeEvery, call, all, put } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';

const GET_COINS_ENDPOINT = 'https://coinbin.org/coins';

export function* getCoinsSaga(action) {
    
    const { force, currentCoinData } = action.payload;
    
    // If there is coin data and the call is not forced, then
    // just dispatch a no-op action and return.
    if(Object.keys(currentCoinData).length && !force) {
        yield put({ type: types.GET_COINS_NOOP });
        return;
    }

    try {
        const resp = yield call(axios.get, GET_COINS_ENDPOINT);
        yield put({ type: types.GET_COINS_SUCCESS, payload: resp});

    } catch(error) {
        yield put({ type: types.GET_COINS_FAILURE, error });
    }
}

export function* watchGetCoins() {
    yield takeEvery(types.GET_COINS, getCoinsSaga);
}

export default function* rootCoinSaga() {
    yield all([
        watchGetCoins()
    ]);
}