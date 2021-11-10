import client from './Client'

const login = (email , password) => client.post("/login" , {email,password}) ;
const register = (userInfo) => client.post("/signup" , userInfo) 
const details = (id) => client.get("/getUserById?id="+id)
const updateTrip = ({id,tripId}) => client.post('/updateTrip' ,{id , tripId}) 
export default {
    login ,
    register , 
    details , 
    updateTrip
    
}
