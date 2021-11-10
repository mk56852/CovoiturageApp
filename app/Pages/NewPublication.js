import React , {useState , useContext} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Formik } from 'formik';
import Button from './components/Button';
import Picker from './components/Picker';
import TextInputComponent from './components/TextInputComponent';
import Container from './Config/ContainerConfig'
import AuthContext from './API/authContext'
import ActivityIndicator from './components/ActivityIndicator'
import PublicationAPI from './API/PublicationAPI' 
import refreshContext from './API/refreshContext';


//import MapboxGL from '@react-native-mapbox-gl/maps';
//MapboxGL.setAccessToken("pk.eyJ1IjoibWs1Njg1MiIsImEiOiJja3ZxMGZ1ZDAxd3l4MndrbDczNWF1Zjh6In0.6ZksPezrzJ7unMISCTrmjw");

export default function NewPublication() {
    
    const RefreshContext = useContext(refreshContext)
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

    const [loading, setloading] = useState(false)
    const authContext = useContext(AuthContext)

    const [arriveNom, setarriveNom] = useState() ;
    const [departNom, setdepartNom] = useState()  ;
    const [nbPlace, setnbPlace] = useState() ; 
    const [membres, setmembres] = useState([])

    const handleSubmit = async ({ownerId , prix}) => {
        setloading(true)  ; 
        await PublicationAPI.addPost({ownerId, prix , arriveNom , departNom , nbPlace, membres}) ;
        setloading(false) ;
        RefreshContext.setrefresh(true) ;
        alert("votre Publication est enregistrée avec succés" )

    }

    

    


    return (
        <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} > 
            <>
                <ActivityIndicator visible ={loading}/>
                <Formik initialValues={{ownerId:authContext.user.key  , prix:"" }} onSubmit={handleSubmit}>
                {({handleChange , handleSubmit, errors , setFieldTouched,touched  }) =>(
            
                    <View style={styles.container}>
                        <Picker placeholder="Départ" items={regions} selectedItem={selection1} onSelectItem={ (item) => {setSelection1(item.name) ; setdepartNom(item.name) }} />
                        <Picker placeholder="Arrivée" items={regions} selectedItem={selection2} onSelectItem={ (item) => {setSelection2(item.name) ; setarriveNom(item.name)}} />
                        <Picker placeholder="nombre de place" items={numberPlace} selectedItem={selection3} onSelectItem={ (item) => { setSelection3(item.name);setnbPlace(item.name)} }/>
                        <TextInputComponent placeholder="Prix en DT" icon="dolly" keyboardType="numeric" style={{fontSize:18 , marginLeft : 20}} onChangeText ={handleChange("prix")} />
                        <TextInputComponent placeholder="Plus de détails"   style={{fontSize:18 , marginLeft : 20 }} />
                        <Button title="Publier" color="beige" style={styles.Button} onPress={({ownerId , prix }) => handleSubmit({ownerId , prix })} />
        
                    </View> )
                }
                </Formik>
            </>
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
