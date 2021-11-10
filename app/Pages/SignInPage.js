import React , {useContext , useState} from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import TextInputComponent from './components/TextInputComponent'
import Container from './Config/ContainerConfig'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AuthContext from './API/authContext'
import authApi from './API/Auth'
import ActivityIndicator from './components/ActivityIndicator'
import { set } from 'react-native-reanimated'


const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email") ,
    password : Yup.string().required().min(6).label("Password") ,
    phoneNumber : Yup.string().required().min(8).max(8) , 
    userName : Yup.string().required().min(5)

})

export default function SignInPage({navigation}) {
    const [loading, setLoading] = useState(false) ;
    const [registerationFailed, setRegistrationFailed] = useState(false) ;
    const [tripId, settripId] = useState(0)
    


    const handleSubmit = async (userInfo) => {

       setLoading(true)
       const result = await authApi.register({...userInfo , tripId}) ;
       setLoading(false)

   
       
        if  ( result.data.key =="error" )   return setRegistrationFailed(true) ;
        setRegistrationFailed(false) ;
        
        const user = result.data ;
    
        if(user.key != "error")
        {
        navigation.navigate("SignUpStep2" , {key :user.key}) ;
        }

    }  ; 
    return (
        <ImageBackground blurRadius={2} style={Container} source={require('../assets/welcomePage.jpg')} >
        <>
            <ActivityIndicator visible={loading} />
            <View style={styles.container} >
            

            <Formik initialValues={{email:"" , password:"" ,phoneNumber:"" , userName:""}} onSubmit={(values) => (handleSubmit(values)) } validationSchema={validationSchema}>
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
        </>
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
