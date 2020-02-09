import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Task from "./Task";

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
    title: "Garbage"
  }
];
// TODO: add props
let taskGroups = lisa;

class TaskGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <FlatList
          style={styles.taskList}
          data={taskGroups}
          renderItem={({ item }) => <Task task={item} />}
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
    marginTop: 30,
    borderRadius: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 30
  },
  taskList: {
    padding: 10
  }
});
