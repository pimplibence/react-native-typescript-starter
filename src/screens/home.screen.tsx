import * as React from 'react';
import { Text, View, ViewStyle } from 'react-native';

const style: ViewStyle = {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
};

export class HomeScreen extends React.Component<any> {
    public render(): React.ReactNode {
        return <View style={style}>
            <Text>Hello HomeScreen</Text>
        </View>;
    }
}
