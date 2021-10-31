import React from 'react'
import { StyleSheet, Text, View , TouchableHighlight, TouchableOpacity } from 'react-native'

export default function Button(props) {
    
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor:props.color},props.style]} onPress={props.onPress}>
            <Text  style={{fontWeight:'bold' , fontSize:16}} > {props.title} </Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
button : {
    alignItems : 'center' ,
    justifyContent:'center' ,
    width : "70%" ,
    borderRadius : 20 ,
    margin : 10,
    height: 40

}

})
