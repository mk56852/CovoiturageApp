import React, { useEffect , useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Container from './Config/ContainerConfig'
import MapView from 'react-native-maps'




export default function TrackingPage({navigation , location , owner}) {
    
    const [Uowner, setUowner] = useState({owner})
    
    useEffect(() => {

    } , [Uowner])
    return (
        <View style={[Container,styles.container]}>
            <MapView style={styles.map}
          initialRegion={{
              latitude: 36.8136762,
              longitude: 10.0926992,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        {location && <MapView.Marker
            coordinate={{latitude:location.latitude,
            longitude:location.longitude }}
            title={"title"}
            description={"description"}
         />  }
        {owner && <MapView.Marker
            coordinate={{latitude:owner.latitude,
            longitude:owner.longitude }}
            title={"title"}
            description={"description"}
         > 
             <Image
                    source={require('../assets/logo.png')}
                    style={styles.driverLogo}
             />
         </MapView.Marker>
}
      </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : 
    {
        width : '100%' , 
        height : '100%' ,
        flex : 1 
    } , 
    map :{
        height : "100%" , 
        width :"100%"
    } , 
    driverLogo : 
    {
        width: 45 , 
        height : 45
    }
})
