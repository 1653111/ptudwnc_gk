import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text> Profile </Text>
                <Button title="Thay đổi thông tin" onPress={ () => this.props.navigation.navigate("ChangeInfo")} />
            </View>
        )
    }
}
