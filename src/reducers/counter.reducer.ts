import { AnyAction } from 'redux';
import { CounterActions } from '../actions/counter.actions';

const initial = {
    value: 0
};

export const counterReducer = (state = initial, action: AnyAction) => {

    switch (action.type) {
        case CounterActions.SET: {
            state = {
                ...state,
                value: action.payload
            };

            break;
        }
        case CounterActions.INCREMENT: {
            state = {
                ...state,
                value: state.value + 1
            };

            break;
        }
        case CounterActions.DECREMENT: {
            state = {
                ...state,
                value: state.value - 1
            };

            break;
        }
        default: {
            //
        }
    }

    return state;
};
