import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

const TaskList 

class TaskList extends Component {


    constructor (props) {
        super(props)
    }

    componentDidMount() {
        //Do your API calls here

        const data = [] /* store the data in this object */
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>TaskList</Text>
                <FlatList /> 
            </View>
        );
    }
}
export default TaskList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});