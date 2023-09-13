import axios from 'axios';
const SERVER_IP = process.env.REACT_APP_SERVER_IP;

const getAllTransactions = ()=>{
    console.log(SERVER_IP);
    return axios.get(SERVER_IP+"/api/transactions");
}

const addTransaction = (transaction)=>{
    return axios.post(SERVER_IP+"/api/transactions",transaction);
}

export {
    getAllTransactions,
    addTransaction
}