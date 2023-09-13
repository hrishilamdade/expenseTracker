import React,{useState,useEffect}  from 'react'
import './RecentTransactions.css'
import Transaction from './Transaction'
import { getAllTransactions } from '../../../services/transactions';
import { CircularProgress } from '@mui/material';

function RecentTransactions() {
  // const [transactions, setTransactions] = useState([{date: '2023/08/01', description: 'test', amount: 10000,type:'credit'}
  // ,{date: '2023/08/04', description: 'Bought a car', amount: 400000,type:'debit'}
  // ,{date: '2021/08/01', description: 'Paid Rent', amount: 15000,type:'debit'}
  // ,{date: '2021/08/11', description: 'Maid', amount: 5000,type:'debit'}]);
  const [transactions,setTransactions] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    getAllTransactions().then((res)=>{
      console.log(res.data);
      setTransactions(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className='recenttransact'>
      <div className='recenttransact__header' >Recent Transactions</div>
      <div className='recenttransact__body'>
        {isLoading?<div className='recenttransact__body__item'><CircularProgress/></div>:null}
        { transactions.map((transaction,index) => (
          <Transaction data = {transaction} index = {index} />
        ))
        }
      </div>
    </div>
  )
}

export default RecentTransactions