import React, { Component } from 'react'
import { SafeAreaView, Text,Button } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {setStatus} from '../redux/userAction';
export class HomeScreen extends Component {
    
    logoutAccount = () => {
        this.props.setStatus(false);
    }
    
    constructor(props) {
        super(props);

        this.props.navigation.setOptions({
            title: 'home title',
            headerRight: () => (
                <Button onPress={() => alert('abc')} title="Btn Right"/>
            ),
        });
    }
    render() {
        return (
            <SafeAreaView>
                <Text> Home </Text>
                <Button title="Chi tiết" onPress={ () => this.props.navigation.navigate("MainDetails")} />
                <Button title="Đăng xuất" onPress={ () => this.logoutAccount()} />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    isLogged: state,
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({setStatus}, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomeScreen);