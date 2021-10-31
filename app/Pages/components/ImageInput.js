import React , {useEffect} from 'react'
import { StyleSheet,Image, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export default function ImageInput({imageUri , onChangeImage}) {
   
    useEffect(()=>{
        requestLibraryPermission() ;
      } , []) ;
 

    const requestLibraryPermission = async () => {
        const {granted}  = await ImagePicker.requestMediaLibraryPermissionsAsync() ;
        if (!granted ) alert(" you need to enable permission")
      } ; 
    

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync( {mediaTypes : ImagePicker.MediaTypeOptions.Images} ) 
            if(!result.cancelled)
             onChangeImage(result.uri) ;
        
        } catch (error) {
            console.log(error)
        }
    }

    const handlePress = () => {
        if(!imageUri) selectImage() ; 

    }

    return (
        <TouchableWithoutFeedback onPress={selectImage}>
        
        <View style={styles.container}>
             {!imageUri && <MaterialCommunityIcons name="camera" size = {50} />}
             {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>} 

        </View>
        
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container : 
    {
        backgroundColor : '#f8f4f4' , 
        borderRadius :75, 
        justifyContent :'center' , 
        alignItems : 'center' ,
        height : 150 , 
        width : 150 ,
        overflow : "hidden" 
    } , 
    image :{
        width : '100%' , 
        height : '100%'
    } , 
  
})
