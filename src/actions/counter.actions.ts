import { Action } from 'redux';

export abstract class CounterActions {
    public static INCREMENT = 'CounterActions[INCREMENT]';
    public static DECREMENT = 'CounterActions[DECREMENT]';

    public static increment(): Action<any> {
        return {
            type: CounterActions.INCREMENT
        };
    }

    public static decrement(): Action<any> {
        return {
            type: CounterActions.DECREMENT
        };
    }

}
