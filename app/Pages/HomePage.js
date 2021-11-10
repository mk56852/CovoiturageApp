import React , {useState,useEffect , useContext} from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Card from './components/Card'
import Container from './Config/ContainerConfig'
import PublicationAPI from './API/PublicationAPI'
import ActivityIndicator from './components/ActivityIndicator'
import refreshContext from './API/refreshContext'
import UserPosition from './API/UserPosition'
import Auth from './API/authContext'
import getLocation from './Config/getUserLocation'

export default function HomePage({navigation}) {
    
    const RefreshContext = useContext(refreshContext)
    const authContext = useContext(Auth)
    const [data, setdata] = useState()
    const [location, setLocation] = useState()
    const [loading, setloading] = useState(false)
    const [flag, setflag] = useState(true)
    


    if(location)
        UserPosition.updatePosition({id:authContext.user.key , position:location} ); 
   
    const getData = async () => {
        
        setloading(true); 
        const dataFromServer = await PublicationAPI.getAllPost() ;
        
        const arr = Object.keys(dataFromServer.data).map(function(key) {
            return { id: key, ...dataFromServer.data[key] };
          });

        if (arr)
        { setdata(arr.reverse()) ;}
        
        setloading(false) ;
        RefreshContext.setrefresh(false) ;
       
    
    }
    
    useEffect( () => {
        getData() ;
        getLocation({setLocation}) ;
        setflag(false) ;
    }, [ RefreshContext.refresh])
    

    return (
       <>
       <ActivityIndicator visible={loading} />
       <FlatList data={data} 
        keyExtractor={post => post.id.toString()}
        renderItem = {({item}) => <Card title={item.publicationInfo.departNom + "    -->    " + item.publicationInfo.arriveNom} prix={item.publicationInfo.prix+" DT "} imageSrc={require("../assets/New.png.jpg")} onPress = {() => navigation.navigate("Details",{item}) }/> } 
        style = {[styles.cardContainer,Container]}
        /> 
        </>
      
      

  
    )
}


const styles = StyleSheet.create({
    cardContainer :{
        backgroundColor : '#f8f4f4',
        flex : 1 ,
        

    },

})



