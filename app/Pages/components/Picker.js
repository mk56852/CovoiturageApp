import React,{useState} from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { FlatList, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Container from '../Config/ContainerConfig'
import Button from './Button'
import PickerItem from './PickerItem'

export default function Picker({icon="apps" , items ,placeholder, onSelectItem , selectedItem , ...otherProps}) {
    const [modalVisible , setModalVisible] = useState(false) ;
    
    
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
        <View style = {[styles.container,Container]}>
            {<MaterialCommunityIcons name={icon} size={20} style={styles.icon} /> }
            <TextInput style={styles.TextInput} {...otherProps} />
            {selectedItem ? <Text style={{fontSize:20 , fontWeight:'bold' , flex : 1 , color:'black' }}> {selectedItem} </Text> : <Text style={{fontSize:18 , flex : 1, color:"#6e6969" }}>{placeholder}</Text> }
            
            <MaterialCommunityIcons name="chevron-down" size={20}  />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'  >
            <View style={{justifyContent:'center' , alignItems:'center'} }>
            <Button style={Container} title ="close" onPress={()=> setModalVisible(false)} color="white" ></Button>
            </View>   
            <FlatList data={items} 
            keyExtractor={item => item.value.toString()}
            renderItem = {({item})=>  <PickerItem title={item.name} onPress={() => {setModalVisible(false) ; onSelectItem(item)}} />}
            />
        
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        
       top:15,
        backgroundColor : "#f8f4f4" , 
        borderRadius : 25 ,
        flexDirection : "row" , 
        width:"100%" ,
        padding : 15 ,
        marginVertical : 10,
    } , 
    TextInput :{
        fontSize : 18 ,
        color : "#0c0c0c"


    } , 
    icon :{
        marginRight:10 ,
        marginLeft : 10 ,
        top:2
    }
})
