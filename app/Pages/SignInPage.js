import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import TextInputComponent from './components/TextInputComponent'
import Container from './Config/ContainerConfig'
import { Formik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email") ,
    password : Yup.string().required().min(6).label("Password")

})

export default function SignInPage() {


    return (
        <View style={[Container,styles.container]}>
            <Image style={styles.logo} source = {require("../assets/logo2.png")}/>

            <Formik initialValues={{email:"" , password:""}} onSubmit={values =>console.log(values)} validationSchema={validationSchema}>
            {({handleChange , handleSubmit, errors , setFieldTouched,touched}) =>(
            
            <>
                 <TextInputComponent placeholder="User Name" icon ="account-circle" keybordType="email-address" 
                autoCapitalize="none" textContentType="emailAddress"  />
            

                <TextInputComponent placeholder="email" icon ="email" keybordType="email-address" 
                autoCapitalize="none" textContentType="emailAddress" onBlur={()=>setFieldTouched("email")} onChangeText ={handleChange("email")} />
            
                {touched.email && <Text style={{color:'red' , marginLeft:30}}>{errors.email} </Text> }
                
                <TextInputComponent  autoCapitalize="none" autoCorrect={false} icon="lock"
                placeholder="Password" textContentType="password" secureTextEntry={true} onBlur={()=>setFieldTouched("password")} onChangeText={handleChange("password")}/>
           
                {touched.password && <Text style={{color:'red', marginLeft:30}}>{errors.password} </Text> }
            
                <Button style={styles.Button} title="SignIn" color="beige" onPress={handleSubmit} />
            </>
            )}
            
            </Formik>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 20
    } ,
    logo :{
        width : 95 , 
        height : 95 ,
        marginBottom : 25 , marginTop : 60 , 
        alignSelf:'center'
    } , 
    Button :{
        marginTop :50,
        alignSelf:'center' ,
        width :"100%"
    }
})
