import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import axios from "axios";
import { AsyncStorage } from "react-native";

import * as comp from "./components/index";

class AccountDetailsScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cid: 0
    };
  }

  componentWillMount() {
    const cid = this.props.navigation.getParam('cid')

    //alert(cid)

    this.setState({ cid })


    //alert(this.state.cid)
  }


  render() {

    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 60
          }}
        >
          <comp.Card
            child={this.state.cid}
          />
          <Button
            title="Back"
            color="#753A88"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>

        <View style={styles.buttonContainer}>
          {/* TODO: add border to button to match card border */}
          <Button
            title="Transactions"
            color="#753A88"
            onPress={() => this.props.navigation.navigate("Transactions", {cid: this.state.cid})}
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
        <comp.Taskgroup cid={this.state.cid}/>
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
    marginTop: 10,
    width: 280
  }
});
