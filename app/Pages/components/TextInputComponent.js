import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
export default function TextInputComponent({icon ,style, ...otherProps}) {
    return (
        <View style = {styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} /> }
            <TextInput style={[styles.TextInput,style]} {...otherProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        top : 15 ,
        backgroundColor : "#f8f4f4" , 
        borderRadius : 25 ,
        flexDirection : "row" , 
        width:"100%" ,
        padding : 15 ,
        marginVertical : 10,
    } , 
    TextInput :{
        fontSize : 18 ,
        color : "#0c0c0c",
        width:"80%"
        


    } , 
    icon :{
        marginRight:10 ,
        marginLeft : 10 ,
        top:2
    }
})
