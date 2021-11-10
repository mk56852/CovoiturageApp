import React from 'react'
import { StyleSheet,  View } from 'react-native'
import LottieView from 'lottie-react-native'

export default function ActivityIndicator({visible = false , loop = true}) {
    if (!visible) return null ; 
    return ( <View style={styles.indicator}>
         <LottieView  autoPlay={true} loop={loop} source={require('../../assets/animations/loader3.json')} /> 
         </View>)
}

const styles = StyleSheet.create({
    indicator : {
        position : 'absolute' ,
        backgroundColor : 'white' , 
        height : '100%' ,
        width : '100%' ,
        opacity : 0.6,
        zIndex : 1 ,
        elevation : 10
    }
})
