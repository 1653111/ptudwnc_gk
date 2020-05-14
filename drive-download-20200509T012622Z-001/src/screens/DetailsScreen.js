import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'

export default class DetailsScreen extends Component {
    render() {
        return (
            <View>
            <Header onPressBtn = {() => this.props.navigation.goBack() }/>
                <Text> Details </Text>
            </View>
        )
    }
}
