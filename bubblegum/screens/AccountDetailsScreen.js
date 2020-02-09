import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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
        {/* <comp.Card
          cardName={this.state.cardName}
          cardBalance={this.state.cardBalance}
          accNumber={this.state.accNumber}
          image={this.state.image}
        /> */}
        <comp.TransactionHeader
          cardName={this.state.cardName}
          cardBalance={this.state.cardBalance}
          accNumber={this.state.accNumber}
          image={this.state.image}
        />
        {/* <comp.Taskgroup /> */}
        <comp.TransactionList />
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
  }
});
