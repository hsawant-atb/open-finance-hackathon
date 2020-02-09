import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { AsyncStorage } from "react-native";

import * as screens from "./screens/index";

global.foo = "suhhhhhhh";

/* DISBALE YELLOW BOX WARNING */
console.disableYellowBox = true;

const ParentStack = createStackNavigator(
  {
    Overview: screens.OverviewScreen,
    AccountDetails: screens.AccountDetailsScreen
  },
  { headerMode: "none" }
);

const ProgressStack = createStackNavigator(
  {
    ProgressDetails: screens.ProgressDetails,
    AccountDetails: screens.AccountDetailsScreen
  },
  { headerMode: "none" }
);

const TransactionStack = createStackNavigator(
  {
    TransactionDetails: screens.TransactionDetails,
    AccountDetails: screens.AccountDetailsScreen
  },
  { headerMode: "none" }
);

const ChildStack = createStackNavigator(
  {
    AccountDetails: screens.AccountDetailsScreen,
    Transactions: screens.TransactionDetails,
    Progress: screens.ProgressDetails
  },
  { headerMode: "none" }
);

const AuthStack = createStackNavigator(
  {
    Welcome: screens.WelcomeScreen,
    Parent: ParentStack,
    Child: ChildStack
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack
  }),
  { headerMode: "none" }
);

const headerConfig = {};
