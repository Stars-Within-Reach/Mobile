import React from 'react'
import {createAppContainer, createSwitchContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import HomeScreen from './Screens/HomeScreen'
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/AntDesign';
import MessageScreen from './Screens/MessageScreen'
import ProfileScreen from './Screens/ProfileScreen'
import Notifications from './Screens/Notifications'
import PostScreen from './Screens/PostScreen'


var firebaseConfig = {
    apiKey: "AIzaSyA6obQe1Drdr-uWuvOQrLXDN03sI-FmrDQ",
    authDomain: "starswithinreach-a29ad.firebaseapp.com",
    databaseURL: "https://starswithinreach-a29ad.firebaseio.com",
    projectId: "starswithinreach-a29ad",
    storageBucket: "starswithinreach-a29ad.appspot.com",
    messagingSenderId: "591859711891",
    appId: "1:591859711891:web:012c393767f50a730fb266",
    measurementId: "G-CZP5BWRP5Y"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // firebase.analytics(); 

  const AppTabNavigator = createBottomTabNavigator(
      {
          Home: {
              screen: HomeScreen,
              navigationOptions: {
                  tabBarIcon: ({tintColor}) => <Icon name="home" size = {24} color = {"black"}/> 
              }
          },
          Connect: {
            screen: MessageScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="mail" size = {24} color = {"black"}/> 
            }
        },
        Blogs: {
            screen: PostScreen,
            navigationOptions: {
                tabBarIcon: ({}) => <Icon name="book" size = {24} 
                style ={{shadowColor: "#E9446A",
                        shadowOffset: {width: 0, height: 0},
                        shadowRadius: 10,
                        shadowOpacity: 0.3,
                }}/> 
            }
        },
      },
      {
          tabBarOptions: {
              activeBackgroundColor: "lightgrey",
              inactiveTintColor: "blue",
              showLabel: false,
              
          }
          
      },

  )
  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen

  })


  export default createAppContainer(
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppTabNavigator,
              Auth: AuthStack
          },
          {
              intialRouteName: 'Loading',
              
          },
          
      )
  )
