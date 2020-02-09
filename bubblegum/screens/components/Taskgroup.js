import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

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
        title: "Rake up all of the leaves in the backyard"
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

        this.state = {
            cid: 1
        }
    }

    componentWillMount() {
        //const cid = this.props.navigation.getParam('cid', 1)

        //this.setState({ cid })
    }

    render() {

        let group = []
        if (this.state.cid == 2) {
            group = bart
        } else {
            group = lisa
        }

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
        //alignItems: "center",
        //justifyContent: "center",
        //marginHorizontal: 20,
        backgroundColor: "white",
        width: Dimensions.get('screen').width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        marginTop: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    title: {
        fontSize: 30,
        fontFamily: "sf-rounded-heavy",
        marginBottom: 5,
        marginTop: 30,
        marginLeft: 31
    },
    taskList: {
        padding: 10
    }
});
