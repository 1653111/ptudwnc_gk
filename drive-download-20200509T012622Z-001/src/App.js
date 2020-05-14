import React, { Component } from 'react';
//import { Text, View, SafeAreaView } from 'react-native';
import MainNavigation from './MainNavigation';
import {Provider} from 'react-redux';
import userReducer from './redux/userReducer';
import {createStore} from 'redux';
import UserReducer from './redux/userReducer';

const store = createStore(UserReducer, false)
export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <MainNavigation/>
            </Provider>
            
        );
    }
}
