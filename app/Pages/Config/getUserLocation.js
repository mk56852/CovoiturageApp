import * as Location from 'expo-location'

const getLocation = async ({setLocation}) => {
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

export default getLocation 