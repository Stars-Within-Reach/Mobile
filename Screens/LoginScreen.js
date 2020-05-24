<script src="http://localhost:8097"></script>
import React, { Component } from 'react';
import {Text, Image, StatusBar, View, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator, LayoutAnimation } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons.flow';
export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerShown: false
    };
    state = {
        email: "",
        password: "",
        errorMessage: null,

    }
    handleLogin = () => {
        const {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage: error.message}))
    }
    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style = {styles.container}>
                  <StatusBar barStyle = "light-content"></StatusBar>
                <Image style = {{width: 300, height: 300, alignSelf: 'center', marginTop: 50}}source ={require('../Components/forreallogo.png')}></Image> 
                <TouchableOpacity style = {styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Icon name="leftcircle" size = {32}></Icon> 
                </TouchableOpacity> 
                <Text style = {styles.greeting}>
                    {'Hello again. \n Welcome back.'}
                    
                 </Text> 
                <View style = {styles.errorMessage}>
                    {this.state.errorMessage && <Text style = {styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style = {styles.form}>
                    <View>
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

                <TouchableOpacity style  = {styles.button} onPress={this.handleLogin}>
                    <Text style = {{color: "white", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{alignSelf: "center", marginTop: 32}}
                onPress = {()=> this.props.navigation.navigate("Register")}>
                    <Text style = {{color: "black",  fontSize: 14}}> 
                        New to Stars Within Reach? <Text style = {{fontWeight: "500", color: "#F76c6c"}}>Sign Up</Text>
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

    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor:  "rgba(21,22,48,0.1)",
        alignItems: 'center',
        justifyContent: 'center'

    }
})