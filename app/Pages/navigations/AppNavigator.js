import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountScreen from '../AccountScreen'
import NewPublication from '../NewPublication'
import PublicationNavigator from './PublicationNavigator';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import NewPublicationButton from './NewPublicationButton';
import {createDrawerNavigator} from '@react-navigation/drawer'
import UserLocation from '../Config/userLocation';


const Tab = createBottomTabNavigator() 
const Drawer  = createDrawerNavigator() ;


const AppButtomNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={PublicationNavigator} options={{  headerShown:false , tabBarIcon:({color , size}) => <MaterialCommunityIcons name="home" color ={color} size={size} />}} />
        <Tab.Screen name="Add" component={NewPublication} options={({navigation}) => ({ headerShown: false, tabBarButton : () => <NewPublicationButton onPress={() => navigation.navigate("Add")} /> , tabBarIcon:({color , size}) => <MaterialCommunityIcons name="plus-circle" color ={color} size={size} />}) }/>
        <Tab.Screen name="Account" component={AccountScreen}  options={{ headerShown: false , tabBarIcon:({color , size}) => <MaterialCommunityIcons name="account" color ={color} size={size} />} }/>
    </Tab.Navigator>
) ; 

const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="HomePage1" component={AppButtomNavigator} options={{headerShown : false }} />
        <Drawer.Screen name="Tracking" component={UserLocation} options={{headerTransparent:true }} onPress={() => alert("votre position va etre public")} />
    </Drawer.Navigator>

);

export default AppNavigator ;