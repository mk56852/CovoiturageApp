import apiClient from "./Client";

const getPosition  = (id) => apiClient.get('/getPosition?id='+id) ; 
const updatePosition = ({id , position}) => apiClient.post('/updatePosition' , {id,position}) ;
const rejoindre = ({idMembre , idOffer}) => apiClient.post('/rejoindre' , {idMembre,idOffer}) 
export default {
    getPosition ,
    updatePosition , 
    rejoindre,
}