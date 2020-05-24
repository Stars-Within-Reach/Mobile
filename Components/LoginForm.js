import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Logo from './Logo'; 
import EmailAndPassword from './EmailAndPassword';


export default function LoginForm(props) {
    console.log(props)
    const { navigation } = props
    const pressHandler1 = () => {
        navigation.navigate('signUp')
    }
    return (
    <NavigationContainer>
        <View style = {styles.container}>
            <View style = {styles.logoContainer}> 
                <Logo/>
            </View>
            <View style = {styles.emailAndPassword}> 
                <EmailAndPassword/>
            </View>
            <TouchableOpacity onPress = {pressHandler1} style = {styles.butt}>
                <Text style = {styles.buttText}> Sign Up</Text>
            </TouchableOpacity>
        </View>
    </NavigationContainer>);
}
const styles = StyleSheet.create(
    {
       container: {
           flex:1,
          justifyContent:'center',
            backgroundColor: 'white',
       },
       logoContainer: {
           flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
       } ,
       emailAndPassword: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       },
       butt: {
        backgroundColor: '#F76C6C' ,
        padding: 15,
        borderRadius: 8,
        marginBottom: 359,
        width: 350,
        alignSelf: 'center'
       },
       buttText: {
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
       }
    }
)


