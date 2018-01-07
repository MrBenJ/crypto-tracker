import { combineReducers } from 'redux';
import coins from './coinReducer';
import tracker from './trackerReducer';
import prices from './priceReducer';
const rootReducer = combineReducers({
    coins,
    tracker,
    prices
});

export default rootReducer;
