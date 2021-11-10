import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './app/Pages/components/Card';
import UserDetails from './app/Pages/components/UserDetails';
import Icon from './app/Pages/components/Icon';
import PostDetailsScreen from './app/Pages/components/PostDetailsScreen';
import HomePage from './app/Pages/HomePage';
import WelcomePage  from './app/Pages/WelcomePage';
import AccountScreen from './app/Pages/AccountScreen';
import IconContainer from './app/Pages/components/IconContainer';
import { FlatList } from 'react-native-gesture-handler';
import TextInputComponent from './app/Pages/components/TextInputComponent';
import Picker from './app/Pages/components/Picker';
import LoginPage from './app/Pages/LoginPage';
import SignInPage from './app/Pages/SignInPage';
import NewPublication from './app/Pages/NewPublication';
import PublicationDetail from './app/Pages/PublicationDetail';
import ImageInput from './app/Pages/components/ImageInput';
import * as ImagePicker from 'expo-image-picker'
import SecondeSignInPage from './app/Pages/SecondeSignUpPage';
import {NavigationContainer} from '@react-navigation/native'
import AuthNavigator from './app/Pages/navigations/AuthNavigation';
import AppNavigator from './app/Pages/navigations/AppNavigator';
import clientApi from './app/Pages/API/Client'
import AuthContext from './app/Pages/API/authContext';
import refreshContext from './app/Pages/API/refreshContext';
import MapView from 'react-native-maps';
import TrackingPage from './app/Pages/TrackingPage';
import UserLocation from './app/Pages/Config/userLocation';



export default function App() {
  
  const [user,setUser] =  useState(null) ; 
  const [refresh, setrefresh] = useState(false) ;
  
  
  
 return(

 
  
 
  <refreshContext.Provider value={{refresh,setrefresh}}>
    <AuthContext.Provider value={{user , setUser}}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator /> }
      </NavigationContainer> 
    </AuthContext.Provider>
  </refreshContext.Provider>





/*
  <NavigationContainer>
    <AppNavigator></AppNavigator>
  </NavigationContainer> */
   /* <View style={{width:'100%' , height : '100%'}}>
    <UserLocation />
    </View>*/


 
  
  //<WelcomePage />
   //<HomePage />
   // <LoginPage />
 // <SignInPage />
  //<Picker placeholder="melek" items={regions} selectedItem={selection} onSelectItem={ (item) => setSelection(item)} ></Picker>
   //<AccountScreen /> 
  // <NewPublication />
  // <PublicationDetail title="Sfax => Tunis" prix="25 DT" imageSrc={require("./app/assets/cover.jpeg")}/>
  
   // <SecondeSignInPage />
  
  );
}

const styles = StyleSheet.create({
  map: {
    width: 200 , 
    height: 400 ,
  },
});
