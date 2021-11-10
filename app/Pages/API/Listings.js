import client from './Client' 

const PublicationPath = "/publicaiton" 

const getPublication = () => client.get(PublicationPath) ;

export default {
    getPublication ,
}