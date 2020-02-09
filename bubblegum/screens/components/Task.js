import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withOrientation } from "react-navigation";

const Task = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>hi{props.taskTitle}</Text>
      <Text style={styles.taskTitle}>hi{props.reward}</Text>
      <Text style={styles.taskTitle}>hi{props.status}</Text>
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "grey",
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 5,
    paddingTop: 10,
    flexDirection: "column"
    // justifyContent: 'center'
  },
  taskTitle: {}
});
