import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coinReducer(state = initialState.coins, action) {

    const ACTION_TYPE = action.type;
    const payload = action.payload;
    switch(ACTION_TYPE) {

        case types.GET_COINS_SUCCESS: {
            const { coins } = payload.data;
            let newState = Object.assign({}, state);
            newState = coins;
            return newState;
        }

        default: {
            return state;
        }

    }
}
