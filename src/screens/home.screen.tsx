import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { connect } from '../libs/connect';

const style: ViewStyle = {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
};

const mapStateprops = store => ({
    counter: store.counter.counter
});

@connect(mapStateprops)
export class HomeScreen extends React.Component<any> {
    public render(): React.ReactNode {
        return <View style={style}>
            <Text>{JSON.stringify(this.props)}</Text>
        </View>;
    }
}
