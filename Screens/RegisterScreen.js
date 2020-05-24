import React, { Component } from 'react';
import {Text, View, StatusBar, Image, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        headerShown: false
    }
    
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null,

    }
    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        })
        .catch(error => this.setState({errorMessage: error.message}))
    }
   
    render() {
        return (
            <View style = {styles.container}>
                <StatusBar barStyle = "light-content"></StatusBar>
                <Image style = {{width: 300, height: 300, alignSelf: 'center', marginTop: 50}}source ={require('../Components/forreallogo.png')}></Image> 
                <Text style = {styles.greeting}>
                   {'Hello. \n Sign Up to get started.'}
                    
                </Text>
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style = {styles.form}>
                <View>
                        <Text style = {styles.inputTitle}>Full Name</Text>
                        <TextInput
                         style = {styles.input}
                          autoCapitalize = "none" 
                          onChangeText={name => this.setState({name})}
                          value = {this.state.name}
                          ></TextInput>
                    </View>
                    <View style = {{marginTop:32}}> 
                        <Text style = {styles.inputTitle}>Email Adress</Text>
                        <TextInput
                         style = {styles.input}
                          autoCapitalize = "none" 
                          onChangeText={email => this.setState({email})}
                          value = {this.state.email}
                          ></TextInput>
                    </View>

                    <View style = {{marginTop:32}}>
                        <Text style = {styles.inputTitle}>Password</Text>
                        <TextInput
                        secureTextEntry
                        style = {styles.input} 
                        autoCapitalize = "none"
                        onChangeText={password => this.setState({password})}
                        value = {this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style  = {styles.button} onPress={this.handleSignUp}>
                    <Text style = {{color: "white", fontWeight: "500"}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{alignSelf: "center", marginTop: 32}} 
                onPress = {()=> this.props.navigation.navigate("Login")}>
                    <Text style = {{color: "black",  fontSize: 14}}> 
                        Already have an account? <Text style = {{fontWeight: "500", color: "#F76c6c"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30, 
    },
    error: {
        color:  "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: 'center',
    },
    form: {
        marginBottom:48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: 'black',
        fontSize: 10,
        textTransform:'uppercase',
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth:  StyleSheet.hairlineWidth,
        height:40,
        fontSize: 15,
        color: "black",
    },
    button: {
         marginHorizontal:30,
         backgroundColor: "#f76c6c",
         borderRadius:  4,
         height: 52,
        alignItems:"center",
        justifyContent: 'center',

    }
})