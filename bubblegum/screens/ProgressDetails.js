import React, { Component } from "react";
import { Header, View, Text, StyleSheet, Button } from "react-native";

import * as comp from "./components/index";

let bart = {
  label: "Bart Simpson",
  number: "****4537",
  balance: {
    currency: "CAD",
    amount: "-$3.98"
  },
  account_attributes: {
    goal: "$10.00",
    spent: "$83.98",
    total: "-$3.98"
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
    spent: "$110.99",
    total: "$40.00"
  }
};
const lisaTransactions = [
  {
    date: "Jan 26th",
    title: "Movies",
    amount: "-$14.99",
    category: "ENTERTAINMENT"
  },
  {
    date: "Jan 24th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE"
  },
  {
    date: "Jan 23rd",
    title: "Dishes",
    amount: "$10.00",
    category: "NONE"
  },
  {
    date: "Jan 23rd",
    title: "H&M",
    amount: "-$13.99",
    category: "CLOTHING"
  },
  {
    date: "Jan 22nd",
    title: "Nandos",
    amount: "-$9.99",
    category: "FOOD"
  },
  {
    date: "Jan 22nd",
    title: "Laundry",
    amount: "$15.00",
    category: "NONE"
  },
  {
    date: "Jan 19th",
    title: "McDonalds",
    amount: "-$8.99",
    category: "FOOD"
  },
  {
    date: "Jan 18th",
    title: "McDonalds",
    amount: "-$8.99",
    category: "FOOD"
  },
  {
    date: "Jan 17th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE"
  },
  {
    date: "Jan 14th",
    title: "Dishes",
    amount: "$25.00",
    category: "NONE"
  },
  {
    date: "Jan 14th",
    title: "Staples",
    amount: "-$1.99",
    category: "OTHER"
  },
  {
    date: "Jan 11th",
    title: "Dominos",
    amount: "-$9.99",
    category: "FOOD"
  },
  {
    date: "Jan 10th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE"
  },
  {
    date: "Jan 7th",
    title: "Nike",
    amount: "-$25.99",
    category: "CLOTHING"
  },
  {
    date: "Jan 6th",
    title: "Dominos",
    amount: "-$11.99",
    category: "FOOD"
  },
  {
    date: "Jan 3rd",
    title: "Seven Eleven",
    amount: "-$4.89",
    category: "FOOD"
  },
  {
    date: "Jan 3rd",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE"
  }
];

class ProgressDetails extends Component {
  constructor(props) {
    super(props);

    let categories = {};
    lisaTransactions.forEach(transaction => {
      let amount = parseFloat(transaction.amount.split("$")[1]);
      let category = transaction.category;
      if (category === "NONE") {
      } else if (!categories[category]) {
        categories[category] = amount;
      } else {
        categories[category] += amount;
      }
    });

    // TODO: add props
    this.state = {
      cardName: lisa.label,
      cardBalance: lisa.balance.amount,
      accNumber: lisa.number,
      goal: lisa.account_attributes.goal,
      spent: lisa.account_attributes.spent,
      total: lisa.account_attributes.total
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Goals</Text>
          {/* // TODO: add for each of the categories */}
          <Text style={styles.header}>Categories</Text>
          <Text style={styles.header}>Total</Text>
          <View style={styles.headerDetails}>
            <Text style={styles.textBlack}>Jan Earnings...</Text>
            <Text style={styles.textBlack}>{this.state.cardBalance}</Text>
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.textBlack}>Month Spending...</Text>
            <Text style={styles.textBlack}>{this.state.spent}</Text>
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.textBlack}>Target Total...</Text>
            <Text style={styles.textBlack}>{this.state.goal}</Text>
          </View>
          <View style={styles.headerDetails}>
            <Text style={styles.textBlack}>Total...</Text>
            <Text style={styles.textBlack}>{this.state.total}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Back"
            color="#753A88"
            onPress={() => this.props.navigation.navigate("AccountDetails")}
          />
        </View>
      </View>
    );
  }
}
export default ProgressDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400
  },
  buttonContainer: {
    marginBottom: 50,
    marginTop: 2,
    width: 280
  },
  title: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 42
  },
  header: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 34
  },
  textBlack: {
    color: "black",
    fontFamily: "sf-rounded-heavy",
    fontSize: 16
  },
  textGreen: {
    color: "green",
    fontFamily: "sf-rounded-heavy",
    fontSize: 16
  },
  textRed: {
    color: "red",
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
