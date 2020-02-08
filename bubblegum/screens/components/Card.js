import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withOrientation } from "react-navigation";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: "Jackson",
      cardBalance: "123",
      accNumber: "12321"
    };
  }

  async componentDidMount() {
    //Get card name
    const token = await AsyncStorage.getItem("token");
    const id = "a9213f5d-bfc8-487f-8242-0789bbcc2c20";
    const url = `https://api.leapos.ca/obp/v4.0.0/my/banks/3056a117b6bf9e42fb96b02d3513a66/accounts/${id}/account`;

    const httpConfig = {
      headers: {
        Authorization: `DirectLogin\ token=${token}`
      },
      method: "GET",
      url: `${url}`
    };

    let res = await axios(httpConfig);
    const label = res.data.label;
    const number = res.data.number;
    const balance = res.data.balance.amount;

    this.setState({ cardName: label });
    this.setState({ accNumber: number });
    this.setState({ cardBalance: balance });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <LinearGradient
          colors={["#CC2B5E", "#753A88"]}
          style={{
            width: 280,
            height: 170,
            borderRadius: 20,
            padding: 20
          }}
        >
          <View>
            {/* <Text>{this.props.cardName}</Text>
            <Text>{this.props.cardBalance}</Text>
            <Text>{this.props.accNumber}</Text> */}
            <Text style={styles.name}>Jackson</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.number}>****1382</Text>
              <Text style={styles.balance}>$54.00</Text>
            </View>
            {/* <Text>{this.props.image}</Text> */}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  name: {
    color: "white",
    fontSize: 24,
    textAlign: "right",
    fontWeight: "bold"
  },
  balance: {
    color: "white",
    fontSize: 20
  },
  number: {
    color: "white",
    fontSize: 16
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  }
});
