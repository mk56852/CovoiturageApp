import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Card from './components/Card'
import Container from './Config/ContainerConfig'


const posts = [
    {
        id:1,
        title:"sfax -> Tunis" ,
        prix : "20 DT",
        imageSrc: require("../assets/cover.jpeg")
    },
    {
        id:2,
        title:"Tunis -> Sousse" ,
        prix : "15 DT",
        imageSrc: require("../assets/cover.jpeg")
    },
    {
        id:3,
        title:"sfax -> Benzart" ,
        prix : "25 DT",
        imageSrc: require("../assets/cover.jpeg")
    }
]
export default function HomePage({navigation}) {
    return (
       
       <FlatList data={posts} 
        keyExtractor={post => post.id.toString()}
        renderItem = {({item}) => <Card title={item.title} prix={item.prix} imageSrc={item.imageSrc} onPress = {() => navigation.navigate("Details",item) }/> } 
        style = {[styles.cardContainer,Container]}
        /> 
      
      

  
    )
}


const styles = StyleSheet.create({
    cardContainer :{
        backgroundColor : '#f8f4f4',
        flex : 1 ,
        

    },

})



