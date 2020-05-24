import React from 'react'
import {createAppContainer, createSwitchContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import HomeScreen from './Screens/HomeScreen'
import firebase from 'firebase';

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

  const AppStack = createStackNavigator({
      Home: HomeScreen
  })
  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen

  })


  export default createAppContainer(
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppStack,
              Auth: AuthStack
          },
          {
              intialRouteName: 'Loading',
              
          },
          
      )
  )
