import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from "expo-constants";

function Item({ item, navigate }) {
    return (
        <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.component)}>
            <MaterialCommunityIcons name={item.icon} size={20} />
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default class Sidebar extends React.Component {
    state = {
        routes:[
            {
                name:"Home",
                component: "Home",
                icon:"home"
            },
            {
                name:"체크인 기록",
                component: "CheckInHistory",
                icon:"history"
            },
            {
                name:"사용자 정보",
                component: "UserInfo",
                icon:"information"
            },
            {
                name:"지도 보기",
                component: "ShowMap",
                icon:"map"
            },
            {
                name:"도움말",
                component: "Help",
                icon:"help"
            },
        ]
    }


    render(){
        return (
            <View style={styles.container}>
                <Image source={require("../../assets/profile.jpg")} style={styles.profileImg}/>
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10}}>Jieun Lee</Text>
                <Text style={{color:"gray",marginBottom:10}}>jieunlee@iu.com</Text>
                <View style={styles.sidebarDivider}></View>
                <FlatList
                    style={{width:"100%",marginLeft:30}}
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginTop: Constants.statusBarHeight,
        alignItems:"center",
        flex:1
    },
    listItem:{
        height:60,
        alignItems:"center",
        flexDirection:"row",
    },
    title: {
        marginLeft: 10
    },
    profileImg:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:20
    },
    sidebarDivider:{
        height:1,
        width:"100%",
        backgroundColor:"lightgray",
        marginVertical:10
    }
});
