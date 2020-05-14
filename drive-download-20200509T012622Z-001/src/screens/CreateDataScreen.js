/*Example of Bottom Sheet (Material Design)*/
import React, { Component } from 'react';
//import react in our project
import { StyleSheet, View, Platform, Text, Button } from 'react-native';
//import basic react native components
import { BottomSheet } from 'react-native-btr';
//import for the bottom sheet
import { SocialIcon } from 'react-native-elements';
//import to show social icons

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //default visibility state of the bottom sheet
      visible: false,
    };
  }
  _toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, marginBottom: 500, textAlign: 'center' }}>
          Example of Bottom Sheet in React Native
        </Text>
        <Button
        
          onPress={this._toggleBottomNavigationView}
          //on Press of the button bottom sheet will be visible
          title="Show Bottom Sheet"
        />
        
        <BottomSheet
          visible={this.state.visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={this._toggleBottomNavigationView}
          //Toggling the visibility state on the click of the back botton
          onBackdropPress={this._toggleBottomNavigationView}
          //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text style={{ textAlign: 'center', padding: 20, fontSize: 20 }}>
                Share Using
              </Text>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                <Button title='hâha'>
    
                </Button>
                <SocialIcon
                  //Social Icon using react-native-elements
                  type="twitter"
                  //Type of Social Icon
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    this._toggleBottomNavigationView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  title='Sign In With Facebook'
                  onPress={() => {
                    this._toggleBottomNavigationView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    this._toggleBottomNavigationView();
                    alert('instagram');
                  }}
                />
              </View>
              
            </View>
          </View>
        </BottomSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    //backgroundColor: '#fff',
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
