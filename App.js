import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from "./src/components/Login"
import Home from "./src/components/Home"

const MainNavigator = createStackNavigator({
        Login: {screen: Login},
        Home: {screen: Home},
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    });

const App = createAppContainer(MainNavigator);

export default App;


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
