/*
import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'

export default class SignUpScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> Sign Up </Text>
            </SafeAreaView>
        )
    }
}
*/ 

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  COLOR_PINK, COLOR_PINK_LIGHT, 
  COLOR_FACEBOOK, COLOR_PINK_MEDIUM, COLOR_GOOGLE} 
from '../components/MyColors';

export default class App extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      //Donot dismis Keyboard when click outside of TextInput
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}> 
        
          <View style={styles.uptext}>
            <Text style={styles.title}>
              Tạo tài khoản của bạn
          </Text>
          </View>
          <View style={styles.down}>
            
             <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                //textContentType='emailAddress'
                //keyboardType='email-address'
                placeholder="Full name"
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                //textContentType='emailAddress'
                //keyboardType='email-address'
                placeholder="Phone number"
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="E-mail address"
              >
              </TextInput>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>SIGN UP</Text>
            </TouchableOpacity>

          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR_PINK_LIGHT
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uplogo: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uptext: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,//70% of column
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'//a = alpha = opacity
  },
  textInput: {
    width: 280,
    height: 45
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  googleButtonTitle: {
    
    fontSize: 18,
    color: 'black'
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
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  }
})

/* gọi image
<Image source= {require('../images/logo.png')}
              style= {styles.logo}>
            </Image>
*/