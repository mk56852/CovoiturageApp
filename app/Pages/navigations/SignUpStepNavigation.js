import React from 'react';
import {createStackNavigator} from '@react-navigation/stack' ; 
import SignInPage from '../SignInPage';
import SecondeSignInPage from '../SecondeSignUpPage';

const Stack = createStackNavigator() ; 

const SignUpStepNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="SignUpStep1" component={SignInPage} options={{ headerShown:false}}/>
        <Stack.Screen name="SignUpStep2" component={SecondeSignInPage} options={{headerShown:false }} />
    </Stack.Navigator>
)

export default SignUpStepNavigation ;