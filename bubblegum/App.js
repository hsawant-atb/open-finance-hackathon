import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { AsyncStorage } from "react-native";
// try {
//   AsyncStorage.setItem(
//     "token",
//     "eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.Oie-mWgcxEJ69LZhKOXa-QQg3yEIZyrLooDrCaXG3Ws"
//   );
// } catch (error) {
//   // Error saving data
// }

import * as screens from "./screens/index";

global.foo = "suhhhhhhh";

/* DISBALE YELLOW BOX WARNING */
console.disableYellowBox = true;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const ParentStack = createStackNavigator(
  {
    Overview: screens.OverviewScreen,
    AccountDetails: screens.AccountDetailsScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ChildStack = createStackNavigator(
  {
    AccountDetails: screens.AccountDetailsScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Welcome: screens.WelcomeScreen,
    Parent: ParentStack,
    Child: ChildStack
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack
  }),
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
