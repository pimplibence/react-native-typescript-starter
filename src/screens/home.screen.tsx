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
export class HomeScreen extends React.Component<any> {
    public render(): React.ReactNode {
        return <View>
            <Text>HomeScreen {this.props.counter.value}</Text>

            <Button onPress={() => this.props.setCounter(124)} title="Set 124"/>
            <Button onPress={() => this.props.incrementCounter()} title="+"/>
            <Button onPress={() => this.props.decrementCounter()} title="-"/>
        </View>;
    }
}
