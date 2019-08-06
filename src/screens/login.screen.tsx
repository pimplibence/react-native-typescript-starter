import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { CounterActions } from '../actions/counter.actions';
import { connect } from '../libs/connect';

const mapStateProps = (store: any) => ({
    counter: store.counter
});

const mapDispatchProps = (dispatch: any) => ({
    setCounter: (value: number) => dispatch(CounterActions.set(value)),
    incrementCounter: () => dispatch(CounterActions.increment()),
    decrementCounter: () => dispatch(CounterActions.decrement()),
});

@connect(mapStateProps, mapDispatchProps)
export class LoginScreen extends React.Component<any> {
    public render(): React.ReactNode {
        return <View>
            <Text>LoginScreen</Text>

            <Button title="To Login" onPress={() => this.props.navigation.navigate({ routeName: 'home' })}/>
        </View>;
    }
}
