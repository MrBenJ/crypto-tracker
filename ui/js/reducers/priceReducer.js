import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function priceReducer(state = initialState.prices, action) {

    const ACTION_TYPE = action.type;
    const payload = action.payload;
    switch(ACTION_TYPE) {

        case types.GET_PRICE_SUCCESS: {
            const { coin } = payload.data;
            return [...state, coin];
            
        }

        case types.GET_PRICE_FAILURE: {
            return state;
        }

        default: {
            return state;
        }

    }
}
