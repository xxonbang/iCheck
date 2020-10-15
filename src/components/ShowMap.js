import * as React from 'react';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import Header from './Header';
import Loading from './Loading';
import Constants from "expo-constants";

export default class ShowMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,

            initialRegion: {
                latitude: 37.554224,
                longitude: 126.857249,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            userRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0,
            }
        };
    }

    getUserLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
            this.setState({ userRegion: {latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}, isLoading: false } )
            // this.setState({ userRegion: {latitude: 37.554224, longitude: 126.857249, latitudeDelta: 0.0922, longitudeDelta: 0.0421}, isLoading: false } )
            // this.setState({ latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421, isLoading: false })
        } catch (error) {
            Alert.alert('to use this app, you need to select ALLOW');
        }
    }

    componentDidMount() {
        this.getUserLocation();
    }

    render() {
        const { isLoading } = this.state;
        return isLoading ? <Loading /> :
            <View style={styles.container}>
                <Header name="지도 보기" openDrawer={this.props.navigation.openDrawer} navigation={this.props.navigation}/>
                <MapView style={styles.mapStyle}
                         provider={MapView.PROVIDER_GOOGLE}
                         showCompass={true}
                         rotateEnabled={false}
                         showUserLocation={true}
                         initialRegion={this.state.initialRegion}
                         region={this.state.userRegion}
                         // region={{latitude: 37.554224, longitude: 126.857249, latitudeDelta: this.state.latitudeDelta, longitudeDelta: this.state.longitudeDelta}}
                         // region={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: this.state.latitudeDelta, longitudeDelta: this.state.longitudeDelta}}
                         // initialRegion={{latitude: this.state.latitude, longitude: this.state.longitude, latitudeDelta: this.state.latitudeDelta, longitudeDelta: this.state.longitudeDelta}}
                >
                    <MapView.Marker
                        // coordinate={{latitude: 37.554224, longitude: 126.857249}}
                        coordinate={this.state.userRegion}
                        title="현재 위치"
                        // description="some descriptions"
                    />
                </MapView>
            </View>

    }
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',

        backgroundColor: "#F5F5F5",
        marginTop: Constants.statusBarHeight,
        alignItems:"center",
        flex:1
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
