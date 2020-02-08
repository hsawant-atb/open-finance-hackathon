import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

class Card extends Component {

    constructor(props) {
        super(props)
        // this.state = {
            
        // }
    }

    componentDidMount() {
        //Do your API calls here

        const data = [] /* store the data in this object */
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <LinearGradient
                    colors={['#CC2B5E', '#753A88']}
                    style={{
                        width: 280,
                        height: 170,
                        borderRadius: 20,
                        padding: 20
                    }}
                >
                    <View>
                        <Text>{this.props.cardName}</Text>
                        <Text>{this.props.cardBalance}</Text>
                        <Text>{this.props.accNumber}</Text>
                        {/* <Text>{this.props.image}</Text> */}
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        elevation: 5,
    }
});