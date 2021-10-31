import * as Location from 'expo-location'
import { useEffect , useState } from 'react';


export default userLocation = () => {

    const [location , setLocation] = useState() ;

    const getLocation = async () => {
        try {
            const {granted} = await Location.requestBackgroundPermissionsAsync() ; 
            if (!granted ) return ; 
            const {
                coords : {latitude , longitude} ,    
            } = await Location.getCurrentPositionAsync() ; 
            setLocation({latitude , longitude}) ; }
    
            
         catch (error) {
                console.log("location Error")
        }
    };
        useEffect (()=> {
            getLocation() } , [] ) 

        return location ;
}

