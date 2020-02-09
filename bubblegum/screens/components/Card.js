import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { withOrientation } from "react-navigation";
import { AsyncStorage } from "react-native";
import axios from 'axios'

import { token } from '../global'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardName: "",
            cardBalance: "",
            accNumber: ""
        };
    }

    //   async componentDidMount() {
    //     //Get card name

    //     const that = this
    //     const token = await AsyncStorage.getItem("token");
    //     const id = "a9213f5d-bfc8-487f-8242-0789bbcc2c20";
    //     const url = `https://api.leapos.ca/obp/v4.0.0/my/banks/3056a117b6bf9e42fb96b02d3513a66/accounts/${id}/account`;

    //     //alert(token)

    //     const httpConfig = {
    //       headers: {
    //         Authorization: `DirectLogin\ token=${token}`
    //       },
    //       method: "GET",
    //       url: `${url}`
    //     };

    //     let res = await axios(httpConfig);
    //     const label = res.data.label;
    //     const number = res.data.number;
    //     const balance = res.data.balance.amount;

    //     that.setState({ cardName: label });
    //     that.setState({ accNumber: number });
    //     that.setState({ cardBalance: balance });

    //     alert(res)

    //   }

    componentDidMount() {
        //Get card name 
        //const token = "eyJhbGciOiJIUzI1NiJ9.eyIiOiIifQ.Oie-mWgcxEJ69LZhKOXa-QQg3yEIZyrLooDrCaXG3Ws"
        //const id = 'a9213f5d-bfc8-487f-8242-0789bbcc2c20'
        const id = this.props.id
        const url = `https://api.leapos.ca/obp/v4.0.0/my/banks/3056a117b6bf9e42fb96b02d3513a66/accounts/${id}/account`


        const httpConfig = {
            headers: {
                'Authorization': `DirectLogin\ token=${token}`,
            },
            method: 'GET',
            url: `${url}`
        };


        axios(httpConfig)
            .then((res) => {
                console.log(res.data)


                // const label = res.data.label
                const label = res.data.label;
                const number = res.data.number;
                const balance = res.data.balance.amount;


                this.setState({ cardName: label })
                this.setState({ accNumber: number });
                this.setState({ cardBalance: balance });

            })

    }


    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <LinearGradient
                    colors={["#CC2B5E", "#753A88"]}
                    style={{
                        width: 284,
                        height: 170,
                        borderRadius: 20,
                        padding: 20
                    }}
                >
                    <View>
                        <Text style={styles.name}>{this.state.cardName}</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.number}>{this.state.accNumber}</Text>
                            <Text style={styles.balance}>{this.state.cardBalance}</Text>
                        </View>
                    </View>
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
        marginHorizontal: 30
    },
    name: {
        color: "white",
        fontSize: 24,
        textAlign: "right",
        fontWeight: "bold"
    },
    balance: {
        color: "white",
        fontSize: 20
    },
    number: {
        color: "white",
        fontSize: 16
    },
    cardDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
});
