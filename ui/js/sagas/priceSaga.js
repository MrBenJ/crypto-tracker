import axios from 'axios';
import { takeEvery, call, all, put } from 'redux-saga/effects';

import * as types from 'js/actions/actionTypes';

const getCoinPrice = coin => `https://coinbin.org/${coin}`;

export function* getPriceSaga(action) {
    
    const { name } = action.payload;

    try {
        const resp = yield call(axios.get, getCoinPrice(name));
        yield put({ type: types.GET_PRICE_SUCCESS, payload: resp});

    } catch(error) {
        yield put({ type: types.GET_PRICE_FAILURE, error });
    }
}

export function* watchGetPrice() {
    yield takeEvery(types.GET_PRICE, getPriceSaga);
}

export default function* rootPriceSaga() {
    yield all([
        watchGetPrice()
    ]);
}