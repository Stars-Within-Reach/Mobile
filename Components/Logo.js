import React, { Component } from 'react';
import {Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {imageLogo} from '../Components/forreallogo.png'


export default function Logo() {
    return <View>
        <Image  source={require('./forreallogo.png')} style = {{height: 250, width: 250}} />
         </View>
}

 