import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';

const style: ViewStyle = {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
};

export class HomeScreen extends React.Component<any> {
    render(): React.ReactNode {
        return <View style={style}>
            <Text>Hello HomeScreen</Text>
        </View>
    }
}
