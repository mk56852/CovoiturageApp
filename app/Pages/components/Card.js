import React from 'react'
import { StyleSheet , View , Image,Text, TouchableOpacity} from 'react-native'

export default function Card({title , prix,imageSrc,touchable=true ,backgroundColor}) {
    return (
        
            touchable === true ? 
            
                <View style={styles.card}>
                    <TouchableOpacity>
                    <Image style={styles.image} source={imageSrc}></Image>
                    </TouchableOpacity>
                    <View style={styles.metaData}>
                        <Text style={styles.title}> {title}</Text>
                        <Text style={styles.prix}>{prix}</Text>
                    </View>
                </View>
            
            
            : 
            <View style={styles.card}>
            
                <Image style={styles.image} source={imageSrc}></Image>
            
                <View style={styles.metaData}>
                    <Text style={styles.title}> {title}</Text>
                    <Text style={styles.prix}>{prix}</Text>
                </View>
            </View>
        
        
        
       
        
    )
}

const styles = StyleSheet.create({

    card : {
        top : 20,
        margin:10 ,
        borderRadius : 16 ,
        backgroundColor : 'white' ,
        marginBottom:22,
        overflow:'hidden',

    },
    image : {
        width : '100%',
        height:180 , 
    } ,
    metaData :{
        padding : 15 ,
        margin:5

    } , 
    prix:{
        color:"#6e6969" , 
        fontWeight:'bold',
        marginLeft:5
    } , 
    title :{
        fontWeight:'bold' , 
        marginBottom:8
    }
})