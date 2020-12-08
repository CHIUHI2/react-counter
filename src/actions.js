import {INCREASE_SUM, DECREASE_SUM, UPDATE_SIZE, RESET_SUM} from './actionTypes';

export const increaseSum = () => {
    return {
        type : INCREASE_SUM
    };
}

export const decreaseSum = () => {
    return {
        type : DECREASE_SUM
    };
}

export const resetSum = () => {
    return {
        type : RESET_SUM
    };
}

export const updateSize = (value) => {
    return {
        type : UPDATE_SIZE,
        payload : value
    };
}