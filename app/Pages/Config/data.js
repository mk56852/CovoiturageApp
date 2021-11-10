
import Auth from "../API/Auth";
import PublicationAPI from "../API/PublicationAPI";

const getUserData = async ({setData , key}) => {
    const {data} = await Auth.details(key) ;
    setData(data) ; 
}


const PostDetail = async ({setPost,tripId}) => {
    const {data}  = await PublicationAPI.getPostById(tripId)
    setPost(data) ;
}

export default {
    getUserData ,
    PostDetail ,
}