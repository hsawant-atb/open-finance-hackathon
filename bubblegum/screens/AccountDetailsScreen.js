import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import axios from "axios";
import { AsyncStorage } from "react-native";

import * as comp from "./components/index";

class AccountDetailsScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <comp.Card
          cardName={this.state.cardName}
          cardBalance={this.state.cardBalance}
          accNumber={this.state.accNumber}
        />
        <View style={styles.buttonContainer}>
          {/* TODO: add border to button to match card border */}
          <Button
            title="Transactions"
            color="#753A88"
            onPress={() => this.props.navigation.navigate("Transactions")}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* TODO: add border to button to match card border */}
          <Button
            title="Progress"
            color="#aa316e"
            onPress={() => this.props.navigation.navigate("Progress")}
          />
        </View>
        <comp.Taskgroup />
      </SafeAreaView>
    );
  }
}
export default AccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 10,
    width: 280
  }
});
