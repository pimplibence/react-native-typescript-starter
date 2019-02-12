import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Face, Point, RNCamera, RNCameraProps } from 'react-native-camera';

const style: ViewStyle = {
    flex: 1,
};

const markerWrapper: ViewStyle = {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
};

export class HomeScreen extends React.Component<any> {

    public state = {
        faces: []
    };

    public cameraOptions: RNCameraProps = {
        autoFocus: 'on',
        defaultVideoQuality: RNCamera.Constants.VideoQuality['288p'],
        faceDetectionClassifications: 'all',
        faceDetectionLandmarks: 'all',
        faceDetectionMode: 'fast',
        onFacesDetected: (response: any) => this.onFaceDetected(response),
        ratio: '16:9',
        type: 'back',
        zoom: 0,
    };

    public onFaceDetected(response: { faces: Face[] }) {
        this.setState({
            faces: response.faces
        });
    }

    public renderDot(point: Point | undefined, index: number): React.ReactNode {
        if (point) {
            const pointStyle: ViewStyle = {
                backgroundColor: 'yellow',
                borderRadius: 5,
                height: 5,
                left: point.x,
                position: 'absolute',
                top: point.y,
                width: 5,
            };

            return <View key={index} style={pointStyle}/>;
        }
    }

    public render(): React.ReactNode {
        return [
            <RNCamera
                key={0}
                {...this.cameraOptions}
                style={style}
            />,
            <View key={1} style={markerWrapper}>
                {this.state.faces.map((face: Face, index: number) => this.renderDot(face.leftEyePosition, index))}
                {this.state.faces.map((face: Face, index: number) => this.renderDot(face.rightEyePosition, index))}
            </View>
        ];
    }
}
