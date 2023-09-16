import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

const getAllAccounts = ()=>{
    return axios.get(SERVER_IP+"/api/accounts");
}

export {
    getAllAccounts
}