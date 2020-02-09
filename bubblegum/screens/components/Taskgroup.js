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

<<<<<<< HEAD
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

=======
>>>>>>> 4e66d2c4b7a5edf7de824075bef17f5febf39653
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
