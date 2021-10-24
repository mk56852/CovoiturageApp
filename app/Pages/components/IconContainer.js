import React from 'react'
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import Icon from './Icon'
export default function IconContainer(props) {
    return (
       
            <View style={[styles.Container , props.style] }>
                <Icon name={props.name} size={props.size} iconColor={props.iconColor} backgroundColor = {props.backgroundColor} />
                <Text style={{margin:10 , fontWeight:'bold'}}>{props.title}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    Container :
    {
        flex : 1 ,
        flexDirection : 'row',
        alignItems:'center' , 
        margin : 6,
       
       

    }
})

