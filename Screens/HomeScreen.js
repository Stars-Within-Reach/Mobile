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
            <View style = {styles.container}>
            <Text> Home Screen</Text>
             <TouchableOpacity style = {{marginTop: 32}} onPress= {this.signOutUser}>
                    <Text> Logout</Text>
                </TouchableOpacity> 
        </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})