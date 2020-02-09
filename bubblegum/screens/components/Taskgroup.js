import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Task from "./Task";

import * as firebase from "firebase";

import * as global from "../global";

let taskGroups = [];

class TaskGroup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: add props

    let res = global.getTasks("a9213f5d-bfc8-487f-8242-0789bbcc2c20");
    let keys = Object.keys(res);
    keys.forEach(key => {
      taskGroups.push(res[key]);
    });

    console.log(JSON.parse(res));
    //Do your API calls here
    // const data = []; /* store the data in this object */
    // const parentId = "c0849637-cd77-4f9d-8409-ed959dbc1093";
    // const childId = "a9213f5d-bfc8-487f-8242-0789bbcc2c20";
    // const db = firebase.database().ref(`/${parentId}/${childId}/taskList`);
    // db.once("value").then(function(snapshots) {
    //   console.log(snapshots);
    //   console.log(Object.keys(snapshots));
    //   snapshots.forEach(function(data) {
    //     //console.log(1)
    //     const taskId = data.key;
    //     const title = data.val().title;
    //     const status = data.val().staus;
    //     const reward = data.val().reward / 100;
    //     const record = {
    //       taskId,
    //       title,
    //       status,
    //       reward
    //     };
    //     data.push(record);
    //   });
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Grades</Text>
        <FlatList
          data={taskGroups}
          renderItem={({ item }) => <Task taskTitle={item.title} />}
          keyExtractor={item => item.taskId}
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
