import { Action } from 'redux';
import { CounterActions } from '../actions/counter.actions';

const initialState = {
    counter: 0
};

export const counterReducer = (state: any = initialState, action: Action<any>) => {

    switch (action.type) {
        case CounterActions.INCREMENT: {
            return {
                ...state,
                counter: ++state.counter
            };
        }
        case CounterActions.DECREMENT: {
            return {
                ...state,
                counter: --state.counter
            };
        }
        default: {
            return state;
        }
    }

    return state;
};
