import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends React.Component {
    // return (
        // <View style={styles.container}>
        //     <Text style={styles.header}>LOGIN</Text>
        //     <TextInput style={styles.input} placeholder="Email..." />
        //     <TextInput style={styles.input} placeholder="Password..." secureTextEntry />
        //     <TouchableOpacity style={styles.startBtn}>
        //         <Text style={styles.startText}>LOGIN</Text>
        //     </TouchableOpacity>
        // </View>
        // )

    constructor(props) {
        super(props);
    }

    state={
        email:"",
        password:""
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>ICHECK</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({email: text})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({password: text})}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => this.props.navigation.navigate("Home")}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // header:{
    //     fontWeight:"bold",
    //     fontSize:30,
    //     color:"#375177",
    //     marginBottom:20
    // },
    // input:{
    //     borderWidth:1,
    //     borderColor:"#375177",
    //     borderRadius:50,
    //     width:"80%",
    //     height:40,
    //     marginBottom:20,
    //     padding:10
    // },
    // startBtn:{
    //     backgroundColor:"#90bdff",
    //     borderRadius:50,
    //     padding:10,
    //     width:"50%",
    //     alignItems:"center",
    //     marginTop:50
    // },
    // startText:{
    //     color:"white"
    // }
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"black",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#FFFFFF",
        borderStyle: "solid",
        borderColor: "#CCD3DB",
        borderWidth: 1,
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
    forgot:{
        color:"#00A4FB",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#60A6FB",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    },
    signupText:{
        color:"#00A4FB"
    }
});
