import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from '../libs/connect';

const mapStateprops = (store) => ({});
const mapDispatchProps = (dispatch: (action: AnyAction) => void) => ({});

@connect(mapStateprops, mapDispatchProps)
export class HomeScreen extends React.Component<any> {

    public render(): React.ReactNode {
        return <View>
            <Text>HomeScreen</Text>
            <Button onPress={() => this.props.navigation.navigate('profile')} title="To Profile"/>
        </View>;
    }
}
