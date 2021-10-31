import React from 'react';

import {createStackNavigator} from '@react-navigation/stack' ; 
import WelcomePage from '../WelcomePage';
import LoginPage from '../LoginPage';
import SignUpStepNavigation from './SignUpStepNavigation';

const Stack = createStackNavigator() ; 

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} options={{ headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false }} />
        <Stack.Screen name="Register" component={SignUpStepNavigation}  options={{headerShown:false}} />
    </Stack.Navigator>
)

export default AuthNavigator ;