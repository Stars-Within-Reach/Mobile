import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, ActivityIndicator, LayoutAnimation } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
    }
    componentDidMount() {
        const{email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});
    }
    signOutUser = () => {
        firebase.auth().signOut();
    }
    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View styles = {Styles.container}>
                
                <Text> Hi {this.state.email}!</Text>
                <TouchableOpacity style = {{marginTop: 32}} onPress= {this.signOutUser}>
                    <Text> Logout</Text>
                </TouchableOpacity>
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