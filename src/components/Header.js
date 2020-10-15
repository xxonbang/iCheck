import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({name, openDrawer, navigation}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>openDrawer()}>
                <MaterialCommunityIcons style={{color: "white"}} name="menu" size={28} />
            </TouchableOpacity>
            <Text style={{fontWeight: "bold", color: "white"}}>{name}</Text>
            <Text style={{width:50, color: "white", fontSize: 12}}
                  onPress={() => {navigation.navigate("Login")}}>Logout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:60,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:5,
        backgroundColor: "#2F353A"
        // paddingHorizontal:20
    }
})
