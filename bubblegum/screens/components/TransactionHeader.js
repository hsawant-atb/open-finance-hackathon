import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withOrientation } from "react-navigation";
import { AsyncStorage } from "react-native";
import axios from "axios";

import { token } from "../global";

let bart = {
  label: "Bart Simpson",
  number: "****4537",
  balance: {
    currency: "CAD",
    amount: "-$3.98"
  },
  account_attributes: {
    goal: "$10.00",
    spent: "$83.98"
  }
};
let lisa = {
  label: "Lisa Simpson",
  number: "****3652",
  balance: {
    currency: "CAD",
    amount: "$30.00"
  },
  account_attributes: {
    goal: "$30.00",
    spent: "$110.99"
  }
};

class TransactionHeader extends Component {
  constructor(props) {
    super(props);

    // TODO: add props
    this.state = {
      cardName: lisa.label,
      cardBalance: lisa.balance.amount,
      accNumber: lisa.number
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.title}>Chequing Account</Text>
          <Text style={styles.number}>Balance</Text>
          <View style={styles.headerDetails}>
            <Text style={styles.balance}>{this.state.cardBalance}</Text>
            <Text style={styles.number}>{this.state.accNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default TransactionHeader;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 50
  },
  title: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 42
  },
  balance: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 20
  },
  number: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 16
  },
  headerDetails: {
    flexDirection: "row",
    fontFamily: "sf-rounded-heavy",
    justifyContent: "space-between",
    alignItems: "flex-end"
  }
});
