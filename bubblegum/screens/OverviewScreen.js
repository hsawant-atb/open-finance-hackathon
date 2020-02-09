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
                <View
                    style={{
                        flex: 1,
                        //backgroundColor: 'pink'
                    }}>
                    <Text
                        style={{
                            fontFamily: 'sf-rounded-heavy',
                            fontSize: 30,
                            //marginVertical: 25,
                            marginHorizontal: 20
                        }}
                    >Childen</Text>
                    <View style={{flex: 1, paddingTop: 20}}>
                    <Carousel
                            width={375}
                            animate={false}
                            hideIndicators={false}
                            indicatorOffset={-40}
                        >
                            <View
                                style={{
                                    width: 375,
                                    //flex: 1,
                                    //justifyContent: 'center',
                                    //alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <comp.Card child={1} onPress={()=> this.props.navigation.navigate('AccountDetails')}/>
                                <View style={styles.inner}>
                                    <comp.TransactionList child={1} />
                                </View>
                            </View>
                            <View style={{
                                width: 375,
                                backgroundColor: 'transparent',
                            }}>
                                <comp.Card child={2} />
                                <View style={styles.inner}>
                                    <comp.TransactionList child={2} />
                                </View>
                            </View>
                        </Carousel>
                    </View>
                </View>
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