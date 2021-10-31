import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function NewPublicationButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color='white' size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems : 'center',
        backgroundColor : 'red' , 
        borderColor: 'white' ,
        borderWidth : 10 ,
        borderRadius : 40 ,
        bottom : 20 ,
        height : 80 ,
        width: 80 ,
        justifyContent : 'center'
    }
})
