import { combineReducers } from 'redux';
import { INCREASE_SUM, DECREASE_SUM, UPDATE_SIZE, RESET_SUM } from './actionTypes';

const sum = (state = 0, action) => {
    switch(action.type) {
        case INCREASE_SUM : 
            return state + 1;
        case DECREASE_SUM : 
            return state - 1;
        case RESET_SUM : 
            return 0;
        default : 
            return state;
    }
}

const size = (state = 0, action) => {
    switch(action.type) {
        case UPDATE_SIZE : 
            return action.payload;
        default : 
            return state;
    }
}

export default combineReducers(
    {
        sum,
        size
    }
)