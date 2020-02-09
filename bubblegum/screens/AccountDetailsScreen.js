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

  async componentDidMount() {
    //Get card name
    // const token = await AsyncStorage.getItem("token");
    // const id = "a9213f5d-bfc8-487f-8242-0789bbcc2c20";
    // const url = `https://api.leapos.ca/obp/v4.0.0/my/banks/3056a117b6bf9e42fb96b02d3513a66/accounts/${id}/account`;
    // const httpConfig = {
    //   headers: {
    //     Authorization: `DirectLogin\ token=${token}`
    //   },
    //   method: "GET",
    //   url: `${url}`
    // };
    // let res = await axios(httpConfig);
    // const label = res.data.label;
    // this.setState({ cardName: label });
  }

        render() {
            return (
                <View style={styles.container}>
                    <comp.Card
                        cardName={this.state.cardName}
                        cardBalance={this.state.cardBalance}
                        accNumber={this.state.accNumber}
                        image={this.state.image} />

                    <comp.Taskgroup />
                    {/* <comp.TransactionList /> */}
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
