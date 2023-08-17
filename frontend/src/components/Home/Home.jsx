import React from 'react'
import './Home.css'
import Accounts from './Accounts/Accounts'
import RecentTransactions from './RecentTransactions/RecentTransactions'

function Home() {
  return (
    <div className='home'>
        <Accounts/>
        <RecentTransactions/>
    </div>
  )
}

export default Home