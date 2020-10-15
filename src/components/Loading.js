import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Now</Text>
            <Text style={styles.text}>Loading</Text>
            <Text style={styles.text}>Please Wait</Text>
            <ActivityIndicator size="large"
                               style={{marginTop: 20}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 30,
        // paddingVertical: 100,
        backgroundColor: '#3A4248'
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
