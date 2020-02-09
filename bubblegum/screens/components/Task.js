import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { withOrientation } from "react-navigation";

const Task = props => {
  return (
    <View style={styles.container}>
      <View style={styles.taskStatus}>
        <Text style={styles.taskTitle}>{props.task.title}</Text>
        <Text style={styles.taskText}>${props.task.reward}.00</Text>
      </View>
      <Button
        // TODO: round button and align text
        style={styles.taskButton}
        title="Complete"
        color="#aa316e"
        onPress={() => Alert.alert("Completed :)")}
      />
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
    shadowOpacity: 1,
    elevation: 3,
    padding: 10,
    margin: 10,
    width: 300
  },
  taskStatus: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5
  },
  taskText: {
    fontSize: 16,
    padding: 5
  },
  taskButton: {
    color: "#CC2B5E"
  }
});
