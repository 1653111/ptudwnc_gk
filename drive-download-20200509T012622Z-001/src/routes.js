import { createStackNavigator } from '@react-navigation/stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'

const HomeStack = createStackNavigator({
    HomeScreen : HomeScreen,
    DetailsScreen : DetailsScreen
});

const BottomNav = createBottomTabNavigator({
    HomeStack : HomeStack,
    Profile : ProfileScreen,
});

const SwitchNav = createSwitchNavigator({
    LoginScreen : LoginScreen,
    Dashboard : BottomNav,
});

const MainContainer = createAppContainer(SwitchNav);
export default MainContainer;