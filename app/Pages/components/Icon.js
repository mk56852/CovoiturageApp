import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function Icon({
name, size = 60, backgroundColor="black" , iconColor="white"
}) 
{
    return (
        <View style={{
            width : size , 
            height : size ,
            borderRadius : size * 0.5  ,
            backgroundColor,
            justifyContent:'center' ,
            alignItems : 'center'
    
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}  />
        </View>
    )
}
