import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

import Carousel from 'react-native-carousel'

import * as comp from './components/index'

class OverviewScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentBalance: "2367"
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20
                }}>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'sf-rounded-heavy',
                                fontSize: 15
                            }}
                        >Total Balance</Text>
                        <Text
                            style={{
                                fontFamily: 'sf-rounded-heavy',
                                fontSize: 45
                            }}
                        >${this.state.parentBalance}</Text>
                    </View>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'salmon'
                        }}
                    >
                    </View>
                </View>
                <Text
                    style={{
                        fontFamily: 'sf-rounded-heavy',
                        fontSize: 30,
                        marginVertical: 25, 
                        marginHorizontal: 20
                    }}
                >Childen</Text>
                <comp.ChildrenCarousel />
            </SafeAreaView>
        );
    }
}
export default OverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginHorizontal: 20,
        marginTop: 80
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    c: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});