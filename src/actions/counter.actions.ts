import { AnyAction } from 'redux';

export abstract class CounterActions {
    public static readonly SET = 'CounterActions(SET)';
    public static readonly INCREMENT = 'CounterActions(INCREMENT)';
    public static readonly DECREMENT = 'CounterActions(DECREMENT)';

    public static set(value: number): AnyAction {
        return {
            type: CounterActions.SET,
            payload: value
        };
    }

    public static increment(): AnyAction {
        return {
            type: CounterActions.INCREMENT
        };
    }

    public static decrement(): AnyAction {
        return {
            type: CounterActions.DECREMENT
        };
    }
}
