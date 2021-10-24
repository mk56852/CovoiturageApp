import React, { useImperativeHandle } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import UserDetails from './UserDetails'






export default function PostDetailsScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/cover.jpeg")} />
            <View style={styles.metaData}>
                <Text style={styles.title}>melek</Text>
                <Text style={styles.price}>100$</Text>
            </View>

            <View style={styles.userContainer}>
                <UserDetails title="Khalil" subTitle="29267362" imageSrc={require("../../assets/cover.jpeg")}></UserDetails>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Réserver" color="#4ecdc4" ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        paddingTop : 24
    

    },
    image : {
        width : '100%',
        height:180 , 
    } ,
    price:{
        color:"green" , 
        fontWeight:'bold'
    } , 
    metaData :{
        padding : 15 ,
        margin:5

    } , 
    title :{
        fontWeight:'bold',
    },
    userContainer : {
        marginVertical : 40, 
        marginLeft : 15,
    },
    buttonContainer :{
        width : "100%",
        padding : 20, 
        alignItems : 'center'
    }
})

