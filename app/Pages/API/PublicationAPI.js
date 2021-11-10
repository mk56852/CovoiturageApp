import apiClient from "./Client";

const addPost = (publicationInfo) => apiClient.post('/addOffer' , {publicationInfo})
const getAllPost = () => apiClient.get('/getOffers') ;
const getPostById = (id) => apiClient.get('/getOfferById?id='+id) 

export default {
    addPost ,
    getAllPost , 
    getPostById ,
}