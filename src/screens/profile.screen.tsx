import * as React from 'react';
import { Text, View } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from '../libs/connect';

const mapStateprops = (store) => ({});
const mapDispatchProps = (dispatch: (action: AnyAction) => void) => ({});

@connect(mapStateprops, mapDispatchProps)
export class ProfileScreen extends React.Component<any> {

    public render(): React.ReactNode {
        return <View>
            <Text>ProfileScreen</Text>
        </View>;
    }
}
