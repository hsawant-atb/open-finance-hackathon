import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Task from "./Task";

import * as firebase from "firebase";

import * as global from "../global";

const bart = [
  {
    reward: 10.0,
    status: 0,
    title: "Clean Room"
  },
  {
    reward: 10.0,
    status: 0,
    title: "Dishes"
  }
];
const lisa = [
  {
    reward: 25.0,
    status: 0,
    title: "A+ in math"
  },
  {
    reward: 10.0,
    status: 0,
    title: "Dishes"
  },
  {
    reward: 15.0,
    status: 0,
    title: "Take Out Garbage"
  }
];

let taskGroups = [];

class TaskGroup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: add props
    taskGroups = lisa;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Grades</Text>
        <FlatList
          data={taskGroups}
          renderItem={({ item }) => <Task taskTitle={item.title} />}
          //   keyExtractor={item => item.taskId}
        />
      </View>
    );
  }
}
export default TaskGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 380,
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20
  }
});
