import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

import Carousel from 'react-native-carousel'

import * as comp from './index'
import * as global from '../global'

class ChildrenCarousel extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Carousel
                    width={375}
                    animate={false}
                    hideIndicators={false}
                    indicatorOffset={-40}
                >
                    <View
                        style={{
                            width: 375,
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <comp.Card child={1} />
                        <View style={styles.inner}>
                            <comp.TransactionList child={1} />
                        </View>
                    </View>
                    <View style={{
                        width: 375,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                    }}>
                        <comp.Card child={2} />
                        <View style={styles.inner}>
                            <comp.TransactionList child={2} />
                        </View>
                    </View>
                </Carousel>



                {/* <Carousel
                    width={375}
                    animate={false}
                    hideIndicators={true} >
                    <View>
                        <comp.Card child={1}/>
                        <View style={styles.inner}>
                            <comp.TransactionList />
                        </View>
                    </View>
                    <View>
                        <comp.Card child={2} />
                        <View style={styles.inner}>
                            <comp.TransactionList />
                        </View>
                    </View>
                </Carousel> */}
            </View>
        );
    }
}
export default ChildrenCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        //backgroundColor: 'pink'
    },
    inner: {
        flex: 1,
        alignContent: 'center',
        paddingHorizontal: 25
    }
});