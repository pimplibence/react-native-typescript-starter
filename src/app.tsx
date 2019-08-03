import * as React from 'react';
import { createNavigationContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { counterReducer } from './reducers/counter.reducer';
import { HomeScreen } from './screens/home.screen';

// NAVIGATION

const navigation = createStackNavigator({
    home: {
        path: 'home',
        screen: HomeScreen
    }
}, {
    headerMode: 'none',
    initialRouteName: 'home'
});

const appContainer = createNavigationContainer(navigation);

// REDUX / STORE

const reducers = {
    counter: counterReducer
};

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
