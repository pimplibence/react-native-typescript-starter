import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import { userReducer } from './reducers/user.reducer';
import { HomeScreen } from './screens/home.screen';
import { ProfileScreen } from './screens/profile.screen';

// NAVIGATION

const navigation = createStackNavigator({
    home: HomeScreen,
    profile: ProfileScreen
}, {
    headerMode: 'none',
    initialRouteName: 'home'
});

const appContainer = createAppContainer(navigation);

// REDUX / STORE

const reducers = {
    user: userReducer
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
            {React.createElement(appContainer)}
        </Provider>;
    }
}
