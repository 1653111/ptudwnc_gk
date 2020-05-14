import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text> Header nè </Text>
                <Button title= "Trở về" onPress={() => this.props.onPressBtn() }
                />
            </View>
        )
    }
}
