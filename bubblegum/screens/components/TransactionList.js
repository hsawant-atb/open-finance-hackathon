import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    AsyncStorage
} from "react-native";
import { token } from '../global'

import axios from 'axios'

const transactions = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        date: "1st January",
        category: "food",
        amount: '25.00'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        date: "1st January",
        category: "clothing, entertainment, other",
        amount: '25.00'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        date: "1st January",
        category: "entertainment",
        amount: '25.00'
    },
];

const TransactionLineItem = (props) => {
    return (
        <View
            style={{
                //backgroundColor: 'pink',
                width: 320,
                marginVertical: 10
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        fontFamily: 'sf-rounded-heavy',
                        fontSize: 20
                    }}
                >{props.description}</Text>
                <Text
                    style={{
                        fontFamily: 'sf-rounded-heavy',
                        fontSize: 20
                    }}
                >${props.amount}</Text>
            </View>
            <View>
                <Text 
                style={{
                    fontFamily: 'sf-rounded-semibold',
                    fontSize: 15,
                    color: '#a2a2a2'
                }}
                >{props.date}</Text>
            </View>
        </View>
    )
}

class TransactionList extends Component {

    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const id = 'a9213f5d-bfc8-487f-8242-0789bbcc2c20'
        const url = `https://api.leapos.ca/obp/v4.0.0/my/banks/3056a117b6bf9e42fb96b02d3513a66/accounts/${id}`


        const httpConfig = {
            headers: {
                'Authorization': `DirectLogin\ token=${token}`,
            },
            method: 'GET',
            url: `${url}`
        };


        axios(httpConfig)
            .then((res) => {
                console.log(res.data['bank_id'])



            })
        // .catch((error) => {
        //     console.log(error)
        // }) 

    }

    render() {
        return (
            <View style={styles.container}>
                <Text 
                 style={{
                    fontFamily: 'sf-rounded-heavy',
                    fontSize: 30
                }}
                >TransactionList</Text>
                <FlatList
                    data={transactions}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TransactionLineItem
                            description={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    }

                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
}
export default TransactionList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'pink'
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});