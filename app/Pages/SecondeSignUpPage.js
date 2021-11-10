import React ,{useState , useContext}from 'react'
import {  ImageBackground, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import TextInputComponent from './components/TextInputComponent'
import Container from './Config/ContainerConfig'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ImageInput from './components/ImageInput'
import AuthContext from './API/authContext'


const validationSchema = Yup.object().shape({
    city : Yup.string().label("City") ,
    carType : Yup.string().min(3).label("CarType") ,

})

export default function SecondeSignInPage({route,navigation}) {
    
    const [imageUri, setImageUri] = useState() ;
    const authContext = useContext(AuthContext)
    const {key} = route.params
    const handleSubmit = async () => {
        authContext.setUser({key})
        
    
    }
    return (
        <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} >
        <View style={styles.container} >
            
            <View style={styles.ImageContainer}>
                <ImageInput imageUri={imageUri} onChangeImage= {(uri) => setImageUri(uri) }  />
                <Text style = {styles.txt}> Do you want to add an Image for your Account ?</Text>
            </View>

            <Formik initialValues={{city:"" , carType:"" }} onSubmit={values => handleSubmit()}>
            {({handleChange , handleSubmit, errors , setFieldTouched,touched}) =>(
            
            <>
                 <TextInputComponent placeholder="City" icon ="account-circle" keybordType="email-address" 
                autoCapitalize="none"  onChangeText ={handleChange("city")} />


                <TextInputComponent placeholder="Car Model" icon ="car" keybordType="email-address" 
                autoCapitalize="none"  onChangeText ={handleChange("carType")} />

                <Button style={styles.Button} title="SignIn" color="beige" onPress={handleSubmit} />
            </>
            )}
            
            </Formik>
            
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 20 , 
        height :'100%' ,
        justifyContent : 'center'
    } ,
    ImageContainer :{
        alignSelf : 'center' ,
        alignItems : 'center' 
    } ,
    logo :{
        width :95 , 
        height : 95 ,
        marginBottom : 10 , marginTop : 20 , 
        alignSelf:'center'
    } , 
    Button :{
        marginTop :30,
        alignSelf:'center' ,
        width :"100%"
    } , 
    txt : 
    {
        marginTop : 10 ,
        marginBottom : 20,
        fontSize : 16 , 
        fontWeight : 'bold'

    }
})
