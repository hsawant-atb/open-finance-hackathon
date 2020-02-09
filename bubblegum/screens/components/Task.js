import React from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from "react-native";
import { withOrientation } from "react-navigation";
import { Ionicons, Feather } from '@expo/vector-icons';

const Task = props => {
  return (
    <View style={styles.container}>
      <View style={styles.taskStatus}>
        <Text style={styles.taskTitle}>{props.task.title}</Text>
        <Text style={styles.taskText}>${props.task.reward}.00</Text>
      </View>
      <View 
      style={{
        flex: 1,
        //backgroundColor: 'pink',
        justifyContent: 'center',
      }}
      >
        <TouchableOpacity onPress={() => alert("Sent for approval! :)")} >
          <Ionicons name='md-send' size={35} color="#aa316e"/>
        </TouchableOpacity>
      </View>
      {/* <Button
        // TODO: round button and align text
        style={styles.taskButton}
        title="Send Approval Request"
        color="#aa316e"
        onPress={() => Alert.alert("Sent :)")}
      /> */}
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // elevation: 10,
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    ///elevation: 3,
    //padding: 10,
    //margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskStatus: {
    flex: 9,
    marginHorizontal: 20
    //alignItems: "center",
    //justifyContent: "center"
  },
  taskTitle: {
    fontSize: 20,
    fontFamily: 'sf-rounded-heavy',
    padding: 5
  },
  taskText: {
    fontSize: 16,
    padding: 5,
    fontFamily: 'sf-rounded-semibold',
    color: 'green'
  },
  taskButton: {
    color: "#CC2B5E"
  }
});
