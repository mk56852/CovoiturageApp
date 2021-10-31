import React from 'react'
import { ImageBackground, StyleSheet, Text, View , Image } from 'react-native'
import Button from './components/Button'
import  Container  from './Config/ContainerConfig'
import userLocation from './Config/userLocation'



export default function WelcomePage( { navigation } ) {

    const location = userLocation() ;
    console.log(location)
    
    return (
   <ImageBackground blurRadius={2} style={[styles.background,Container]} source={require('../assets/welcomePage.jpg') }  >
            
        <View style={styles.imageContainer}>
            <Image source={require('../assets/logo2.png')} style={styles.logo}  />
            <Text style={styles.txt} > Enjoy The App </Text>
        </View>
        
        <View style = {styles.buttContainer}> 
            <Button title = "Login" color="beige" onPress={()=> navigation.navigate("Login")} />
            <Button title = "Register"  color='white' onPress={()=> navigation.navigate("Register") } />
            
        </View>

    </ImageBackground>   
     
    
    )
}

const styles = StyleSheet.create({
    background :  {
        flex : 1 , 
        justifyContent : 'flex-end' ,
        alignItems : 'center' 
        
    } ,
    buttContainer:{
        width : "100%",
        padding : 10,
        bottom : 60, 
        alignItems : 'center'

    } ,


    imageContainer :{
        position : 'absolute' ,
        top : 80 ,
        alignItems:'center',
        justifyContent : 'center' ,
       
        
    },

    logo :{
        width:150 ,
        height : 150 
    } ,
    txt :{
        fontStyle :'italic' ,
        color : 'black' ,
        fontWeight:'bold',
        fontSize : 30,
        
    },

   
   



})
