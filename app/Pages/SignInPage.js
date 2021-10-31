import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import TextInputComponent from './components/TextInputComponent'
import Container from './Config/ContainerConfig'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ScrollView } from 'react-native-gesture-handler'


const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email") ,
    password : Yup.string().required().min(6).label("Password") ,
    phoneNumber : Yup.string().required().min(8).max(8) , 
    userName : Yup.string().required().min(5)

})

export default function SignInPage({navigation}) {

    return (
        <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} >
        <View style={styles.container} >
            

            <Formik initialValues={{email:"" , password:"" ,phoneNumber:"" , userName:""}} onSubmit={(values) => (console.log(values) , navigation.navigate("SignUpStep2")) } validationSchema={validationSchema}>
            {({handleChange , handleSubmit, errors , setFieldTouched,touched}) =>(
            
            <>
                 <TextInputComponent placeholder="User Name" icon ="account-circle" keybordType="email-address" 
                autoCapitalize="none" textContentType="emailAddress" onChangeText ={handleChange("userName")} />
            
                 {touched.userName && <Text style={{color:'red' , marginLeft:30 , marginTop:10}}>{errors.userName} </Text> }
                

                <TextInputComponent placeholder="email" icon ="email" keybordType="email-address" 
                autoCapitalize="none" textContentType="emailAddress"   onChangeText ={handleChange("email")} />
            
                {touched.email && <Text style={{color:'red' , marginLeft:30 , marginTop:10}}>{errors.email} </Text> }
                
                <TextInputComponent  autoCapitalize="none" autoCorrect={false} icon="lock"
                placeholder="Password" textContentType="password" secureTextEntry={true}  onChangeText={handleChange("password")}/>
           
                {touched.password && <Text style={{color:'red', marginLeft:30 , marginTop:10}}>{errors.password} </Text> }
                
                <TextInputComponent  icon="cellphone"
                placeholder="Phone Number"  keyboardType="numeric"   onChangeText={handleChange("phoneNumber")}/>
                
                {touched.phoneNumber && <Text style={{color:'red', marginLeft:30 , marginTop:10}}>{errors.phoneNumber} </Text> }
                

                <Button style={styles.Button} title="Next" color="beige" onPress={handleSubmit} />
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
    }
})
