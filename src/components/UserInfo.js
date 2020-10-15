import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Header from './Header';

export default function UserInfo({navigation}) {
    return (
        <View style={styles.container}>
            <Header name="사용자 정보" openDrawer={navigation.openDrawer} navigation={navigation}/>
            <View style={styles.userContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>사용자</Text>
                </View>
                <View style={styles.userContentsContainer}>
                    <Text style={{ padding: 5 }}>손병철</Text>
                </View>
            </View>

            <View style={styles.uuidContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>UUID</Text>
                </View>
                <View style={styles.uuidContentsContainer}>
                    <Text style={{ padding: 5 }}>E2C0F8B8-5598-47F5-BB65-66A3242F9980</Text>
                </View>
            </View>

            <View style={styles.empNoContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>사원번호</Text>
                </View>
                <View style={styles.empNoContentsContainer}>
                    <Text style={{ padding: 5 }}>20120034</Text>
                </View>
            </View>

            <View style={styles.phoneNoContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>전화번호</Text>
                </View>
                <View style={styles.phoneNoContentsContainer}>
                    <Text style={{ padding: 5 }}>01094670300</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        // paddingTop:40,
        marginTop: Constants.statusBarHeight,
        alignItems:"center",
        flex:1,
        marginBottom: 200
    },
    titleTextContainer: {
        flex: 0.8,
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

    userContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    userContentsContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    uuidContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        margin: 5,
        backgroundColor: 'white'
    },
    uuidContentsContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    empNoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        margin: 5,
        backgroundColor: 'white'
    },
    empNoContentsContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    phoneNoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        margin: 5,
        backgroundColor: 'white'
    },
    phoneNoContentsContainer: {
        flex: 1,
        width: '100%',
        padding: 5,
        alignItems: "center",
        justifyContent: 'center'
    },

    // empNoContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderStyle: 'solid',
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     borderRadius: 5,
    //     width: '90%',
    //     margin: 10,
    //     backgroundColor: 'white'
    // },
    // empNoContentsContainer: {
    //     flex: 2,
    //     width: '100%',
    //     padding: 15
    // },
    // phoneNoContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderStyle: 'solid',
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     borderRadius: 5,
    //     width: '90%',
    //     margin: 20,
    //     backgroundColor: 'white'
    // },
    // phoneNoContentsContainer: {
    //     flex: 2,
    //     width: '100%',
    //     padding: 15
    // }
});



// <View style={styles.empNoContainer}>
//     <View style={styles.titleTextContainer}>
//         <Text style={styles.titleText}>사원번호</Text>
//     </View>
//     <View style={styles.empNoContentsContainer}>
//         <Text style={{ padding: 5 }}>위도</Text>
//     </View>
// </View>
// <View style={styles.phoneNoContainer}>
//     <View style={styles.titleTextContainer}>
//         <Text style={styles.titleText}>전화번호</Text>
//     </View>
//     <View style={styles.phoneNoContentsContainer}>
//         <Text style={{ padding: 5 }}>위도</Text>
//     </View>
// </View>
