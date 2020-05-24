import React, { Component } from 'react';
import {Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase'

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    } 
    render() {
        return (
            <View style = {Styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size = "large" style = {{marginTop: 15}}></ActivityIndicator>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})