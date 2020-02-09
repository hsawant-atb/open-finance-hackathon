import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
import { AsyncStorage } from "react-native";

import * as comp from "./components/index";

class AccountDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: "",
      cardBalance: "123",
      accNumber: "12321",
      image: "lolol"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <comp.Card
          cardName={this.state.cardName}
          cardBalance={this.state.cardBalance}
          accNumber={this.state.accNumber}
          image={this.state.image}
        />
        <View style={styles.buttonContainer}>
          {/* TODO: add border to button to match card border */}
          <Button
            title="Transactions"
            color="#753A88"
            onPress={() => this.props.navigation.navigate("Transactions")}
          />
        </View>
        <comp.Taskgroup />
      </View>
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
    marginBottom: 50,
    marginTop: 2,
    width: 280
  }
});
