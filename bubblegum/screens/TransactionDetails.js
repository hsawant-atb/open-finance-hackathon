import React, { Component } from "react";
import { Header, View, Text, StyleSheet, Button } from "react-native";

import * as comp from "./components/index";

class TransactionDetails extends Component {
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
        <comp.TransactionHeader
          cardName={this.state.cardName}
          cardBalance={this.state.cardBalance}
          accNumber={this.state.accNumber}
          image={this.state.image}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Back"
            color="#753A88"
            onPress={() => this.props.navigation.navigate("AccountDetails")}
          />
        </View>
        <comp.TransactionList />
      </View>
    );
  }
}
export default TransactionDetails;

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
