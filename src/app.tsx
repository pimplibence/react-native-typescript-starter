import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { counterReducer } from './reducers/counter.reducer';
import { HomeScreen } from './screens/home.screen';

const reducers = {
    counter: counterReducer
};

const store = createStore(
    combineReducers(reducers),
    compose(
        applyMiddleware(reduxLogger)
    )
);

export class App extends React.Component<any> {
    public render(): React.ReactNode {
        return <Provider store={store}>
            <HomeScreen/>
        </Provider>;
    }
}
