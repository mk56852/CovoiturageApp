import React , {useState , useContext, useEffect} from 'react'
import { Image, StyleSheet, Text, View ,ImageBackground } from 'react-native'
import Button from './components/Button'
import TextInputComponent from './components/TextInputComponent'
import Container from './Config/ContainerConfig'
import { Formik } from 'formik'
import * as Yup from 'yup'
import authApi from '../Pages/API/Auth'
import AuthContext from './API/authContext'
import ActivityIndicator from './components/ActivityIndicator'



const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email") ,
    password : Yup.string().required().min(6).label("Password")

})
export default function LoginPage() {

    const [loading, setLoading] = useState(false) ;
    const [loginFailed, setloginFailed] = useState(false) ;
    const authContext = useContext(AuthContext)



    const handleSubmit = async (info) => {
        setLoading(true) ;
        const result = await authApi.login(info.email , info.password) ;
        setLoading(false) ;
        if  ( result.data.key =="error" )   return setloginFailed(true) ;
        setloginFailed(false) ;
        const user = result.data ;
        if(user.key != "error")
            authContext.setUser(user);
       
       

        

    }  ; 



    return (
       
    
    <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} >    
     <>
       
       <ActivityIndicator visible={loading}    /> 
 
        
        <View style={styles.container}>
            <Image style={styles.logo} source = {require("../assets/logo2.png")}/>
            {loginFailed==true && <Text > "Invalid email or password </Text> }
            <Formik initialValues={{email:"" , password:""}} onSubmit={handleSubmit}>
            {({handleChange , handleSubmit, errors , setFieldTouched,touched }) =>(
            
            <>
                <View style={styles.textContainer}> 
                <TextInputComponent placeholder="email" icon ="email" keybordType="email-address" 
                autoCapitalize="none" textContentType="emailAddress"  onChangeText ={handleChange("email")} />
            
                {touched.email && <Text style={{color:'red' , marginLeft:30,marginTop:5}}>{errors.email} </Text> }
                
                <TextInputComponent  autoCapitalize="none" autoCorrect={false} icon="lock"
                placeholder="Password" textContentType="password" secureTextEntry={true}  onChangeText={handleChange("password")}/>
           
                {touched.password && <Text style={{color:'red', marginLeft:30,marginTop:5}}>{errors.password} </Text> }
                </View>
                <Button style={styles.Button} title="Login" color="beige" onPress={handleSubmit} />
            </>
            )}
            
            </Formik>
            
        </View>
        </>   
    </ImageBackground>
   
   )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 20 ,
        height : "100%"  , 
        justifyContent : 'center' , 
        alignItems : 'center' ,
 

     
    } ,
  
    textContainer :
    {
        width:'90%'
    },
    logo :{
        width : 120 , 
        height :120 ,
        marginBottom : 25 , 
        
    } , 
    Button :{
        marginTop :50,
        width :"90%"
    }
})
