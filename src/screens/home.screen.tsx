import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from '../libs/connect';
import { Field } from '../libs/form/field';
import { Form } from '../libs/form/form';

const mapStateprops = (store) => ({});
const mapDispatchProps = (dispatch: (action: AnyAction) => void) => ({});

@connect(mapStateprops, mapDispatchProps)
export class HomeScreen extends React.Component<any> {
    public form = new Form({
        example: new Field({
            placeholder: 'ExamplePlaceholder',
            value: ''
        })
    });

    public render(): React.ReactNode {
        return <View>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Button onPress={() => this.props.navigation.navigate('profile')} title="To Profile"/>
        </View>;
    }
}
