import React from "React";

const MainPage = ()=> {

    return (
         
            <NavigationContainer>
            <View
            style={styles.everything}>
           
            <Text style = {styles.title} >Welcome to {"\n"}Stars Within Reach!</Text>
              
           
            <TouchableOpacity
                style={styles.button}
                onPress={this.HomeScreen}
              >
                <Text style = {{textAlign: "center", fontSize: 50}}>Get Started</Text>
              </TouchableOpacity>
            </View> </NavigationContainer>
          
    );
}

const styles = StyleSheet.create ({

    title: {
      paddingLeft: 15, 
      fontSize: 40, 
      color: "#F8E9A1", 
      fontFamily: "Cochin", 
      width: "100%", 
      textAlign: "center"
    },
    everything: {
      flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#24305E",
          width: "100%"
    },
    button: {
      backgroundColor: "#F76C6C",
      marginTop: 50,
      width: "75%",
      borderRadius: 10,
      fontSize: 750,
    },
    
     
    
  })

export default MainPage;