import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function UserDetails(props) {
    return (
        <View style={[styles.container , props.style]}>
            <Image style = {styles.image} source = {props.imageSrc}/>
            <View style={{marginTop : 20 }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image :{
        marginTop:20,
        width:75 ,
        height:75,
        marginRight : 13,
        borderRadius : 42,
        

    } , 
    title : {
        fontSize:20,
        
    } ,
    subTitle :{
        color : "#6e6969" ,

    } ,
    container:{
        flexDirection:'row' ,
        alignItems : 'center' ,
      
    }

})
