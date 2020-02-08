import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import * as Font from 'expo-font';

class WelcomeScreen extends Component {

    componentDidMount() {
        Font.loadAsync({
            'sf-rounded-semibold': require('../assets/fonts/SF_Font_Rounded.ttf'),
            'sf-rounded-heavy': require('../assets/fonts/SF-Pro-Rounded-Heavy.ttf'),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Parent View" onPress={() => this.props.navigation.navigate("Parent")}/>
                <Button title="Child View" onPress={() => this.props.navigation.navigate("Child")}/>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

