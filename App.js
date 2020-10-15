import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";

import Sidebar from "./src/components/Sidebar";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import CheckInHistory from "./src/components/CheckInHistory";
import UserInfo from "./src/components/UserInfo";
import ShowMap from "./src/components/ShowMap";
import Help from "./src/components/Help";

const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        CheckInHistory: { screen: CheckInHistory },
        UserInfo: { screen: UserInfo },
        ShowMap: { screen: ShowMap },
        Help: { screen: Help }
    },
    {
        initialRouteName: "Home",
        unmountInactiveRoutes: true,
        headerMode: "none",
        contentComponent: props => <Sidebar {...props} />
    }
)

const AppNavigator = createStackNavigator({
        Login: {screen: Login},
        Drawer: {screen: Drawer},
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

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
