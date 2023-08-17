//React 
import React,{useState} from 'react'
import './Accounts.css'

//icons
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function Accounts() {
    const [amount,setAmount] = useState(10000);
    return (
        <div className='accounts'>
            <div className='accounts_header'>
               <AccountBalanceIcon className='px-4'/> <span className='pl-6'>Accounts</span>
            </div>
            <div className='accounts_top'>
                <div>Total Balance</div>
                <div className='accounts_top__amount'>₹ { amount }</div>
            </div>
            <div className='accounts_body'>
                <div className='accounts_body__item'>
                    <div className='accounts_body__item__title'><SavingsIcon className='px-4'/>  <span className='pl-6' >Savings</span> </div>
                    <div className='accounts_body__item__sub' >
                        <div className='accounts_body__item__sub__title'>Account 1</div>
                        {/* <div className='accounts_body__item__sub__value'>1234567890</div> */}
                        <div className='accounts_body__item__view_balance'>View Balance</div>
                    </div>
                    <div className='accounts_body__item__sub' >
                        <div className='accounts_body__item__sub__title'>Account 2</div>
                        {/* <div className='accounts_body__item__sub__value'>1234567890</div> */}
                        <div className='accounts_body__item__view_balance'>View Balance</div>
                    </div>
                </div>
                <div className='accounts_body__item'>
                    <div className='accounts_body__item__title'> <LocalAtmIcon className='px-4'/> <span className='pl-6' >Current</span></div>
                    <div className='accounts_body__item__sub' >
                        <div className='accounts_body__item__sub__title'>Account 1</div>
                        {/* <div className='accounts_body__item__sub__value'>1234567890</div> */}
                        <div className='accounts_body__item__view_balance'>View Balance</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Accounts