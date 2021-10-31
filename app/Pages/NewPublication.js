import React , {useState} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { number } from 'yup/lib/locale';
import Button from './components/Button';
import Picker from './components/Picker';
import TextInputComponent from './components/TextInputComponent';
import Container from './Config/ContainerConfig'


export default function NewPublication() {
    const [selection1 ,setSelection1] = useState() ; 
    const [selection2 ,setSelection2] = useState() ; 
    const [selection3 ,setSelection3] = useState() ; 
    const regions = [
    {name:"Sfax", value:1} ,
    {name:"Tunis", value:2} ,
    {name:"Sousse", value:3} ,
    {name:"Mahdiya", value:4} ,
    {name:"Nabel", value:5} ,
    {name:"Monastir", value:6} ,] 

    const numberPlace = [
    {name:"1", value:1} ,
    {name:"2", value:2} ,
    {name:"3", value:3} ,
    {name:"4", value:4} , 
    ] 

    


    return (
        <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} > 
        
        <View style={styles.container}>
            <Picker placeholder="Départ" items={regions} selectedItem={selection1} onSelectItem={ (item) => setSelection1(item.name)} />
            <Picker placeholder="Arrivée" items={regions} selectedItem={selection2} onSelectItem={ (item) => setSelection2(item.name)} />
            <Picker placeholder="nombre de place" items={numberPlace} selectedItem={selection3} onSelectItem={ (item) => setSelection3(item.name)} />
            <TextInputComponent placeholder="Prix en DT" icon="dolly" keyboardType="numeric" style={{fontSize:18 , marginLeft : 20}} />
            <TextInputComponent placeholder="Plus de détails"   style={{fontSize:18 , marginLeft : 20 }} />
            <Button title="Publier" color="beige" style={styles.Button} />
        
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container : {
        top : 30 , 
        marginHorizontal : 30 , 
        height : '100%'
        
    },
    Button :{
        width : "100%" ,
        top : 30 ,
        alignSelf :'center'
    }
})
