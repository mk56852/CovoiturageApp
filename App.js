import React, { useState } from 'react';
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


export default function App() {
 /* const [selection ,setSelection] = useState() ; 
  const regions = [
    {name:"Sfax", value:1} ,
    {name:"Tunis", value:2} ,
    {name:"Sousse", value:3} ,
    {name:"Mahdiya", value:4} ,
    {name:"Nabel", value:5} ,
    {name:"Monastir", value:6} ,] */
  return (
   // <WelcomePage/>
  // <WelcomePage />
    //<HomePage />
   //<LoginPage />
   // <SignInPage />
  //<Picker placeholder="melek" items={regions} selectedItem={selection} onSelectItem={ (item) => setSelection(item)} ></Picker>
  // <AccountScreen /> 
  // <NewPublication />
  <PublicationDetail title="Sfax => Tunis" prix="25 DT" imageSrc={require("./app/assets/cover.jpeg")}/>
    //<TextInputComponent placeholder="email" icon="email"/>
  );
}

const styles = StyleSheet.create({});
