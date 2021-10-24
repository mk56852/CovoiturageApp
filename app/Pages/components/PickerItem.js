import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PickerItem({title,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txt : {
        padding : 20 ,
    }
})
