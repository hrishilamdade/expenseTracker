//React 
import React,{useEffect, useState} from 'react'
import './Accounts.css'

//icons
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { getAllAccounts } from '../../../services/accounts';
import { CircularProgress, capitalize } from '@mui/material';
import { Link } from 'react-router-dom';

function Accounts() {
    const [amount,setAmount] = useState(10000);
    const [accounts,setAccounts] = useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        //get all accounts
        getAllAccounts().then((res)=>{
            console.log(res.data);
            setAccounts(res.data);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div className='accounts'>
            <div className='accounts_header'>
               <AccountBalanceIcon className='px-4'/> <span className='pl-6'>Accounts</span>
            </div>

            {isLoading && <div className='accounts__loader'> <CircularProgress /> </div>}
            { accounts &&
            <>
                <div className='accounts_top'>
                    <div>Total Balance</div>
                    <div className='accounts_top__amount'>₹ { accounts && accounts["total_balance"] }</div>
                </div>
                <div className='accounts_body'>
                    
                    <div className='accounts_body__item'>
                        <div className='accounts_body__item__title'><SavingsIcon className='px-4'/>  <span className='pl-6' >Savings</span> </div>
                        {
                            accounts && accounts["savings"]?.map((account)=>{
                                return(
                                    <div className='accounts_body__item__sub' >
                                        <div className='accounts_body__item__sub__title'>{account.bank_name}</div>
                                        <div className='accounts_body__item__sub__value'>{account.account_number}</div>
                                        <div className='accounts_body__item__view_balance'>View Balance</div>
                                    </div>
                                )                               
                            })
                        }
                    </div>
                    <div className='accounts_body__item'>
                        <div className='accounts_body__item__title'><SavingsIcon className='px-4'/>  <span className='pl-6' >Current</span> </div>
                        {
                            accounts && accounts["current"].map((account)=>{
                                return(
                                    <div className='accounts_body__item__sub' >
                                        <div className='accounts_body__item__sub__title'>{account.bank_name}</div>
                                        <div className='accounts_body__item__sub__value'>{account.account_number}</div>
                                        <div className='accounts_body__item__view_balance'>View Balance</div>
                                    </div>
                                )                               
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className='accouts_footer'>
                        <Link to="/accounts" className='accouts_footer__view_all' > View all accounts </Link>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Accounts