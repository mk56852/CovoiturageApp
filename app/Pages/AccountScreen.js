import React ,{useContext,useState, useEffect } from 'react'
import { StyleSheet,  View } from 'react-native'
import UserDetails from './components/UserDetails'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconContainer from './components/IconContainer'
import  Container  from './Config/ContainerConfig'
import AuthContext from './API/authContext'
import authApi from './API/Auth'



const menuItems = [
    {
        title : "My Account" ,
        icon :{
            name: "format-list-bulleted" ,
            backgroundColor : "black",
            iconColor : "white"
            
        }

    } , 
    {
    title : "My Car" ,
    icon :{
        name: "car" ,
        backgroundColor : "#4ecdc4",
        iconColor : "white"
        
        } 
    } ,
    {
    title : "My Trips" ,
    icon :{
        name: "email" ,
        backgroundColor : "#fc5c65",
        iconColor : "white"
        
    }
    }

]


export default function AccountScreen() {
    const [data, setData] = useState()
    const [flag, setflag] = useState(true)
    const {user, setUser} = useContext(AuthContext) ;

    const getUser = async () => {
        const {data} = await authApi.details(user.key) ; 
        setData(data) ;
        setflag(false)
    }
    useEffect( () =>  {
        getUser() ;
        } , [flag])
    
    return (
        <View style={[styles.container, Container]}>
            {data &&
            <View style = {styles.userContainer} >
                <UserDetails style={styles.UserDetails} title={data.userName} subTitle={data.phoneNumber} imageSrc={require("../assets/cover.jpeg")} />
            </View> }
          
            <View style={styles.IconContainer}>
                <FlatList data={menuItems} 
                keyExtractor={menuItem => menuItem.title}
                renderItem={({item}) =>  <IconContainer title={item.title} name={item.icon.name}  backgroundColor={item.icon.backgroundColor} iconColor="white" />}
               
                />

               
            </View>

            <View style={[styles.IconContainer,{height : 60}]}>
                <TouchableWithoutFeedback onPress={() => setUser(null)} style={{height:'100%' , width:'100%'} }>
                <IconContainer title="Log Out" name="logout" backgroundColor="#ffe66d" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container :
    {
        flex : 1 ,
        backgroundColor : '#f8f4f4', 
        marginVertical : 20 , 
        backgroundColor : "#f8f4f4" ,
    } , 
    IconContainer :
    {
       backgroundColor : "white" , 
       marginVertical : 20 ,
       paddingLeft : 8
       

    } , 

    userContainer : 
    {
        backgroundColor : "white" ,
        marginVertical : 10 ,
    } , 
    UserDetails :{
        alignItems : 'center' , 
        marginLeft : 12 , 
        bottom : 10
    }
})
