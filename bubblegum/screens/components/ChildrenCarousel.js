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
                    //width={Dimensions.get('window').width}
                    width={375}
                    animate={false}
                    hideIndicators={true} >
                    <View style={styles.carousel}>
                        <comp.Card id={global.c1id} />
                        <View style={styles.inner}>
                            <comp.TransactionList />
                        </View>
                    </View>
                    <View style={styles.carousel}>
                        <comp.Card id={global.c2id} />
                        <View style={styles.inner}>
                            <comp.TransactionList />
                        </View>
                    </View>
                    {/* <View style={styles.c}>
                        <Text>Page 1</Text>
                    </View>
                    <View style={styles.c}>
                        <Text>Page 2</Text>
                    </View>
                    <View style={styles.c}>
                        <Text>Page 3</Text>
                    </View> */}
                </Carousel>
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
        backgroundColor: 'pink'
    },
    carousel: {

    },
    inner: {
        flex: 1,
        alignContent: 'center'
    }
});