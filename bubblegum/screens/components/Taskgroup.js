import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import Task from './Task'

import * as firebase from 'firebase'

const taskgroup = [
    {
        taskId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        taskId: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        taskId: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

class TaskGroup extends Component {

    constructor(props) {
        super(props)
    }


    componentDidMount() {
        //Do your API calls here

        const data = [] /* store the data in this object */
        const parentId = ""
        const childId = ""


        const db = firebase.database().ref(`/${parentId}/${childId}/taskList`)

        db.once('value')
            .then((snapshots) => {
                snapshots.forEach((data) => {
                    const taskId = data.key
                    const title = data.val().title
                    const status  = data.val().staus
                    const reward = data.val().reward/100

                    const record = {
                        taskId,
                        title,
                        status,
                        reward
                    }

                    data.push(record)

                })
            })


        console.log(data)
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Grades</Text>
                <FlatList
                    data={taskgroup}
                    renderItem={({ item }) =>
                    <Task 
                    taskTitle = {item.title}
                    />
                        }

                keyExtractor={(item) => item.taskId}
                />
            </View>
        );
    }
}
export default TaskGroup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});