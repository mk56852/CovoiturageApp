import React , {useState , useEffect , useContext} from 'react'
import { StyleSheet , View  , Text} from 'react-native'
import Button from './components/Button'
import Card from './components/Card'
import UserDetails from './components/UserDetails'
import Container from "./Config/ContainerConfig"
import authApi from './API/Auth'
import UserPosition from './API/UserPosition'

import AuthContext from './API/authContext'


export default function PublicationDetail({route}) {
   
    const Input = route.params.item ;
    const authContext = useContext(AuthContext)
    const [userData, setUserData] = useState()
    const [flag, setflag] = useState(true)
    const [CurrentUserDetails, setCurrentUserDetails] = useState()

    const getDetails = async () => {
        
        const {data} = await authApi.details(Input.publicationInfo.ownerId) ; 
        setUserData(data) ;
        setflag(false) ; 
       
        
    }
    const handleSubmit = () => {
        UserPosition.rejoindre({idMembre:authContext.user.key , idOffer:Input.id})
        setCurrentUserDetails( authApi.details(authContext.user.key)) ; 
        authApi.updateTrip({id:authContext.user.key , tripId:Input.id})

        alert("succes") ;
    }

    useEffect( () =>  {
        getDetails() ;
        } , [flag])
    
  
    return (

        <View style={styles.container , Container}>
        
            <Card title={"De " +Input.publicationInfo.departNom + " Vers " + Input.publicationInfo.arriveNom} prix={Input.publicationInfo.prix} imageSrc={require("../assets/New.png.jpg")}   />
            <View style={styles.container}>
                <Text style={{top: 20 , fontWeight:'bold'}}>   Il y'a encore {Input.publicationInfo.nbPlace} places disponibles</Text>
               {userData && <UserDetails title={userData.userName} subTitle={userData.phoneNumber} imageSrc={require("../assets/cover.jpeg")}  style={{top:30}}/> }
                <Button title= "Reserver" color="beige" style={styles.Button} onPress={handleSubmit}/>
            </View> 
        </View> 
      
    )
}

const styles = StyleSheet.create({
    background :  {
        flex : 1 , 
        alignItems : 'center' 
        
    } ,
    container :
    {
        marginHorizontal : 30 ,
        
    
    } , 
    Button :{
        alignSelf :"center" , 
        top : 60 , 
        width : "100%"
    }
})
