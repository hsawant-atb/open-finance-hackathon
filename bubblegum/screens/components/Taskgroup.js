import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

const taskgroup = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class TaskGroup extends Component {

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
                <Text>Grades</Text>
                <FlatList 
                data={taskgroup}
                // renderItem={({item}) => }
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