import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coinReducer(state = initialState.tracker, action) {
    
    const ACTION_TYPE = action.type;

    switch(ACTION_TYPE) {

        case types.ADD_COIN: {
            const { name } = action.payload;        
            return [...state, name];
        }

        case types.REMOVE_COIN: {
            const { name } = action.payload;
            return state.filter( coin => coin !== name);
        }

        default: {
            return state;
        }

    }
}
