import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const Task = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.taskTitle}>{props.taskTitle}</Text>
            <Text style={styles.taskTitle}>{props.reward}</Text>
            <Text style={styles.taskTitle}>{props.status}</Text>
        </View>
    )
}
export default Task;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    taskTitle: {

    }
});