import React , { useEffect , useState , useContext } from 'react';
import getLocation from './getUserLocation';
import TrackingPage from '../TrackingPage';
import AuthContext from '../API/authContext';
import data from './data';



export default function UserLocation () {
    
    const [Post, setPost] = useState()
    const [OwnerDetail, setOwnerDetail] = useState()
    const [UserData, setUserData] = useState()
    const [location , setLocation] = useState() ;
    const authContext = useContext(AuthContext) ;
    

    const getAllData = async () => {
        
      
        await data.getUserData({setData:setUserData,key:authContext.user.key})
      
        if(UserData)
        {
            await data.PostDetail({setPost , tripId : UserData.tripId}) ;
            
            if(Post) 
            {
            await data.getUserData({setData:setOwnerDetail,key:Post.publicationInfo.ownerId})
            }
        }
    }
    
    
  


   
        useEffect (()=> {
            const interval = setInterval(async () => {
               await getAllData(); getLocation({setLocation}) ;    console.log(OwnerDetail) ;console.log(UserData) ; console.log(Post) ;
              },2000);
            }) 
    
    if(OwnerDetail)
       return <TrackingPage location={location} owner = {OwnerDetail.position}/> 
    else
    return <TrackingPage location={location} />


}

