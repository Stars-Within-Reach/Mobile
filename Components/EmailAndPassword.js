import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity,TextInput  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Redirect } from 'react-router';
import firebase from 'firebase';

class EmailAndPassword extends Component {
    state={
        email: '',
        password: '',
        error: '', 
    }
    onBottomPress= () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password) 
        .then(() => { 
            console.log("hello")
            this.onLoginSucess()
        }) 
        .catch(err => {
            this.setState ({
                error: err.message
            })
            console.log("hi")
        })
    }
    onLoginSucess = () => {
        this.setState ({
            error: '',
            loading: false,
        })
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput placeholder = "Email" 
                style = {styles.input}
                 value={this.state.email}
                 onChangeText={email=> this.setState({email})}/>

                <TextInput placeholder = "Password" 
                style = {styles.input}  
                secureTextEntry
                value={this.state.password}
                onChangeText={password=> this.setState({password})}/> 
                <TouchableOpacity style = {styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style = {styles.buttonText}>Login</Text>    
                </TouchableOpacity>
                <Text style = {styles.error}>
                         {this.state.error}
                    </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20, 
        },
        input: {
            height: 40,
            backgroundColor: 'rgba(255,255,255,.5)',
            paddingLeft:10,
            marginBottom:15,
            borderRadius:5,
            fontSize:15,
            borderBottomColor: 'black',
            borderBottomWidth: 2,
            width: 350,
        },
        error: {
            fontSize: 25,
            color: 'red',
            alignSelf: 'center',
            marginTop: 10,
        },
        buttonText: {
            alignItems: 'center',
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#FFF',
        },
        buttonContainer: {
            backgroundColor: '#F76C6C' ,
            padding: 15,
            borderRadius: 8,

        }
    } 
)

export default EmailAndPassword;