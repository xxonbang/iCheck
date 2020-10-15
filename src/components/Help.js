import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Header from './Header';
import Constants from "expo-constants";

export default function Help({navigation}) {
    return (
        <View style={styles.container}>
            <Header name="도움말" openDrawer={navigation.openDrawer} navigation={navigation}/>
            <View style={styles.helpContainer}>
                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>사용 방법</Text>
                </View>
                <View style={styles.contents}>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>이 앱은 지문인식 기기가 설치되어 있지 않은 원격지에 근무하시는 분들의 출근 및 퇴근 체크를 위한 앱입니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>실내에서는 Wi-Fi를 연결하여야 더 정확한 위치를 인식할 수 있습니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>30미터 이내의 오차만 허용되며, 거리 오차가 그 이상일 경우는 출퇴근 체크가 되지 않습니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>등록된 기기로만 출퇴근 체크가 가능합니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>본인 명의의 휴대폰 1대만 등록 가능합니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>등록된 기기를 변경하려면 인재개발 근태 담당자의 확인을 거쳐 재등록 하여야 합니다.</Text>
                    </View>
                    <View style={styles.textLines}>
                        <TouchableOpacity style={styles.bar}><Text></Text></TouchableOpacity>
                        <Text style={{width: '100%'}}>다음과 같은 경우는 사용이 제한됩니다.</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft: 10, marginBottom: 5, width: '100%'}}>✓ Wi-Fi 만 되는 기기</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft: 10, marginBottom: 5, width: '100%'}}>✓ 3G 나 LTE 가 연결되어 있지 않은 경우</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft: 10, marginBottom: 2, width: '100%'}}>✓ 한웨이 임직원 현황에 등록된 본인의 전화번호와</Text>
                        <Text style={{marginLeft: 25, marginBottom: 5, width: '100%'}}>기기의 전화번호가 다른 경우</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft: 10, marginBottom: 5, width: '100%'}}>✓ 루팅 된 기기</Text>
                    </View>
                    <View>
                        <Text style={{marginLeft: 10, marginBottom: 5, width: '100%'}}>✓ 모의 위치 앱이 설치된 기기</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>다운로드 사이트: <Text style={{color: 'blue'}} onPress={() => {Linking.openURL('https://histdev.github.io/hist');}}>https://histdev.github.io/hist</Text></Text>
                <Text>App Version: 1.0.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        marginTop: Constants.statusBarHeight,
        alignItems:"center",
        flex:1
    },
    titleTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '100%',
        backgroundColor: "#4875B4",
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    titleText: {
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: "white"
    },
    helpContainer: {
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
    contents: {
        flex: 11,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        padding: 20,
        width: '100%'
        // alignSelf: 'stretch'
    },
    bar: {
        width: 5,
        backgroundColor: '#20A8D8',
        marginRight: 30
    },
    textLines: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
        // alignItems: 'center',
        // height: 30
    },
    footer: {
        marginBottom: 20
    }
});
