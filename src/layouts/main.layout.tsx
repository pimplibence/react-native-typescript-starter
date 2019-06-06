import * as React from 'react';
import { Text, View } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from '../libs/connect';

const mapStateprops = (store) => ({});
const mapDispatchProps = (dispatch: (action: AnyAction) => void) => ({});

@connect(mapStateprops, mapDispatchProps)
export class MainLayout extends React.Component<any> {

    public componentDidMount(): void {
        console.log('Hello Layout');
    }

    public render(): React.ReactNode {
        return <View>
            <Text>START LAYOUT</Text>
            {this.props.children}
            <Text>END LAYOUT</Text>
        </View>;
    }
}
