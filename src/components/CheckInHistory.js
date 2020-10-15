// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
//
// import Header from './Header';
//
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
//
// export default function Home({navigation}) {
//
//     return (
//         <View style={styles.container}>
//             <Header name="Home" openDrawer={navigation.openDrawer}/>
//             <Text style={styles.header}>Getting Started</Text>
//             <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//             <Text style={styles.description}>Ut in laoreet orci, id fringilla lacus.</Text>
//             <Text style={styles.description}>Vestibulum varius mauris in eros scelerisque egestas.</Text>
//             <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate("Login")}>
//                 <Text style={styles.startText}>START NOW</Text>
//             </TouchableOpacity>
//         </View>
//     );
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#fff",
//         paddingTop:40,
//         alignItems:"center",
//         flex:1
//     },
//     header:{
//         fontWeight:"bold",
//         fontSize:24,
//         color:"#375177",
//         marginBottom:10
//     },
//     description:{
//         fontSize:12,
//         color:"gray",
//         padding:5
//     },
//     startBtn:{
//         backgroundColor:"#90bdff",
//         borderRadius:50,
//         padding:10,
//         width:"50%",
//         alignItems:"center",
//         marginTop:50
//     },
//     startText:{
//         color:"white"
//     }
// });


import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Header from './Header';
import Constants from "expo-constants";

const fullScreenWidth = Dimensions.get('window').width * 0.9;

export default function CheckInHistory({navigation}) {
    return (
        <View style={styles.container}>
            <Header name="체크인 기록" openDrawer={navigation.openDrawer} navigation={navigation}/>
            <View>
                <Text>CheckInHistory</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20,
        // backgroundColor: 'blue'

        backgroundColor: "#F5F5F5",
        marginTop: Constants.statusBarHeight,
        alignItems:"center",
        flex:1
    },
    titleTextContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '100%',
        backgroundColor: "#4875B4",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
        // backgroundColor: "#4875B4"
    },
    titleText: {
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: "white"
    },
    userInfoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        // width: fullScreenWidth,
        margin: 20,
        backgroundColor: 'white'
    },
    checkInOutTimeContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        width: '100%'
        // alignSelf: 'stretch'
    },
    locationInfoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        margin: 10,
        backgroundColor: 'white'
    },
    locationInfoContentsContainer: {
        flex: 8,
        width: '100%',
        padding: 15
    },
    locationInfo: {

    },
    checkInSpotContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        margin: 20,
        backgroundColor: 'white'
    },
    checkInOutIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        width: '100%'
        // alignSelf: 'stretch'
    },
    detailInfoContainer: {
        flex: 2,
        width: '100%',
        padding: 15
    }
    // separator: {
    //   marginVertical: 30,
    //   height: 1,
    //   width: '80%',
    // },
});
