import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator, createNavigationContainer, createStackNavigator } from 'react-navigation';
import { HomeScreen } from './screens/home.screen';
import { LoginScreen } from './screens/login.screen';
import { RegistrationScreen } from './screens/registration.screen';

const home = createBottomTabNavigator({
    first: {
        path: 'first',
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: () => <Text>home_i</Text> // Must be replaced with a Icon component (not exists yet!)
        }
    },
    second: {
        path: 'second',
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: () => <Text>second_i</Text>
        }
    },
    third: {
        path: 'third',
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: () => <Text>third_i</Text>
        }
    },
    fourth: {
        path: 'fourth',
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: () => <Text>fourth_i</Text>
        }
    },
    fifth: {
        path: 'fifth',
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: () => <Text>fifth_i</Text>
        }
    },
}, {
    initialRouteName: 'first',
    tabBarOptions: {
        activeTintColor: 'blue',
        activeBackgroundColor: 'white',
        inactiveTintColor: 'grey',
        inactiveBackgroundColor: 'white',
        showLabel: true,
        showIcon: true
    }
});

const rootStack = createStackNavigator({
    registration: {
        path: 'registration',
        screen: RegistrationScreen
    },
    login: {
        path: 'login',
        screen: LoginScreen
    },
    home: {
        path: 'home',
        screen: home
    },
}, {
    initialRouteName: 'registration',
    headerMode: 'none'
});

export const appContainer = createNavigationContainer(rootStack);
