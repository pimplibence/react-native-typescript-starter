import * as React from 'react';
import { Button, Text, View, ViewStyle } from 'react-native';
import { Action } from 'redux';
import { CounterActions } from '../actions/counter.actions';
import { connect } from '../libs/connect';

const style: ViewStyle = {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
};

const mapStateprops = (store) => ({
    counter: store.counter.counter
});

const mapDispatchProps = (dispatch: (action: Action<any>) => void) => ({
    decrement: () => dispatch(CounterActions.decrement()),
    increment: () => dispatch(CounterActions.increment()),
});

@connect(mapStateprops, mapDispatchProps)
export class HomeScreen extends React.Component<any> {

    public render(): React.ReactNode {
        return <View style={style}>
            <Text>Value: ${this.props.counter}</Text>
            <Button onPress={() => this.props.increment()} title="+"/>
            <Button onPress={() => this.props.decrement()} title="-"/>
        </View>;
    }
}
