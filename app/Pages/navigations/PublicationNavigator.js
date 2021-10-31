import React from 'react';
import { createStackNavigator , TransitionPresets} from '@react-navigation/stack';
import HomePage from '../HomePage';
import PublicationDetail from '../PublicationDetail';

const Stack = createStackNavigator() 

const PublicationNavigator = () => (
    <Stack.Navigator >
        <Stack.Screen name="homePage" component={HomePage} options={{ headerShown:false}}/>
        <Stack.Screen name="Details" component={PublicationDetail} options={{ headerShown:false ,  ...TransitionPresets.BottomSheetAndroid , ...TransitionPresets.ModalSlideFromBottomIOS} } />
    </Stack.Navigator>
)

export default PublicationNavigator ;