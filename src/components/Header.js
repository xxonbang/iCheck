import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header({name, openDrawer}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>openDrawer()}>
                <MaterialCommunityIcons name="menu" size={32} />
            </TouchableOpacity>
            <Text>{name}</Text>
            <Text style={{width:50}}></Text>
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
        paddingHorizontal:20
    }
})
