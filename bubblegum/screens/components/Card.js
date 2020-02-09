import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withOrientation } from "react-navigation";
import { AsyncStorage } from "react-native";
import axios from "axios";

import { token } from "../global";

let bart = {
    label: "Bart Simpson",
    number: "****4537",
    balance: {
        currency: "CAD",
        amount: "-$3.98"
    },
    account_attributes: {
        goal: "$10.00",
        spent: "$83.98",
        total: "-$3.98"
    }
};
let lisa = {
    label: "Lisa Simpson",
    number: "****3652",
    balance: {
        currency: "CAD",
        amount: "$30.00"
    },
    account_attributes: {
        goal: "$30.00",
        spent: "$110.99",
        total: "$40.00"
    }
};

let marge = {
    label: "Marge Simpson",
    number: "****2240",
    balance: {
        currency: "CAD",
        amount: "700.00"
    },
    account_attributes: {
        goal: "$0.00",
        spent: "$110.99"
    }
};

class Card extends Component {
    constructor(props) {
        super(props);

        // TODO: add props
        this.state = {
            cardName: lisa.label,
            cardBalance: lisa.balance.amount,
            accNumber: lisa.number,
            child: 1
        };
    }

    componentDidMount(){
        //this.setState({child: this.props.child})
    }

    render() {

        const pic = require(`../../assets/1.png`)
        return (
            <TouchableOpacity style={styles.container}>
                <LinearGradient
                    colors={["#CC2B5E", "#753A88"]}
                    style={{
                        width: 284,
                        height: 170,
                        borderRadius: 20,
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.name}>{this.state.cardName}</Text>
                        <Text style={styles.balance}>{this.state.cardBalance}</Text>
                    </View>
                    <View
                        style={{ 
                            flex: 1,
                        justifyContent: 'space-between',
                        alignItems: 'center' }}
                    >
                        <Image
                            style={{width: 95, height: 95, borderRadius: 60/ 2}}
                            resizeMode='contain'
                                // style={{
                                //     flex: 1,
                                //     alignSelf: 'center',
                                //     //marginTop: 80,
                                //     resizeMode: 'contain',
                                //     //width: Dimensions.get('screen').width,
                                //     //backgroundColor: 'pink'
                                //     // borderWidth: 1,
                                //     // borderRadius: 75
                                // }}
                                source={pic}
                            />
                        <Text style={styles.number}>{this.state.accNumber}</Text>
                    </View>
                    {/* <View>

                        <View style={styles.cardDetails}>


                        </View>
                    </View> */}
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginHorizontal: 30,
        marginTop: 50
    },
    name: {
        color: "white",
        fontSize: 24,
        //textAlign: "right",
        fontFamily: 'sf-rounded-heavy',
        //fontWeight: "bold"
    },
    balance: {
        color: "white",
        fontSize: 20,
        fontFamily: 'sf-rounded-heavy'
    },
    number: {
        color: "white",
        fontSize: 16,
        fontFamily: 'sf-rounded-heavy'
    },
    cardDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
});
