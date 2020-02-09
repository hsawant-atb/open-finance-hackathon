import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, AsyncStorage } from "react-native";
import { token } from "../global";

import axios from "axios";

const lisa = [
  {
    date: "Jan 26th",
    title: "Movies",
    amount: "-$14.99",
    category: "ENTERTAINMENT",
    color: '#D63031'
  },
  {
    date: "Jan 24th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 23rd",
    title: "Dishes",
    amount: "$10.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 23rd",
    title: "H&M",
    amount: "-$13.99",
    category: "CLOTHING",
    color: '#D63031'
  },
  {
    date: "Jan 22nd",
    title: "Nandos",
    amount: "-$9.99",
    category: "FOOD",
    color: '#D63031'
  },
  {
    date: "Jan 22nd",
    title: "Laundry",
    amount: "$15.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 19th",
    title: "McDonalds",
    amount: "-$8.99",
    category: "FOOD",
    color: '#D63031',
    color: 'green'
  },
  {
    date: "Jan 18th",
    title: "McDonalds",
    amount: "-$8.99",
    category: "FOOD",
    color: '#D63031',
    color: 'green'
  },
  {
    date: "Jan 17th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 14th",
    title: "Dishes",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 14th",
    title: "Staples",
    amount: "-$1.99",
    category: "OTHER",
    color: '#D63031'
  },
  {
    date: "Jan 11th",
    title: "Dominos",
    amount: "-$9.99",
    category: "FOOD",
    color: '#D63031'
  },
  {
    date: "Jan 10th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 7th",
    title: "Nike",
    amount: "-$25.99",
    category: "CLOTHING",
    color: '#D63031'
  },
  {
    date: "Jan 6th",
    title: "Dominos",
    amount: "-$11.99",
    category: "FOOD",
    color: '#D63031'
  },
  {
    date: "Jan 3rd",
    title: "Seven Eleven",
    amount: "-$4.89",
    category: "FOOD",
    color: '#D63031'
  },
  {
    date: "Jan 3rd",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  }
];

const bart = [
  {
    date: "Jan 25th",
    title: "Candy Crush",
    amount: "-$83.98",
    category: "ENTERTAINMENT",
    color: '#D63031'
  },
  {
    date: "Jan 24th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 17th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 14th",
    title: "Cleaning",
    amount: "$10.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 10th",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 9th",
    title: "Cleaning",
    amount: "$10.00",
    category: "NONE",
    color: 'green'
  },
  {
    date: "Jan 3rd",
    title: "Weekly Allowance",
    amount: "$25.00",
    category: "NONE",
    color: 'green'
  }
];

const TransactionLineItem = props => {
  return (
    <View style={styles.transactionCell}>
      <View style={styles.rowTitle}>
        <Text style={styles.rowText}>{props.description}</Text>
        <Text style={{
          fontFamily: "sf-rounded-heavy",
          fontSize: 20,
          color: `${props.color}`
        }}>{props.amount}</Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "sf-rounded-semibold",
            fontSize: 15,
            color: "#a2a2a2"
          }}
        >
          {props.date}
        </Text>
      </View>
    </View>
  );
};

class TransactionList extends Component {
  constructor() {
    super();

    this.state = {
      child: 2
    };
  }

  componentWillMount() {
    
    this.setState({ child: this.props.child })
  }

  render() {

    // TODO: add props
    let transactions = [];

    if (this.state.child == 2) {
      transactions = bart
    } else {
      transactions = lisa
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
        <FlatList
          data={transactions}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TransactionLineItem
              description={item.title}
              amount={item.amount}
              date={item.date}
              color={item.color}
            />
          )}
        />
      </View>
    );
  }
}
export default TransactionList;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    //backgroundColor: 'pink',
    //flex: 1
    //backgroundColor: 'pink'
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontFamily: "sf-rounded-heavy",
    fontSize: 30,
    marginTop: 20
  },
  transactionCell: {
    width: 320,
    marginVertical: 10
  },
  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowText: {
    fontFamily: "sf-rounded-heavy",
    fontSize: 20
  }
});
