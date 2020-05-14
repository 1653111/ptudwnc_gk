import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Image, SafeAreaView, Text, Button} from 'react-native';
import {
  NavigationContainer,
  BaseRouter,
  TabActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ChangeInfo from './screens/ChangeInfo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons';
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RP_Service from './screens/RP_Service';
import RP_Income from './screens/RP_Income';
import RP_Expense from './screens/RP_Expense';
import RP_Refueling from './screens/RP_Refueling';
import RP_General from './screens/RP_General';
import CreateDataScreen from './screens/CreateDataScreen';
import RemindScreen from './screens/RemindScreen';
import MoreScreen from './screens/MoreScreen';
import {COLOR_PINK_LIGHT} from './components/MyColors';
import ActionButtonToggle from './ActionButtonToggle';
import AddBtn_CP from './screens/AddBtn_CP';
//import MultiBar from './Multibar';
const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri:
            'https://www.saokim.com.vn/blog/wp-content/uploads/2010/10/logo-hinh-tron-saokim.png',
        }}
      />
      <Text>ABC</Text>
    </SafeAreaView>
  );
}

class ProfileStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
      </Stack.Navigator>
    );
  }
}

class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MainDetails" component={DetailsScreen} />
      </Stack.Navigator>
    );
  }
}

const Tab = createBottomTabNavigator();
class BottomNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; // history sort-amount-up
            } else if (route.name === 'Báo cáo') {
              iconName = 'chart-line'; //chart-bar  chart-area clipboard-list
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome5 name="list-ol" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Báo cáo" component={MyTabsTop} />
        <Tab.Screen
          name="Thêm"
          component={CreateDataScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome5
                style={{marginBottom: 30}}
                name="plus-circle"
                size={(size = 60)}
                color={'tomato'}
              />
            ),
          }}
        />

        <Tab.Screen
          name=" "
          component={RemindScreen}
          options={({navigation}) => ({
            tabBarVisible: false,
            tabBarIcon: () => (
              <ActionButtonToggle
                navigation={navigation}
                //toggleColor={'tomato'}
                icon={<FontAwesome5 name="history" size={44} color={'tomato'} />}
              />
            ),
          })}
        />

        <Tab.Screen
          name="Nhắc nhở"
          component={RemindScreen}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome5 name="calendar-check" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Hơn"
          component={MoreScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome5 name="ellipsis-h" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
const Tab1 = createMaterialTopTabNavigator();
class MyTabsTop extends Component {
  render() {
    return (
      <Tab1.Navigator>
        <Tab1.Screen name="General" component={RP_General} />
        <Tab1.Screen name="Refueling" component={RP_Refueling} />
        <Tab1.Screen name="Expense" component={RP_Expense} />
        <Tab1.Screen name="Income" component={RP_Income} />
        <Tab1.Screen name="Service" component={RP_Service} />
      </Tab1.Navigator>
    );
  }
}

export class MainNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        {this.props.isLogged ? (
          <BottomNav />
        ) : (
          <Stack.Navigator
          //screenOptions = {{headerShown: false}}
          >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{title: 'My home', headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={({route}) => ({title: route.params.item})}
            />
            <Stack.Screen name="AddBtn_CP" component={AddBtn_CP} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Profile" component={ProfileStack} />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{
                title: 'Đăng ký',
                headerStyle: {
                  backgroundColor: COLOR_PINK_LIGHT,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25,
                },
              }}
            />
            <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state,
});

export default connect(mapStateToProps)(MainNavigation);

/*
<Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{
                            headerTitle: props => <LogoTitle {...props} />,
                            headerRight: () => (
                                <Button
                                    onPress={() => alert('This is a button!')}
                                    title="Info"
                                    color="#ff2"
                                />
                        )}}
                    />
*/

/*
<Stack.Screen
                  name="BottomNav"
                  component={BottomNav}
                  options={
                    {
                      headerShown: false
                      // phủ khối đoạn này  do bên file Homescreen đã set cái title rồi
                      //headerTitle: props => <LogoTitle {...props} />
                    }
                  }
                />
*/
