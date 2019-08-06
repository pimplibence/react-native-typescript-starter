import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { appContainer } from './navigation';
import { reducers } from './reducers';

const store = createStore(
    combineReducers(reducers),
    compose(
        applyMiddleware(reduxThunk),
        applyMiddleware(reduxLogger)
    )
);

export class App extends React.Component<any> {
    public render(): React.ReactNode {
        return <Provider store={store}>
            {React.createElement(appContainer)}
        </Provider>;
    }
}
