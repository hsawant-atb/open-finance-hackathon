import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";

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
                    justifyContent: 'space-between'
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
                                fontSize: 40
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
            </SafeAreaView>
        );
    }
}
export default OverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 80
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});