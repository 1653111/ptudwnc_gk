/*import React, { Component } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context';

export default class WelcomeScreen extends Component {
    state = {
        username: 'Anh Quân'
    };
    render() {
        const{username} = this.state;
        //const {navigate} = this.props;
        return (
            <SafeAreaView>
                <Text> {username} </Text>
                <Button
                    title="Đăng nhập"
                    onPress={() => this.props.navigation.navigate('Login', {item: username})}
                />
                <Button
                    title="Đăng ký"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('BottomNav')}
                />
            </SafeAreaView>
        )
    }
}
*/
/*
import React, {Component} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStatus} from '../redux/userAction';
export class LoginScreen extends Component {
    loginAccount = () => {
        this.props.setStatus(true);
    }
    render() {
    return (
      <SafeAreaView>
        
        <Button
          title="Đăng nhập"
          onPress={() => this.loginAccount()}
        />
        <Button
                    title="Đăng ký"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
      </SafeAreaView>
    );
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
)(LoginScreen);
*/

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  COLOR_PINK,
  COLOR_PINK_LIGHT,
  COLOR_FACEBOOK,
  COLOR_PINK_MEDIUM,
  COLOR_GOOGLE,
} from '../components/MyColors';
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setStatus} from '../redux/userAction';
import Icon from 'react-native-vector-icons/FontAwesome';

export class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  loginAccount = () => {
    this.props.setStatus(true);
  };
  render() {
    //const {item} = this.props.route.params;
    const Divider = props => {
      return (
        <SafeAreaView {...props}>
          <SafeAreaView style={styles.line} />
          <Text style={styles.textOR}>OR</Text>
          <SafeAreaView style={styles.line} />
        </SafeAreaView>
      );
    };
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.uplogo}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.uptext}>
            <Text style={styles.title}>Viết một dòng gì đó ở đây :))</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Enter your email"
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity onPress={() => this.loginAccount()}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonTitle}>LOGIN</Text>
              </View>
            </TouchableOpacity>

            <Divider style={styles.divider} />
            <View>
            <Icon.Button
                style={styles.facebookButton}
                name="facebook"
                backgroundColor="#3b5998"
                onPress={(alert = 'hahaha')}>
                <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
              </Icon.Button>
            </View>
            <View style={{padding: 20}}>
            <Icon.Button
                style={styles.googleButton}
                name="google"
                backgroundColor="#3b5998"
                onPress={(alert = 'hahaha')}>
                <Text style={styles.loginButtonTitle}>Login with Google </Text>
              </Icon.Button>
            </View>
            <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButtonTitle, {color: "black"}}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
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
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR_PINK_LIGHT,
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uplogo: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uptext: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 7, //70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)', //a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK,
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  googleButtonTitle: {
    fontSize: 18,
    color: 'black',
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  googleButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },
  textOR: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

/* gọi image
<Image source= {require('../images/logo.png')}
              style= {styles.logo}>
            </Image>
*/
