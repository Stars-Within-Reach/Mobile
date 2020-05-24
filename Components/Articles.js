import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

const Articles =() =>{
    return (
        <View style = {styles.container}>
           <View style = {styles.articlesContainer}>
           <Text style = {styles.heading}>Welcome to the authorized page</Text>
           <Text style = {styles.content }>Our content will come here</Text>
          <TouchableOpacity style = {{padding: 20}} onPress = {()=> firebase.auth().signOut()}> 
              <Text style ={{color: 'green'}} >Logout</Text>
          </TouchableOpacity>
           </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
         
        },
        articlesContainer: {
            padding: 10,
            borderBottomColor: '#000000',
            marginTop: 50,
           
        },
        heading: {
            fontSize: 22,
            color: 'black',
            padding:10,
            marginBottom: 10, 
        },
        content: {
            marginTop: 10,
            fontSize: 19,
            alignItems: 'center'
        }
    } 
)

export default Articles;

