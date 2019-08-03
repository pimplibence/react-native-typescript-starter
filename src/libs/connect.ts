import { connect as _connect, Options } from 'react-redux';
import { Action, AnyAction } from 'redux';

const defaultMapStateProps = (state: any) => ({});

const defaultMapDisatchProps = (dispatch: (action: Action<any> | AnyAction) => void) => ({});

const defaultOptions: Options<any, any, any, any> = {
    shouldHandleStateChanges: true,
    forwardRef: true
};

type MapStateProps = (state: any) => {
    [key: string]: any,
};

type MapDispatchProps = (dispatch: (action: Action<any> | AnyAction) => void) => {
    [key: string]: ((...args: any) => void) | (() => void),
};

export const connect = (mapStateProps: MapStateProps = defaultMapStateProps, mapDispatchProps: MapDispatchProps = defaultMapDisatchProps, options = defaultOptions): any => {
    return _connect(mapStateProps, mapDispatchProps, null, options);
};
